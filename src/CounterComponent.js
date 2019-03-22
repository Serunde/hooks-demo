import React, { Component } from 'react';

class CounterComponent extends Component {

    state = {
        count: 0,
        meter: ''
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.meter !== '') this.meterSlice()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleClick = () => {
        this.setState(state => ({count: state.count + 1}));
        if (this.state.count % 3 === 0) {
            this.setState(state => ({meter: state.meter + '|'}));
        }
    }

    meterSlice = () => {
        const temp = this.state.meter.slice(1);
        this.setState({
            meter: temp
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>
                    Click
                </button>
                <p>{this.state.meter}</p>
            </div>
        )
    }
}

export default CounterComponent;
