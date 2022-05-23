<?php
header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']); // allowing all domains to access it. (For now)
$jsCode = $_REQUEST["code"];
$userid = $_REQUEST["uid"];
$projectid = $_REQUEST["pid"];

$file = fopen("projects/".$userid."/".$projectid."/main.js", "w");
fwrite($file, $jsCode);
fclose($file);

echo "JS_COMPLETE";

?>