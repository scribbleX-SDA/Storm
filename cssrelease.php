<?php

$id = $_REQUEST["x"];
$response = '';
if(!is_dir("projects/".$id)){  $response = "Invalid"; goto SEND;  }
$val = '';
$file = fopen("projects/".$id."/css.txt", "r");
while(!feof($file)){
    $val .= fgets($file);
}
$response = rawurlencode($val);
goto SEND;

SEND:
echo $response;
?>