import React, { useState } from 'react';

const Context = React.createContext();

function ContextStore(props) {
    const [isOn, setOn] = useState(false);

    const toggle = () => {
        setOn(!isOn);
    }

    return (
        <Context.Provider value={{ isOn, toggle }}>
            {props.children}
        </Context.Provider>
    );
}

export { ContextStore, Context };
