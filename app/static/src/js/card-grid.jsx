import React from 'react'
import Card from './card.jsx'

function CardGrid(props){
    let isFaceUp = true;

    if (props.gameState == 'unstarted' || props.gameState == 'paused') {
        isFaceUp = false;
    }

    const cards = props.cards.map((id) => 
        <Card key={id} id={id} isFaceUp={isFaceUp} />
    );
    
    return (
        <div className="row">{ cards }</div>
    );
}

export default CardGrid