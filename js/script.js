const hamburgerMenu = document.querySelector('.hamburger-menu');

// NAVBAR TOGGLE
hamburgerMenu.addEventListener('click', function () {
    const navigationBar = document.querySelector('header ul');
    navigationBar.classList.toggle('ul-active');

    const menuNavigationBar = document.querySelectorAll('header ul li');
    menuNavigationBar.forEach(function (menu) {
        menu.addEventListener('click', function () {
            navigationBar.classList.remove('ul-active');
        });
    });
});

// SMOOTH SCROLL
document.querySelectorAll('.home a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ANIMATION SECTION SKILL
const fieldSkill = document.querySelectorAll('.field-image-skill');
for (let i = 0; i < fieldSkill.length; i++) {
    if (i % 2 === 0) {
        fieldSkill[i].setAttribute('data-aos', 'flip-right');
    } else {
        fieldSkill[i].setAttribute('data-aos', 'flip-left');
    }
    if (window.innerWidth > 768) {
        if (i == 0) {
            fieldSkill[i].setAttribute('data-aos-duration', '300');
        } else {
            fieldSkill[i].setAttribute('data-aos-delay', `${i * 300}`);
        }
    }
}

// ALERT SECTION PROJECT
const linkToProject = document.querySelectorAll('.link-to-project');
linkToProject.forEach(function (project) {
    project.addEventListener('click', function (e) {
        e.preventDefault();
        let atributLinkProject = project.getAttribute('href');
        Swal.fire({
            title: "Are you sure?",
            text: "This action will bring you to the website",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#8b1a1a",
            cancelButtonColor: "#3d1515",
            confirmButtonText: "Yes, go there",
            background: "#2a0f0f",
            color: "#f5e6e6"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = atributLinkProject;
            }
        });
    });
});

// ANIMATION SECTION PROJECT
const fieldProject = document.querySelectorAll('.field-project');
for (let i = 0; i < fieldProject.length; i++) {
    if (window.innerWidth > 768) {
        fieldProject[i].setAttribute('data-aos-duration', '1000');
        if (i % 2 === 0) {
            fieldProject[i].setAttribute('data-aos', 'fade-up-right');
        } else {
            fieldProject[i].setAttribute('data-aos', 'fade-up-left');
        }
    } else {
        fieldProject[i].setAttribute('data-aos', 'fade-up');
        fieldProject[i].setAttribute('data-aos-duration', '700');
    }
}

// ANIMATION SECTION PROJECTS
const fieldProjectCard = document.querySelectorAll('.field-project-card');
for (let i = 0; i < fieldProjectCard.length; i++) {
    if (window.innerWidth > 768) {
        fieldProjectCard[i].setAttribute('data-aos', 'fade-up');
        fieldProjectCard[i].setAttribute('data-aos-duration', '700');
        fieldProjectCard[i].setAttribute('data-aos-delay', `${i * 150}`);
    } else {
        fieldProjectCard[i].setAttribute('data-aos', 'zoom-in-up');
        fieldProjectCard[i].setAttribute('data-aos-duration', '600');
        fieldProjectCard[i].setAttribute('data-aos-delay', `${i * 100}`);
    }
}

// ANIMATION SECTION CONTACT
const formMessage = document.querySelector('.form-message');
if (window.innerWidth > 768) {
    const fieldMap = document.querySelector('.sosmed-and-maps');
    fieldMap.setAttribute('data-aos', 'fade-right');
    formMessage.setAttribute('data-aos', 'fade-left');
} else {
    const sosmedAndMaps = document.querySelector('.sosmed-and-maps');
    sosmedAndMaps.setAttribute('data-aos', 'zoom-in-up');
    formMessage.setAttribute('data-aos', 'zoom-in-down');
}

// ALERT SECTION CONTACT
const formContact = document.querySelector('.form-message');
formContact.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputMessage = document.querySelector('#message');

    if (inputName.value == '' || inputEmail.value == '' || inputMessage.value == '') {
        Swal.fire({
            icon: "error",
            title: "Form Validation",
            text: "Please fill in the form correctly",
            background: "#2a0f0f",
            color: "#f5e6e6",
            confirmButtonColor: "#8b1a1a"
        });
    } else {
        Swal.fire({
            title: "Thank you! Your message has been sent.",
            background: "#2a0f0f",
            color: "#f5e6e6",
            confirmButtonColor: "#8b1a1a"
        });
        inputName.value = '';
        inputEmail.value = '';
        inputMessage.value = '';
    }
});

// INIT AOS
AOS.init({
    once: false
});

// GAME TAB IMAGE SWITCHER
const gameTabs = document.querySelectorAll('.game-tab');
const gamesCover = document.getElementById('games-cover');
const gamesDesc = document.getElementById('games-desc');

gameTabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        // Skip if already active
        if (tab.classList.contains('active-tab')) return;

        // Update active tab highlight
        gameTabs.forEach(t => t.classList.remove('active-tab'));
        tab.classList.add('active-tab');

        // Step 1: add fade-out class (triggers CSS transition)
        gamesCover.classList.add('img-fade-out');

        // Step 2: after fade-out completes, swap src + fade back in
        setTimeout(function () {
            gamesCover.src = tab.getAttribute('data-img');
            gamesDesc.textContent = tab.getAttribute('data-desc');

            // Force reflow so the browser registers the class removal as a new transition
            gamesCover.getBoundingClientRect();

            gamesCover.classList.remove('img-fade-out');
        }, 300);
    });
});
