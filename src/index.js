import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/async.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Users from './containers/users'
import Home from './components/home'
import {Provider} from 'react-redux';
import UsersStore from './store';
import NavBar from './components/navBar';
import UserProfile from './containers/userProfile';


ReactDOM.render(
    <Provider store={UsersStore}>
    <BrowserRouter>
        <App>
            <div>
                <NavBar/>
                <Route  path='/' component={App}/>
                <Route  path='/home' component={Home}/>
                <Route  path='/users' component={Users} />
                <Route  path='/user/:userName' component={UserProfile} />


            </div>
        </App>

    </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
