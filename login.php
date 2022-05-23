<?php

header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']); // allowing all domains to access it. (For now)

$servername = "localhost";
$db_username = "u887995108_scribblex";
$db_auth = "Kshitij@2332k";
$dbname = "u887995108_scribblex";

$user = $_REQUEST["user"];
$auth = $_REQUEST["auth"];

$sep = ":://scribblex//::";

// Establishing MySQL Connection
$connect = mysqli_connect($servername, $db_username, $db_auth, $dbname);

if(!$connect){
    die("ERROR Establishing Connection");
}

$sql = "SELECT authKey FROM userDB WHERE username='".$user."' OR email='".$user."'";
$result = mysqli_query($connect, $sql);
if(mysqli_num_rows($result) == 0){
    $response = "NOUSERFOUND";
    goto SEND_RESPONSE;
}else{
    $row = mysqli_fetch_assoc($result);
    if($row["authKey"] == $auth){
        $sql = "SELECT userid, membStat, regDate FROM userDB WHERE username='".$user."' OR email='".$user."'";
        $result = mysqli_query($connect, $sql);

        if(mysqli_num_rows($result) == 0){
            $response = "NOUSERFOUND";
            goto SEND_RESPONSE;
        }else if(mysqli_num_rows($result) > 0 && mysqli_num_rows($result) == 1){
            $row = mysqli_fetch_assoc($result);
            $response = $row["userid"].$sep.$row["membStat"].$sep.$row["regDate"];
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