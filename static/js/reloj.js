function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();

    // Formato de 12 horas
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // Ajusta para el formato de 12 horas (0 -> 12)

    // Formatea minutos y segundos con dos dígitos
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    // Actualiza el texto del reloj
    timeElement.textContent = formattedTime;
}

// Actualiza el reloj cada segundo
setInterval(updateTime, 1000);

// Inicializa el reloj al cargar la página
updateTime();