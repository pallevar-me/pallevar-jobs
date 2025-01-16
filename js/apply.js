
const submitForm = async (event) => {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries()); // Convertir FormData a un objeto
    console.log(formObject); // Verifica si se están capturando los datos correctamente

    try {
        const response = await fetch('https://email.saldi.me/vacantes', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({formObject}), // Convertir el objeto a JSON
        });

        if (response) {
            // const data = await response.json();
            console.log('Solicitud enviada:', response);
            alert('¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.');
        } else {
            alert('Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Hubo un problema al procesar tu solicitud. Por favor, intenta más tarde.');
    }
};


const form = document.getElementById('apply-form');
form.addEventListener('submit', submitForm);
