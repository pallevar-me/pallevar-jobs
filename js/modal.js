// Función para abrir el modal
function openModal() {
    const modal = document.getElementById("apply-modal");
    modal.style.display = "flex";  // Mostrar el modal
    document.body.classList.add("modal-open");  // Prevenir desplazamiento de la página
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("apply-modal");
    modal.style.display = "none";  // Ocultar el modal
    document.body.classList.remove("modal-open");  // Permitir desplazamiento de la página
}

// Event listener para abrir el modal
document.getElementById("apply-now-btn").addEventListener("click", openModal);

// Event listener para cerrar el modal
document.getElementById("close-modal").addEventListener("click", closeModal);

// Opcional: Cerrar modal al hacer clic fuera del modal
window.addEventListener("click", (event) => {
    const modal = document.getElementById("apply-modal");
    if (event.target === modal) {
        closeModal();
    }
});
