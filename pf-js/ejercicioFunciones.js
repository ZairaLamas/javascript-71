
function adivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 10
    const intentosMaximos = 3;

    for (let intento = 1; intento <= intentosMaximos; intento++) {
        let respuesta = +(prompt(`Intento ${intento} de ${intentosMaximos}: Adivina el número secreto (1 al 10):`));

        if (respuesta === numeroSecreto) {
            alert("¡Felicidades! Adivinaste el número secreto.");
            break;
        } else if (intento === intentosMaximos) {
            alert(`Agotaste tus intentos. El número secreto era ${numeroSecreto}.`);
        } else if (respuesta < numeroSecreto) {
            alert("El número secreto es MAYOR.");
        } else if (respuesta > numeroSecreto) {
            alert("El número secreto es MENOR.");
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }
}

adivinarNumero();