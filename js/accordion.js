const engineerHeader = document.getElementById("engineering-header");

const engineerContent = document.getElementById("engineering-content");

const engineeringOpening = document.getElementById("engineering-openings");

const engineeringList = document.getElementById("engineering-list");
engineeringOpening.innerText = `(${engineeringList.children.length})`;
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

const administrationOpening = document.getElementById("administration-openings");

const administrationList = document.getElementById("administration-list");
administrationOpening.innerText = `(${administrationList.children.length})`;

const administrationDisplay = () => {
    //accordionContent.style.display = block;
    console.log(document.querySelectorAll(".job-list").length);
    if (administrationContent.classList.contains('active')) {
        administrationContent.classList.remove('active');
    } else {
        administrationContent.classList.add('active');
    }
}

administrationHeader.addEventListener("click", administrationDisplay); 

const successHeader = document.getElementById("success-header");

const successContent = document.getElementById("success-content");

const successOpening = document.getElementById("success-openings");

const successList = document.getElementById("success-list");
successOpening.innerText = `(${successList.children.length})`;

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

const marketingOpening = document.getElementById("marketing-openings");

const marketingList = document.getElementById("marketing-list");
marketingOpening.innerText = `(${marketingList.children.length})`;

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

const internshipsOpening = document.getElementById("internships-openings");

const internshipsList = document.getElementById("internships-list");
internshipsOpening.innerText = `(${internshipsList.children.length})`;

const internshipsDisplay = () => {
    //accordionContent.style.display = block;
    
    if (internshipsContent.classList.contains('active')) {
        internshipsContent.classList.remove('active');
    } else {
        internshipsContent.classList.add('active');
    }
}

internshipsHeader.addEventListener("click", internshipsDisplay); 