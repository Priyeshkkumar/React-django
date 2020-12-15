import React, { Component } from "react";
import Axios from "axios";
import { Card } from "antd";

class ArticleDetail extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    const articleId = this.props.match.paras.articleId;
    Axios.get("http://127.0.0.1:8000/api/${articleId}").then((res) => {
      this.setState({
        articles: res.data,
      });
    });
  }

  render() {
    return (
      <Card title={this.state.article.title}>
        <p>{this.state.article.content}</p>
      </Card>
    );
  }
}

export default ArticleDetail;
