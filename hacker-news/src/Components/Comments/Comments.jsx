import React, { Component } from "react";
import CommentVote from "../CommentVote/CommentVote";
import * as api from "..//../Api";
import CommentAdder from "../CommentAdder/CommentAdder";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div>
        <CommentAdder
          user={this.props.user}
          addNewComment={this.addNewComment}
          id={this.props.id}
        />
        {this.state.comments.map(comment => {
          let commentBy = comment.created_by;
          return (
            <p key={comment._id}>
              <>{comment.body}</>
              <>written by:{commentBy.name}</>
              <button
                onClick={() => this.removeComment(comment)}
                comment={comment}
              >
                Delete Comment
              </button>
              <CommentVote
                votes={comment.votes}
                article={this.props.article}
                _id={comment._id}
                section={"comments"}
                comment={comment}
              />
            </p>
          );
        })}
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchComments(this.props.id);
  };

  fetchComments = id => {
    api.getArticleComments(id).then(comments => {
      this.setState({
        comments
      });
    });
  };

  removeComment = comment => {
    if (this.props.user._id === comment.created_by._id) {
      const id = comment._id;
      api.deleteComment(id).then(
        this.setState({
          comments: this.state.comments.filter(comment => comment._id !== id)
        })
      );
    }
  };
  addNewComment = (id, newComment) => {
    api.addComment(id, newComment).then(comment => {
      this.setState({
        comments: [comment, ...this.state.comments]
      });
    });
  };
}

export default Comments;
