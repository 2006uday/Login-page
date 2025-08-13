<?php

    $UserName = $_POST['UserName'];
    $Password = $_POST['Password'];

    $conn = new mysqli('localhost','root','','login');
    if($conn->connect_error){
        die("Connection falied :- ".$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into signup(UserName,Password) values(?,?)");

        $stmt->bind_param("ss",$UserName,$Password);

        $stmt->execute();
        echo "registration Succeccfully";

        $stmt->close();
        $conn->close();
    }
?>