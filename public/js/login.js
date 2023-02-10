const username = document.getElementById("username-input")
const password = document.getElementById("password-input")

const loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit", checkUser)

const checkUser = async (event) => {
    event.preventDefault();

    if (email && password) {
      const response = await fetch('/api/login/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
