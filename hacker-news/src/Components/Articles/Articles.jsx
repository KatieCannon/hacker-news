import React, { Component } from "react";
import "./Articles.css";
import * as api from "../../Api";
import { Link } from "@reach/router";
import ArticleVote from "../ArticleVote/ArticleVote";
import CreateArticle from "../CreateArticle/CreateArticle";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    // console.log(this.state.articles)
    return (
      <main>
        <CreateArticle
          makeArticle={this.makeArticle}
          user={this.props.user}
          add
        />
        {this.state.articles.map(article => {
          const creator = article.created_by
          return (
            <p key={article._id}>
              <Link to={`/articles/${article._id}`} id={article._id}>
                {article.title}
              </Link><br/>
              <ArticleVote
                article={article}
                _id={article._id}
                section={"articles"}
              />
              <br/>
<>Author :{creator.name}</>
            </p>
          );
        })}
      </main>
    );
  }
  componentDidMount = () => {
    this.fetchArticles();
  };
  fetchArticles = () => {
    if (this.props.topic === null)
      api.getArticles().then(articles => {
        this.setState({
          articles: articles.filter(article => article.commentCount > 10)
        });
      });
  };
  componentDidUpdate = prevProps => {
    if (prevProps.topic !== this.props.topic && this.props.topic !== null) {
      api.getArticlesByTopic(this.props.topic).then(articles => {
        this.setState({
          articles
        });
      });
    } else {
      if (prevProps.topic !== this.props.topic && this.props.topic === null) {
        this.fetchArticles();
      }
    }
  };

  makeArticle = newArticle => {
    api.postArticle(newArticle).then(article => {
      this.setState({
        articles: [article, ...this.state.articles]
      });
    });
  };
}

export default Articles;
