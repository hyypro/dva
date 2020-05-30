import React, { Component } from 'react'
import { connect } from 'dva'
import { Table, Button, Popconfirm } from 'antd'
import ModelForm from '@@/ModelForm'

@connect(({ home }) => ({
  data: home.data
}))
export default class Home extends Component {
  
  state = {
    visible: false,
    id: ''
  }
  
  //展示模态框
  showModal = () => {
    this.setState({
      visible: true,
      id: ''
    })
  }
  
  //点击保存
  handleOk = value => {
    const { id } = this.state
    if (id) {
      this.props.dispatch({
        type: 'home/update',
        payload: {id, ...value}
      })
    } else {
      this.props.dispatch({
        type: 'home/addList',
        payload: {...value}
      }) 
    }
    this.setState({
      visible: false,
      id: ''
    })
    
  }
  
  //点击取消
  handleCancel = () => {
    this.setState({
      visible: false,
      id: ''
    })
    this.props.dispatch({
      type: 'home/editData',
      payload: {}
    })
    
  }
  
  //点击删除
  Delete = record => {
    this.props.dispatch({
      type: 'home/deleList',
      payload: record
    })
  }
  
  //表单数据回显
  Update = record => {
    this.props.dispatch({
      type: 'home/editData',
      payload: record
    })
    this.setState({
      visible: true,
      id: record.id
    })
  }
  
  render() {
    const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '地址',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Action',
              dataIndex: '',
              key: 'x',
              render: record => {
                return (
                  <div>
                    <Button onClick={() => this.Update(record)}>Update</Button>
                    <Popconfirm title="确定删除吗?" onConfirm={() => this.Delete(record.id)}>
                      <Button>Delete</Button>
                    </Popconfirm>
                  </div>
                )
              },
            }
          ]
    const { data } = this.props
    const { visible, id } = this.state
    return (
      <div className="pages-home">
        <Button type="primary" onClick={this.showModal}>添加</Button>
        <ModelForm 
          id={id}
          visible={visible}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
        />
        <Table columns={columns} dataSource={data}  rowKey={record => record.id}/>
      </div>
    )
  }
}
