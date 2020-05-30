import React, { Component } from 'react'
import { connect } from 'dva'
import { Form, Input, Modal, Button } from 'antd'

export default @connect(({ home }) => ({
  editData: home.editData
}))
class ModelForm extends Component {
  
  onFinish = values => {
    this.props.handleOk(values)
    values = ''
  }

  handleCancel = () => {
    this.props.handleCancel()
  }
  
  render() {
    const { visible, id } = this.props
    return (
      <div>
        <Modal
          title={id ? '修改' : '添加'}
          visible={visible}
          width="65%"
          footer={null}
          onCancel={this.handleCancel}
        >
        <Form onFinish={this.onFinish}  >
            <Form.Item
              label="姓名"
              name="name"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="年龄"
              name="age"
              rules={[{ required: true, message: 'Please input your age!' }]}
            >
              <Input />
            </Form.Item>     
            <Form.Item
              label="地址"
              name="address"
              rules={[{ required: true, message: 'Please input your address!' }]}
            >
              <Input />
            </Form.Item> 
            <Form.Item>
              <Button type="primary" htmlType="submit" >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}
