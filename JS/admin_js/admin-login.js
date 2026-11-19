function validateLogin() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value;
    let error = document.getElementById("LoginError");

    if (user === "" && pass === "") {
        error.innerHTML = "Please enter username and password";
        return false;
    }
    if (user === "") {
        error.innerHTML = "Please enter username";
        return false;
    }
    if (pass === "") {
        error.innerHTML = "Please enter password";
        return false;
    }

    if (user === "admin" && pass === "admin") {
        error.innerHTML = "";
        window.location.href = "admin-dashboard.html";
        return false;
    } 
    else {
        error.innerHTML = "Invalid username or password";
        return false;
    }
}
