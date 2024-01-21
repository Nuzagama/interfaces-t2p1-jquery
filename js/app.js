$(document).ready(function(){
    // Textos de los slides
    const descripciones = [
        "Laravel CRUD Project",
        "Online Store built with PHP Vanilla",
        "GameLauncher built with Electron JS"
    ];

    $(document).ready(function(){
        $('.portafolio__info').text(descripciones[0]);

    var indiceActual = 0;
    var slides = $('#miSlider .slide');
    var numeroSlides = slides.length;

    // Mostrar el primer slide
    slides.eq(indiceActual).show();

    // Función para ir al siguiente slide
    function siguienteSlide() {
        slides.eq(indiceActual).hide();
        indiceActual = (indiceActual + 1) % numeroSlides;
        slides.eq(indiceActual).show();
    }

    // Función para ir al slide anterior
    function anteriorSlide() {
        slides.eq(indiceActual).hide();
        indiceActual = (indiceActual - 1 + numeroSlides) % numeroSlides;
        slides.eq(indiceActual).show();
    }

    // Swiper Carrusel JQuery
    const miSwiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        on: {
            slideChange: function () {
                const indexActual = this.realIndex;
                $('.portafolio__info').text(descripciones[indexActual]);
            }
        }
    });

});

// Acordeón
$(document).ready(function(){
    $('.service__toggle').click(function(){
        var content = $(this).next('.service__content');
        $('.service__content').not(content).slideUp();
        content.slideToggle();
    });
});

// Scroll to top
$(document).ready(function(){
    $('.layout__content').scroll(function() {
        if ($(this).scrollTop() > 100) { 
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    $('#scrollToTop').click(function() {
        $('.layout__content').animate({scrollTop : 0}, 800);
        return false;
    });
});

// Tema oscuro/claro
$(document).ready(function(){
    $('.themeToggle').click(function(){
        $('body').toggleClass('theme-dark');
        toggleIcons();
        saveThemePreference();
    });

    function toggleIcons() {
        $('.iconLight').toggle();
        $('.iconDark').toggle();
    }

    function saveThemePreference() {
        if($('body').hasClass('theme-dark')){
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }

    // Cargar el tema al iniciar usando LocalStorage ^^
    if(localStorage.getItem('theme') === 'dark'){
        $('body').addClass('theme-dark');
        toggleIcons();
    }
});


});

// POPUPs para el BLOG
$(document).ready(function(){
    $('.article__image-link').click(function(event){
        event.preventDefault();

        var title = $(this).data('title');
        var content = $(this).data('content');
        var image = $(this).data('image');
        var url = $(this).data('url');

        // Actualiza el contenido del popup
        $('#miPopup .popup__title').text(title);
        $('#miPopup .popup__image').attr('src', image);
        $('#miPopup .popup__text').text(content);
        $('#miPopup .popup__link').attr('href', url);

        $('#miPopup').show();
    });

    $('.popup__close').click(function(){
        $('#miPopup').hide();
    });
});

// Botón de scroll to top que aparece en las páginas
$(document).ready(function(){
    var $main = $('.content__page'); 

    $("#backToTop").hide();

    $main.scroll(function(){
        if ($main.scrollTop() > 10) { 
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    $('#backToTop').click(function(){
        $main.animate({scrollTop : 0}, 800); 
        return false;
    });
});


// Menu BigMac responsive
$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.layout__aside:eq(1)').toggleClass('active');
    });
});
