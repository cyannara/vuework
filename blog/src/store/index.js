import { createStore } from 'vuex'
import { about_me } from './modules/about_me'

export const store = createStore({
  modules: {
    about_me: about_me,
  },
})
