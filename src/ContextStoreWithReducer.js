import React, { useReducer } from 'react';

const Context = React.createContext();

const initialState = {
    isOn: false,
    switchCount: 0
}

let reducer = (state, action) => {
    switch(action.type) {
        case 'toggle':
            console.log('Button toggle: ' + !state.isOn)
            return {
                ...state,
                isOn: !state.isOn,
                switchCount: state.switchCount + 1
            };
        default:
            return { ...state };
    }
}

function ContextStoreWithReducer(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isOn, switchCount } = state;
    const value = { isOn, switchCount, dispatch }

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
}

export { ContextStoreWithReducer, Context };
