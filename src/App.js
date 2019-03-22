import React, { Component } from 'react';
import { Counter } from './Counter.js';
import { ContextStore } from './ContextStore';
import { ContextStoreWithReducer } from './ContextStoreWithReducer';
import ButtonUsingReducer from './ButtonUsingReducer';
import ButtonPanel from './ButtonPanel';
import './App.css';

class App extends Component {
    render() {
        // Each declaration of the store is an isolated instance
        return (
            <div className="App">
                <ContextStore>
                    <Counter/>
                </ContextStore>
                <ContextStore>
                    <ButtonPanel/>
                </ContextStore>
                <ContextStoreWithReducer>
                    <ButtonUsingReducer/>
                </ContextStoreWithReducer>
            </div>
        );
    }
}

export default App;
