import React, { Component } from "react";
import * as api from "../../Api";
import "../ArticleVote/ArticleVote.css";
class ArticleVote extends Component {
  state = {
    voteUpClicked: false,
    voteDownClicked: false,
    updatedVoteCount: this.props.article.votes
  };
  render() {
    return (
      <>
        <button
          className="articleVote"
          onClick={() => this.vote("up")}
          disabled={this.state.voteUpClicked === true}
        >
          <>
            <i
              className={`i ${
                this.state.voteUpClicked ? "arrow up active" : "arrow up"
              }`}
            />
          </>
        </button>
        <span className="articleData">{`votes:${
          this.state.updatedVoteCount
        }`}</span>
        <button
          className="articleVote"
          onClick={() => this.vote("down")}
          disabled={this.state.voteDownClicked === true}
        >
          <>
            <i
              className={`i ${
                this.state.voteDownClicked ? "arrow down active" : "arrow down"
              }`}
            />
          </>
        </button>
      </>
    );
  }
  vote = direction => {
    api.vote(this.props._id, this.props.section, direction)
    .then(data=>{
    if (direction ==="up" && this.state.voteDownClicked === true){
      this.setState({
        voteUpClicked: false,
        updatedVoteCount: this.props.article.votes ,
        voteDownClicked: false
      })
    }  else if(direction === "up" && this.state.voteDownClicked === false ) {
      this.setState({
        voteUpClicked: true,
        updatedVoteCount: this.props.article.votes + 1,
        voteDownClicked:false
      });
    }else if(direction ==="down" && this.state.voteUpClicked === true){
      this.setState({
        voteUpClicked: false,
      updatedVoteCount: this.props.article.votes,
      voteDownClicked: false
      })
    } else if
      (direction === "down"&& this.state.voteUpClicked === false) {
        this.setState({
          voteDownClicked: true,
          updatedVoteCount: this.props.article.votes - 1,
          voteUpClicked:false
        });
      }
    })
    };
}

export default ArticleVote;
