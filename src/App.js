import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/articles">Articles</Link></li>
            </ul>
          </header>
          <hr/>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/articles" component={Articles} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div><h3>Home</h3></div>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <div><h3>Profile</h3></div>
    )
  }
}

class Articles extends Component {
  render() {
    return (
      <div><h3>Articles</h3></div>
    )
  }
}

export default App;