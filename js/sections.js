if(screen.width >= 908) {
    const cards = document.querySelectorAll('.container__projects .projectCard');
    const cardsInfo = document.querySelectorAll('.container__projects .projectCard--info');
    for(let i = 0; i < cards.length; i++){
        cards[i].addEventListener('mouseover', ()=>{
            stateCard = 5;
            mostrar(i);
        });
    };
    
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


