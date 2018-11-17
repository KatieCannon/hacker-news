import React from "react";
import CommentVote from "../CommentVote/CommentVote";

const IndividualComment = () => {
  return this.state.comments.map(comment => {
    let commentBy = comment.created_by;
    return (
      <p key={comment._id}>
        <>{comment.body}</>
        <>written by:{commentBy.name}</>
        <button onClick={() => this.removeComment(comment)} comment={comment}>
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
  });
};

export default IndividualComment;
