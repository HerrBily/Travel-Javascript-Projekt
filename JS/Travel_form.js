
/*
    
     Formular
    
*/

window.onload = function () {


    var myform = document.querySelector('#myform');

// der Eventlistener wird aufgerufen sobald man auf den Submit Button klickt
    myform.addEventListener('submit', function (_event) {

        var all_fields_ok = true;
        var name = document.querySelector('#vorname').value;
        name = name.trim();
        //Wenn der Name leer oder kürzer ist als ein Buchstabe, gibt es eine Fehlermeldung
        if (name !== "" && name.length > 1) {
            document.querySelector('#vorname').parentNode.classList.remove("error");
        } else {
            document.querySelector('#vorname').parentNode.classList.add("error");
            all_fields_ok = false;
        }
        var nachname = document.querySelector('#nachname').value;
        nachname = nachname.trim();

        //Wenn der Nachname leer ist, gibt es eine Fehlermeldung
        if (nachname !== "") {
            document.querySelector('#nachname').parentNode.classList.remove("error");
        } else {
            document.querySelector('#nachname').parentNode.classList.add("error");
            all_fields_ok = false;
        }
        var email = document.querySelector('#email').value;
        email = email.trim();
        var email_gueltig = false;
        //Hier wird überprüft ob es eine gültige E-Mail adresse ist
        if (email.indexOf('@') !== -1 && email.indexOf('@') !== 0) {
            if ((email.indexOf('@') + 3) < email.length) {
                if (email.indexOf('.', email.indexOf('@')) !== -1) {
                    if (email.indexOf('@', email.indexOf('@') + 1) === -1) {
                        email_gueltig = true;
                    }
                }
            }
        }
        //Wenn die E-Mail Adresse nicht gültig ist, gibt es eine Fehlermeldung
        if (email_gueltig) {
            document.querySelector('#email').parentNode.classList.remove("error");
        } else {
            document.querySelector('#email').parentNode.classList.add("error");
            all_fields_ok = false;
        }
        var teilnahme = document.querySelector('#teilnahme');
        //Wenn die Checkbox nicht angeklickt wurde, gibt es eine Fehlermeldung
        if (teilnahme.checked === true) {
            document.querySelector('#teilnahme').parentNode.classList.remove("error");
        } else {
            document.querySelector('#teilnahme').parentNode.classList.add("error");
            all_fields_ok = false;
        }
        //Sobald es eine Fehleingabe gibt, gibt es eine Fehlermeldung
        if (all_fields_ok === false) {
            _event.preventDefault();
            document.querySelector('#error_msg').textContent = "! Bitte überprüfe dein Formular !";
        }
    });
};