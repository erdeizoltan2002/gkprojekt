<!-- ha be van jelentkezve -> terméket adhat a kosárhoz,
ha nincs aktivan bejelentkezve-> login rész. -->

<!-- kell egy szűrő-> nadrág/polo/pulover, méret -->

<?php
    session_start();
    $db = new mysqli('localhost','root','','grosskidz');
    

?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Kosarad</title>
</head>
<body>
    <div id="navbar">
    <?php
    $m =1;

    

    $oldalak = array("1" => "<a href='index.php'>Főoldal</a>","2" =>"<a href='regiszt.php'>Regisztráció</a>", "3" =>"Rólunk", "4" => "Elérhetőségeink",
    "5" => "Galéria");

    $tartalom = "";

        for($i = 1; $i <= count($oldalak); $i++){
            $tartalom .= ' <a href="/Oldal/'  . $i .'" id="navbar">&nbsp&nbsp' . $oldalak[$i] ."</a>";
        }

    echo "<br>";
    print $tartalom."<br>";    
    ?>
    </div>

    <!-- szűrő         -->
    <br>

        <div id="szuro">
            <tablev>
                <form method="post">
                    <label>Polók</label>
                    <input type="checkbox" name="polo"><br>
                    <label>Nadrágok</label>
                    <input type="checkbox" name="nadragok"><br>
                    <label>Pulóverek</label>
                    <input type="checkbox" name="puloverek"><br>
                    <br><button type="submit" name="termek_szures">Szűrés</button><br>
                    <button type="submit" name="del">Szűrők törlése</button>
                </form>
            </table>
        </div>
        <br><br>

<a href="vasarlas.php"></a>
        <?php
        if(!isset($_POST['polok']) && !isset($_POST['puloverek']) && !isset($_POST['nadragok'])){
            $adat = $db->query("SELECT megnevezes,meret,osszeg FROM puloverek, nadragok, polok");
            while($sor = $termek = $adat ->fetch_assoc()){
                print"<a  href='vasarlas.php'><img src='/termek_kepek//gorsskid.jpg' alt=''></a>&nbsp";
            }

        }
        if(isset($_POST['puloverek'])){
            $adat = $db->query("SELECT kep,megnevezes,meret,osszeg FROM puloverek");
            $termek = $adat->fetch_assoc();
            print"<div='termekek'>";
            print"<table>";
            while($sor = $termek = $adat->fetch_assoc()){
                print"<tr>";
                    print"<img src='/termek_kepek//gorsskid.jpg' alt=''>&nbsp";
                print"</tr>";
                print"<tr>";
                print"<td>";
                print $termek['megnevezes'];
                print"</td>";
                print"</tr>";
                }
                print"</table>";
            print"</div>";
        } 

       
        if(isset($_POST['del'])){
            session_reset();
        }
            
        ?>
        
</body>
</html>