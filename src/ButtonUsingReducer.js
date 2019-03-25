import React, { useContext } from 'react';
import { Context } from './ContextStoreWithReducer';

function Button() {
    const { isOn, dispatch } = useContext(Context);

    const toggle = () => dispatch({ type: 'toggle' });

    return (
        <div>
            <p>This button uses a context store with a reducer (logs in console window)</p>
            <button onClick={toggle}>{isOn ? 'On' : 'Off'}</button>
        </div>
    );
}

export default Button;
