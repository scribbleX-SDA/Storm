<?php

header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']); // allowing all domains to access it. (For now)

$servername = "localhost";
$db_username = "u887995108_slx_connect";
$db_auth = "slxConnect@69750009";
$dbname = "u887995108_slx_connect";

$user = $_REQUEST["user"];
$auth = $_REQUEST["auth"];

$sep = ":://scribblex//::";

// Establishing MySQL Connection
$connect = mysqli_connect($servername, $db_username, $db_auth, $dbname);

if(!$connect){
    die("ERROR Establishing Connection");
}

$sql = "SELECT authHash FROM connectToScribbleX WHERE userName='".$user."' OR email='".$user."'";
$result = mysqli_query($connect, $sql);
if(mysqli_num_rows($result) == 0){
    $response = "NOUSERFOUND";
    goto SEND_RESPONSE;
}else{
    $row = mysqli_fetch_assoc($result);
    if($row["authHash"] == $auth){
        $sql = "SELECT userID, membership, recDate FROM connectToScribbleX WHERE userName='".$user."' OR email='".$user."'";
        $result = mysqli_query($connect, $sql);

        if(mysqli_num_rows($result) == 0){
            $response = "NOUSERFOUND";
            goto SEND_RESPONSE;
        }else if(mysqli_num_rows($result) > 0 && mysqli_num_rows($result) == 1){
            $row = mysqli_fetch_assoc($result);
            $response = $row["userID"].$sep.$row["membership"].$sep.$row["recDate"];
            goto SEND_RESPONSE;
        }else{
            $response = "ERROR";
            goto SEND_RESPONSE;
        }
    }else{
        $response = "INCPASS";
        goto SEND_RESPONSE;
    }
}


SEND_RESPONSE:
mysqli_close($connect);
echo $response;

?>