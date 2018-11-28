import React, { Component } from "react";
import * as api from "../../Api";
import "../ArticleVote/ArticleVote.css";
class ArticleVote extends Component {
  state = {
    // voteChange: 0,
    // orginalVoteCount: this.props.article.votes,
    voteUpClicked: false,
    voteDownClicked: false,
    updatedVoteCount: this.props.article.votes
  };
  render() {
    // console.log(this.props)
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
            {" "}
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
    api.vote(this.props._id, this.props.section, direction);
    // this.setState({
    //   voteChange:
    //     direction === "up"
    //       ? this.state.voteChange + 1
    //       : this.state.voteChange - 1,
    //      voteUpClicked:direction==='up'? true:false,
    //      voteDownClicked:direction==='down'? true:false
    // });
    if (direction === "up") {
      this.setState({
        voteUpClicked: true,
        updatedVoteCount: this.state.updatedVoteCount + 1
      });
    } else if (direction === "down") {
      this.setState({
        voteDownClicked: true,
        updatedVoteCount: this.state.updatedVoteCount - 1
      });
      // }else if (direction ==='up' && this.state.voteDownClicked){
      //   this.setState({
      //     voteUpClicked:true,
      //     updatedVoteCount: +
      //   })
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
