import React from 'react'
import CardGrid from './card-grid.jsx'

function Game(props) {
    return <CardGrid cards={props.cards} />;
}

export default Game