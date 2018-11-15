import React, { Component } from "react";
// import * as api from '..//../Api'
import './CreateArticle.css'

class CreateArticle extends Component {
  state = {
    title: "",
    body: "",
    belongs_to: ""
  };
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.createArticle}>
        <label htmlFor="title">Title:</label>
        <input  type="text" name="title" onChange={this.handleChange} />
        <label htmlFor="topic">Topic:</label>
        <input type="text" name="belongs_to" onChange={this.handleChange} />
        <label htmlFor="contents">Contents</label>
        <textarea type="text" name="body" onChange={this.handleChange} />
        <button>Create Article</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createArticle = event => {
    event.preventDefault();
    const newArticle = this.state;

    newArticle.created_by = this.props.user._id;
    this.props.makeArticle(newArticle);
  };
}

export default CreateArticle;
