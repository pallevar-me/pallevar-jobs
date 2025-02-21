const closeModal2 = () => {
    const modalConf = document.getElementById("conf-modal");
    modalConf.style.display = "none";  // Ocultar el modal
    document.body.classList.remove("modal-open");
}

document.getElementById("close-conf-modal").addEventListener("click", closeModal2);