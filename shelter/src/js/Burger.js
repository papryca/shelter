export class Burger {
    openBurger() {
        const burger = document.querySelector('.burger');
        const header = document.querySelector('.header__wrapper');
        const navigationName = document.querySelectorAll('.navigation__header-link');
        const navigationNamePets = document.querySelectorAll('.navigation__header_pets-link');
        const htmlScroll = document.querySelector('html');
        const headerNavigationContainerPets = document.querySelector('._header__navigation-pets');


        burger.addEventListener('click', function (e) {
            header.classList.toggle('burger-open');
            headerNavigationContainerPets.classList.toggle('_header__navigation-pets_open');
            htmlScroll.classList.toggle('not-scroll');
        })

        function closeBtn() {
            header.classList.remove('burger-open');
            htmlScroll.classList.toggle('not-scroll');
            headerNavigationContainerPets.classList.toggle('_header__navigation-pets_open');
        }

        headerNavigationContainerPets.addEventListener('click', function (e) {
            //if (headerNavigationContainerPetsOpen === e.target) {
                closeBtn();
            //}
        });

        navigationName.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                let l = e.currentTarget
                header.classList.toggle('burger-open');
                headerNavigationContainerPets.classList.toggle('_header__navigation-pets_open');
                setTimeout(function () {
                    window.location.href = l.getAttribute("href");
                }, 2000);
            })
        })

        navigationNamePets.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                let g = e.currentTarget
                header.classList.toggle('burger-open');
                headerNavigationContainerPets.classList.toggle('_header__navigation-pets_open');
                setTimeout(function () {
                    window.location.href = g.getAttribute("href");
                }, 2000);
            })
        })
    }
}