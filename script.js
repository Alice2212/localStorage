// sign ups
function signUp(e) {
  let fname = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  localStorage.setItem("fullName", fname);
  localStorage.setItem("email", email);
  localStorage.setItem("code", password);

  e.preventDefault();
}

// signIn
function signIn(e) {
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("password").value;

  if (
    email === localStorage.getItem("email") &&
    pwd === localStorage.getItem("code")
  ) {
    alert(`Login Successful`);
  } else {
    alert(`invalid login details`);
  }
  e.preventDefault();
}
