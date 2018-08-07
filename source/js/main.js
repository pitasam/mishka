(function () {
    var hamburger = document.querySelector('.header__hamburger'),
        hamburgerIcon = document.querySelector('.header__hamburger-icon'),
        menu = document.querySelector('.header__top');

    hamburger.style.display = 'flex';
    menu.style.height = 'none';

    hamburger.addEventListener('click', function () {
        if (menu.style.height === 'none') {
            menu.style.height = menu.innerHeight;
            hamburgerIcon.style.backgroundImage = 'url("../img/icon-menu-close.svg")';
        } else {
            menu.style.height = 'none';
            hamburgerIcon.style.backgroundImage = 'url("../img/icon-menu-open.svg")';
        }
    })
}());

(function () {
    var goods = document.querySelectorAll('.goods__link'),
        modal = document.querySelector('.modal-add'),
        close = document.querySelector('.modal-add__send');

    var overlay = document.createElement('div');

    overlay.className = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.bottom = 0;
    overlay.style.left = 0;
    overlay.style.right = 0;
    overlay.style.backgroundColor = "rgba(255,255,255,0.9)";
    overlay.appendChild(modal);

    console.log('script');

    for (var i=0; i<goods.length; i++) {
        goods[i].addEventListener('click', function (e) {
            e.preventDefault();

            console.log('click');
            modal.style.display = 'block';
            document.body.appendChild(overlay);
        })
    }

    overlay.addEventListener('click', function(e) {
        console.log(e.target);
        if (e.target.className === "overlay") {
            document.body.removeChild(overlay);
        }
    });

    close.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
}());