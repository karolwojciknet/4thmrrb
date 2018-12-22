<?php
if(isset($_POST['submit'])){
    $to = "mrrb4th@outlook.com";
    $from = $_POST['mail'];
    $first_name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $first_name . " wrote the following message in contact form:" . "\n\n" . $_POST['message'];

    $headers = array("From:" . $from,
        "Reply-To: mrrb4th@outlook.com",
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
