require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mySql = require('mysql');
const cors = require('cors');
const util = require('util');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const pdfDocument = require('pdfkit');
const fs = require('fs');


const db = mySql.createPool({
    host: process.env.db_hostname,
    user: process.env.db_user,
    passwrod: process.env.db_password,
    database: process.env.db_database,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

    // Cron időzítő
const task = cron.schedule('1 * * * *', () => {
    console.log("sad")
    try {
        db.query("DELETE FROM `blacklist` WHERE exp_date <  DATE_SUB(NOW(),INTERVAL 1 HOUR)", (req,results) =>{
        if(err){
            console.log(err)
        }else{
            console.log("A lejárt elemek törölve lettek.")
        }
        }) 
    } catch (error) {
        console.log(err)
    }
});
task.start();

const app = express();

app.use(bodyParser.json());

app.use(cors());

const query = util.promisify(db.query).bind(db);

    // Blacklist tokenek kezelése
async function auth(req,res,next){
    const token = req.headers.authorization
    try {
        const result = await query('SELECT token FROM blacklist WHERE token = ?',[token])
        console.log(result)
        if(!result.length > 0){
        const decode = jwt.verify(token,process.env.secret)
        req.user = decode
        next()
        }else{
            return res.status(401).json({
                error:'token lejárt'
            })
        }
    } catch (error) {
        return res.status(500).json({
            error : error.message
        });
    }
}

    // Kijelentkezés elérési út
app.post('/logout',auth,async(req,res)=> {
    const token = req.headers.authorization
    try {
        const result = await query('INSERT INTO blacklist (token) VALUE (?)',[token])
        res.status(200).json({
            status:'succes',termekek:result
        })
    } catch(error){
        res.status(500).json({
            error : error.message
        });
    }
})

    // termékek elérési út
app.get('/termekek/:termekek',async(req,res) => {
    const termekek = req.params.termekek
    try {
        if(termekek == 'polok'){
            const result = await query('SELECT * FROM polok')
            res.status(200).json({
                status:'succes',termekek:result
            })
        }
        else if(termekek == 'puloverek'){
            const result = await query('SELECT * FROM puloverek')
            res.status(200).json({
                status:'succes',termekek:result
            })
        }else if(termekek == 'nadragok'){
            const result = await query('SELECT * FROM nadragok')
            res.status(200).json({
                status:'succes',termekek:result
            })
        }
        else{
            res.status(400).json({
                error : 'nincs ilyen termék'
            });
        }
    } catch (error) {
        res.status(500).json({
            error : error.message
        });
    }
})

app.get('/termekek/:termekek/:id',async(req,res) => {
    const termekek = req.params.termekek
    const id = req.params.id
    try {
        if(termekek == 'polok'){
            const result = await query('SELECT * FROM polok WHERE id=?',[id])
            res.status(200).json({
                status:'succes',termekek:result
            })
        }
        else if(termekek == 'puloverek'){
            const result = await query('SELECT * FROM puloverek WHERE id=?',[id])
            res.status(200).json({
                status:'succes',termekek:result
            })
        }else if(termekek == 'nadragok'){
            const result = await query('SELECT * FROM nadragok WHERE id=?',[id])
            res.status(200).json({
                status:'succes',termekek:result
            })
        }
        else{
            res.status(400).json({
                error : 'nincs ilyen termék'
            });
        }
    } catch (error) {
        res.status(500).json({
            error : error.message
        });
    }
})

    // regisztráció
app.post('/register',async(req,res) =>{
    const { felhasznalonev, emailcim, jelszo} = req.body

    if(!felhasznalonev || !emailcim || !jelszo){
        return res.status(400).json({
            error : 'hiányzó adatok'
        });
    }
    try {
        const users = await query("SELECT email, felhasznalo FROM bejelentkezes WHERE email = ? OR felhasznalo = ?",[emailcim, felhasznalonev])
        if(users.lenght > 0){
            return res.status(400).json({
                error: 'foglalt'
            })
        }
        
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(jelszo,salt)

        const result = await query('INSERT INTO bejelentkezes (felhasznalo, email, jelszo) VALUES (?,?,?)',[felhasznalonev,emailcim,hash])
        return res.status(201).json({
            status: 'succesful'
        })
    } catch (error) {
        return res.status(500).json({
            error : error.message
        });
    }
})

    //emailkülés
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'noreplygrosskidz1@gmail.com',
            pass: 'tujqowkfhrdyulse'
        }
        });

app.post('/vasarlas',auth,async(req,res) =>{
    const doc = new pdfDocument();
    const token = req.headers.authorization;
    const decode = jwt.verify(token,process.env.secret);
    const email = decode.email;
    const pfdId = Math.floor((1 + Math.random()) * 0x100000000)
    .toString(16)
    .substring(1);
      
   //email-pdf rész


    var mailOptions = {
    from: 'noreplygrosskidz1@gmail.com',
    to: email,
    subject: 'No-reply rendelés',
    text: 'Rendelését fogadtuk, csomagja állapotának változásáról értesítjük.',
    attachments:[
    {   // file on disk as an attachment
        filename: 'szamla.pdf',
        path: `./temp/pdf/${pfdId}.pdf` 
    }]
    }
 
    // Pipe its output somewhere, like to a file or HTTP response
    // See below for browser usage
    doc.pipe(fs.createWriteStream(`./temp/pdf/${pfdId}.pdf`))

    // Embed a font, set the font size, and render some text
    doc.fontSize(25)
    .text('Some text with an embedded font!', 100, 100);

    // Apply a picture and modify it as well  
    // doc.image('path/to/image.png', {
    //     fit: [250, 300],
    //     align: 'center',
    //     valign: 'center'
    //   });
    // Add another page
    doc
    .addPage()
    .fontSize(25)
    .text('Here is some vector graphics...', 100, 100);

    // Draw a triangle if u want
    doc.save()
    .moveTo(100, 150)
    .lineTo(100, 250)
    .lineTo(200, 250)
    .fill('#FF3300');

    // Apply some transforms and render an SVG path with the 'even-odd' fill rule
    doc.scale(0.6)
    .translate(470, -380)
    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    .fill('red', 'even-odd')
    .restore();

    // Add some text with annotations
    doc.addPage()
    .fillColor('blue')
    .text('Here is a link!', 100, 100)
    .underline(100, 100, 160, 27, { color: '#0000FF' })
    .link(100, 100, 160, 27, 'http://google.com/');

    // Finalize PDF file
    doc.end();

    //email küldés pdf-el, pdf törlés
    transporter.sendMail(mailOptions,async function(error, info){
    if (error) {
        console.log(error);
    } else {
        try {
            fs.unlink(`./temp/pdf/${pfdId}.pdf`, function (err) {
                if (err) {
                    console.log('Sikeres törlés');
                }}
            )
        } catch (error) {
            console.log(error)
        }
        res.send('Email elküldve: ' + info.response);
    }
    });
})


    // bejelentkezés elérési út
app.post('/login',async(req,res) => {
    const {nev,jelszo} = req.body
    
    if(!nev || !jelszo){
        return res.status(400).json({
            error : 'hibás adatok'
        });
    }
    try {
        const result = await query("SELECT * FROM bejelentkezes WHERE felhasznalo = ?", [nev])
        if(result.length > 0){
            bcrypt.compare(jelszo, result[0].jelszo,function(err,ismatch){
                if(ismatch){
                    const payload = {
                        username: result[0].felhasznalo,
                        email: result[0].email
                    }
                    const options = {
                        expiresIn : '1h'
                    }
                    const secrets = process.env.secret
                    console.log("sikeres bejelentkezés")
                    jwt.sign(payload,secrets,options,(err,token) =>{
                        if(err){
                            return res.send(err)
                        }else{
                            return res.status(200).json({
                                status:'succes',message:'Sikeres bejelentkezés', token: token
                            })
                        }
                    })
                }else{
                    return res.json({
                        status:'failure',message:'Sikertelen bejelentkezés'
                    })
                }
            })
        } 
    } catch (error) {
        return res.status(500).json({
            error : error.message
        });
    }
})


app.listen(8080,() =>{console.log("Megy a szerver")});