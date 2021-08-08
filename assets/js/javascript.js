const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListner('click', () => {
    document.body.classList.toggle('nav-open');
});