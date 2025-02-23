// Alternar entre Login e Cadastro
document.getElementById('showRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

// Validação do Login
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Exemplo de validação (pode ser substituído por uma chamada API real)
    if (email === "user@example.com" && password === "1234") {
        alert("Login bem-sucedido!");
    } else {
        alert("Email ou senha incorretos.");
    }
});

// Validação do Cadastro
document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Exemplo de cadastro (pode ser substituído por uma chamada API real)
    alert(`Cadastro realizado com sucesso!\nNome: ${name}\nEmail: ${email}`);
});