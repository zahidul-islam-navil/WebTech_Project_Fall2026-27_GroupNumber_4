function validLoginId() {
    let id = document.getElementById("loginid").value.trim();
    document.getElementById("loginiderr").textContent = "";

    if (id === "") {
        document.getElementById("loginiderr").textContent = "Enter your HR ID.";
        return false;
    }
    return true;
}

function validLoginPassword() {
    let password = document.getElementById("loginpassword").value;
    document.getElementById("passerr").textContent = "";

    if (password === "") {
        document.getElementById("passerr").textContent = "Enter your password.";
        return false;
    }
    return true;
}

function validatelogin() {
    let id = validLoginId();
    let password = validLoginPassword();

    if (id && password) {
        window.location.href = "hr_dashboard.html";
    }
    return false;
}

function clearloginerror() {
    document.getElementById("loginiderr").textContent = "";
    document.getElementById("passerr").textContent = "";
}

function validName() {
    let name = document.getElementById("regName").value.trim();
    document.getElementById("regnameerr").textContent = "";

    if (name === "") {
        document.getElementById("regnameerr").textContent = "Enter your name.";
        return false;
    }
    return true;
}

function validEmployeeId() {
    let id = document.getElementById("regId").value.trim();
    document.getElementById("regiderr").textContent = "";

    if (id === "") {
        document.getElementById("regiderr").textContent = "Enter employee ID.";
        return false;
    }
    return true;
}

function validEmail() {
    let email = document.getElementById("regEmail").value.trim();
    document.getElementById("regmailerr").textContent = "";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("regmailerr").textContent = "Enter a valid email.";
        return false;
    }
    return true;
}

function validPhone() {
    let phone = document.getElementById("regPhone").value.trim();
    document.getElementById("regfonerr").textContent = "";

    if (!/^[0-9]{11}$/.test(phone)) {
        document.getElementById("regfonerr").textContent = "Use exactly 11 digits.";
        return false;
    }
    return true;
}

function validEmergency() {
    let number = document.getElementById("regEmergency").value.trim();
    document.getElementById("regemererr").textContent = "";

    if (!/^[0-9]{11}$/.test(number)) {
        document.getElementById("regemererr").textContent = "Use exactly 11 digits.";
        return false;
    }
    return true;
}

function validDepartment() {
    let department = document.getElementById("regDepartment").value.trim();
    document.getElementById("regdepterr").textContent = "";

    if (department === "") {
        document.getElementById("regdepterr").textContent = "Select department.";
        return false;
    }
    return true;
}

function validPosition() {
    let position = document.getElementById("regPosition").value.trim();
    document.getElementById("regposerr").textContent = "";

    if (position === "") {
        document.getElementById("regposerr").textContent = "Select position.";
        return false;
    }
    return true;
}

function validGender() {
    let gender = document.getElementById("regGender").value;
    document.getElementById("reggenderr").textContent = "";

    if (gender === "") {
        document.getElementById("reggenderr").textContent = "Select gender.";
        return false;
    }
    return true;
}

function validDob() {
    let dob = document.getElementById("regDob").value;
    document.getElementById("regdberr").textContent = "";

    if (dob === "") {
        document.getElementById("regdberr").textContent = "Select date of birth.";
        return false;
    }
    return true;
}

function validBlood() {
    let blood = document.getElementById("regBlood").value;
    document.getElementById("regblderr").textContent = "";

    if (blood === "") {
        document.getElementById("regblderr").textContent = "Select blood group.";
        return false;
    }
    return true;
}

function validAddress() {
    let address = document.getElementById("regAddress").value.trim();
    document.getElementById("regadderr").textContent = "";

    if (address === "") {
        document.getElementById("regadderr").textContent = "Enter address.";
        return false;
    }
    return true;
}

function validPassword() {
    let password = document.getElementById("regpassword").value;
    document.getElementById("regpasserr").textContent = "";

    if (password.length < 8) {
        document.getElementById("regpasserr").textContent = "Use at least 8 characters.";
        return false;
    }
    return true;
}

function validConfirmPassword() {
    let password = document.getElementById("regpassword").value;
    let confirm = document.getElementById("regConfirm").value;
    document.getElementById("confirmerr").textContent = "";

    if (confirm === "" || password !== confirm) {
        document.getElementById("confirmerr").textContent = "Passwords do not match.";
        return false;
    }
    return true;
}

function validTerms() {
    let checked = document.getElementById("regTerms").checked;
    document.getElementById("regtermerr").textContent = "";

    if (!checked) {
        document.getElementById("regtermerr").textContent = "You must agree to the terms.";
        return false;
    }
    return true;
}

function validateregistration() {
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
    let password = validPassword();
    let confirm = validConfirmPassword();
    let terms = validTerms();

    if (name && id && email && phone && emergency && department &&
        position && gender && dob && blood && address && password &&
        confirm && terms) {
        window.location.href = "hr_login.html";
    }
    return false;
}

function clearregerror() {
    document.getElementById("regnameerr").textContent = "";
    document.getElementById("regiderr").textContent = "";
    document.getElementById("regmailerr").textContent = "";
    document.getElementById("regfonerr").textContent = "";
    document.getElementById("regemererr").textContent = "";
    document.getElementById("regdepterr").textContent = "";
    document.getElementById("regposerr").textContent = "";
    document.getElementById("reggenderr").textContent = "";
    document.getElementById("regdberr").textContent = "";
    document.getElementById("regblderr").textContent = "";
    document.getElementById("regadderr").textContent = "";
    document.getElementById("regpasserr").textContent = "";
    document.getElementById("confirmerr").textContent = "";
    document.getElementById("regtermerr").textContent = "";
}

function calculateSalary() {

    let name = document.getElementById("payName").value.trim();
    let id = document.getElementById("payId").value.trim();

    let basic = parseFloat(document.getElementById("basic").value);
    let allowance = parseFloat(document.getElementById("allowance").value);
    let deduction = parseFloat(document.getElementById("deduction").value);
    let tax = parseFloat(document.getElementById("tax").value);

    document.getElementById("salaryError").textContent = "";

    if (name === "" || id === "" ||
        isNaN(basic) || isNaN(allowance) ||
        isNaN(deduction) || isNaN(tax)) {

        document.getElementById("salaryError").textContent =
            "Please fill in all fields.";

        return false;
    }

    if (basic < 0 || allowance < 0 ||
        deduction < 0 || tax < 0) {

        document.getElementById("salaryError").textContent =
            "Salary values cannot be negative.";

        return false;
    }

    let net = basic + allowance - deduction - tax;

    if (net < 0) {
        document.getElementById("salaryError").textContent =
            "Deductions and tax exceed total salary.";

        return false;
    }

    document.getElementById("netSalary").textContent =
         net.toFixed(2)+ "Tk" ;

    return false;
}

function clearSalary() {

    document.getElementById("netSalary").textContent = "0.00 Tk";
    document.getElementById("salaryError").textContent = "";

}

function updateRecruitment() {

    document.getElementById("recruitmentMessage").textContent =
        "Successfully Updated!";

}
