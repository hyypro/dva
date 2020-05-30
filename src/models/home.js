import { findUser, add, dele } from '@/services/home'

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

    getEdid(state, { payload }) {
      return { ...state, editData: payload}
    }
  },
  
  //触发异步
  effects: {
    
    //获取默认数据
    *getList({ payload }, { call, put, select }) {
  
      const data = yield call(findUser)
    

      yield put({
        type: 'getData',
        payload: data.users
      })
    },

    //添加
    *addList({ payload }, { call, put, select }) {

      yield call(add, payload)
     
      yield put({
        type: 'getList',
      })
    },

    //删除
    *deleList({ payload }, { call, put, select }) {

      yield call(dele, {id: payload})
    
      yield put({
        type: 'getList',
      })
    },

    //修改表单回填
    *editData({ payload }, { call, put, select }) {
      yield put({
        type: 'getEdid',
        payload
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