import React from 'react'
import Card from './card.jsx'

function CardGrid(props){
    const cards = props.cards.map((id) => 
        <Card id={id} key={id} />
    );
    return (
        <div className="row">{ cards }</div>
    );
}

export default CardGrid