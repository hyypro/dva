import { findUser, add, dele, updata } from '@/services/home'

const { pathToRegexp } = require('path-to-regexp')

export default {
  namespace: 'home',
  
  state: {
    data: [],
    editData: []
  },
  
  reducers: {
    //获取默认列表
    getData (state, { payload }) {
      return { ...state, data: payload }
    },
    
    //数据回显
    getEdid(state, { payload }) {
      return { ...state, editData: payload}
    }
  },
  
  //触发异步
  effects: {
    //获取默认数据
    *getList({ payload }, { call, put }) {
      const data = yield call(findUser)
      yield put({
        type: 'getData',
        payload: data.users
      })
    },

    //添加
    *addList({ payload }, { call, put }) {
      yield call(add, payload)
      yield put({
        type: 'getList',
      })
    },

    //删除
    *deleList({ payload }, { call, put }) {
      yield call(dele, {id: payload})
      yield put({
        type: 'getList',
      })
    },

    //修改表单回填
    *editData({ payload }, { put }) {
      yield put({
        type: 'getEdid',
        payload
      })
    },

    //保存修改
    *update({ payload }, { call, put }) {
      yield call(updata, payload)
      yield put({
        type: 'getList',
      })
    }
  },
  
  subscriptions: {
    Sym ({ history, dispatch }) {
      history.listen(({ pathname }) => {
        const regexp = pathToRegexp('/').exec(pathname)
        if(regexp) {
          dispatch({ type: 'getList' })
        }
      })
    }
  }
}