import React, { useReducer } from 'react'
import cloneDeep from 'lodash/cloneDeep'
import CardGrid from './card-grid.jsx'
import Header from './header.jsx'
import Summary from './summary.jsx'

/* 
    idea: rotate the headline daily (mod date):
    Irish SETter
    Bump, SET, Spike
    I'm a jetSETter  
    My favorite animal is a marmoSET
    Ancient Romans celebrated SETurnalia
    It's copaSETic
    SETtle down, now
    This is unSETtling
    SETurday Night Live
    
*/

const initialState = {
    gameState: 'unstarted', /* unstarted, running, paused, finished */
    cards: [],
    setsFound: [],
    workingSet: []
};

function reducer(state, action) {
    switch (action.type) {
        case 'start-game':
            return {
              ...state,
              gameState: 'running'
            };
        case 'pause-game':
          return {
            ...state,
            gameState: 'paused'
          };
        case 'reset-game':
          let workingState = cloneDeep(initialState);
          workingState.cards = state.cards;
          return workingState;
        case 'click-card':
            return;
    }
}

function Game(props) {

    let workingState = cloneDeep(initialState);
    workingState.cards = props.cards;

    const [state, dispatch] = useReducer(reducer, workingState);
    
    return (
        <div className="container">
            <h3>Game, SET, Match</h3>
            <Header gameState={state.gameState} dispatch={dispatch}/>
            <CardGrid 
                gameState={state.gameState}
                cards={state.cards} 
                workingSet={state.workingSet} 
                dispatch={dispatch} />
            <Summary setsFound={state.setsFound} />
        </div>
    );
}

export default Game