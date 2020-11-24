<?php 

require_once '../PHPMailer/PHPMailer.php';
require '../PHPMailer/SMTP.php';
require '../PHPMailer/Exception.php';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$text = $_POST['text'];

$error = 'error';

if (strlen($name) <=0)
{   
    echo $error;
    exit();
}
else if (strlen($email) <=0)
{
    echo $error;
    exit();
}
else if (strlen($phone) <=0)
{
    echo $error;
    exit();
}
else if (strlen($text) <=0)
{
    echo $error;
    exit();
}

$title = "Request from the site";
$body =  "
<h2>New Letter</h2>
<b>Name:</b> $name<br>
<b>Email:</b> $email<br>
<b>Phone:</b> $phone<br><br>
<b>Message:</b><br>$text
";


$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->isSMTP();   
$mail->CharSet = "UTF-8";
$mail->SMTPAuth   = true;
$mail->Host       = 'smtp.gmail.com'; 
$mail->Username   = '21mailertest@gmail.com'; 
$mail->Password   = 'passwordfor21mailertest'; 
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;
$mail->addAddress('21kravets@gmail.com');  
$mail->setFrom('21mailertest@gmail.com', 'Creative');

$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;
if ($mail->send()) {$result = "success";} 
else {echo $error;} 


?>  