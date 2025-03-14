// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
            form.classList.add('was-validated');
        } else {
            form.style.display = 'none';
            document.getElementById('thank-you-message').style.display = 'block';
        }
    });
});