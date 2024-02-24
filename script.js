// scrolling navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const seeMoreButton = document.getElementById('see-more-btn');
    const additionalContent = document.getElementById('additional-content');

    seeMoreButton.addEventListener('click', function () {
        additionalContent.style.display = 'block';
        seeMoreButton.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
      
	    console.log(formDataObject); 
	    
	    alert('Message sent successfully!'); 
	    contactForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('nav ul.menu');

    
	hamburgerMenu.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
});

// Data for membership offers
const membershipsData = [
    {
        type: "Basic",
        details: [
            "Access to gym facilities",
            "2 group fitness classes per week",
        ],
        price: "130 dh per month",
    },
    {
        type: "Standard",
        details: [
            "Access to gym facilities",
            "5 group fitness classes per week",
            "1 personal training session per month",
        ],
        price: "150 dh  per month",
    },
    {
        type: "Premium",
        details: [
            "Access to gym facilities",
            "Unlimited group fitness classes",
            "2 personal training sessions per month",
        ],
        price: "180 dh  per month",
    },
];

// Function to generate HTML for membership cards
function generateMembershipCards() {
    const membershipCardsContainer = document.querySelector(".membership-cards");

    membershipsData.forEach((membership) => {
        const card = document.createElement("div");
        card.classList.add("membership-card");

        const html = `
            <h3>${membership.type}</h3>
            <ul>
                ${membership.details.map((detail) => `<li>${detail}</li>`).join("")}
            </ul>
            <p>${membership.price}</p>
            <a href="#" class="btn">See Offer</a>
        `;

        card.innerHTML = html;
        membershipCardsContainer.appendChild(card);
    });
}

// Call the function to generate membership cards when the DOM content is loaded
document.addEventListener("DOMContentLoaded", generateMembershipCards);

