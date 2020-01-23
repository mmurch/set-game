import React from 'react';

function Metrics(props) {

    const events = props.events.map((event) => {
        return <div>{event.event}: {event.time}</div>
    });

    return (
        <div className="row">{events}</div>
    );
}

export default Metrics