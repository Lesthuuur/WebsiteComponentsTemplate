
const showPasswordCheckbox = document.getElementById('showPasswordCheckbox');
const inputPassword = document.getElementById('input-password');

// SHOW PASSWORD FUNCTIONALITY
showPasswordCheckbox.addEventListener('click', function(){

    if(showPasswordCheckbox.checked == true){
        inputPassword.type = 'text';

    }else{
        inputPassword.type = 'password';
    }
});