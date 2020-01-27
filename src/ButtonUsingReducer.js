import React, { useContext } from 'react';
import { Context } from './ContextStoreWithReducer';

function Button() {
    const { isOn, switchCount, dispatch } = useContext(Context);

    const toggle = () => dispatch({ type: 'toggle' });

    return (
        <div>
            <p>This button uses a context store with a reducer (logs in console window)</p>
            <button onClick={toggle}>{isOn ? 'On' : 'Off'}</button>
            <span>Toggled {switchCount} times</span>
        </div>
    );
}

export default Button;
