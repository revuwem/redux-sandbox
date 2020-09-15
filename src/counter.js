import React from 'react';

const Counter = ({counter, inc, dec, random}) => {

    return (
        <div className="jumbotron">
            <h1>Redux Sandbox</h1>
            <br />
            <h2>{counter}</h2>
            <br />
            <div className="d-flex align-items-center">
                <button 
                    className="btn btn-info mr-1"
                    onClick={dec}>Decrement</button>
                <button 
                    className="btn btn-success mr-1"
                    onClick={inc}>Increment</button>
                <button 
                    className="btn btn-primary mr-1"
                    onClick={random}>Random</button>
            </div>
        </div>
    );
};

export default Counter;