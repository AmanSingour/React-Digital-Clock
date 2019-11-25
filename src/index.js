import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './digitalclock.js';

ReactDOM.render(
    <div class="main">
        <div class="image"></div>
        <div class="clock">
            <Clock/>
        </div>
    </div>
    , document.getElementById('root'));

