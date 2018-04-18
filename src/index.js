import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Route,Switch,HashRouter } from 'react-router-dom';
import Albums from './main/Albums';

ReactDOM.render(
<HashRouter>
<Switch>
    <Route exact path='/' component={App}/>
    <Route path='/albums/:id' component={Albums}/>

</Switch>
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();
