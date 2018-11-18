import React, { Component } from "react";
import "./CreateArticle.css";

class CreateArticle extends Component {
  state = {
    title: "",
    body: "",
    belongs_to: ""
  };
  render() {
    return (
    
    
<p>
       <form  className = 'createArticle'onSubmit={this.createArticle}>
       <>Create new article</>
      <p>
        <label htmlFor="title">
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        /></p>
        <p>
        <label htmlFor="topic">
          Topic:
        </label>
        <select value={this.state.belongs_to} onChange={this.handleSelect}>
          <option>{this.state.belongs_to}</option>
          <option name="belongs_to" value="football">
            football
          </option>
          <option name="belongs_to" value="coding">
            coding
          </option>
          <option name="belongs_to" value="cooking">
            cooking
          </option>
        </select>
        </p>
        <p>
        <label 
          
          htmlFor="contents"
          value={this.state.body}
        >
          Contents
        </label>
        <textarea 
          type="text"
          name="body"
          onChange={this.handleChange}
          value={this.state.body}
        /></p>
        <p>
        <button>Create Article</button>
      </p>
      </form> 
      </p>
    
    )
  };

  handleSelect = event => {
    this.setState({
      belongs_to: event.target.value
    });
  };
  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createArticle = event => {
    event.preventDefault();
    const newArticle = { ...this.state };

    newArticle.created_by = this.props.user._id;
    this.props.makeArticle(newArticle);
    this.setState({
      title: "",
      body: "",
      belongs_to: ""
    });
  };
}

export default CreateArticle;
