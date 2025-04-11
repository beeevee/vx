document.getElementById('show-register').addEventListener('click', function() {
    document.querySelector('.auth-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'flex';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('register-form').style.display = 'none';
    document.querySelector('.auth-form').style.display = 'flex';
});