import React from 'react';

function Summary(props) {

    // let's start with 6 blank sections
    let summaryCards = [];
    for (let i = 0; i < 6; i++) {
        summaryCards.push(
            <td className="summary-set" key={i}>
                <div className="card summary-card">&nbsp;</div>
                <div className="card summary-card">&nbsp;</div>
                <div className="card summary-card">&nbsp;</div>
            </td>)
    }

    for (let i = 0; i < props.setsFound.length; i++) {
        let summarySet =
            <td className="summary-set" key={props.setsFound[i][0] + '_' + props.setsFound[i][1] + '_' + props.setsFound[i][2]}>
                <div className="card summary-card">
                    <img src={'/static/img/card_' + props.setsFound[i][0] + '.png'} />
                </div>
                <div className="card summary-card">
                    <img src={'/static/img/card_' + props.setsFound[i][1] + '.png'} />
                </div>
                <div className="card summary-card">
                    <img src={'/static/img/card_' + props.setsFound[i][2] + '.png'} />
                </div>
            </td>;
        summaryCards.splice(i, 1, summarySet);
    }

    return (
        <div className="row">
            <table className="summary">
                <tbody>
                    <tr className="summary-set-row">
                        {summaryCards.slice(0, 3)}
                    </tr>
                    <tr className="summary-set-row">
                        {summaryCards.slice(3, 6)}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Summary