const lightOnBtn = document.querySelector('.top-menu__light-on');

const root = document.querySelector('.root');

const backgroundForms = document.querySelectorAll('.background-form');

toggleLight = (e) => {
    e.preventDefault;
    lightOnBtn.classList.toggle('top-menu__light-on_reverse');
    root.classList.toggle('root_colored');
    backgroundForms.forEach(form => {
        form.classList.toggle('background-form_colored');
    })
    
}

function init() {
    lightOnBtn.addEventListener('click', toggleLight);
}

init();
