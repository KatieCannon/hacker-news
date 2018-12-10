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
      <article className="creator">
        Create new article
        <form className="createArticle" onSubmit={this.createArticle}>
          <div className="titleInput">
            <label>Title:</label>
            <input
              className="titleBox"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="topicInput">
            <label>Topic:</label>
            <select
              className="topicBox"
              onChange={this.handleSelect}
              value={this.state.belongs_to}
            >
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
          </div>
          <div className="contentHeight">
            <label>Content:</label>
            <textarea
              className="contentBox"
              type="text"
              onChange={this.handleChange}
              value={this.state.body}
              name="body"
            />
          </div>
          <button className="buttonInput">Create article</button>
        </form>
      </article>
    );
  }

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
