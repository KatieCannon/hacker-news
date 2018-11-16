import React, { Component } from "react";
import * as api from "../../Api";
import "../ArticleVote/ArticleVote.css";
class ArticleVote extends Component {
  state = {
    // voteChange: 0,
    // orginalVoteCount: this.props.article.votes,
    voteUpClicked: false,
    voteDownClicked: false,
    updatedVoteCount: null
  };
  render() {
    // console.log(this.props)
    return (
      <>
        <button
          class="articleVote"
          onClick={() => this.vote("up")}
          disabled={this.state.voteUpClicked === true}
        >
          <>
            <i class="arrow up" />
          </>
        </button>
        <span>{`votes:${
          this.state.updatedVoteCount
            ? this.state.updatedVoteCount
            : this.props.article.votes
        }`}</span>
        <button
          class="articleVote"
          onClick={() => this.vote("down")}
          disabled={this.state.voteDownClicked === true}
        >
          <>
            {" "}
            <i class="arrow down" />
          </>
        </button>
      </>
    );
  }
  vote = direction => {
    api.vote(this.props._id, this.props.section, direction);
    // this.setState({
    //   voteChange:
    //     direction === "up"
    //       ? this.state.voteChange + 1
    //       : this.state.voteChange - 1
    // });
    if (direction === "up") {
      this.setState({
        voteUpClicked: true,
        updatedVoteCount: this.props.article.votes + 1
      });
    } else if (direction === "down") {
      this.setState({
        voteDownClicked: true,
        updatedVoteCount: this.props.article.votes - 1
      });
    }

    // .catch(err => this.cancelVote())
  };
  // cancelVote = () => {
  //   this.setState({
  //     voteChange: 0
  //   });
  // };
}

export default ArticleVote;
