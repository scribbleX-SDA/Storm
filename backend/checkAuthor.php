<?php
header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']); // allowing all domains to access it. (For now)

$servername = "localhost";
$db_username = "u887995108_slx_projects";
$db_auth = "slxProjects@69750009";
$dbname = "u887995108_slx_projects";

$id = $_REQUEST["id"];

$connect = mysqli_connect($servername, $db_username, $db_auth, $dbname);
if(!$connect){
    die("Connection Failed");
}

$sql = "SELECT author FROM projectsDirectory WHERE projectID='".$id."'";
$result = mysqli_query($connect, $sql);
$row = mysqli_fetch_assoc($result);
$response = $row["author"];

//SEND_RESPONSE:
mysqli_close($connect);
echo $response;
?>