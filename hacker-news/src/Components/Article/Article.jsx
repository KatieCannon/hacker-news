import React, { Component } from "react";
import * as api from "../../Api";
import ArticleVote from "../ArticleVote/ArticleVote";
import "../Article/Article.css";
import Loader from "../Loader/Loader";
import Comments from "../Comments/Comments";

class Article extends Component {
  state = {
    article: {},
    created_by: {},
    loading: true
  };
  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <div>
        <main>
          <p>
            {this.state.article.title}
            {this.state.article.body}
            created by: {this.state.created_by.name}
            <ArticleVote
              votes={this.state.article.votes}
              article={this.state.article}
              _id={this.state.article._id}
              section={"articles"}
            />
            Comments: {this.state.article.commentCount}
            <br />
          </p>
          <Comments id={this.state.article._id} user={this.props.user} />
        </main>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchArticle();
  };

  fetchArticle = () => {
    api.getArticle(this.props.id).then(article => {
      this.setState({
        article: article,
        created_by: article.created_by,
        loading: false
      });
    });
  };
}

export default Article;
