// Al cargar la página, obtener el usuario del localStorage
window.onload = function() {
    const username = localStorage.getItem('username');
    if (!username) {
        window.location.href = 'index.html';  // Si no hay un usuario logueado, redirige al login
    }

    // Mostrar el comentario actual del usuario
    fetch('data.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username);
            if (user) {
                document.getElementById('comentario').value = user.comentario;
            }
        });
};

// Guardar el comentario en localStorage y en el archivo JSON
document.getElementById('guardarComentario').addEventListener('click', () => {
    const username = localStorage.getItem('username');
    const comentario = document.getElementById('comentario').value;
    
    if (!username) {
        alert("No has iniciado sesión.");
        return;
    }

    fetch('data.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username);
            if (user) {
                user.comentario = comentario;
                
                // Guardar los datos actualizados en el archivo JSON (simulado)
                // Aquí solo guardamos los datos en localStorage o en algún lugar, pero no podemos sobrescribir un archivo local sin un servidor.
                console.log("Comentario actualizado:", user);

                localStorage.setItem('comentarios', JSON.stringify(users));  // Simular la persistencia local

                alert('Comentario guardado.');
            }
        });
});
