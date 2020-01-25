window.addEventListener('load', function () {


    /*
    
        Sticky Nav
    
    */
//Sobald auf der Seite gescrollt wird, wird der Eventlistener aufgerufen
    window.addEventListener('scroll', function () {

        var sticky_pos = document.querySelector('.j-nav').offsetTop;

        var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
// Sobald die Navigation nicht mehr ersichtlich wäre, wird die Funktion aufgerufen, dass sie wieder erscheint und bleibt
        if (scrollTop > sticky_pos) {

            document.querySelector('nav').classList.add('state--nav-sticky');
        } else {

            document.querySelector('nav').classList.remove('state--nav-sticky');
        }
    });


    /*
    
        Scroll Top
    
    */

        var scrollanimation;
//Sobald man auf den Button klickt, wird der Eventlistener aufgerufen und die aktuelle position wird auf null gesetzt
        if (document.querySelector("#back-to-top") !== null) {
            document.querySelector("#back-to-top").addEventListener('click', function (_e) {
                _e.preventDefault();
                var current_pos = document.querySelector('html').scrollTop;
                var step = current_pos / 60;

                scrollanimation = setInterval(function () {
                    current_pos -= step; 

                    document.querySelector('html').scrollTop = current_pos;
                    if (current_pos < 5) {
                        current_pos = 0; // dann 0
                        clearInterval(scrollanimation);
                    }

                }, 1000 / 100);
            });
        };
});
