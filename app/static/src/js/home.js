import React from 'react'
import ReactDOM from 'react-dom'
import Game from './game.jsx'

const node = document.getElementById('app');

const cards = node.dataset.react ? JSON.parse(node.dataset.react) : [];

ReactDOM.render(
    <Game cards={cards} />,
    node
);