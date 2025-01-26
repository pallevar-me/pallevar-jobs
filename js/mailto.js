const button = document.getElementById('apply-now-btn');

const sendEmail = () => {
   window.open('mailto:pallevar.me@gmail.com');
}


button.addEventListener("click", sendEmail);

