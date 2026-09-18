document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Recupera i valori inseriti dall'utente nei campi del form
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Numero WhatsApp di Keren (già configurato con prefisso 39 e senza '+')
    const phoneNumber = "393517141553"; 

    // Crea il testo preimpostato del messaggio per WhatsApp
    const message = `Ciao! Vorrei prenotare un ${service} il giorno ${date} alle ore ${time}. Il mio nome è ${name}.`;

    // Codifica il messaggio per renderlo compatibile con l'indirizzo web
    const encodedMessage = encodeURIComponent(message);

    // Apre WhatsApp (funziona sia da smartphone che da PC con WhatsApp Web)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
});
