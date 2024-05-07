const form = document.getElementById('form');
const userid = document.getElementById('UserId');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
	e.preventDefault();   
	console.log("Form submitted");
    if (checkInputs()) {
        window.location.href = "../../frontpage/home/home.html";
    }
});


function checkInputs(){
    const useridValue = userid.value.trim();
    const passwordValue = password.value.trim();

    let isValid = true;

    if(useridValue.indexOf("@") > -1){
        if(useridValue === ''){
            setErrorFor(userid, 'Email cannot be blank...')
            isValid = false;
        }else if (!isEmail(emailValue)){
            setErrorFor(userid, 'Email not valid...')
            isValid = false;
        }else{
            setSuccessFor(userid)
        }
    }
    else{
        if(useridValue === ''){
            setErrorFor(userid, 'Invalid Input');
            isValid = false;
        }else{
            setSuccessFor(userid);
        }
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