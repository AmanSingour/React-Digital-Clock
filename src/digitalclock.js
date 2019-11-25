import React, { Component } from 'react';
import './Clock.css';

// ~By Aman Singour~
class Time extends Component{
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString().replace(","," ")
        };
        this.updateTime();
    }

    updateTime() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString().replace(",","")
            });
        }, 1000);
    }

    render(){
        return (
            <h1>{this.state.time}</h1>
        )
    }
}

export default Time;