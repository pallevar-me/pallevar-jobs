 
    // Función para cerrar la barra lateral
    function closeSidebar() {
        document.getElementById('sidebar').classList.remove('active');
    }

    // Event listener para cerrar la barra lateral cuando se hace clic en un enlace
    const sidebarLinks = document.querySelectorAll('.sidebar a'); // Seleccionamos todos los enlaces dentro de la barra lateral
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar); // Añadimos un evento para cerrar la barra lateral al hacer clic
    });

    // Función para alternar la barra lateral con el botón de hamburguesa
    const burgerMenu = document.getElementById('burger-menu');
    burgerMenu.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active'); // Alterna la clase 'active' para mostrar u ocultar la barra lateral
    });
 
