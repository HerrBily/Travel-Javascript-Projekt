window.addEventListener('load', function () {


    /*
        
           Slider
        
    */

    var n = document.querySelectorAll('.j-slide_list > li').length;


    var slide_list = document.querySelector('.j-slide_list');

    slide_list.style.width = (n * 100) + "%";
// Hier wird die Funktion implementiert, damit man das nächste Bild ansehen kann
    var next_slide = function () {

        slide_list.classList.add('slide_list--transition-on');

        var after_transition = function () {

            slide_list.classList.remove('slide_list--transition-on');

            slide_list.style.left = "0";

            var cur_first_slide = slide_list.removeChild(slide_list.children[0]);

            slide_list.appendChild(cur_first_slide);

            slide_list.removeEventListener('transitionend', after_transition);
        };

        slide_list.addEventListener('transitionend', after_transition);

        slide_list.style.left = "-100%";

    };

    document.querySelector('.j-next').addEventListener('click', next_slide);


// Hier wird die Funktion implementiert, damit man das vorherige Bild ansehen kann
    var prev_slide = function () {

        var cur_last_slide = slide_list.removeChild(slide_list.children[slide_list.children.length - 1]);

        slide_list.prepend(cur_last_slide);

        slide_list.classList.remove('slide_list--transition-on');

        slide_list.style.left = "-100%";

        setTimeout(function () {


            slide_list.classList.add('slide_list--transition-on');

            slide_list.style.left = "0";

        }, 100);
    };

    document.querySelector('.j-prev').addEventListener('click', prev_slide);


    var slide_interval;
// Sobald man den Radiobutton klickt, wird die Slideshow automatisch gestartet
    document.querySelector('.j-autoplay-on').addEventListener('change', function (_e) {

        clearInterval(slide_interval);

        next_slide();

        slide_interval = setInterval(next_slide, 3000);
    });
// Sibald man den Radiobutton klickt, wird das Autoplay gestoppt
    document.querySelector('.j-autoplay-off').addEventListener('change', function (_e) {

        clearInterval(slide_interval);
    });

});
