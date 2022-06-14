let element = (id) => document.querySelector(id);

function toSubmit() {
    const name = element('#name')
    const phone = element('#phone');
    const email = element('#email');
    const password = element('#password');
    const confirmPassword = element('#confirm-password');
    const nameError = element('#name-msg');
    const phoneError = element('#phone-msg');
    const emailError = element('#email-msg');
    const passwordError = element('#password-msg');
    const confirmPasswordError = element('#confirm-password-msg');

    //Name Validation
    if (name.value) {
        nameError.innerHTML = '';
    } 
    else {
        nameError.innerHTML = 'Name is required';
    }

    //Phone no. Validation
    if (phone.value) {
        if (phone.value.length != 10) {
            phoneError.innerHTML = 'Phone no. should be 10 digits long';
        } else {
        phoneError.innerHTML = '';
        }
    }
    else {
        phoneError.innerHTML = 'Phone is required';
    }

    //Email Validation
    if (email.value) {
        emailError.innerHTML = '';
    }
    else {
        emailError.innerHTML = 'Email is required';
    }

    //Password Validation
    if (password.value) {
        if (password.value.length < 6) {
            passwordError.innerHTML = 'Password should be at least 6 digits long';
        }
        else {
            passwordError.innerHTML = '';
        }
    }
    else {
        passwordError.innerHTML = 'Password is required';
    }

    //Confirm Password Validation
    if (confirmPassword.value && password.value) {
        if (confirmPassword.value != password.value) {
            confirmPasswordError.innerHTML = 'Passwords do not match';
        }
        else {
            confirmPasswordError.innerHTML = '';
        }
    } else {
        confirmPasswordError.innerHTML = 'Confirm Password is required';
    }

};