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
      <main>
        <div className="article">
          <section className="box"> {this.state.article.title}</section>
          <section className="box">{this.state.article.body}</section>
          <section className="box">
            created by: {this.state.created_by.name}
          </section>
          <section className="box">
            <ArticleVote
              votes={this.state.article.votes}
              article={this.state.article}
              _id={this.state.article._id}
              section={"articles"}
            />
          </section>
          Comments: {this.state.article.commentCount}
        </div>
        <>
          <Comments id={this.state.article._id} user={this.props.user} />
        </>
      </main>
    );
  }

  componentDidMount = () => {
    this.fetchArticle();
  };

  fetchArticle = () => {
    api
      .getArticle(this.props.id)
      .then(article => {
        this.setState({
          article: article,
          created_by: article.created_by,
          loading: false
        });
      })
      .catch(error => {
        this.props.navigate("/error", {
          state: {
            status: 404,
            from: "article"
          }
        });
      });
  };
}

export default Article;
