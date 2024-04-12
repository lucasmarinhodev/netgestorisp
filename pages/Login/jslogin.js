const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-toggle-off')) {
        mode.classList.remove('fa-toggle-off');
        mode.classList.add('fa-toggle-on');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-toggle-off');
    mode.classList.add('fa-toggle-on');
    form.classList.remove('dark');
});