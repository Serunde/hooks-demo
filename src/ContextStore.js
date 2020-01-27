import React, { useState } from 'react';

const Context = React.createContext();

function ContextStore(props) {
    const [isOn, setOn] = useState(false);
    const [switchCount, setCount] = useState(0);

    const toggle = () => {
        setOn(!isOn);
        setCount(switchCount + 1);
    }

    return (
        <Context.Provider value={{ isOn, switchCount, toggle }}>
            {props.children}
        </Context.Provider>
    );
}

export { ContextStore, Context };
