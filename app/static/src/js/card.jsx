import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img src={'/static/img/card_' + props.id + '.png' } />
        </div>
    );
}

export default Card