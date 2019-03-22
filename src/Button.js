import React, { useContext } from 'react';
import { Context } from './ContextStore';

function Button() {
    const { isOn, toggle } = useContext(Context);

    return (
        <button onClick={toggle}>{isOn ? 'On' : 'Off'}</button>
    );
}

export default Button;
