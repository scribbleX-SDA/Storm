<?php
header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']); // allowing all domains to access it. (For now)
$cssCode = $_REQUEST["code"];
$userid = $_REQUEST["uid"];
$projectid = $_REQUEST["pid"];

$file = fopen("projects/".$userid."/".$projectid."/main.css", "w");
fwrite($file, $cssCode);
fclose($file);

echo "CSS_COMPLETE";

?>