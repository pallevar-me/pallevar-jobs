const engineerHeader = document.getElementById("engineering-header");

const engineerContent = document.getElementById("engineering-content");


const engineerDisplay = () => {
    //accordionContent.style.display = block;
    
    if (engineerContent.classList.contains('active')) {
        engineerContent.classList.remove('active');
    } else {
        engineerContent.classList.add('active');
    }
}

engineerHeader.addEventListener("click", engineerDisplay); 

const administrationHeader = document.getElementById("administration-header");

const administrationContent = document.getElementById("administration-content");


const administrationDisplay = () => {
    //accordionContent.style.display = block;
    
    if (administrationContent.classList.contains('active')) {
        administrationContent.classList.remove('active');
    } else {
        administrationContent.classList.add('active');
    }
}

administrationHeader.addEventListener("click", administrationDisplay); 

const successHeader = document.getElementById("success-header");

const successContent = document.getElementById("success-content");


const successDisplay = () => {
    //accordionContent.style.display = block;
    
    if (successContent.classList.contains('active')) {
        successContent.classList.remove('active');
    } else {
        successContent.classList.add('active');
    }
}

successHeader.addEventListener("click", successDisplay); 

const marketingHeader = document.getElementById("marketing-header");

const marketingContent = document.getElementById("marketing-content");


const marketingDisplay = () => {
    //accordionContent.style.display = block;
    
    if (marketingContent.classList.contains('active')) {
        marketingContent.classList.remove('active');
    } else {
        marketingContent.classList.add('active');
    }
}

marketingHeader.addEventListener("click", marketingDisplay); 

const internshipsHeader = document.getElementById("internships-header");

const internshipsContent = document.getElementById("internships-content");


const internshipsDisplay = () => {
    //accordionContent.style.display = block;
    
    if (internshipsContent.classList.contains('active')) {
        internshipsContent.classList.remove('active');
    } else {
        internshipsContent.classList.add('active');
    }
}

internshipsHeader.addEventListener("click", internshipsDisplay); 