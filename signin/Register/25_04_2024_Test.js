const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
	e.preventDefault();   
	console.log("Form submitted");
    if (checkInputs()) {
        window.location.href = "../login/login.html";
    }
});


function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const addressValue = address.value.trim();
    const passwordValue = password.value.trim();

    let isValid = true;

    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank...');
        isValid = false;
    }
    else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank...')
        isValid = false;
    }else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email not valid...')
        isValid = false;
    }else{
        setSuccessFor(email)
    }

    if(phoneValue === ''){
        setErrorFor(phone, 'Phonenumber cannot be blank...');
        isValid = false;
    }else if(!isPhone(phoneValue)){
        setErrorFor(phone, 'Phonenumber not valid...');
        isValid = false;
    }else{
        setSuccessFor(phone);
    }

    if(addressValue === ''){
        setErrorFor(address, 'Address cannot be blank...');
        isValid = false;
    }
    else{
        setSuccessFor(address);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank...');
        isValid = false;
    }else{
        setSuccessFor(password);
    }
    return isValid;
}
function isPhone(phone){
    return /^(?:(?:00|\+)?45)?\d{8}$/.test(phone);
}

function isEmail(email){
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}