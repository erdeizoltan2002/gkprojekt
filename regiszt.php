<?php
session_start();
    $db = new mysqli('localhost','root','','grosskidz');
        if(isset($_POST['nev']) && isset($_POST['email']) && isset($_POST['jelszo']) && isset($_POST['jelszo2']) && isset($_POST['jelszo']) == isset($_POST['jelszo2']) && $_POST['nev'] != $_SESSION['regNev']){
            $db -> query("INSERT INTO `bejelentkezes`(`felhasznalo`, `email`, `jelszo`) VALUES ('".$_POST['nev']."','".$_POST['email']."','".$_POST['jelszo']."')");
            $_SESSION['regNev'] = $_POST['nev'];
        }else{
            echo"Ez a felhasználó már regiszrált";
        }
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regisztráció</title>
</head>
<body>
    <form method="post">
        <label for="">Felhasználó név:</label><br>
        <input type="text" name="nev"><br>
        <label for="">Email:</label><br>
        <input type="text" name="email"><br>
        <label for="">Jelszó:</label><br>
        <input type="password" name="jelszo"><br>
        <label for="">Jelszó megint:</label><br>
        <input type="password" name="jelszo2"><br>
        <button type="submit">Regisztráció</button>
    </form>
    <br>
    <form method="post">
        <a href="http://webshop.loc">Vissza a főoldalra:</a>
    </form>
</body>
</html>