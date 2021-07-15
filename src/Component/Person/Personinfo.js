import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>I am {props.name} and I am {props.title} </p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.change} />

        </div>

    )
}

export default person;