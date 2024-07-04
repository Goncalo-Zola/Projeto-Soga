document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login realizado!');
});

document.getElementById('showPassword').addEventListener('change', function() {
    var passwordInput = document.getElementById('password');
    if (this.checked) {
        passwordInput.type = 'password';
    } else {
        passwordInput.type = 'text';
    }
});
