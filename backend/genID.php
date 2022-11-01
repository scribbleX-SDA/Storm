<?php
header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);

$charset = 'abcAde0fg2hicjklm1nop4qBrqstui3vopwxyzABCNj8DEdKLMFGH5IFwJKLgMN7OePQRxSTtHUVWsX6YZrdf9uvhduqyZ';

$servername = "localhost";
$username_db = "u887995108_slx_projects";
$auth_db = "slxProjects@69750009";
$dbname = "u887995108_slx_projects";

$connect = mysqli_connect($servername, $username_db, $auth_db, $dbname);
if(!$connect){
    die("Connection Error.");
    // SEND A MAIL TO THE ADMIN HERE!
}

$tempGen = '';

GENERATE_ID:
$len = rand(5, 10);
for($i=0; $i<$len; $i++){
    $randno = rand(0, 93);
    $tempGen = $tempGen.$charset[$randno];
}

$sql = mysqli_query($connect ,"SELECT * FROM projectsDirectory WHERE projectID = '".$tempGen."'");
$match = mysqli_num_rows($sql) > 0 ? 'FOUND' : 'AVAILABLE';

if($match == 'FOUND'){goto GENERATE_ID;}
else{
    echo $tempGen;
}
?>