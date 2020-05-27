import { findUser } from '@/services/home'

const { pathToRegexp } = require('path-to-regexp')

export default {

  namespace: 'home',
  
  state: {
    data: []
  },
  
  reducers: {

    //获取默认列表
    getData (state, { payload }) {
      return { ...state, data: payload }
    },

    
  },
  
  //触发异步
  effects: {
    *getList({ payload }, { call, put, select }) {
      
      const data = yield call(findUser)
    
      // yield put({
      //   type: 'getData',
      //   payload: payload
      // })
    }
  },
  subscriptions: {
    fn ({ history, dispatch }) {
      history.listen(({ pathname }) => {
        const regexp = pathToRegexp('/home').exec(pathname)
        if(regexp) {
          dispatch({ type: 'getList' })
        }
      })
    }
  }
}