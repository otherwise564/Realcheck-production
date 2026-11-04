function goVerify() {
  window.location.href = "verify.html";
}

function goHome() {
  window.location.href = "index.html";
}

function checkNumber() {
  var num = document.getElementById("number").value;
  var type = document.getElementById("type").value;
  if (!num) {
    alert("Please enter a number first");
    return;
  }
  document.getElementById("res").style.display = "block";
  document.getElementById("msg").innerText = "You entered: " + num + " for " + type + ". Real verification will connect here soon.";
}
