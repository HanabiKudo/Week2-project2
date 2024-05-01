import React from 'react'

type InteractiveExplorerProps = {
    food: string[];
    disc: string[];
    price: number[];
}

const InteractiveExplorer: React.FC<InteractiveExplorerProps> = (interXP) => {
    // let foodCard: HTMLElement = document.createElement('div')
    return (
        <div>
            <h3>{interXP.food}</h3>
            <h3>{interXP.disc}</h3>
            <h3>{interXP.price}</h3>
        </div>
    )
}

export default InteractiveExplorer;