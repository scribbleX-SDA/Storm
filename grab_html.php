<?php
header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']); // allowing all domains to access it. (For now)
$htmlCode = $_REQUEST["code"];
$userid = $_REQUEST["uid"];
$projectid = $_REQUEST["pid"];
$title = $_REQUEST["title"];
$extLinks = $_REQUEST["ext"];

$servername = "localhost";
$db_username = "u887995108_scribblex";
$db_auth = "Kshitij@2332k";
$dbname = "u887995108_scribblex";

$connect = mysqli_connect($servername, $db_username, $db_auth, $dbname);
if(!$connect){
    die("Couldn't Establish Connection with Database.");
}

$ProjectDate = strval(date("d-m-Y"));

$sql = "INSERT INTO `".$userid."`(ProjectID, ProjectDate) VALUES('".$projectid."','".$ProjectDate."')";
if(mysqli_query($connect, $sql)){
    $baseSnippet = '<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>
            :://scribbleX//::[Title]
        </title>

        <link rel="stylesheet" href="main.css">
        :://scribbleX//::[Ext-CSS/JS-Links]
    </head>
    <body>
        :://scribbleX//::[BodyContent]

        <script src="main.js"></script>
    </body>
    </html>';

    if(is_dir("projects/".$userid)){
        if(!is_dir("projects/".$userid."/".$projectid)){
            // File already exists! This is an issue.
        }else{
            mkdir("projects/".$userid."/".$projectid);
        }

        $baseSnippet = str_replace(":://scribbleX//::[Title]", $title, $baseSnippet);
        $baseSnippet = str_replace(":://scribbleX//::[BodyContent]", $htmlCode, $baseSnippet);
        $baseSnippet = str_replace(":://scribbleX//::[Ext-CSS/JS-Links]", "<!-- Nothing Yet -->", $baseSnippet);

        $htmlCode = $baseSnippet;

        $file = fopen("projects/".$userid."/".$projectid."/index.html", "w");
        fwrite($file, $htmlCode);
        fclose($file);

        echo "HTML_COMPLETE";
    }
    else{
        echo "ERROR";
    }
}else{
    //mysqli_close($connect);
    echo "ERROR IN QUERY IMPLEMENTATION";
}
mysqli_close($connect);

?>