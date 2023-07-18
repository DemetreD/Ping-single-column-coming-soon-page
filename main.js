const btn = document.getElementById('notify-btn');
const email = document.getElementById('email');
const validator = document.getElementById('validator-message');

btn.addEventListener('click', function (params) {
    event.preventDefault();
    const emailValue = email.value.trim();

    if(email.value === ""){
        validator.textContent = "Please provide a valid email address";
        validator.style.display = 'block';
        validator.style.color = 'hsl(354, 100%, 66%)';
        email.style.border = '1px solid hsl(354, 100%, 66%)';
    }else if (!validateEmail(emailValue)) {
        validator.textContent = "Please provide a valid email address";
        validator.style.display = 'block';
        validator.style.color = 'hsl(354, 100%, 66%)';
        email.style.border = '1px solid hsl(354, 100%, 66%)'
    }else {
        validator.style.display = 'none';
        email.style.border = '1px solid hsl(223, 100%, 88%)';

    }

})


function validateEmail(email) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
}

