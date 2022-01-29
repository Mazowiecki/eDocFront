import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Dashboard } from './Components/Dashboard/Dashboard';
import { createStore } from 'redux';
import allReducers from './Redux/reducers';
import { Provider } from 'react-redux'
import FourOfour from './Components/404/FourOFour'
import reportWebVitals from './reportWebVitals';

// @ts-ignore
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/details/:id" component={Dashboard}/>
                        <Route path="/404" component={FourOfour}/>
                        <Redirect to="/404" />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    ),
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
