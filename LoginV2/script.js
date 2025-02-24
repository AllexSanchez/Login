document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user@example.com" && password === "1234") {
        alert("Login bem-sucedido!");
        
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    alert("Funcionalidade de recuperação de senha ainda não implementada.");
});