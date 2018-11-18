import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "@reach/router";
import * as api from "../../Api";

class Navbar extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <nav>
        <div className="navbar">
          <Link to="/" className="home">
            Home
          </Link>
          <div className="dropdown">
            <button className="dropbtn">
              Topics
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              {this.state.topics.map(topic => (
                <Link to={`${topic.slug}`} key={topic._id} value={topic.slug}>
                  {topic.title}{" "}
                </Link>
               
              ))}
            </div>
           
          </div>
        
        </div>
      </nav>
    );
  }
  componentDidMount = () => {
    this.fetchTopics();
  };
  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({
        topics
      });
    });
  };
  handleClick = topic => {
    this.props.setTopic(topic);
  };
  handleHome = () => {
    this.props.getHome();
  };
}

export default Navbar;
