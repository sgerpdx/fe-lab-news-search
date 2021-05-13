import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
  <section>
    <h1>{title}</h1>
    <h4>{author}</h4>
    <p>{description}</p>
  </section>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;
