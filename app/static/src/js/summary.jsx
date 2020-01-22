import React from 'react';

function Summary(props) {

    // let's start with 6 blank sections
    let summaryCards = [];
    for (let i = 0; i < 6; i++) {
        summaryCards.push(
            <div className="one-third column" key={i}>
                <div className="one-third column card">&nbsp;</div>
                <div className="one-third column card">&nbsp;</div>
                <div className="one-third column card">&nbsp;</div>
            </div>)
    }

    for (let i = 0; i < props.setsFound.length; i++) {
        let summarySet =
            <div className="one-third column" key={props.setsFound[i][0] + '_' + props.setsFound[i][1] + '_' + props.setsFound[i][2]}>
                <div className="one-third column card"><img src={'/static/img/card_' + props.setsFound[i][0] + '.png'} /></div>
                <div className="one-third column card"><img src={'/static/img/card_' + props.setsFound[i][1] + '.png'} /></div>
                <div className="one-third column card"><img src={'/static/img/card_' + props.setsFound[i][2] + '.png'} /></div>
            </div>;
        summaryCards.splice(i, 1, summarySet);
    }

    return (
        <div className="summary row">
            <div className="three columns">&nbsp;</div>
            <div className="six columns">
                {summaryCards}
            </div>
            <div className="three columns">&nbsp;</div>
        </div>
    );
}

export default Summary