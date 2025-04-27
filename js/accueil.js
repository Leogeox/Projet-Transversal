let sidenav = document.querySelector('.sidenav');
let openSideNav = document.querySelector('.openSideNav');

openSideNav.addEventListener('click', function(){
    if (sidenav.classList.contains('sidenav')) {
        sidenav.classList.remove('sidenav');
        sidenav.classList.add('sidenavOpen');
    } else {
        sidenav.classList.add('sidenav');
        sidenav.classList.remove('sidenavOpen');
    }
});