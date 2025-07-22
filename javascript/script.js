document.addEventListener('DOMContentLoaded', function() {
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);
        
        if (toggle && nav) { // Safety check
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show-menu');
                toggle.classList.toggle('show-icon');
            });
        }
    }
    
    showMenu('nav-toggle','nav-menu');
});

