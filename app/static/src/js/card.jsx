import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

function Card(props) {

    const imgId = props.isFaceUp ? props.id : 'blank';

    function handleClick() {
        if (!props.isFaceUp) {
            return;
        }
        props.dispatch({ type: 'click-card', id: props.id });

        // this is a dirty hack to get the "selected" state to appear before
        // clearing out the workingSet. but animations are a hackfest
        setTimeout(() => props.dispatch({ type: 'check-set' }), 10);
    }

    const selected = props.isSelected ? 'selected' : '';
    const justFailed = props.justFailed ? 'animated shake faster' : '';
    const justPassed = props.justPassed ? 'animated heartbeat fast' : '';

    return (
        <CSSTransitionGroup
            transitionName={{
                appear: 'animated',
                appearActive: 'flipInY'
            }}
            transitionAppear={true}
            transitionEnter={false}
            transitionLeave={false}
            transitionAppearTimeout={500}>
            <div className={`card ${selected} ${justFailed} ${justPassed}`}
                onClick={handleClick} key={props.id}>
                <img src={`/static/img/card_${imgId}.png`} />
                {props.isFaceUp ? '' : <span className="card-back-text">SET</span>}
            </div>
        </CSSTransitionGroup>
    );
}

export default Card