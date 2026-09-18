document.addEventListener("DOMContentLoaded", function() {
    // Blocco delle date passate nel calendario
    const dateInput = document.getElementById("date");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.setAttribute("min", today);
    }

    // Gestione invio modulo via AJAX
    const form = document.getElementById("booking-form");
    const statusMessage = document.getElementById("status-message");

    // SOSTITUISCI QUESTO LINK CON IL TUO ENDPOINT FORMSPREE
    const FORMSPREE_URL = "https://formspree.io/f/TUO_FORM_ID";

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            statusMessage.style.display = "block";
            statusMessage.style.color = "#d47a8e";
            statusMessage.textContent = "Invio della prenotazione in corso...";

            const formData = new FormData(form);

            fetch(FORMSPREE_URL, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    statusMessage.style.color = "green";
                    statusMessage.textContent = "Grazie! La tua prenotazione è stata inviata con successo. Ti ricontatterò a breve per la conferma.";
                    form.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            statusMessage.style.color = "red";
                            statusMessage.textContent = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            statusMessage.style.color = "red";
                            statusMessage.textContent = "Si è verificato un errore durante l'invio. Riprova più tardi.";
                        }
                    });
                }
            }).catch(error => {
                statusMessage.style.color = "red";
                statusMessage.textContent = "Errore di connessione. Verificare la rete e riprovare.";
            });
        });
    }
});