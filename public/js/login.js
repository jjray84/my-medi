const loginForm = document.getElementById("login-form");

const checkUser = async (event) => {
  event.preventDefault();
  // get the user input after they click on login button
  const email = document.getElementById("email-input").value.trim();
  const password = document.getElementById("password-input").value.trim();

  if (email && password) {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

// checkUser should be defined before it is used
loginForm.addEventListener("submit", checkUser);
