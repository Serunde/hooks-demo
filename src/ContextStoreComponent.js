import React, { Component } from 'react';

export const Context = React.createContext();

class ContextStore extends Component {
    state = {
        isOn: false,
        switchCount: 0
    }

    toggle = () => {
        this.setState(state => ({ isOn: !state.isOn }));
        this.setState(state => ({ switchCount: state.switchCount + 1 }));
    }

    render() {
        const { isOn, switchCount, toggle } = this.state;
        return (
            <Context.Provider value={{ isOn, switchCount, toggle }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default ContextStore;
