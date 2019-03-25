import React, { useState, useContext } from 'react';
import { useInterval } from './useInterval.js';
import { Context } from './ContextStore';

export function Counter() {
    const [count, setCount] = useState(0);
    const [meter, setMeter] = useState('');

    const handleClick = () => {
        setCount(count + 1);
        setMeter(meter + '|');
    }

    const delay = 1000 / (meter.length * 0.5);

    useInterval(() => {
        if (meter !== '') setMeter(meter.slice(1));
    }, delay);

    const { isOn, toggle } = useContext(Context);

    return (
        <div>
            <br/>
            <button onClick={handleClick}>
                Click
            </button>
            <span>{meter}</span>
            <br/><br/>
            <p>This button has its own instance of Context.Provider</p>
            <button onClick={toggle}>{isOn ? 'On' : 'Off'}</button>
            <br/><br/>
        </div>
    )
}
