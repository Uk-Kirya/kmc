$(".phone__mask").mask("+7 (999) 999 - 99 - 99");

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


$(document).ready(function () {
    var owl = $('.carousel__1');
    owl.owlCarousel({
        center: true,
        items: 2,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: false,
                margin: 0,
                nav: true,
                dots: true,
            },
            576: {
                items: 1,
                autoWidth: false,
                margin: 30,
                nav: true,
                dots: false,
            },
            1200: {
                items: 2.2,
                autoWidth: true,
                margin: 30,
                nav: true,
                dots: false,
            }
        }
    });
})


$(document).ready(function () {
    var owl = $('.carousel__2');
    owl.owlCarousel({
        center: true,
        loop: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                autoWidth: false,
                nav: true,
                dots: true,
            },
            576: {
                items: 1,
                margin: 0,
                autoWidth: true,
                nav: true,
                dots: false,
            },
            992: {
                items: 1,
                margin: 0,
                autoWidth: true,
                nav: true,
                dots: false,
            },
            1200: {
                items: 2,
                margin: 30,
                autoWidth: true,
                nav: true,
                dots: false,
            }
        }
    });
})


$(document).ready(function () {
    var owl = $('.carousel__3');
    owl.owlCarousel({
        autoHeight: true,
        responsive: {
            0: {
                items: 1.2,
                stagePadding: 0,
                margin: 22,
                nav: true,
                dots: true,
            },
            576: {
                items: 2,
                stagePadding: 150,
                margin: 30,
                nav: true,
                dots: false,
            },
            992: {
                items: 2,
                stagePadding: 150,
                margin: 30,
                nav: true,
                dots: false,
            },
            1200: {
                items: 4,
                stagePadding: 150,
                margin: 30,
                nav: true,
                dots: false,
            }
        }
    });
})


$(document).ready(function () {
    var owl = $('.carousel__4');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        dots: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
})


$(document).ready(function () {
    var owl = $('.carousel__5');
    owl.owlCarousel({
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                nav: true,
                dots: true,
            },
            576: {
                items: 2,
                margin: 30,
                nav: true,
                dots: false,
            },
            992: {
                items: 2.3,
                stagePadding: 150,
                margin: 30,
                nav: true,
                dots: false,
            },
            1200: {
                items: 2.3,
                margin: 30,
                nav: true,
                dots: false,
            }
        }
    });
})


$(document).ready(function () {
    var owl = $('.reviews');
    owl.owlCarousel({
        autoHeight: true,
        responsive: {
            0: {
                items: 1.5,
                margin: 0,
                nav: true,
                dots: true,
            },
            576: {
                items: 1.5,
                margin: 30,
                nav: true,
                dots: false,
            },
            992: {
                items: 2.3,
                stagePadding: 150,
                margin: 30,
                nav: true,
                dots: false,
            },
            1200: {
                items: 4.7,
                margin: 30,
                stagePadding: 190,
                nav: true,
                dots: false,
            }
        }
    });
})


$(document).ready(function () {
    var owl = $('.benefits');
    owl.owlCarousel({
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
                margin: 0,
                nav: true,
                dots: true,
            },
            576: {
                items: 1.2,
                stagePadding: 150,
                margin: 70,
                nav: true,
                dots: false,
            },
            992: {
                items: 2,
                stagePadding: 150,
                margin: 70,
                nav: true,
                dots: false,
            },
            1200: {
                items: 3,
                stagePadding: 150,
                margin: 70,
                nav: true,
                dots: false,
            }
        }
    });
})


$(document).ready(function () {
    var owl = $('.carousel__6');
    owl.owlCarousel({
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                nav: true,
                dots: true,
            },
            576: {
                items: 2,
                margin: 30,
                nav: true,
                dots: false,
            },
            992: {
                items: 2.3,
                stagePadding: 150,
                margin: 30,
                nav: true,
                dots: false,
            },
            1200: {
                items: 2.3,
                margin: 30,
                nav: true,
                dots: false,
            }
        }
    });
})


$(document).ready(function () {
    var owl = $('.reviews2');
    owl.owlCarousel({
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                margin: 15,
                nav: true,
                dots: true,
            },
            576: {
                items: 2,
                margin: 30,
                nav: true,
                dots: false,
            },
            992: {
                items: 2.3,
                stagePadding: 150,
                margin: 30,
                nav: true,
                dots: false,
            },
            1200: {
                items: 2.3,
                margin: 30,
                stagePadding: 200,
                nav: true,
                dots: false,
            }
        }
    });
})


$(document).ready(function () {
    var owl = $('.offers');
    owl.owlCarousel({
        autoHeight: true,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1.2,
                margin: 0,
                nav: false,
            },
            576: {
                items: 1.2,
                margin: 15,
                nav: false,
            },
            992: {
                items: 2,
                margin: 30,
                nav: true,
            },
            1200: {
                items: 2,
                margin: 30,
                nav: true,
            }
        }
    });
})


$(document).ready(function () {
    $("a.topLink").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 0,
            easing: "swing"
        });
        return false;
    });
});


$(function () {
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 40) $('.head').addClass('head_fixed');
        else $('.head').removeClass('head_fixed');
    });
});


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight) {
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

const menuOpenBtns = document.querySelectorAll("[data-menu-open]");
const menuCloseBtns = document.querySelectorAll("[data-menu-close]");
const menuContainer = document.querySelector("[data-menu-container]");
const menuContainerMobile = document.querySelector("[data-menu-container-mobile]");

const ContainerCookie = document.querySelector("[data-container-cookie]");
const CookieCloseBtn = document.querySelector("[data-cookie-close]");

const ContainerCart = document.querySelector("[data-container-cart]");
const CartOpenBtns = document.querySelectorAll("[data-cart-open]");
const CartCloseBtns = document.querySelectorAll("[data-cart-close]");

// Открытие меню
menuOpenBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        menuContainer.classList.add("active");
        menuContainerMobile.classList.add("active");
        menuContainerMobile.classList.remove("active_cart");
        ContainerCart.classList.remove("active");
    });
});

// Закрытие меню (любая кнопка закрытия)
menuCloseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        menuContainer.classList.remove("active");
        menuContainerMobile.classList.remove("active");
        menuContainerMobile.classList.remove("active_cart");
        ContainerCart.classList.remove("active");
    });
});

// Закрытие по Esc
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        menuContainer.classList.remove("active");
        menuContainerMobile.classList.remove("active");
        menuContainerMobile.classList.remove("active_cart");
        ContainerCart.classList.remove("active");
    }
});

// Закрытие cookie alert
if (CookieCloseBtn) {
    CookieCloseBtn.addEventListener("click", () => {
        ContainerCookie.classList.remove("active");
    });
}

// Открытие предпросмотра корзины
CartOpenBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        ContainerCart.classList.add("active");
        menuContainer.classList.remove("active");
        menuContainerMobile.classList.add("active_cart");
    });
});

// Закрытие предпросмотра корзины (любая кнопка закрытия)
CartCloseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        ContainerCart.classList.remove("active");
        menuContainerMobile.classList.remove("active_cart");
        menuContainerMobile.classList.remove("active");
    });
});


document.querySelectorAll('.custom-select').forEach(selectBox => {
    const selected = selectBox.querySelector('.selected');
    const options = selectBox.querySelector('.options');
    const hiddenSelect = selectBox.querySelector('select');

    // Открытие/закрытие списка
    selected.addEventListener("click", () => {
        const isOpen = options.style.display === "block";
        // Закрываем все открытые селекты
        document.querySelectorAll('.options').forEach(o => o.style.display = "none");
        // Переключаем текущий
        options.style.display = isOpen ? "none" : "block";
    });

    // Выбор значения
    options.querySelectorAll("div").forEach(opt => {
        opt.addEventListener("click", () => {
            selected.textContent = opt.textContent;
            hiddenSelect.value = opt.dataset.value;
            options.style.display = "none";
        });
    });
});

// Закрытие при клике вне селекта
document.addEventListener("click", (e) => {
    if (!e.target.closest('.custom-select')) {
        document.querySelectorAll('.options').forEach(o => o.style.display = "none");
    }
});


document.querySelectorAll('.issledovaniya__block').forEach(block => {
    const header = block.querySelector('.issledovaniya__block__zag');

    header.addEventListener('click', () => {
        block.classList.toggle('open');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".zhkt__block");

    blocks.forEach(block => {
        const header = block.querySelector("div:first-child");
        const content = block.querySelector("div:last-child");

        header.addEventListener("click", () => {
            const isOpen = block.classList.contains("open");

            if (isOpen) {
                // закрываем
                content.style.display = "none";
                block.classList.remove("open");
            } else {
                // открываем
                content.style.display = "block";
                block.classList.add("open");
            }
        });
    });
});