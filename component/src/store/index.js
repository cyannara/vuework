import { createStore } from 'vuex'
import { userinfo } from './modules/component-a'

export const store = createStore({
  modules: {
    userinfo: userinfo,
  },
})
