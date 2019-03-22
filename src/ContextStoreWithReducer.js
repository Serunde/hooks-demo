import React, { useReducer } from 'react';

const Context = React.createContext();

const initialState = {
    isOn: false
}

let reducer = (state, action) => {
    switch(action.type) {
        case 'toggle':
            console.log('Button toggle: ' + !state.isOn)
            return { ...state, isOn: !state.isOn };
        default:
            return { ...state };
    }
}

function ContextStoreWithReducer(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isOn } = state;
    const value = { isOn, dispatch }

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
}

export { ContextStoreWithReducer, Context };
