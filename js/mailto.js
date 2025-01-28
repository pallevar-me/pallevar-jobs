const button = document.getElementById('apply-now-btn');

const sendEmail = () => {
   window.open('mailto:pallevar.me@gmail.com?subject=Embedded Hardware Engineer Application&body=Me interesa el empleo para la posición de: Embedded Hardware Engineer');
}


button.addEventListener("click", sendEmail);

