import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Array() {

    const [userInput, setUserInput] = useState([""]);
    const [submittedvalue, setSubmittedValue] = useState(["Red"]);

    const formSubmit = () => {
        setSubmittedValue([...submittedvalue, userInput]);
        setUserInput('');
    };

    return (
        <div>
            <ul>
                {submittedvalue.map((user) => (
                    <li>{user} </li>
                ))}
            </ul>

            <input type='text' value={userInput} onChange={(event) => setUserInput(event.target.value)} />
            <button onClick={formSubmit}>Submit</button>

            <br/>
            <Link to={'/'}>GetApi</Link><br/>
            <Link to={'/props'}>Props</Link>
        </div>
    )

}

export default Array;