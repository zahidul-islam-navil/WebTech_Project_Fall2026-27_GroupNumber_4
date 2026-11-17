console.log("Department Manager Validation Connected");

function validateFullName() {
    let fullName = document.getElementById("FullName").value.trim();
    let error = document.getElementById("FullNameError");
    let expression = /^[A-Za-z. ]+$/;

    if (fullName == "") {
        error.innerHTML = "Enter Full Name.";
        return false;
    }
    if (fullName.length < 3) {
        error.innerHTML = "Name must be at least 3 characters.";
        return false;
    }
    if (!expression.test(fullName)) {
        error.innerHTML = "Name can contain only letters, spaces, and dots.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateEmail() {
    let email = document.getElementById("Email").value.trim();
    let error = document.getElementById("EmailError");
    let expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == "") {
        error.innerHTML = "Enter Email Address.";
        return false;
    }
    if (!expression.test(email)) {
        error.innerHTML = "Enter a valid email format (e.g., name@aiub.edu).";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validatePhone() {
    let phone = document.getElementById("PhnNum").value.trim();
    let error = document.getElementById("PhoneError");
    let expression = /^01[3-9][0-9]{8}$/;

    if (phone == "") {
        error.innerHTML = "Enter Phone Number.";
        return false;
    }
    if (!expression.test(phone)) {
        error.innerHTML = "Phone must be 11 digits starting with 013 - 019.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateGender() {
    let genders = document.querySelectorAll('input[name="gender"]');
    let error = document.getElementById("GenderError");
    let selectedGender = "";

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            selectedGender = genders[i].value;
            break;
        }
    }

    if (selectedGender == "") {
        error.innerHTML = "Select Gender.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateDOB() {
    let dobValue = document.getElementById("dob").value;
    let error = document.getElementById("DOBError");

    if (dobValue == "") {
        error.innerHTML = "Select Date of Birth.";
        return false;
    }

    let parts = dobValue.split("-");
    let dob = new Date(parts[0], parts[1] - 1, parts[2]);
    let today = new Date();

    if (dob > today) {
        error.innerHTML = "Date of Birth cannot be in the future.";
        return false;
    }

    let age = today.getFullYear() - dob.getFullYear();
    let monthGap = today.getMonth() - dob.getMonth();
    if (monthGap < 0 || (monthGap === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 18 || age > 100) {
        error.innerHTML = "Age must be between 18 and 100 years.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateCitizen() {
    let citizen = document.getElementById("Citizen");
    let error = document.getElementById("CitizenError");

    if (citizen.selectedIndex == 0) {
        error.innerHTML = "Select a Country.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validatePicture() {
    let picture = document.getElementById("Picture");
    let error = document.getElementById("PictureError");

    if (!picture || picture.files.length === 0) {
        error.innerHTML = "Upload a Photo.";
        return false;
    }

    let file = picture.files[0];
    let ext = file.name.toLowerCase().split(".").pop();

    if (ext !== "jpg" && ext !== "jpeg" && ext !== "png") {
        error.innerHTML = "Only JPG or PNG files are allowed.";
        return false;
    }
    if (file.size > 2 * 1024 * 1024) {
        error.innerHTML = "File size must be 2 MB or smaller.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateEmpReg() {
    let empReg = document.getElementById("EmpReg").value.trim();
    let error = document.getElementById("EmpRegError");
    let expression = /^DM-[0-9]{4}$/;

    if (empReg == "") {
        error.innerHTML = "Enter Dept Manager ID.";
        return false;
    }
    if (!expression.test(empReg)) {
        error.innerHTML = "Format must match DM-1234.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateDepartment() {
    let dept = document.getElementById("dept");
    let error = document.getElementById("DeptError");

    if (dept.selectedIndex == 0) {
        error.innerHTML = "Select a Department.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateUsername() {
    let username = document.getElementById("username").value.trim();
    let error = document.getElementById("UsernameError");
    let expression = /^[A-Za-z][A-Za-z0-9_]{3,14}$/;

    if (username == "") {
        error.innerHTML = "Enter a Username.";
        return false;
    }
    if (!expression.test(username)) {
        error.innerHTML = "4-15 characters, starting with a letter (letters, numbers, _).";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let error = document.getElementById("PasswordError");

    if (password == "") {
        error.innerHTML = "Enter a Password.";
        return false;
    }
    if (password.length < 8) {
        error.innerHTML = "Password must be at least 8 characters.";
        return false;
    }
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        error.innerHTML = "Include at least 1 uppercase, 1 lowercase, and 1 number.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("Conpassword").value;
    let error = document.getElementById("ConfirmPasswordError");

    if (confirm == "") {
        error.innerHTML = "Confirm your Password.";
        return false;
    }
    if (confirm !== password) {
        error.innerHTML = "Passwords do not match.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateTerms() {
    let terms = document.getElementById("regTerms");
    let error = document.getElementById("regTermsError");

    if (!terms.checked) {
        error.innerHTML = "You must agree to all Terms and Services.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function collect_data() {
    let validName     = validateFullName();
    let validEmail    = validateEmail();
    let validPhone    = validatePhone();
    let validGender   = validateGender();
    let validDob      = validateDOB();
    let validCitizen  = validateCitizen();
    let validPic      = validatePicture();
    let validReg      = validateEmpReg();
    let validDept     = validateDepartment();
    let validUser     = validateUsername();
    let validPass     = validatePassword();
    let validConfirm  = validateConfirmPassword();
    let validTerms    = validateTerms();



    if (validName && validEmail && validPhone && validGender && validDob &&
        validCitizen && validPic && validReg && validDept &&
        validUser && validPass && validConfirm && validTerms) {
        alert("Form submitted successfully!");
        return true;
    }

    // alert("Please fix the errors in the form.");
    return false;
}


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            if (!collect_data()) {
                event.preventDefault();
            }
        });

        form.addEventListener("reset", function () {
            let errors = document.querySelectorAll(".error");
            for (let i = 0; i < errors.length; i++) {
                errors[i].innerHTML = "";
            }
        });
    }
});