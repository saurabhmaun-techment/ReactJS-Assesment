import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import'bootstrap/dist/css/bootstrap.min.css';
import CountryDetails from './components/CountryDetails';

export default class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} /> 
          <Route path="/country-details/" exact component={CountryDetails} /> 
          <Route path="/capital-weather/" exact component={CountryDetails} /> 
        </Switch>
      </BrowserRouter>
    )
  }

}