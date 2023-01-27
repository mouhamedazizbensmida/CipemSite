<?php
require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer();
$mail->Host ="smtp.gmail.com";

#$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Username = 'senaidbacinovic@gmail.com';
$mail->Password = 'amy_backo31';
$mail->SMTPSecure = "ssl";
$mail->Port = 465;

$mail->Subject = 'SMTP email test';

$mail->isHTML( isHtml:true);

$mail->Body = '<h1>this is some body</h1>';

$mail->setFrom('senaidbacinovic@gmail.com', 'Senaid Bacinovic');

$mail->addAddress('ayoub.ammr@gmail.com');


try{
if ($mail->send())
    echo "Mail sent";
    else
    echo "smthg wrong!";
} catch (Exception $e) {  echo $e->getMessage(); }
?>