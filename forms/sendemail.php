<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';
$alert1 = '';

if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  try{
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'ferrerjoshua304@gmail.com'; // Gmail address which you want to use as SMTP server
    $mail->Password = 'dohucwezuajxvscj'; // Gmail address Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = '587';

    $mail->setFrom('ferrerjoshua304@gmail.com'); // Gmail address which you used as SMTP server
    $mail->addAddress('ferrerjoshua304@gmail.com'); // Email address where you want to receive emails (you can use any of your gmail address including the gmail address which you used as SMTP server)

    $mail->isHTML(true);
    $mail->Subject = 'Message Received (Contact Page): '.$subject;
    $mail->Body = "<h3>Name : $name <br>Email: $email <br>Message : $message</h3>";

    $mail->send();

    $alert = '<div class="alert-success">
                <span>Message Sent! Thank you for contacting me.</span>
              </div>
              <script type="text/javascript"> 
                Swal.fire({
                  title: "Message Sent!",
                  text: "Thank you for contacting me.!",
                  icon: "success",
                  button: "Aww yiss!",
                })
              </script>';
  } catch (Exception $e){
    $alert1 = $e->getMessage();
    $alert = '<div class="alert-error">
                <span>'.$e->getMessage().'</span>
              </div>';
  }
}
?>
