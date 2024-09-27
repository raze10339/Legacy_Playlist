const addMusicBtn = document.querySelector('#addMusic');
const darkModeBtn = document.querySelector('#toggle-btn');
const btnColor = document.querySelector('button')


function toggleDarkMode() {
    const mode = localStorage.getItem('mode');

    if (mode === 'light') {
        document.body.classList.add('dark');
        localStorage.setItem('mode', 'dark');
        darkModeBtn.classList.remove('btn-info');
        darkModeBtn.classList.add('btn-outline-warning')
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('mode', 'light');
        darkModeBtn.classList.remove('btn-outline-warning')
        darkModeBtn.classList.add('btn-info');
    }

}


function pageLoad() {
    const mode = localStorage.getItem('mode');

    if (mode === 'dark') {
        document.body.classList.add('dark');
        darkModeBtn.classList.add('btn-outline-warning');
    } else {
            document.body.classList.remove('dark');
            localStorage.setItem('mode', 'light');
            darkModeBtn.classList.remove('btn-outline-warning')
            darkModeBtn.classList.add('btn-info');
    }

    darkModeBtn.addEventListener('click', toggleDarkMode);
    // addBtn.addEventListener('click', addStudent);
}


pageLoad();