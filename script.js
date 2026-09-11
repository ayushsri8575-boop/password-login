document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    var usernameInput = document.getElementById("username").value.trim();
    var passwordInput = document.getElementById("password").value.trim();

    if (usernameInput === "" || passwordInput === "") {
        alert("pleas input username or password");
        return;
    }
    document.getElementById("loginForm").style.display = "none";
    document.querySelector(".card h2").style.display = "none";
    document.getElementById("greetingText").textContent = "Hello, " "! Hello";
    document.getElementById("welcomeBox").style.display = "block";
});
