const conformationPopup = () => {
    const modal = document.getElementById("apply-modal");
    modal.style.display = "none";  // Ocultar el modal
    document.body.classList.remove("modal-open");
    const modalConf = document.getElementById("conf-modal");
    modalConf.style.display = "flex";  // Mostrar el modal
    document.body.classList.add("modal-open");
}

const submitForm = async (event) => {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    const loader = document.getElementById('loader');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Mostrar el loader y ocultar el mensaje previo
    loader.style.display = 'flex';
    confirmationMessage.style.display = 'none';

    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries()); // Convertir FormData a un objeto

    try {
        const response = await fetch('https://email.saldi.me/vacantes', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formObject }), // Convertir el objeto a JSON
        });

        if (response.ok) {
            conformationPopup();
            /*console.log('Solicitud enviada:', response);
            confirmationMessage.style.display = 'block'; */ // Mostrar el mensaje de éxito
        } else {
            alert('Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Hubo un problema al procesar tu solicitud. Por favor, intenta más tarde.');
    } finally {
        // Ocultar el loader después de obtener una respuesta
        loader.style.display = 'none';
    }
};

const form = document.getElementById('apply-form');
form.addEventListener('submit', submitForm);
