import React from 'react';

function Card(props) {

    const img = props.isFaceUp
        ? <img src={'/static/img/card_' + props.id + '.png' } />
        : <img title="this is face down" alt="this is face down" />;

    return (
        <div className="card">{img}</div>
    );
}

export default Card