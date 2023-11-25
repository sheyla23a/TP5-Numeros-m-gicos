document.addEventListener('DOMContentLoaded', () => {
    let numeroMagico;

    const generarNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const comenzarJuego = () => {
        numeroMagico = generarNumeroAleatorio(1, 100);
        alert('¡El juego ha comenzado! Adivina el número entre 1 y 100.');
        document.getElementById('juegoContainer').style.display = 'block';
    };

    const verificarNumero = () => {
        const numeroUsuario = parseInt(document.getElementById('numeroInput').value);

        if (isNaN(numeroUsuario)) {
            alert('Por favor, ingresa un número válido.');
        } else {
            if (numeroUsuario === numeroMagico) {
                alert('¡Felicidades! ¡Adivinaste el número!');
                reiniciarJuego();
            } else if (numeroUsuario > numeroMagico) {
                alert('El número ingresado es mayor. Intenta de nuevo.');
            } else {
                alert('El número ingresado es menor. Intenta de nuevo.');
            }
        }
    };

    const reiniciarJuego = () => {
        document.getElementById('juegoContainer').style.display = 'none';
        document.getElementById('numeroInput').value = '';
    };

    document.getElementById('comenzarBtn').addEventListener('click', comenzarJuego);
    document.getElementById('enviarBtn').addEventListener('click', verificarNumero);
});

