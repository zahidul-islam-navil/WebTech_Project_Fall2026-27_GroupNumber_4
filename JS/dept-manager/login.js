function validateUsername() {
    let username = document.getElementById("username").value.trim();
    let error = document.getElementById("usernameError");

    if (username == "") {
        error.innerHTML = "Enter Username.";
        return false;
    }
    if (username !== "anik") {
        error.innerHTML = "Invalid Username.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validatePassword() {
    let password = document.getElementById("loginPassword").value;
    let error = document.getElementById("loginPasswordError");

    if (password == "") {
        error.innerHTML = "Enter Password.";
        return false;
    }
    if (password !== "0000") {
        error.innerHTML = "Incorrect Password.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function collect_data() {
    let validUser = validateUsername();
    let validPass = validatePassword();

    if (validUser && validPass) {
        window.location.href = "../../Pages/dept-manager/dashboard.html";
        return true;
    }
    return false;
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            collect_data();
        });

        form.addEventListener("reset", function () {
            document.getElementById("usernameError").innerHTML = "";
            document.getElementById("loginPasswordError").innerHTML = "";
        });
    }
});