import React from 'react';

const Child = (props) => {
    return (
        <div>
            <h2>{props.name} {props.id} {props.age}</h2>
            <h2>{props.id}</h2>
            <h2>{props.age}</h2>
        </div>
    )
}

export default Child;