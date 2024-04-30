import React from 'react' 

type InteractiveExplorerProps = {
    food: string[];
    disc: string[];
    price: number[];
}

function InteractiveExplorer (interXP:InteractiveExplorerProps)  {
    let foodCard : HTMLElement = document.createElement('div')
    interXP.food.forEach(function(f){
        foodCard.innerHTML = `<h3>${f}</h3>`
    })
    return(
        <div>
            foodCard
        </div>
    )
}



export default InteractiveExplorer;