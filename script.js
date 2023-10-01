let email = document.getElementById("email")
let re = new RegExp("^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$")

function emailCheck(event) {
  if (!re.test(email.value)){
    email.style.borderColor = "#ff5263"
    document.getElementById("errorMessage").style.visibility = "visible";
  }
}

function takeError(event) {
  email.style.borderColor = ""
  document.getElementById("errorMessage").style.visibility = "";
}

document.getElementById("submit").addEventListener("mouseover", emailCheck);
document.getElementById("submit").addEventListener("mouseleave", takeError)
