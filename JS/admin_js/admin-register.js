function validateRegister() {
    let validName = validateFullName();
    let validUser = validateUsername();
    let validDOB = validateDOB();
    let validGender = validateGender();
    let validNid = validateNid();
    let validPhoto = validatePhoto();
    let validEmail = validateWorkEmail();
    let validMobile = validateMobile();
    let validPass = validatePassword();
    let validConfirm = validateConfirmPassword();
    let validSecret = validateSecretCode();
    let validQuestion = validateSecurityQuestion();
    let validAnswer = validateSecurityAnswer();

    if (validName && validUser && validDOB && validGender && validNid && validPhoto && validEmail && validMobile && validPass && validConfirm && validSecret && validQuestion && validAnswer) {
        alert("Registration Successful");
        window.location.href = "admin-login.html";
        return false;
    }
    return false;
}


function validateFullName() {
    let name = document.getElementById("FullName").value.trim();
    let error = document.getElementById("NameError");
    if (name === "") {
        error.innerHTML = "Please enter your full name";
        return false;
    }
    else if (name.length < 3) {
        error.innerHTML = "Name must be at least 3 characters";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}


function validateUsername() {
    let username = document.getElementById("Username").value.trim();
    let error = document.getElementById("UserError");

    if (username === "") {
        error.innerHTML = "Please enter username";
        return false;
    } else if (username.length < 4) {
        error.innerHTML = "Username must be at least 4 characters";
        return false;
    }

    for (let i = 0; i < username.length; i++) {
        let ch = username[i];

        let isLetter = (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z");
        let isNumber = (ch >= "0") && (ch <= "9");

        if (!isLetter && !isNumber) {
            error.innerHTML = "Username cannot contain symbols or spaces";
            return false;
        }
    }

    error.innerHTML = "";
    return true;
}


function validateDOB() {
    let dob = document.getElementById("DOB").value;
    let error = document.getElementById("DOBError");

    if (dob === "") {
        error.innerHTML = "Please select date of birth";
        return false;
    }

    let dobDate = new Date(dob);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dobDate >= today) {
        error.innerHTML = "Date of birth cannot be today or in the future";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}


function validateGender() {
    let genders = document.querySelectorAll('input[name="gender"]');
    let error = document.getElementById("GenderError");
    let selected = false;

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            selected = true;
            break;
        }
    }

    if (!selected) {
        error.innerHTML = "Please select gender";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}


function containsOnlyDigits(value) {
    for (let i = 0; i < value.length; i++) {
        let ch = value[i];
        if (ch < "0" || ch > "9") {
            return false;
        }
    }
    return true;
}

function validateNid() {
    let nid = document.getElementById("NidNumber").value.trim();
    let error = document.getElementById("NidError");

    if (nid === "") {
        error.innerHTML = "Please enter NID number";
        return false;
    } else if (nid.length !== 10 || containsOnlyDigits(nid) === false) {
        error.innerHTML = "NID must be exactly 10 digits";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

function validatePhoto() {
    let photo = document.getElementById("Photo").value;
    let error = document.getElementById("PhotoError");

    if (photo === "") {
        error.innerHTML = "Please upload a photo";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

function validateMobile() {
    let mobile = document.getElementById("MobileNumber").value.trim();
    let error = document.getElementById("PhoneError");

    if (mobile === "") {
        error.innerHTML = "Please enter mobile number";
        return false;
    } 
    else if (mobile.length !== 11 || mobile[0] !== "0" || containsOnlyDigits(mobile) === false) {
        error.innerHTML = "Mobile must be 11 digits and start with 0";
        return false;
    } 
    else {
        error.innerHTML = "";
        return true;
    }
}


// This validation code was made using AI

function validateWorkEmail() {
    let email = document.getElementById("WorkEmail").value.trim();
    let error = document.getElementById("EmailError");
    let invalidEmailMessage = "Please enter valid email (e.g. xyz@emsync.corp)";

    if (email === "") {
        error.innerHTML = "Please enter work email";
        return false;
    }

    let at = email.indexOf("@");
    let dot = email.indexOf(".", at + 2);

    if (at <= 0 || at !== email.lastIndexOf("@") ||
        dot === -1 || dot === email.length - 1) {
        error.innerHTML = invalidEmailMessage;
        return false;
    }

    for (let i = 0; i < email.length; i++) {
        if (email[i].trim() === "") {
            error.innerHTML = invalidEmailMessage;
            return false;
        }
    }

    error.innerHTML = "";
    return true;
}


function validatePassword() {
    let pass = document.getElementById("Password").value;
    let error = document.getElementById("PasswordError");

    if (pass === "") {
        error.innerHTML = "Please enter password";
        return false;
    } 
    else if (pass.length < 8) {
        error.innerHTML = "Password must be at least 8 characters";
        return false;
    }

    let hasUppercase = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (let i = 0; i < pass.length; i++) {
        let ch = pass[i];

        if (ch >= "A" && ch <= "Z") {
            hasUppercase = true;
        }

        if (ch >= "0" && ch <= "9") {
            hasNumber = true;
        }

        if (ch === "@" || ch === "$" || ch === "_" || ch === "&") {
            hasSpecial = true;
        }
    }

    if (hasUppercase == false) {
        error.innerHTML = "Password must contain at least one uppercase letter";
        return false;
    } 
    else if (hasNumber == false) {
        error.innerHTML = "Password must contain at least one number";
        return false;
    } 
    else if (hasSpecial == false) {
        error.innerHTML = "Password must contain at least one special character (_, @, &, $)";
        return false;
    } 
    else {
        error.innerHTML = "";
        return true;
    }
}

function validateConfirmPassword() {
    let pass = document.getElementById("Password").value;
    let confirm = document.getElementById("ConfirmPassword").value;
    let error = document.getElementById("ConfirmError");

    if (confirm === "") {
        error.innerHTML = "Please re-enter password";
        return false;
    } 
    else if (confirm !== pass) {
        error.innerHTML = "Passwords do not match";
        return false;
    } 
    else {
        error.innerHTML = "";
        return true;
    }
}

function validateSecretCode() {
    let code = document.getElementById("SecretCode").value.trim();
    let error = document.getElementById("SecretError");

    if (code === "") {
        error.innerHTML = "Please enter secret code";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}


function validateSecurityQuestion() {
    let q = document.getElementById("SecurityQuestion").value;
    let error = document.getElementById("SecurityQError");

    if (q === "") {
        error.innerHTML = "Please select a recovery question";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}


function validateSecurityAnswer() {
    let ans = document.getElementById("SecurityAnswer").value.trim();
    let error = document.getElementById("SecurityAnsError");

    if (ans === "") {
        error.innerHTML = "Please enter your answer";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}


function clearAllErrors() {
    document.getElementById("NameError").innerHTML = "";
    document.getElementById("UserError").innerHTML = "";
    document.getElementById("DOBError").innerHTML = "";
    document.getElementById("GenderError").innerHTML = "";
    document.getElementById("NidError").innerHTML = "";
    document.getElementById("PhotoError").innerHTML = "";
    document.getElementById("EmailError").innerHTML = "";
    document.getElementById("PhoneError").innerHTML = "";
    document.getElementById("PasswordError").innerHTML = "";
    document.getElementById("ConfirmError").innerHTML = "";
    document.getElementById("SecretError").innerHTML = "";
    document.getElementById("SecurityQError").innerHTML = "";
    document.getElementById("SecurityAnsError").innerHTML = "";
}
