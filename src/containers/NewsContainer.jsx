import React, { Component } from 'react';
import ArticleList from '../components/ArticleList';
import { fetchArticles } from '../services/NewsAPI';

export default class NewsContainer extends Component {
  state = {
    articles: [],
    loading: true,
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({
      loading: false,
      articles,
    });
  }

  render() {
    const { loading, articles } = this.state;

    if (loading) return <h1>Loading...</h1>;

    return (
      <>
        <ArticleList articles={articles} />;
      </>
    );
  }
}
