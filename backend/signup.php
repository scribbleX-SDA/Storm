<?php

header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']); // allowing all domains to access it. (For now)

$servername = "localhost";
$db_username = "u887995108_slx_connect";
$db_auth = "slxConnect@69750009";
$dbname = "u887995108_slx_connect";

$recDate = strval(date("d-m-Y"));
$username = $_REQUEST["user"];
$auth = $_REQUEST["auth"];
$email = $_REQUEST["email"];

$sep = ":://scribblex//::";


$connect = mysqli_connect($servername, $db_username, $db_auth, $dbname);
if(!$connect){
    die("Connection Failed");
}

$sql = "INSERT INTO connectToScribbleX(user, email, authHash, recDate)
    VALUES('".$username."', '".$email."', '".$auth."', '".$recDate."')";

if(mysqli_query($connect, $sql)){
    //sleep(5);
    $sql = "SELECT userID FROM connectToScribbleX WHERE user='".$username."' AND email='".$email."'";
    $result = mysqli_query($connect, $sql);
    if(mysqli_num_rows($result) == 0){
        $response = "Error";
        //echo "Here is the issue";
        goto SEND_RESPONSE;
    }else if(mysqli_num_rows($result) > 0 && mysqli_num_rows($result) == 1){
        $row = mysqli_fetch_assoc($result);
        $response = $row["userID"];
        $generatedID = $row["userID"];
        //$sql = "CREATE TABLE ".$generatedID."(ProjectID INT(100000) AUTO_INCREMENT PRIMARY KEY, ProjectDate VARCHAR(12) NOT NULL, STATUS VARCHAR(8) NOT NULL)";
        //if(mysqli_query($connect, $sql)){
            goto SEND_RESPONSE;
        /*}else{
            $response = "ERROR";
            goto SEND_RESPONSE;
        }*/
    }else{
        $response = "ERROR";
        goto SEND_RESPONSE;
    }
    goto SEND_RESPONSE;
}else{
    echo "ERROR While Creating Account!";
    goto SEND_RESPONSE;
}


SEND_RESPONSE:
mysqli_close($connect);
$from = "report@slx4.tech";
$to = "kstyagi@scribblex.net";
$subject = "New User Registered";
$message = "New user just registered to ScribbleX.\nUsername: ".$username." , Email: ".$email."";
$headers = "From:" . $from;
if(mail($to,$subject,$message, $headers)) {
    //echo "The email message was sent.";
} else {
    //echo "The email message was not sent.";
}
echo $response;

?>