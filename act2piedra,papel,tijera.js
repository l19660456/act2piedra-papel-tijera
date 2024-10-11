// Función para generar elección aleatoria de la computadora
function eleccionComputadora() {
    const opciones = ["Piedra", "Papel", "Tijera"];
    const randomIndex = Math.floor(Math.random() * 3);
    return opciones[randomIndex];
}

// Función para determinar el ganador
function determinarGanador(eleccionUsuario, eleccionComputadora) {
    if (eleccionUsuario === eleccionComputadora) {
        return "Es un empate.";
    } else if (
        (eleccionUsuario === "Piedra" && eleccionComputadora === "Tijera") ||
        (eleccionUsuario === "Papel" && eleccionComputadora === "Piedra") ||
        (eleccionUsuario === "Tijera" && eleccionComputadora === "Papel")
    ) {
        return "¡Ganaste!";
    } else {
        return "La computadora gana.";
    }
}

// Manejar el evento de click en los botones
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function () {
        const eleccionUsuario = this.id.charAt(0).toUpperCase() + this.id.slice(1);
        const eleccionComp = eleccionComputadora();

        // Mostrar las elecciones
        document.getElementById('userChoice').innerText = `Tu elección: ${eleccionUsuario}`;
        document.getElementById('computerChoice').innerText = `Elección de la computadora: ${eleccionComp}`;

        // Mostrar el resultado
        const resultado = determinarGanador(eleccionUsuario, eleccionComp);
        document.getElementById('resultMessage').innerText = resultado;
    });
});
