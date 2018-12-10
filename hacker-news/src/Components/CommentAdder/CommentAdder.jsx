import React, { Component } from "react";
import "../CommentAdder/CommentAdder.css";

class CommentAdder extends Component {
  state = {
    body: "",
    belongs_to: ""
  };
  render() {
    return (
      <form className="addComment">
        <label htmlFor="comment">Comment as {this.props.user.username}</label>
        <textarea
        className='commenter'
          type="text"
          name="body"
          onChange={this.handleChange}
          value={this.state.body}
        />
        <button className="adder" onClick={this.handleSubmit}>
          Add Comment
        </button>
      </form>
    );
  }
  handleChange = event => {
    this.setState({
      body: event.target.value,
      belongs_to: this.props.id
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newComment = { ...this.state };
    newComment.created_by = this.props.user._id;
    this.props.addNewComment(this.props.id, newComment);
    this.setState({
      body: "",
      belongs_to: ""
    });
  };
}

export default CommentAdder;
