function registerUser(event) {
  event.preventDefault();
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Registered successfully! Please login.");
  window.location.href = "login.html";
}

function loginUser(event) {
  event.preventDefault();
  const enteredEmail = document.getElementById("loginEmail").value;
  const enteredPassword = document.getElementById("loginPassword").value;

  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect email or password.");
  }
}
