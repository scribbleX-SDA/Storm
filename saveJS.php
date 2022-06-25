<?php
header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);

$projectID = $_REQUESTp["pid"];
if(!is_dir("projects/".$projectID)){mkdir("projects/".$projectID);}

$file = "projects/".$projectID."/js.txt";
$resp = move_uploaded_file($_FILES["code"]["tmp_name"], $file) ? "OK":"ERROR";

echo $resp;
?>