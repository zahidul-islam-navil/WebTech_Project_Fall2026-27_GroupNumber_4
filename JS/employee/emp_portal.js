/* Employee Login Validation */
function validLoginId() {
    let id = document.getElementById("loginId").value.trim();
    document.getElementById("loginIdError").textContent = "";
    if (id === "") {
        document.getElementById("loginIdError").textContent = "Enter your employee ID.";
        return false;
    }
    return true;
}

function validLoginPassword() {
    let password = document.getElementById("loginPassword").value;
    document.getElementById("loginPasswordError").textContent = "";
    if (password === "") {
        document.getElementById("loginPasswordError").textContent = "Enter your password.";
        return false;
    }
    return true;
}

function validateLogin() {
    let id = validLoginId();
    let password = validLoginPassword();
    if (id && password) {
        window.location.href = "emp_dashboard.html";
    }
    return false;
}

function clearLoginErrors() {
    document.getElementById("loginIdError").textContent = "";
    document.getElementById("loginPasswordError").textContent = "";
}

/* Employee Registration */
function validName() {
    let name = document.getElementById("regName").value.trim();
    document.getElementById("regNameError").textContent = "";
    if (name === "") {
        document.getElementById("regNameError").textContent = "Enter your name.";
        return false;
    }
    return true;
}

function validEmployeeId() {
    let id = document.getElementById("regId").value.trim();
    document.getElementById("regIdError").textContent = "";
    if (id === "") {
        document.getElementById("regIdError").textContent = "Enter employee ID.";
        return false;
    }
    return true;
}

function validEmail() {
    let email = document.getElementById("regEmail").value.trim();
    document.getElementById("regEmailError").textContent = "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("regEmailError").textContent = "Enter a valid email.";
        return false;
    }
    return true;
}

function validPhone() {
    let phone = document.getElementById("regPhone").value.trim();
    document.getElementById("regPhoneError").textContent = "";
    if (!/^[0-9]{11}$/.test(phone)) {
        document.getElementById("regPhoneError").textContent = "Use exactly 11 digits.";
        return false;
    }
    return true;
}

function validEmergency() {
    let number = document.getElementById("regEmergency").value.trim();
    document.getElementById("regEmergencyError").textContent = "";
    if (!/^[0-9]{11}$/.test(number)) {
        document.getElementById("regEmergencyError").textContent = "Use exactly 11 digits.";
        return false;
    }
    return true;
}

function validDepartment() {
    let department = document.getElementById("regDepartment").value.trim();
    document.getElementById("regDepartmentError").textContent = "";
    if (department === "") {
        document.getElementById("regDepartmentError").textContent = "Enter department.";
        return false;
    }
    return true;
}

function validPosition() {
    let position = document.getElementById("regPosition").value.trim();
    document.getElementById("regPositionError").textContent = "";
    if (position === "") {
        document.getElementById("regPositionError").textContent = "Enter position.";
        return false;
    }
    return true;
}

function validGender() {
    let male = document.getElementById("regMale").checked;
    let female = document.getElementById("regFemale").checked;

    document.getElementById("regGenderError").textContent = "";

    if (!male && !female) {
        document.getElementById("regGenderError").textContent = "Select gender.";
        return false;
    }
    return true;
}

function validDob() {
    let dob = document.getElementById("regDob").value;
    document.getElementById("regDobError").textContent = "";
    if (dob === "") {
        document.getElementById("regDobError").textContent = "Select date of birth.";
        return false;
    }
    return true;
}

function validBlood() {
    let blood = document.getElementById("regBlood").value;
    document.getElementById("regBloodError").textContent = "";
    if (blood === "") {
        document.getElementById("regBloodError").textContent = "Select blood group.";
        return false;
    }
    return true;
}

function validAddress() {
    let address = document.getElementById("regAddress").value.trim();
    document.getElementById("regAddressError").textContent = "";
    if (address === "") {
        document.getElementById("regAddressError").textContent = "Enter address.";
        return false;
    }
    return true;
}

function validImage() {
    let image = document.getElementById("regImage").value;
    document.getElementById("regImageError").textContent = "";

    if (image === "") {
        document.getElementById("regImageError").textContent = "Select a profile image.";
        return false;
    }
    return true;
}

function validPassword() {
    let password = document.getElementById("regPassword").value;
    document.getElementById("regPasswordError").textContent = "";
    if (password.length < 8) {
        document.getElementById("regPasswordError").textContent = "Use at least 8 characters.";
        return false;
    }
    return true;
}

function validConfirmPassword() {
    let password = document.getElementById("regPassword").value;
    let confirm = document.getElementById("regConfirm").value;
    document.getElementById("regConfirmError").textContent = "";
    if (confirm === "" || password !== confirm) {
        document.getElementById("regConfirmError").textContent = "Passwords do not match.";
        return false;
    }
    return true;
}

function validTerms() {
    let checked = document.getElementById("regTerms").checked;
    document.getElementById("regTermsError").textContent = "";
    if (!checked) {
        document.getElementById("regTermsError").textContent = "You must agree to the terms.";
        return false;
    }
    return true;
}

function validateRegistration() {
    let name = validName();
    let id = validEmployeeId();
    let email = validEmail();
    let phone = validPhone();
    let emergency = validEmergency();
    let department = validDepartment();
    let position = validPosition();
    let gender = validGender();
    let dob = validDob();
    let blood = validBlood();
    let address = validAddress();
    let image = validImage();
    let password = validPassword();
    let confirm = validConfirmPassword();
    let terms = validTerms();

    if (name && id && email && phone && emergency && department && position &&
        gender && dob && blood && address && image && password && confirm && terms) {
        window.location.href = "emp_login.html";
    } else {
        document.getElementById("registrationMessage").textContent = "Fill all the fields.";
    }
    return false;
}

function clearRegistrationErrors() {
    document.getElementById("regNameError").textContent = "";
    document.getElementById("regIdError").textContent = "";
    document.getElementById("regEmailError").textContent = "";
    document.getElementById("regPhoneError").textContent = "";
    document.getElementById("regEmergencyError").textContent = "";
    document.getElementById("regDepartmentError").textContent = "";
    document.getElementById("regPositionError").textContent = "";
    document.getElementById("regGenderError").textContent = "";
    document.getElementById("regDobError").textContent = "";
    document.getElementById("regBloodError").textContent = "";
    document.getElementById("regAddressError").textContent = "";
    document.getElementById("regImageError").textContent = "";
    document.getElementById("regPasswordError").textContent = "";
    document.getElementById("regConfirmError").textContent = "";
    document.getElementById("regTermsError").textContent = "";
    document.getElementById("registrationMessage").textContent = "";
}
