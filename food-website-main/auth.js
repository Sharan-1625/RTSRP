let users = JSON.parse(localStorage.getItem("users")) || [];

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("signup-username").value;
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;

            if (users.some(user => user.username === username)) {
                alert("Username already exists. Please login.");
                window.location.href = "login.html";
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Signup successful! Please login.");
            window.location.href = "login.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                alert(`Welcome back, ${username}!`);
                window.location.href = "index.html";
            } else {
                alert("User not found. Please sign up first.");
                window.location.href = "signup.html";
            }
        });
    }
});
