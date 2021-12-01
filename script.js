const $ = document.querySelector.bind(document);

const toggleSwitch = $('input[type="checkbox"]');
const nav = $('#nav');
const toggleIcon = $('#toggle-icon');
const image1 = $('#image1');
const image2 = $('#image2');
const image3 = $('#image3');
const textBox = $('#text-box');
const THEME_DARK = true;
const THEME_LIGHT = false;

// Dark or Light Images
const imageMode = mode => {
    image1.src = `./img/undraw_proud_coder_${mode}.svg`;
    image2.src = `./img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `./img/undraw_conceptual_idea_${mode}.svg`;
}

// Replace icon
const replaceIconMode = (currentIcon, newIcon) => {
    toggleIcon.children[1].classList.replace(currentIcon, newIcon);
}

const toggleDarkLightMode = mode => {
    nav.style.backgroundColor = mode ? 'rgba(0 0 0 / 50%)' : 'rgba(255 255 255 / 50%)';
    textBox.style.backgroundColor = mode ? 'rgba(255 255 255 / 60%)' : 'rgba(0 0 0 / 60%)';
    toggleIcon.children[0].innerHTML = mode ? 'Dark Mode' : 'Light Mode';
    mode ? replaceIconMode('fa-sun', 'fa-moon') : replaceIconMode('fa-moon', 'fa-sun');
    mode ? imageMode('dark') : imageMode('light');
}

// Switch theme dynamically
const switchTheme = e => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(THEME_DARK);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(THEME_LIGHT);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check LocalStorage for theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme == 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(THEME_DARK);
    }
}