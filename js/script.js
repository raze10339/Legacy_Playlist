const addMusicBtn = document.querySelector('#addMusic');
const darkModeBtn = document.querySelector('#toggle-btn');
const btnColor = document.querySelectorAll('.buttons')


function toggleDarkMode() {
    const mode = localStorage.getItem('mode');

    if (mode === 'light') {
        document.body.classList.add('dark');
        localStorage.setItem('mode', 'dark');
        btnColor.forEach(button => {
            button.classList.remove('btn-info');
            button.classList.add('btn-outline-warning');
        });
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('mode', 'light');
        btnColor.forEach(button => {
            button.classList.remove('btn-outline-warning');
            button.classList.add('btn-info');
        });
    }
}


function pageLoad() {
    const mode = localStorage.getItem('mode');

    if (mode === 'dark') {
        document.body.classList.add('dark');
        btnColor.forEach(button => {
            button.classList.add('btn-outline-warning');
            button.classList.remove('btn-info');
        });
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('mode', 'light');
        btnColor.forEach(button => {
            button.classList.remove('btn-outline-warning');
            button.classList.add('btn-info');
        });
    }


    darkModeBtn.addEventListener('click', toggleDarkMode);
    // addBtn.addEventListener('click', addStudent);
}


pageLoad();

// ('iframe1');
// const iframe2 = document.querySelectorAll('iframe2');
// const paragraph = document.createElement('p1');


// paragraph.textContent = 'Taylor Swift, You Belong With Me, Billie Eilish, What Was I Made For';


// iframes.forEach(iframe => {
//     iframe.parentNode.insertBefore(paragraph.cloneNode(true), iframe.nextSibling);
// });
