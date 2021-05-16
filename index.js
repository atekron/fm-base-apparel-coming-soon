document.getElementById("submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  var email = document.querySelector(".email-input").value;
  console.log(email);
  if (!email) {
    document.querySelector(".email-validation-error").style.display = "block";
    return;
  }
  if (!email.includes("@")) {
    document.querySelector(".email-validation-error").style.display = "block";
    return;
  }
  document.querySelector(".email-validation-error").style.display = "none";
  document.querySelector(".email-input").value = "";
});
