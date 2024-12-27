 // Lee el archivo data.json y lo muestra en la página
fetch('data.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Error al leer el archivo JSON');
    }
    return response.json();
})
.then(data => {
     // Manipula los datos obtenidos
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = `
        <p>Nombre: ${data.name}</p>
        <p>Edad: ${data.age}</p>
        <p>Ciudad: ${data.city}</p>
        <p>Pais: ${data.pais}</p>
    `;
})
.catch(error => {
    console.error('Error:', error);
});