//
// HAMBURGER ICON DISPLAY
//

const nav = document.querySelector('#navbar');
const hamburger = document.querySelector('#hamburger');

// on startup, run onResize
onResize();

// listen for screen resize
window.addEventListener('resize', onResize);

function onResize() {
    // determine screen width
    const screenWidth = window.innerWidth;

    // if screen width is less than 1024
    if (screenWidth < 1024) {
        // hide nav
        nav.style.display = 'none';

        // show hamburger
        hamburger.style.display = 'inline';
    }
    else {
        // show nav
        nav.style.display = 'inline';

        // hide hamburger
        hamburger.style.display = 'none';
    }
}

//
// HAMBURGER MENU TOGGLE
//

const hamburgerIcon = document.querySelector('#hamburger-icon');
const hamburgerNav = document.querySelector('#hamburger-nav');

// event listener
hamburgerIcon.addEventListener('click', hamburgerMenu);

function hamburgerMenu() {
    console.log('clicked');

    console.log(hamburgerNav);

    // hide menu
    if (hamburgerNav.innerHTML !== '') {
        // hide html
        hamburgerNav.innerHTML = '';

        // hide style
        hamburger.style.backgroundColor = 'transparent';

    // show menu    
    } else {
        // show html
        hamburgerNav.innerHTML = `
            <a class="active" href="index.html">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">About</a>
            <a href="#">Contact</a>`;

        // show style
        hamburger.style.backgroundColor = 'rgba(0, 0, 0, .3)';
    }
}


