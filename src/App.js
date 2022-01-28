import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './App.css'
import routesConfig from './Routes/routesConfig';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Link to="/" >Home</Link>
          <Link to="/user" >User</Link>
        </div>
        {routesConfig.map((value) => {
          return (
            <Switch key={value.id}>
              <Route
                path={value.path}
                component={value.component}
                exact={value.exact}
              ></Route>
            </Switch>
          )
        })}
      </div>
    );
  }
}

export default App;
