import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Articles from "./Components/Articles/Articles";
import { Router } from "@reach/router";
import Title from "./Components/Title/Title";
import Auth from "./Components/Auth/Auth";
import User from "./Components/User/User";
import Article from "./Components/Article/Article";
import * as api from "../src/Api";
import Greeting from "./Components/Greeting/Greeting";

class App extends Component {
  state = {
    user: null,
    loading: true
  };
  render() {
    return (
      <div className="App">
        <header>
          <Title />
        </header>
        <Navbar setTopic={this.setTopic} getHome={this.getHome} />
        <Auth className="span" login={this.login} user={this.state.user}>
          <User user={this.state.user} logout={this.logout} />
          <Router className="main">
            <Articles path="/" user={this.state.user} />
            <Articles path="/:topic_slug" user={this.state.user} />
            <Article path="/articles/:id" user={this.state.user} />
          </Router>
          <Sidebar />
        </Auth>
        {!this.state.user ? <Greeting /> : <></>}
        <footer className="footer">Copyright Katie Cannon</footer>
      </div>
    );
  }

  setTopic = topic => {
    this.setState({
      topic: topic
    });
  };
  login = username => {
    api.login(username).then(user => {
      this.setState({
        user
      });
    });
  };
  logout = () => {
    this.setState({
      user: null
    });
  };
  getHome = () => {
    this.setState({
      topic: null
    });
  };
}

export default App;
