import React, { Component } from "react";
import Axios from "axios";
import { Button, Card } from "antd";

import CustomForm from "../components/Form";

class ArticleDetail extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    // console.log(articleId);
    Axios.get(`http://127.0.0.1:8000/api/${articleID}`, {}).then((res) => {
      this.setState({
        article: res.data,
      });
    });
  }

  handleDelete = (event) => {
    const articleID = this.props.match.params.articleID;
    // console.log(articleId);
    Axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
    this.props.history.push("/");
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        {" "}
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        <br />
        <h3>Update</h3>
        <CustomForm
          requestType="put"
          articleID={this.props.match.params.articleID}
          ButtonText="Update"
        />
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </div>
    );
  }
}

export default ArticleDetail;
