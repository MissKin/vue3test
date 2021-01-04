import { createStore } from 'vuex'

const states = {
  theme: 'oneScreen'
}

const mutations = {
  setThemeInfo (state: any, theme: string) {
    state.theme = theme
  }
}

const actions = {
  // asyncGetThemeInfo({commit}){
  //   setTimeout(() => {
  //     commit('setThemeInfo',+new Date() + 'action')
  //   },2000)
  // }
}
export default createStore({
  state: states,
  mutations,
  actions
})
