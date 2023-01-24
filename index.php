<?php
    session_start();
    $db = new mysqli('localhost','root','','grosskidz');
    if(isset($_POST['nev']) && isset($_POST['jelszo'])){
        $adatok = $db -> query("SELECT * from bejelentkezes WHERE felhasznalo= '".$_POST['nev']."' AND jelszo= '".$_POST['jelszo']."'");
        if($adatok -> fetch_assoc()){
            $_SESSION['nev'] = $_POST['nev'];
            echo"Üdv '".$_SESSION['nev']."'!";
        }else {
            echo"Sikertelen bejelentkezés";
        }
    }
   //navbar
            $m =1;
            $oldalak = array("1" => "<a href='index.php'>Főoldal</a>","2" =>"<a href='regiszt.php'>Regisztráció</a>", "3" =>"Rólunk", "4" => "Elérhetőségeink",
            "5" => "Galéria","6" => "<a href='shop.php'>Webshop</a>");

            $tartalom = "";   
                for($i = 1; $i <= count($oldalak); $i++){
                    $tartalom .= ' <a href="/Oldal/' . $i .'">' . $oldalak[$i] ."</a>";
                } 
            echo "<br>";
            print $tartalom."<br><br>";

?>


<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Főoldal</title>
</head>
<body>
    <?php
    //login
        if(!isset($_POST['nev'])){

    ?>
        <form method="post" id="loginForm">
            <label for="nev">Név:</label><br>
            <input type="text" name="nev"><br>
            <label for="jelszo">Jelszó:</label><br>
            <input type="password" name="jelszo"><br>
            <button type="submit">Bejelentkezés</button>
        </form>
        <br>
        

        <?php
        }if(isset($_SESSION['nev'])){
        ?>

        <form method="post">
        <button type="submit" name="ki">Kijelentkezés</button>
        </form>

        <?php
        }
        if(isset($_POST['ki'])){
            session_destroy();
            header("location:  /");
        }
        ?>

        <?php
        
        if($m == 5 && isset($_SESSION['nev'])){
            $adatok = $db -> query("SELECT * FROM kosar");
        ?>
        <form action="" method="post">
            
        </form>
        <?php
        }
        ?>
        

</body>
</html>