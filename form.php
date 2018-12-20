<?php
if(isset($_POST['submit'])){
    $to = "testmail";
    $from = $_POST['mail'];
    $first_name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $first_name . " wrote the following:" . "\n\n" . $_POST['message'];

    $headers = array("From:" . $from,
        "Reply-To: testmail",
        "X-Mailer: PHP/" . PHP_VERSION
    );
    $headers = implode("\r\n", $headers);

    if(mail($to,$subject,$message,$headers)){
      header('Location: index.html?msg=true');
    }else{
      header('Location: index.html?msg=false');
    }
  }
?>
