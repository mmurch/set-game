import React from 'react'
import Card from './card.jsx'
import { CSSTransitionGroup } from 'react-transition-group';

function CardGrid(props) {
    let isFaceUp = true;

    if (props.gameState == 'unstarted' || props.gameState == 'paused') {
        isFaceUp = false;
    }

    const cards = props.cards.map((id, index) => {
        const isSelected = props.workingSet.includes(id);
        const justFailed = props.justFailed.includes(id);
        const justPassed = props.justPassed.includes(id);
        const uniqueId = isFaceUp ? id : index*100;

        // when faceUp, the id is index*100 so that we have a unique id
        // between face up and face down for animations to rely on
        return <Card key={uniqueId} id={uniqueId} isFaceUp={isFaceUp}
            isSelected={isSelected} dispatch={props.dispatch} 
            justFailed={justFailed} justPassed={justPassed} />
    });

    return (
        <div className="row">{cards}</div>
    );
}

export default CardGrid