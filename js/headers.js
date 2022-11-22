const iconMenuLeft = document.getElementById('iconLeft');
const iconMenuRigth = document.getElementById('iconRigth');
const containerMenu = document.getElementById('NavResponsive');
let stateMenu = true;
//Obtencion de cada uno de los enlaces en el menu responsive
const enlaces = document.querySelectorAll('.containerNav .enlace-movil');
const enlacesDesktop = document.querySelectorAll('.header__containerNav--nav .enlace-descktop');

/* Logica para mostrar y esconder el menu responsive
basandose en la variable stateMenu */
iconMenuRigth.addEventListener('click', ()=>{
    if (stateMenu === true) {
        iconMenuRigth.style.opacity = "0";
        iconMenuLeft.style.opacity = "1";
        containerMenu.style.right = "5px";
        stateMenu = false;
    } else if (stateMenu === false) {
        iconMenuRigth.style.opacity = "1";
        iconMenuLeft.style.opacity = "0";
        containerMenu.style.right = "-205px";
        stateMenu = true;
    };
});

/* En el arreglo enlaces, por cada enlace
colocar un addEventListener de tipo click
que ejecute la funcion dirigir */
enlaces.forEach(enlace => {
    enlace.addEventListener('click', dirigir);
    enlace.addEventListener('click', ocultarMenu);
});

enlacesDesktop.forEach(enlace => {
    enlace.addEventListener('click', dirigir);
});

/* 
cancela el comportamiento por defecto del enlace
obtiene el atributo href de el enlace
accese al offsetTop del href del enlace
scroll, mueve a el offsetTop de manera animada
*/
function dirigir (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
};

/* funcion que oculta el menu luego de darle click al boton de enlace */
function ocultarMenu (e) {
    const identificador = e.target.href;
    if (identificador == identificador) {
        iconMenuRigth.style.opacity = "1";
        iconMenuLeft.style.opacity = "0";
        containerMenu.style.right = "-205px";
        stateMenu = true;
    };
};







