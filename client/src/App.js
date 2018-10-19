import React, { Component } from 'react';
import just_for_laughs from './just_for_laughs.png';
import './App.css';

import { NavLink, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

// import Home from './components/Home';
import JokesList from './components/JokesList';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

class App extends Component {

  userSignOut = () => {
    localStorage.removeItem('jwt');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="logo-nav">
          <img src={just_for_laughs} className="App-logo" alt="logo" />
          <p>
            Just for laughs
          </p>
          </div>
          <nav>
            {/* <NavLink to="/" exact>
              Home
            </NavLink>
            &nbsp;|&nbsp; */}
            <NavLink to="/jokes">Jokes</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/signin">Sign In</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/signup">Sign Up</NavLink>
            &nbsp;|&nbsp;
            
            <span onClick={this.userSignOut}>Sign Out</span>
          </nav>
        </header>

        <main>
        {/* <Route path="/" component={Home} exact /> */}

        <Route
          path="/jokes"
          component={JokesList} />

        <Route
          path="/signup"
          component={SignUpForm}/>


        <Route
          path="/signin"
          component={SignInForm}/> 
        </main>
        
      </div>
    );
  }
}

export default withRouter(App);
