import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './App';
import './index.css';

const routes = (
    <Router>
      <Route component={App} />
    </Router>
  );

ReactDOM.render(routes, document.getElementById('root'));