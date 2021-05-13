import React, { Component } from 'react';

export default class NewsContainer extends Component {
  state = {
    loading: true,
  };

  render() {
    const { loading } = this.state;

    if (loading) return <h1>Loading...</h1>;
    // return (

    // )
  }
}
