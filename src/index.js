import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
import App from './components/app';
import Form from './components/form';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact={true} path='/' component={App}/>
            <Route path='/form' component={Form}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
