import React from "react";
import { Form } from "antd";
import { Input } from "@material-ui/core";
const { TextArea } = Input;

export default function AddNewForm() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form name="form" className="form" onFinish={onFinish} layout="vertical">
      <div className="addForm_body">
        <div className="main_infomation">
          <h3>Main Infomation</h3>
          <Form.Item
            rules={[{ required: true, message: "Please input product name!" }]}
          >
            <Input placeholder="Product name..." id="name" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input product ID!" }]}
          >
            <Input placeholder="Product ID..." id="id" />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true, message: "Please input product category!" },
            ]}
          >
            <Input placeholder="Product category..." id="category" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input product short description!",
              },
            ]}
          >
            <Input placeholder="Short description..." id="shortDesc" />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true, message: "Please input Full description!" },
            ]}
          >
            <Input placeholder="Full description..." id="fullDesc" />
          </Form.Item>
        </div>
        <div className="pricing">
          <h3>Pricing</h3>
        </div>
        <div className="general_infomation">
          <h3>General Infomation</h3>
        </div>
      </div>
    </Form>
  );
}
