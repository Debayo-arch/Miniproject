let userDatabase = {}
function GetUserDetails(){
    let userName = prompt('Enter your username');
    if(userName == null){
        return
    }
    function confirmUsername(userName) {
        if (userName.length >5 && userName.length <12){
            return true
        }else{
            return false
        }
    }
    while (confirmUsername(userName) == false){
        userName =prompt('Username should be less than 12 and greater than 5')
    }
    userDatabase['Username'] = userName
    let email = prompt('Enter your email address')
    if(email == null){
        return
    }
    function confirmEmail(email){
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        validateEmail = emailRegex.test(email);
        if (validateEmail == true){
            return true
        }else{
            return false
        }
    }
    while (confirmEmail(email) == false){
        email =prompt('Enter a valid email')
    }
    userDatabase['Email'] = email
    let phoneNumber = prompt('Enter your phone number')
    if(phoneNumber == null){
        return
    }
    function confirmPhonenumber(phoneNumber){
        if (phoneNumber.length == 11){
            return true
        }else{
            return false
        }
    }
    while (confirmPhonenumber(phoneNumber) == false){
        phoneNumber =prompt('Enter a valid phone number')
    }
    userDatabase['PhoneNumber'] = phoneNumber
    let passWord = prompt('Enter your password')
    if(passWord == null){
        return
    }
    function confirmPassword(passWord){
        if (passWord.length > 4 && passWord.length<12){
            return true
        }else{
            return false
        }
    }
    while (confirmPassword(passWord) == false){
        passWord =prompt('Password should be less than 12 and greater than 4')
    }
    let confirmedPassword = prompt('Confirm your password')
    if(confirmedPassword == null){
        return
    }
    function reviewConfirmedPassword(confirmedPassword){
        if (confirmedPassword == passWord){
            return true
        }else{
            return false
        }
    }
    while (reviewConfirmedPassword(confirmedPassword) == false){
        confirmedPassword =prompt('Confirmed password does not match password')
    }
}
function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDatabase.Username}\nEmail: ${userDatabase.Email}\nPhone Number: ${userDatabase.PhoneNumber}`)
}