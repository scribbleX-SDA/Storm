<?php
header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);

$projectID = $_REQUEST["pid"];
$author = $_REQUEST["author"];
$title = $_REQUEST["title"];
$desc = $_REQUEST["desc"];
$visibility = $_REQUEST["vis"];
if(!is_dir("projects/".$projectID)){
    mkdir("projects/".$projectID);
}

$file = "projects/".$projectID."/html.txt";
$resp = move_uploaded_file($_FILES["code"]["tmp_name"], $file) ? "OK":"ERROR";

if($resp == "OK"){
$servername = "localhost";
$username_db = "u887995108_slx_projects";
$auth_db = "slxProjects@69750009";
$dbname = "u887995108_slx_projects";

$connect = mysqli_connect($servername, $username_db, $auth_db, $dbname);
if(!$connect){
    die("Connection Error.");
    // SEND A MAIL TO THE ADMIN HERE!
}

$sql = "INSERT INTO projectsDirectory(projectID, visibility, author, Title, Description)
    VALUES('".$projectID."', '".$visibility."' ,'".$author."' ,'".$title."' ,'".$desc."')";

if(mysqli_query($connect, $sql)){
    $createInfoFile = fopen("projects/"+$projectID+"/info.txt", "w");
    fwrite($projectID."\n", $createInfoFile);
    fwrite($author."\n", $createInfoFile);
    fwrite($visibility."\n", $createInfoFile);
    fwrite($title."\n", $createInfoFile);
    fwrite($desc."\n", $createInfoFile);

    fclose($createInfoFile);

    $response = "HTMLSaved";
}else{
    $response = "ERROR";
}


echo $response;
mysqli_close($connect);
}
else{
    echo "ERROR";
}

?>