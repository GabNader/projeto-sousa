document.addEventListener('DOMContentLoaded', function() {
    const menuLateral = document.getElementById('menuLateral');
    const menuOverlay = document.getElementById('menuOverlay');
    const hamburger = document.getElementById('hamburger');
    const btnFechar = document.getElementById('btnFecharMenu');

    function toggleMenu() {
        menuLateral.classList.toggle('ativo');
        menuOverlay.classList.toggle('ativo');
        if (menuLateral.classList.contains('ativo')) {
            document.body.style.overflow = 'hidden';
            menuOverlay.style.display = 'block';
            setTimeout(() => {
                menuOverlay.style.opacity = '1';
            }, 10);
        } else {
            document.body.style.overflow = '';
            menuOverlay.style.opacity = '0';
            setTimeout(() => {
                menuOverlay.style.display = 'none';
            }, 300);
        }
    }
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    btnFechar.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav-links-mobile a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});