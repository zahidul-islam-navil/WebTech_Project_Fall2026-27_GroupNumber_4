function validateAdminTask() {
    let adminTask = document.getElementById("adminTask");
    let error = document.getElementById("AdminTaskError");

    if (adminTask.selectedIndex == 0) {
        error.innerHTML = "Please select the admin task.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateAssignMember() {
    let assignMember = document.getElementById("assignMember");
    let error = document.getElementById("AssignMemberError");

    if (assignMember.selectedIndex == 0) {
        error.innerHTML = "Please select the team member.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateTaskDeadline() {
    let deadline = document.getElementById("taskDeadline").value;
    let error = document.getElementById("DeadlineError");

    if (deadline == "") {
        error.innerHTML = "Please select the task deadline.";
        return false;
    }

    let parts = deadline.split("-");
    let selectedDate = new Date(parts[0], parts[1] - 1, parts[2]);
    let today = new Date();

    if (selectedDate < today) {
        error.innerHTML = "Task Deadline cannot be in the past.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateTaskBreakdown() {
    let breakdown = document.getElementById("taskBreakdown").value.trim();
    let error = document.getElementById("BreakdownError");

    if (breakdown == "") {
        error.innerHTML = "Please enter the sub-task description.";
        return false;
    }
    else if (breakdown.length < 5) {
        error.innerHTML = "Sub-Task description must be at least 5 characters.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateTaskAssignment() {
    let validTask = validateAdminTask();
    let validMember = validateAssignMember();
    let validDeadline = validateTaskDeadline();
    let validDetails = validateTaskBreakdown();

    if (validTask && validMember && validDeadline && validDetails) {
        alert("Sub-task successfully assigned to the team member!");
        document.getElementById("taskBreakdown").value = "";
        document.getElementById("taskDeadline").value = "";
        document.getElementById("adminTask").selectedIndex = 0;
        document.getElementById("assignMember").selectedIndex = 0;
        return false;
    }

    alert("Please fix the errors in the form.");
    return false;
}




function validateEvalMember() {
    let evalMember = document.getElementById("evalMember");
    let error = document.getElementById("EvalMemberError");

    if (evalMember.selectedIndex == 0) {
        error.innerHTML = "Please select the team member.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateEvalRating() {
    let ratings = document.querySelectorAll('input[name="evalRating"]');
    let error = document.getElementById("EvalRatingError");
    let selectedRating = "";

    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i].checked) {
            selectedRating = ratings[i].value;
            break;
        }
    }

    if (selectedRating == "") {
        error.innerHTML = "Please select the rating.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateEvalComments() {
    let comments = document.getElementById("evalComments").value.trim();
    let error = document.getElementById("EvalCommentsError");

    if (comments == "") {
        error.innerHTML = "Please enter the review comments.";
        return false;
    }
    else if (comments.length < 5) {
        error.innerHTML = "Review Comments must be at least 5 characters.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validatePerformanceForm() {
    let validMember = validateEvalMember();
    let validRating = validateEvalRating();
    let validComment = validateEvalComments();

    if (validMember && validRating && validComment) {
        alert("Performance evaluation submitted successfully!");
        document.getElementById("evalComments").value = "";
        document.getElementById("evalMember").selectedIndex = 0;
        let ratings = document.querySelectorAll('input[name="evalRating"]');
        for (let i = 0; i < ratings.length; i++) {
            ratings[i].checked = false;
        }
        return false;
    }

    alert("Please fix the errors in the form.");
    return false;
}


function validateRequestType() {
    let requestType = document.getElementById("requestType");
    let error = document.getElementById("ReqTypeError");

    if (requestType.selectedIndex == 0) {
        error.innerHTML = "Please select the request type.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateReqRole() {
    let reqRole = document.getElementById("reqRole").value.trim();
    let error = document.getElementById("ReqRoleError");

    if (reqRole == "") {
        error.innerHTML = "Please enter the role / designation.";
        return false;
    }
    else if (reqRole.length < 3) {
        error.innerHTML = "Role / Designation must be at least 3 characters.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateReqReason() {
    let reqReason = document.getElementById("reqReason").value.trim();
    let error = document.getElementById("ReqReasonError");

    if (reqReason == "") {
        error.innerHTML = "Please enter the business justification.";
        return false;
    }
    else if (reqReason.length < 5) {
        error.innerHTML = "Role Description must be at least 5 characters.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateHRRequestForm() {
    let validType = validateRequestType();
    let validRole = validateReqRole();
    let validReason = validateReqReason();

    if (validType && validRole && validReason) {
        alert("Request successfully submitted to HR Department!");
        document.getElementById("reqRole").value = "";
        document.getElementById("reqReason").value = "";
        document.getElementById("requestType").selectedIndex = 0;
        return false;
    }

    alert("Please fix the errors in the form.");
    return false;
}


function validateNewDept() {
    let newDept = document.getElementById("newDept");
    let error = document.getElementById("NewDeptError");

    if (newDept.selectedIndex == 0) {
        error.innerHTML = "Please select the department.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateChangeDeptForm() {
    let validDept = validateNewDept();

    if (validDept) {
        let select = document.getElementById("newDept");
        let selectedDept = select.options[select.selectedIndex].text;
        document.getElementById("currentDeptDisplay").innerText = selectedDept;
        alert("Department successfully updated to: " + selectedDept);
        select.selectedIndex = 0;
        return false;
    }

    alert("Please fix the errors in the form.");
    return false;
}



function validateCurrPassword() {
    let currPassword = document.getElementById("currPassword").value;
    let error = document.getElementById("CurrPasswordError");

    if (currPassword == "") {
        error.innerHTML = "Please enter the current password.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateNewPassword() {
    let newPassword = document.getElementById("newPassword").value;
    let error = document.getElementById("NewPasswordError");

    if (newPassword == "") {
        error.innerHTML = "Please enter a password.";
        return false;
    }
    else if (newPassword.length < 8) {
        error.innerHTML = "Password must be at least 8 characters.";
        return false;
    }
    else if (!/[A-Z]/.test(newPassword)) {
        error.innerHTML = "Password needs at least one uppercase letter.";
        return false;
    }
    else if (!/[a-z]/.test(newPassword)) {
        error.innerHTML = "Password needs at least one lowercase letter.";
        return false;
    }
    else if (!/[0-9]/.test(newPassword)) {
        error.innerHTML = "Password needs at least one number.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateConfirmNewPassword() {
    let newPassword = document.getElementById("newPassword").value;
    let confirm = document.getElementById("confirmNewPassword").value;
    let error = document.getElementById("ConfirmNewPasswordError");

    if (confirm == "") {
        error.innerHTML = "Please confirm the password.";
        return false;
    }
    else if (confirm != newPassword) {
        error.innerHTML = "Passwords do not match.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validateChangePasswordForm() {
    let validCurrent = validateCurrPassword();
    let validNew = validateNewPassword();
    let validConfirm = validateConfirmNewPassword();

    if (validCurrent && validNew && validConfirm) {
        alert("Password updated successfully!");
        document.getElementById("currPassword").value = "";
        document.getElementById("newPassword").value = "";
        document.getElementById("confirmNewPassword").value = "";
        return false;
    }

    alert("Please fix the errors in the form.");
    return false;
}


function updateLeave(button, status) {
    let row = button.closest("tr");
    let employeeName = row.cells[0].innerText;
    row.cells[4].innerHTML = "<strong>" + status + "</strong>";
    // alert("Leave request for " + employeeName + " marked as " + status + ".");
}

function reportProgress(taskId) {
    alert("Progress report for " + taskId + " has been transmitted to Admin.");
}
