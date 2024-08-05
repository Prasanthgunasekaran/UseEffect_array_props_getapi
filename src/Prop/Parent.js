import React from 'react';
import Child from './Child';
import { Link } from 'react-router-dom';

const Parent = () => {
    return (
        <div>
            <h3>Parent Component</h3>
            <Child name="Prasanth.G" id="34567" age='35' />
            <Child id="34567" />
            <Child age="24" /> 
            <Link to={'/array'}>Array</Link><br/>
            <Link to={'/'}>GetApi</Link>

        </div>
    )
}

export default Parent;