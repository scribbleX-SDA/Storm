<?php

$userid = $_REQUEST["uid"];

$servername = "localhost";
$username_db = "u887995108_slx_connect";
$auth_db = "slxConnect@69750009";
$dbname = "u887995108_slx_connect";

$connect = mysqli_connect($servername, $username_db, $auth_db, $dbname);

if(!$connect){die("Connection Failed.");}

$sql = "SELECT userName FROM connectToScribbleX WHERE userID='".$userid."'";
$result = mysqli_query($connect, $sql);
$row = mysqli_fetch_assoc($result);
$response = $row["userName"];

echo $response;

?>