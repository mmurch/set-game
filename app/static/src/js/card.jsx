import React from 'react';

function Card(props) {

    const img = props.isFaceUp
        ? <img src={'/static/img/card_' + props.id + '.png' } />
        : <img title="this is face down" alt="this is face down" />;

    function handleClick() { 
        props.dispatch({type: 'click-card', id: props.id }); 
    }

    let cssClasses = 'card';
    if (props.isSelected){
        cssClasses += ' selected';
    }

    return (
        <div className={cssClasses} onClick={handleClick}>{img}</div>
    );
}

export default Card