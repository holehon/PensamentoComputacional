document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de validação de login
    if (username === 'user' && password === '123') {
        document.getElementById('message').innerText = 'Login bem sucedido!';
    } else {
        document.getElementById('message').innerText = 'Credenciais inválidas. Tente novamente.';
    }
});
