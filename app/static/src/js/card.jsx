import React from 'react';

function Card(props) {

    const img = props.isFaceUp
        ? <img src={'/static/img/card_' + props.id + '.png'} />
        : <img title="this is face down" alt="this is face down" />;

    function handleClick() {
        props.dispatch({ type: 'click-card', id: props.id });

        // this is a dirty hack to get the "selected" state to appear before
        // clearing out the workingSet. but animations are a hackfest
        setTimeout(() => props.dispatch({ type: 'check-set' }), 10);
    }

    let cssClasses = 'card';
    if (props.isSelected) {
        cssClasses += ' selected';
    }

    return (
        <div className={cssClasses} onClick={handleClick}>{img}</div>
    );
}

export default Card