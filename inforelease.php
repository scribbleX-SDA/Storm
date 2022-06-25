<?php

$id = $_REQUEST["x"];
$response = '';
if(!is_dir("projects/".$id)){  $response = "Invalid"; goto SEND;  }
//$val = '';
$file = fopen("projects/".$id."/info.txt", "r");

$pid = fgets($file);
$author = fgets($file);
$privacy = fgets($file);
$title = fgets($file);
$desc = fgets($file);

$val = $title.":://ScribbleX//::".$desc;

$response = rawurlencode($val);
goto SEND;

SEND:
echo $response;
?>