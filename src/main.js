import axios from "axios";

export function signout() {
  sessionStorage.clear();
  window.alert("Signed out");
}

export function performSignin() {
  if (sessionStorage.getItem("status") != null) {
    const restext = document.getElementById("message");
    restext.innerHTML = "Already Signed In";
    sessionStorage.setItem("secondtime", "Yes");
  } else {
    //show validation message
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const text = document.getElementById("message");
    axios
      .post("http://localhost:5000/login", {
        password: password,
        email: email,
      })
      .then((response) => {
        sessionStorage.setItem("status", "loggedIn");
        sessionStorage.setItem("secondtime", "Yes");
      })
      .catch((error) => {
        //console.log(error.response.data['error']);
        //console.log(error.response);
        let supstr = JSON.stringify(error.response.data);
        supstr = supstr.replace(/[^ a-zA-Z0-9]/g, "");
        supstr = supstr.replace("error", "");
        text.innerHTML = supstr;
      });
  }
}

export function performSignup() {
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const text = document.getElementById("message");
  axios
    .post("http://localhost:5000/newuser", {
      password: password,
      email: email,
    })
    .then((response) => {
      sessionStorage.setItem("secondtime", "Yes");
      sessionStorage.setItem("status", "loggedIn");
    })
    .catch((err) => {
      let supstr = JSON.stringify(err.response.data);
      supstr = supstr.replace(/[^ a-zA-Z0-9]/g, "");
      supstr = supstr.replace("error", "");
      text.innerHTML = supstr;
    });
}
