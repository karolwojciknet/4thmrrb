const url = new URL(window.location.href);
const msg = url.searchParams.get("msg");
if (msg === "true") {
  const msgvalue="Message sent! Thank you.";
  const msgalert = "<div class='alert alert-success fade in alert-dismissible show'>  <button onclick='gotoHome()' type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true' style='font-size:20px'>&times;</span>   </button>    <strong>Success!</strong> " + msgvalue + "</div>";
  document.getElementById("msgdiv").innerHTML = msgalert;
} else if (msg === "false") {
  const msgvalue="Something went wrong :( Please try again)";
  const msgalert = "<div class='alert alert-danger fade in alert-dismissible show'>  <button onclick='gotoHome()' type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true' style='font-size:20px'>&times;</span>   </button>    <strong>Error!</strong> " + msgvalue + "</div>";
  document.getElementById("msgdiv").innerHTML = msgalert;

}

function gotoHome(){
  window.location = 'index.html';
}

function validateContactForm(e) {
  const name = document.getElementById("name").value;
  const mail = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  let errormsg = "";

  if (name == null || name == "") {
    errormsg = "Please fill 'name' field";
  }

  if (mail == null || mail == "") {
    errormsg = "Please fill 'mail' field";
  }

  if (!mail.includes("@") || !mail.includes(".")) {
    errormsg = "Please enter a valid e-mail";
  }

  if (subject == null || subject == "") {
    errormsg = "Please fill 'subject' field";
  }

  if (message == null || message == "") {
    errormsg = "Please fill 'message' field";
  }

  if (errormsg !== "") {
    const alert = "<div class='alert alert-danger fade in alert-dismissible show'>  <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true' style='font-size:20px'>&times;</span>   </button>    <strong>Error!</strong> " + errormsg + "</div>";
    document.getElementById("formerror").innerHTML = alert;
    return false;
  }

  document.getElementById("formerror").innerHTML = "";
  return true;
}
