<?php


header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']); // allowing all domains to access it. (For now)

$servername = "localhost";
$db_username = "u887995108_scribblex";
$db_auth = "Kshitij@2332k";
$dbname = "u887995108_scribblex";

$userid = $_REQUEST["userid"];

$connect = mysqli_connect($servername, $db_username, $db_auth, $dbname);
if(!$connect){
    die("Error Establishing Connection with Database");
}

$sql = "SELECT MAX(ProjectID) FROM `".$userid."`";
$result = mysqli_query($connect, $sql);
if(mysqli_num_rows($result)){
    $lastID = mysqli_fetch_row($result);
    //$lastID = $result;
    goto SEND_ID;
}else{
    echo "ERROR";
}


SEND_ID:
echo $lastID[0];
echo $result;


?>