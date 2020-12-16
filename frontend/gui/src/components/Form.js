import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import Axios from "axios";

class CustomForm extends Component {
  handleFormSubmit = (event, requestType, articleID) => {
    const title = event.title;
    const content = event.content;
    switch (requestType) {
      case "post":
        return Axios.post("http://127.0.0.1:8000/api/", {
          title: title,
          content: content,
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      case "put":
        return Axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
          title: title,
          content: content,
        })
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
    }
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <Form
          onFinish={(event) =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <Form.Item label="Title" name="title">
            <Input name="title" placeholder="Put a Title here" />
          </Form.Item>
          <Form.Item label="Content" name="content">
            <Input name="content" placeholder="Enter Some Content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.ButtonText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
