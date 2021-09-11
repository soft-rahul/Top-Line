import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import NewComponent from './NewComponent';



ReactDOM.render(<Router>
    <NewComponent>
    <App/>
    </NewComponent>
</Router>, document.getElementById('root'));