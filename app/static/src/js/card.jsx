import React from 'react';

function Card(props) {

    const imgId = props.isFaceUp ? props.id : 'blank';

    function handleClick() {
        props.dispatch({ type: 'click-card', id: props.id });

        // this is a dirty hack to get the "selected" state to appear before
        // clearing out the workingSet. but animations are a hackfest
        setTimeout(() => props.dispatch({ type: 'check-set' }), 10);
    }

    const selected = props.isSelected ? 'selected' : '';
    const justFailed = props.justFailed ? 'animated shake faster' : '';
    const justPassed = props.justPassed ? 'animated heartbeat fast' : '';

    return (
        <div className={`card ${selected} ${justFailed} ${justPassed}`}
            onClick={handleClick}>
            <img src={`/static/img/card_${imgId}.png`} />
            {props.isFaceUp ? '' : <span className="card-back-text">SET</span>}
        </div>
    );
}

export default Card