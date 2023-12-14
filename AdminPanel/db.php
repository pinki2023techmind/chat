<?php 
    header('Access-Control-Allow-Origin:*');
    header('Content-Type:application/json');
    header("Access-Control-Allow-Credentials", true);

    $host = "localhost";
    $username="root";
    $password="";
    $dbName="chat";
    
    $conn = mysqli_connect($host, $username, $password, $dbName);

    if(!$conn)
    {
        die("connection failed:" .mysqli_connect_error());
    }
    else{
        // echo("connection established successful");
    }
?>