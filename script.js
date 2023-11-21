const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const Password = document.getElementById('Password');
const confirmPassword = document.getElementById('confirmPassword');
//add event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

const sendData = (sRate, count) => {
    if(sRate === count)
    {
        alert('Registration Successful');
        // swal("Welcome!", "Registration Successful","success");
        Swal.fire(
            'Woohuu!',
            'You have been Registered successfully!',
            'Welcome!'
          )
    }
}

const successMessage = () => {
    let formCont = document.getElementsByClassName('form-control');
    var count = formCont.length - 1;
    for (var i = 0; i < formCont.length; i++) {
        if(formCont[i].className === "form-control success") {
            var sRate = 0 + i;
            console.log(sRate);
            console.log(count);
            sendData(sRate, count);
        } else {
            return false;
        }
    }
}

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}
const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneNumberVal = phoneNumber.value.trim();
    const PasswordVal = Password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();
    // validate username
    if (usernameVal === "") {
        setErrormsg(username, 'username cannot be blank');
    } else if (usernameVal.length <= 2) {
        setErrormsg(username, 'username min 3 char');
    }else{
        setSuccessMsg(username)
    }
    // validate email
    if (emailVal === "") {
        setErrormsg(email, 'username cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrormsg(email, 'Not a Valid Email');
    }else{
        setSuccessMsg(email)
    }

    if (phoneNumberVal === "") {
        setErrormsg(phoneNumber, 'Phone Number cannot be blank');
    } else if (phoneNumberVal.length != 10) {
        setErrormsg(phoneNumber, 'Not a Valid Phone Number');
    }else{
        setSuccessMsg(phoneNumber)
    }

    if(PasswordVal === "") {
        setErrormsg(Password, 'Phone Number cannot be blank');
    } else if (PasswordVal.length <= 5) {
        setErrormsg(Password, 'Not a Valid Phone Number');
    }else{
        setSuccessMsg(Password)
    }

    if(confirmPasswordVal === "") {
        setErrormsg(confirmPassword, 'Phone Number cannot be blank');
    } else if (confirmPasswordVal != PasswordVal) {
        setErrormsg(confirmPassword, 'Not a Valid Phone Number');
    }else{
        setSuccessMsg(confirmPassword)
    }

    successMessage();
}
function setErrormsg(input, errormsgs)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input)
{
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}