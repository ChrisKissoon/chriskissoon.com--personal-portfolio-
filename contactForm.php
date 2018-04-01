<?php
 //Include phpmailerautoload.php

require 'phpmailer/src/PHPMailer.php';
require'phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
//Instantiate the phpmailer class
$mail = new PHPMailer();

////set the host
$mail->Host = "mail.chriskissoon.com";

//enable SMTP

//$mail->isSMTP();

//set authenication
$mail->SMTPAuth = true;
//Set login details
$mail->Username = "info@chriskissoon.com";
$mail->Password = "lokesh1993";
//set type of protection

$mail->SMTPSecure = "SSL"; //or TSL
//set port

$mail->Port = 465;

//Conduct validation checks before sending data;

if(
    isset($_POST["fname"]) && !empty($_POST["fname"])
    && isset($_POST["lname"]) && !empty($_POST["lname"])
    && isset($_POST["email"]) && !empty($_POST["email"])
    && isset($_POST["selection"]) && $_POST["selection"] !== "select"
    && isset($_POST["message"])  && !empty($_POST["message"])){
   
    $fname = preg_replace('/[0-9]+/', '', $_POST["fname"]);
    $fname = trim($fname);
    $lname = preg_replace('/[0-9]+/', '', $_POST["lname"]);
    $lname = trim($lname);
    $message = $_POST["message"];
    $message = trim($message);
    $selection = $_POST["selection"];
    $email = $_POST["email"];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
     
        
        //set subject
                        $mail->Subject = $selection;

                        //set body
                        $mail->isHTML(true);

                        $mail->Body = "From: <b>".$fname." ".$lname."</b></br><p>".$message."</p>";

                        //set where were sending the email
                        $mail->setFrom($email);
                        $mail->addAddress('info@chriskissoon.com');
                        //send email
                        if($mail->send()){
                            echo "<p class='animated flash'>Your message was received</p>";

                        }else{

                           echo 'Mailer Error: ' . $mail->ErrorInfo;
                        exit;
                        }
        
        
        
        
    } else {
      echo("<p class='animated flash'>Please enter a valid email address</p>");
    }
    
}else{
    
     echo("<p class='animated flash'>Please enter all fields</p>");
}



?>