/*==========Mostrar Contraseñas==========*/

document.querySelector('.input-icon').addEventListener('click', e => {
    const passwordInput = document.querySelector('.input_2');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        passwordInput.type = 'password';       
    } else {
        e.target.classList.add('show');
        passwordInput.type = 'text';
    }
});

/* Requeridos y Placeholder de Inputs */

const usuario = document.querySelector(".input_1");
usuario.placeholder="Usuario";
usuario.required = "true";

const password = document.querySelector(".input_2");
password.placeholder="Contraseña";
password.required = "true";
password.setAttribute("minlength","12");