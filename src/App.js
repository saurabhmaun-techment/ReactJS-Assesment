import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} /> 
        </Switch>
      </BrowserRouter>
    )
  }

}