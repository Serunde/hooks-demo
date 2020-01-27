import React, { useContext } from 'react';
import { Context } from './ContextStore';

function Button() {
    const { isOn, switchCount, toggle } = useContext(Context);

    return (
        <span>
            <button onClick={toggle}>{isOn ? 'On' : 'Off'}</button>
            <span>Toggled {switchCount} times</span>
        </span>
    );
}

export default Button;
