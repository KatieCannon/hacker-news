import React, { Component } from "react";
import * as api from "..//..//Api";
import '../CommentVote/CommentVote.css'

class CommentVote extends Component {
  state = {
    // voteChange: 0
    orginalVoteCount: this.props.comment.votes,
    voteUpClicked: false,
    voteDownClicked: false
  };
  render() {
    // console.log(this.props)
    return (
      <>
        <button class ="comment"
          onClick={() => this.vote("up")}
          disabled={this.state.voteUpClicked === true}><>
        <i class="arrow up"></i></>
          {/* like */}
        </button>
        <span className='commentVote'>{`votes:${this.state.updatedVoteCount
            ? this.state.updatedVoteCount
            : this.state.orginalVoteCount}`}</span>
        <button class = "comment"
          onClick={() => this.vote("down")}
          disabled={this.state.voteDownClicked === true}><>
          <i class="arrow down "></i></>
        
        </button>
      </>
    );
  }
  vote = direction => {
    api.vote(this.props._id, this.props.section, direction);

    // 
    if (direction === "up") {
      this.setState({
        voteUpClicked: true,
        updatedVoteCount: this.state.orginalVoteCount + 1
      });
    } else if (direction === "down") {
      this.setState({
        voteDownClicked: true,
        updatedVoteCount: this.state.orginalVoteCount - 1
      });
    
    };
  };
}

export default CommentVote;
