import React, { Component } from "react";
import * as api from "..//..//Api";

class CommentVote extends Component {
  state = {
    voteChange: 0
  };
  render() {
    // console.log(this.props)
    return (
      <>
        <button
          onClick={() => this.vote("up")}
          disabled={this.state.voteChange === 1}
        >
          like
        </button>
        <span>{`votes:${this.props.comment.votes +
          this.state.voteChange}`}</span>
        <button
          onClick={() => this.vote("down")}
          disabled={this.state.voteChange === -1}
        >
          Hate
        </button>
      </>
    );
  }
  vote = direction => {
    api.vote(this.props._id, this.props.section, direction);

    this.setState({
      voteChange:
        direction === "up"
          ? this.state.voteChange + 1
          : this.state.voteChange - 1
    });
  };
}
export default CommentVote;
