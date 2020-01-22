import React from 'react'
import Card from './card.jsx'

function CardGrid(props) {
    let isFaceUp = true;

    if (props.gameState == 'unstarted' || props.gameState == 'paused') {
        isFaceUp = false;
    }

    const cards = props.cards.map((id) => {
        const isSelected = props.workingSet.includes(id);
        const justFailed = props.justFailed.includes(id);
        const justPassed = props.justPassed.includes(id);
        return <Card key={id} id={id} isFaceUp={isFaceUp}
            isSelected={isSelected} dispatch={props.dispatch} 
            justFailed={justFailed} justPassed={justPassed} />
    });

    return (
        <div className="row">{cards}</div>
    );
}

export default CardGrid