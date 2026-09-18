document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Recupera i valori inseriti dall'utente
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Numero WhatsApp di Keren
    const phoneNumber = "393517141553"; 

    // Crea il testo preimpostato del messaggio per WhatsApp
    const message = `Ciao! Vorrei prenotare un ${service} il giorno ${date} intorno alle ore ${time}. Il mio nome è ${name}.`;

    // Codifica il messaggio per l'URL
    const encodedMessage = encodeURIComponent(message);

    // Apre WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
});
