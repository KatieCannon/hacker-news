import React, { Component } from "react";

 class CommentAdder extends Component {
  state = {
    body: ""
  };
  render() {
    return (
      <>
        <label htmlFor="comment">AddComment:</label>
        <input  type="text" name="body"  onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add Comment</button>
      </>
    );
  }
  handleChange = event => {
    this.setState({
      body: event.target.value
    });
  };
  handleSubmit = event => {
    console.log(this.props.user._id, "commentuser");
    event.preventDefault();
    const newArticle = this.state;

    newArticle.created_by = this.props.user._id;
    console.log(newArticle, "new");
    this.props.addNewComment(this.props.article._id, newArticle)
    this.setState({
      body: ""
    })
  };
 
    
}

export default CommentAdder;
