<?php

header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']); // allowing all domains to access it. (For now)

$servername = "localhost";
$db_username = "u887995108_slx_connect";
$db_auth = "slxConnect@69750009";
$dbname = "u887995108_slx_connect";

$recDate = strval(date("d-m-Y"));
$username = $_REQUEST["username"];
$auth = $_REQUEST["auth"];
$email = $_REQUEST["email"];

$sep = ":://scribblex//::";


$connect = mysqli_connect($servername, $db_username, $db_auth, $dbname);
if(!$connect){
    die("Connection Failed");
}

$sql = "INSERT INTO connectToScribbleX(userName, email, authHash, recDate)
    VALUES('".$username."', '".$email."', '".$auth."', '".$recDate."')";

if(mysqli_query($connect, $sql)){
    $sql = "SELECT userid, membStat, recDate FROM userDB WHERE userName='".$username."' AND email='".$email."'";
    $result = mysqli_query($connect, $sql);
    if(mysqli_num_rows($result) == 0){
        $response = "Error";
        goto SEND_RESPONSE;
    }else if(mysqli_num_rows($result) > 0 && mysqli_num_rows($result) == 1){
        $row = mysqli_fetch_assoc($result);
        $response = $row["userid"].$sep.$row["membStat"].$sep.$row["recDate"];
        $generatedID = $row["userid"];
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
echo $response;

?>