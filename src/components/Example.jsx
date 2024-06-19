import React from 'react';
import "./Example.css";

const user = {name: "Tom", age: 16, animal: true};

const Example = () => {
    return (
        <div>
            <h1 style={{color: "dodgerblue", fontSize: "1.5em"}}>{user.name}</h1>
            <div className='date'>{(new Date()).getDate()}</div>
            <hr />
            {user.age >= 18 ? 'Welcome' : 'Access denied'}
            {user.animal && 'OK'}
        </div>
    );
}

export default Example;