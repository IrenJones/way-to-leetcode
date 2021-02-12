import React from 'react';
import ReactDOM from 'react-dom';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from './components/main/Main';
import FullTable from './components/fullist/TableFull';
import About from './components/about/About'

ReactDOM.render(
  <Router>
    {/* <App />  */}
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/all" component={FullTable} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
