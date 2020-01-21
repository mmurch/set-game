import React from 'react';

function Header(props) {

    function handleReset() { props.dispatch({ type: 'reset-game' }); }
    function handleStart() { props.dispatch({ type: 'start-game' }); }
    function handlePause() { props.dispatch({ type: 'pause-game' }); }

    let startButton = null;
    if (props.gameState == 'unstarted') {
        startButton = <button
            onClick={handleStart}
            className="button button-primary">Start</button>;
    }
    else if (props.gameState == 'running') {
        startButton = <button
            onClick={handlePause}
            className="button">Pause ||</button>;
    }
    else if (props.gameState == 'paused') {
        startButton = <button
            onClick={handleStart}
            className="button button-primary">Continue</button>;
    }

    return (
        <div className="row">
            {startButton}
            <button
                className="button u-pull-right"
                onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Header