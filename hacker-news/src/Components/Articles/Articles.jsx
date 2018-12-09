import React, { Component } from "react";
import "./Articles.css";
import * as api from "../../Api";
import { Link } from "@reach/router";
import ArticleVote from "../ArticleVote/ArticleVote";
import CreateArticle from "../CreateArticle/CreateArticle";
import Loader from "../Loader/Loader";

class Articles extends Component {
  state = {
    articles: [],
    loading: true
  };
  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <main>
        <CreateArticle makeArticle={this.makeArticle} user={this.props.user} />
        {this.state.articles.map(article => {
          const creator = article.created_by;
          return (
            <article className="articles" key={article._id}>
              <Link
                to={`/articles/${article._id}`}
                className="articleTitle"
                id={article._id}
              >
                {article.title}
              </Link>
              <section className="author">Author :{creator.name}</section>
              <ArticleVote
                article={article}
                _id={article._id}
                section={"articles"}
              />
            </article>
          );
        })}
      </main>
    );
  }

  componentDidMount = () => {
    this.fetchArticles();
  };

  fetchArticles = () => {
    if (!this.props.topic_slug) {
      api.getArticles().then(articles => {
        this.setState({
          articles: articles.filter(article => article.votes > 1),
          loading: !true
        });
      });
    } else {
      api.getArticlesByTopic(this.props.topic_slug).then(articles => {
        this.setState({
          articles,
          loading: !true
        });
      });
    }
  };

  componentDidUpdate = prevProps => {
    if (prevProps.topic_slug !== this.props.topic_slug) {
      this.fetchArticles();
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
