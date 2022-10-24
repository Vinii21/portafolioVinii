//Condicional para que la animacion se vea en desktop y no en tablet o mobile
if(screen.width >= 908) {
    const cards = document.querySelectorAll('.container__projects .projectCard');
    const cardsInfo = document.querySelectorAll('.container__projects .projectCard--info');
    
    //Con el loop for recorremos el arreglo donde estan las cajas que tienen la info de cada proyecto
    //Se le da un evento para que haga algo cuando el muose este sobre la caja
    for(let i = 0; i < cards.length; i++){
        cards[i].addEventListener('mouseover', ()=>{
            stateCard = 5;
            mostrar(i);
        });
    };
    
    /* La funcion que muestra la caja oculta de info */
    function mostrar(index){
        for(let i = 0; i < cardsInfo.length; i++){
            if(i === index){
                cardsInfo[i].style.top = "0px";
                cardsInfo[i].addEventListener('mouseout', () => {
                    ocultar(i);
                });
            };
        };
    };
    
    /* la funcion que oculta la caja cuando no se esta sobre ella */
    function ocultar(index){
        for(let i = 0; i < cardsInfo.length; i++){
            if(i === index){
                cardsInfo[i].style.top = "200px";
            };
        };
    };
} else {
    console.log('Todo en order')
}


