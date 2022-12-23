function submitForm(){
  var pw1 = document.getElementById("password");
  var pw2 = document.getElementById("confirm-pass");
  myForm = document.getElementById("myForm");
  var msg = document.getElementById('invalid');
  if (pw1.value == pw2.value) {
    if (msg != null){
      msg.remove()
      pw1.classList.remove("invalid")
      pw2.classList.remove("invalid")
      console.log("pass")
    }
    console.log("pass2")
    return true
  } else {
    if (msg == null){
      pw1.classList.add("invalid")
      pw2.classList.add("invalid")
      var msg = document.createElement("div")
      msg.id = "invalid"
      var text = document.createTextNode("*  Passwords do not match")
      msg.appendChild(text)
      pw1.parentElement.appendChild(msg)
    }
    return false
  }
}