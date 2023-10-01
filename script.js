let email = document.getElementById("email")
let re = new RegExp("^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$")

function emailCheck(event) {
  if (!re.test(email.value)){
    email.style.borderColor = "#ff5263"
    document.getElementById("errorMessage").style.visibility = "visible";
    if(window.screen.availWidth < 780) {
      document.getElementById("errorMessage").style.position = "relative";
      document.getElementById("errorMessage").style.bottom = "8.2rem";
      document.getElementById("submit").style.position = "relative";
      document.getElementById("submit").style.top = "1rem";
    }
  }
}

function takeError(event) {
  email.style.borderColor = ""
  document.getElementById("errorMessage").style.visibility = "";
  document.getElementById("errorMessage").style.position = "";
  document.getElementById("errorMessage").style.bottom = "";
  document.getElementById("submit").style.position = "";
  document.getElementById("submit").style.top = "";
}

document.getElementById("submit").addEventListener("mouseover", emailCheck);
document.getElementById("submit").addEventListener("mouseleave", takeError)
