import React, { useReducer } from 'react'
import cloneDeep from 'lodash/cloneDeep'
import CardGrid from './card-grid.jsx'
import Header from './header.jsx'
import Summary from './summary.jsx'
import SetGame from './set-game.js'

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
  workingSet: [],
  justFailed: [],
  justPassed: []
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
      var workingState = cloneDeep(initialState);
      workingState.cards = state.cards;
      return workingState;
    case 'click-card':

      var workingState = cloneDeep(state);

      // if it's already selected, unselect it
      let locInWS = workingState.workingSet.indexOf(action.id);
      if (locInWS > -1) {
        workingState.workingSet.splice(locInWS, 1);
        return workingState;
      }

      // if it is somehow already a full 
      // working set (race condition), do nothing
      if (workingState.workingSet.length >= 3) {
        return workingState;
      }

      // else just add it
      workingState.workingSet.push(action.id);
      workingState.workingSet.sort();
      return workingState;
    case 'check-set':
      var workingState = cloneDeep(state);

      // now we check for a set
      if (workingState.workingSet.length != 3) {
        return workingState;
      }

      if (SetGame.isSet(...workingState.workingSet)) {

        // a set! check if already found
        if (workingState.setsFound
          .some((set) =>
            JSON.stringify(set) ==
            JSON.stringify(workingState.workingSet))) {

          // if found, get out
          workingState.justFailed = workingState.workingSet;
          workingState.workingSet = [];
          return workingState;
        }

        // it's new, let's add it and reset
        workingState.setsFound.push(workingState.workingSet);
        workingState.justPassed = workingState.workingSet;
        workingState.workingSet = [];

        // check if game over
        if (workingState.setsFound.length == 6) {
          workingState.gameState = 'finished';
        }

        // todo: trigger some sort of "set found" visual
      }
      else {
        workingState.justFailed = workingState.workingSet;
        workingState.workingSet = [];
      }
      return workingState;
  }
}

function Game(props) {

  let workingState = cloneDeep(initialState);
  workingState.cards = props.cards;

  const [state, dispatch] = useReducer(reducer, workingState);

  return (
    <div className="container">
      <h3>Game, SET, Match</h3>
      <Header gameState={state.gameState} dispatch={dispatch} />
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