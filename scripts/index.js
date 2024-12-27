// Lógica de autenticación
document.getElementById('loginButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    fetch('data.json') // Asegúrate de que la ruta es correcta
        .then(response => {
            if (!response.ok) 
            {
                throw new Error('Error al cargar usuarios');
            }
            return response.json();
        })
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            if (user.username == "admin") 
            {
                localStorage.setItem('username', username);
                errorMessage.style.color = 'green';
                errorMessage.textContent = '¡Inicio de sesión exitoso! Redirigiendo...';
                setTimeout(() => {
                    window.location.href = 'admin.html';
                }, 1000);
            }
            else if( user.username != "admin")
            {
                localStorage.setItem('username', username);
                errorMessage.style.color = 'green';
                errorMessage.textContent = '¡Inicio de sesión exitoso! Redirigiendo...';
                setTimeout(() => {
                    window.location.href = 'user.html';
                }, 1000);
            }
            else 
            {
                errorMessage.style.color = 'red';
                errorMessage.textContent = 'Usuario o contraseña incorrectos';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            errorMessage.style.color = 'red';
            errorMessage.textContent = 'Hubo un problema al intentar iniciar sesión.';
        });
});
