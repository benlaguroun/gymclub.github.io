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
        // Here you can send formDataObject to your server or save it to local storage
        console.log(formDataObject); // For demonstration, logging the form data to console
        // You can replace the above console.log statement with your data-saving logic
        alert('Message sent successfully!'); // Show a success message to the user
        contactForm.reset(); // Reset the form after submission
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('nav ul.menu');

    // Toggle menu visibility when hamburger menu button is clicked
    hamburgerMenu.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
});

