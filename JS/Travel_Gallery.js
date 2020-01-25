/*

    Gallery

*/
// Der Eventlistener wird aufgerufen, sobald die Seite geladen wurde
window.addEventListener('load', function () {

    var lis = document.querySelectorAll('.wrapper > li img');
    console.log(lis);

    var overlay = document.querySelector('.overlay__cnt');

    var stage = document.querySelector('.overlay__stage');

    var close = document.querySelector('.overlay__close');

    var close_on_black = document.querySelector('.overlay__close_black');

    close.addEventListener('click', function () {
        overlay.style.display = "none";
    });
    close_on_black.addEventListener('click', function () {
        overlay.style.display = "none";
    });

    for (var i = 0; i < lis.length; i++) {

        lis[i].addEventListener('click', function (_e) {

            _e.preventDefault();

            overlay.style.display = "flex";

            var img = document.createElement('img');

            img.setAttribute('src', _e.target.parentNode.getAttribute('href'));

            stage.innerHTML = "";

            stage.appendChild(img);

            var ul = _e.target.parentNode.parentNode.parentNode;


            _e.target.parentNode.parentNode.classList.add('selected');

            var tns = document.createElement('ul');

            tns.classList.add('wrapper');

            tns.innerHTML = ul.innerHTML;


            _e.target.parentNode.parentNode.classList.remove('selected');

            document.querySelector('.overlay__tns').innerHTML = "";

            document.querySelector('.overlay__tns').appendChild(tns);

            var overlay_tns = document.querySelectorAll('.overlay__cnt .wrapper > li img');

            for (var i = 0; i < overlay_tns.length; i++) {

                overlay_tns[i].addEventListener('click', function (_e) {

                    _e.preventDefault();

                    var img = document.createElement('img');
                    img.setAttribute('src', _e.target.parentNode.getAttribute('href'));
                    stage.innerHTML = "";
                    stage.appendChild(img);

                    document.querySelector('.overlay__cnt .wrapper > li.selected').classList.remove('selected');

                    _e.target.parentNode.parentNode.classList.add('selected');
                });
            };
        });
    };

});