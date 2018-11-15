import React, { Component } from "react";
import * as api from "../../Api";
import ArticleVote from "../ArticleVote/ArticleVote";
import CommentAdder from "../CommentAdder/CommentAdder";
import CommentVote from "../CommentVote/CommentVote";

class Article extends Component {
  state = {
    article: {},
    created_by: {},
    articleComments: []
  };
  render() {
    console.log(this.state.articleComments, "comments");
    return (
      <div>
        <span>
          {this.state.article.title}
          <br />
          <br />
          {this.state.article.body}
          <br />
          <br />
          created by: {this.state.created_by.name}
          <br />
          Comments: {this.state.article.commentCount}
          <br />
          <CommentAdder
            user={this.props.user}
            addNewComment={this.addNewComment}
            article={this.state.article}
          />
          {this.state.articleComments.map(comment => {
            let commentBy = comment.created_by;
            return (
              <p key={comment._id}>
                {" "}
                <>{comment.body}</>
                <br />
                 <>written by:{commentBy.name}</> 
                 <button onClick={()=>this.removeComment(comment)}>Delete Comment</button>
                <CommentVote
                  votes={comment.votes}
                  article={this.state.article}
                  _id={comment._id}
                  section={"comments"}
                  comment={comment}
                />
              </p>
            );
          })}
          <ArticleVote
            votes={this.state.article.votes}
            article={this.state.article}
            _id={this.state.article._id}
            section={"articles"}
          />
        </span>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchArticle();
  };
  fetchArticle = () => {
    //console.log(this.props.article._id)
    api
      .getArticle(this.props.id)
      .then(article => {
        this.setState({
          article: article,
          created_by: article.created_by
        });
      })
      .then(() => this.fetchArticleComments(this.state.article._id));
  };

  fetchArticleComments = id => {
    //console.log(this.state.article._id)
    api.getArticleComments(id).then(articleComments => {
      console.log(articleComments, "here");
      this.setState({
        articleComments
      });
    });
  };
  addNewComment = (id, newComment) => {
    api.addComment(id, newComment).then(comment => {
      this.setState({
        articleComments: [comment, ...this.state.articleComments]
      });
    });
  };

  removeComment = (comment) => {
    console.log(comment,"comment to delete")
   const id = comment._id
    api.deleteComment(id).then(
      this.setState({
        articleComments:this.state.articleComments.filter(comment => comment._id !== id)
      })
  

    )}
  }

export default Article;
