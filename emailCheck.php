<?php
header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']); // allowing all domains to access it. (For now)

$servername = "localhost";
$db_username = "u887995108_scribblex";
$db_auth = "Kshitij@2332k";
$dbname = "u887995108_scribblex";

$inp = $_REQUEST["email"];

$connect = mysqli_connect($servername, $db_username, $db_auth, $dbname);
if(!$connect){
    die("Connection Failed");
}

$sql = "SELECT userid FROM userDB WHERE email='".$inp."'";
$result = mysqli_query($connect, $sql);
if(mysqli_num_rows($result) == 0){
    $response = "0";
    goto SEND_RESPONSE;
}else{
    $response = "1";
    goto SEND_RESPONSE;
}

SEND_RESPONSE:
mysqli_close($connect);
echo $response;
?>