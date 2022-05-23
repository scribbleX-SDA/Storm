<?php
header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']); // allowing all domains to access it. (For now)
//$htmlCode = $_REQUEST["code"];
$userid = $_REQUEST["uid"];
$projectid = $_REQUEST["pid"];
$prStat = $_REQUEST["privacyStat"];



$servername = "localhost";
$db_username = "u887995108_scribblex";
$db_auth = "Kshitij@2332k";
$dbname = "u887995108_scribblex";

$connect = mysqli_connect($servername, $db_username, $db_auth, $dbname);
if(!$connect){
    die("Couldn't Establish Connection with Database.");
}
$sql = "UPDATE `".$userid."` SET STATUS = '".$prStat."' WHERE ProjectID = '".$projectid."'";

if(mysqli_query($connect, $sql)){
    $file = fopen("projects/".$userid."/".$projectid."/privacyStat.txt", "w");
    fwrite($file, $prStat);
    fclose($file);

    echo "STAT_COMPLETE";
}else{
    echo "ERROR IMPLEMENTING QUERY";
}

mysqli_close($connect);
?>