//Logout Button
function logout() {
    window.location.href = "emp_login.html";
}
document.getElementById("logoutButton").addEventListener("click", logout);

/* Attendance Buttons */
function checkIn() {
    if (document.getElementById("attendanceStatus"))
        document.getElementById("attendanceStatus").textContent = "Checked In";
    if (document.getElementById("dashboardAttendance"))
        document.getElementById("dashboardAttendance").textContent = "Checked In";
}

function checkOut() {
    if (document.getElementById("attendanceStatus"))
        document.getElementById("attendanceStatus").textContent = "Checked Out";
    if (document.getElementById("dashboardAttendance"))
        document.getElementById("dashboardAttendance").textContent = "Checked Out";
}

if (document.getElementById("checkInButton"))
    document.getElementById("checkInButton").addEventListener("click", checkIn);
if (document.getElementById("checkOutButton"))
    document.getElementById("checkOutButton").addEventListener("click", checkOut);

/* Notices */
function readNotice1() {
    document.getElementById("notice1Title").style.color = "#999";
}
function readNotice2() {
    document.getElementById("notice2Title").style.color = "#999";
}

if (document.getElementById("notice1Button"))
    document.getElementById("notice1Button").addEventListener("click", readNotice1);
if (document.getElementById("notice2Button"))
    document.getElementById("notice2Button").addEventListener("click", readNotice2);

/* Task Buttons */
function updateTask1() {
    document.getElementById("task1Status").textContent = document.getElementById("task1Choice").value;
}
function updateTask2() {
    document.getElementById("task2Status").textContent = document.getElementById("task2Choice").value;
}
function updateTask3() {
    document.getElementById("task3Status").textContent = document.getElementById("task3Choice").value;
}

if (document.getElementById("task1Button"))
    document.getElementById("task1Button").addEventListener("click", updateTask1);
if (document.getElementById("task2Button"))
    document.getElementById("task2Button").addEventListener("click", updateTask2);
if (document.getElementById("task3Button"))
    document.getElementById("task3Button").addEventListener("click", updateTask3);

/* Leave Form Validation */
function validLeaveType() {
    let value = document.getElementById("leaveType").value;
    document.getElementById("leaveTypeError").textContent = "";
    if (value === "") {
        document.getElementById("leaveTypeError").textContent = "Choose a leave type.";
        return false;
    }
    return true;
}

function validStartDate() {
    let value = document.getElementById("startDate").value;
    document.getElementById("startDateError").textContent = "";
    if (value === "") {
        document.getElementById("startDateError").textContent = "Choose a start date.";
        return false;
    }
    return true;
}

function validEndDate() {
    let start = document.getElementById("startDate").value;
    let end = document.getElementById("endDate").value;
    document.getElementById("endDateError").textContent = "";
    if (end === "" || (start !== "" && end < start)) {
        document.getElementById("endDateError").textContent = "Choose a valid end date.";
        return false;
    }
    return true;
}

function validLeaveReason() {
    let reason = document.getElementById("leaveReason").value.trim();
    document.getElementById("leaveReasonError").textContent = "";
    if (reason === "") {
        document.getElementById("leaveReasonError").textContent = "Enter a reason.";
        return false;
    }
    return true;
}

function validateLeave() {
    let type = validLeaveType();
    let start = validStartDate();
    let end = validEndDate();
    let reason = validLeaveReason();
    document.getElementById("leaveMessage").textContent = "";

    if (type && start && end && reason) {
        document.getElementById("leaveForm").reset();
        document.getElementById("leaveMessage").textContent = "Leave request submitted!";
    }
    return false;
}

function clearLeaveErrors() {
    document.getElementById("leaveTypeError").textContent = "";
    document.getElementById("startDateError").textContent = "";
    document.getElementById("endDateError").textContent = "";
    document.getElementById("leaveReasonError").textContent = "";
    document.getElementById("leaveMessage").textContent = "";
}

/* Profile Contact Validation */
function validProfileEmail() {
    let value = document.getElementById("email").value.trim();
    document.getElementById("emailError").textContent = "";
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        return false;
    }
    return true;
}

function validProfilePhone() {
    let value = document.getElementById("phone").value.trim();
    document.getElementById("phoneError").textContent = "";
    let regex = /^[0-9]{11}$/;
    if (value === "") {
        document.getElementById("phoneError").textContent = "Enter a phone number.";
        return false;
    }
    if (!regex.test(value)) {
        document.getElementById("phoneError").textContent = "Use exactly 11 digits.";
        return false;
    }
    return true;
}

function validProfileEmergency() {
    let value = document.getElementById("emergency").value.trim();
    document.getElementById("emergencyError").textContent = "";
    let regex = /^[0-9]{11}$/;
    if (value === "") {
        document.getElementById("emergencyError").textContent = "Enter a phone number.";
        return false;
    }
    if (!regex.test(value)) {
        document.getElementById("emergencyError").textContent = "Use exactly 11 digits.";
        return false;
    }
    return true;
}

function validProfileAddress() {
    let value = document.getElementById("address").value.trim();
    document.getElementById("addressError").textContent = "";
    if (value === "") {
        document.getElementById("addressError").textContent = "Enter an address.";
        return false;
    }
    return true;
}

function validateProfile() {
    let email = validProfileEmail();
    let phone = validProfilePhone();
    let emergency = validProfileEmergency();
    let address = validProfileAddress();
    document.getElementById("profileMessage").textContent = "";

    if (email && phone && emergency && address) {
        document.getElementById("shownEmail").textContent = document.getElementById("email").value.trim();
        document.getElementById("shownPhone").textContent = document.getElementById("phone").value.trim();
        document.getElementById("shownEmergency").textContent = document.getElementById("emergency").value.trim();
        document.getElementById("shownAddress").textContent = document.getElementById("address").value.trim();
        document.getElementById("profileMessage").textContent = "Contact details updated!";
    }
    return false;
}

/* Change Password */
function validCurrentPassword() {
    let value = document.getElementById("currentPassword").value;
    document.getElementById("currentPasswordError").textContent = "";
    if (value === "") {
        document.getElementById("currentPasswordError").textContent = "Enter current password.";
        return false;
    }
    return true;
}

function validNewPassword() {
    let value = document.getElementById("newPassword").value;
    document.getElementById("newPasswordError").textContent = "";
    if (value.length < 8) {
        document.getElementById("newPasswordError").textContent = "Use at least 8 characters.";
        return false;
    }
    return true;
}

function validConfirmPassword() {
    let password = document.getElementById("newPassword").value;
    let confirm = document.getElementById("confirmPassword").value;
    document.getElementById("confirmPasswordError").textContent = "";
    if (confirm === "" || confirm !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        return false;
    }
    return true;
}

function validatePassword() {
    let current = validCurrentPassword();
    let password = validNewPassword();
    let confirm = validConfirmPassword();
    document.getElementById("passwordMessage").textContent = "";

    if (current && password && confirm) {
        document.getElementById("passwordForm").reset();
        document.getElementById("passwordMessage").textContent = "Password updated successfully!";
    }
    return false;
}