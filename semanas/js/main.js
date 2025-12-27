(function ($) {
    "use strict";
    
    // Desplazamiento (Scroll)
    $(".navbar-nav a").on('click', function (event) {
        // CORRECCIÓN: Verificamos que el hash no esté vacío Y que el elemento destino exista realmente en esta página.
        // Esto permite que enlaces externos o a otras páginas (como main.html) funcionen correctamente sin error.
        if (this.hash !== "" && $(this.hash).length) {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    

    // Letras mecanografiadas
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 500, // CORRECCIÓN: Aumentado de 100 a 150 para escribir más lento
            backSpeed: 50,  // Velocidad de borrado ajustada
            smartBackspace: false,
            loop: true,
            backDelay: 2000, // NUEVO: Espera 2 segundos antes de borrar el texto para que se pueda leer
            startDelay: 500  // NUEVO: Pequeña pausa antes de empezar
        });
    }
    

    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

