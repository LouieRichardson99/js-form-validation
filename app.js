let emailInput = document.getElementById('email-input'),
    passwordInput = document.getElementById('password-input'),
    submitBtn = document.getElementById('submit-btn'),
    password;

const validateForm = () => {
    password = passwordInput.value;
    checkPswdLength();
    return password;
};

function checkPswdLength() {
    if (password.length < 8) {
        alert('Password must be 8 or more characters');
        return false;
    } else {
        checkPswdChar();
    }
};

function checkPswdChar() {
    if (password.match(/[~<>?!@£$%^&*()]+/)) {
        return true, displaySuccess();
    } else {
        alert('Password requires a special character')
        return false;
    }
};

function displaySuccess() {
    let successMessage = 
        document.getElementById('success-txt');
    
    successMessage.classList.remove('hidden');
};
