import React, { Component } from 'react';

export const Context = React.createContext();

class ContextStore extends Component {
    state = {
        isOn: false,
    }

    toggle = () => {
        this.setState(state => ({isOn: !state.isOn}));
    }

    render() {
        const { isOn, toggle } = this.state;
        return (
            <Context.Provider value={{ isOn, toggle }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default ContextStore;
