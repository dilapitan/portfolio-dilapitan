import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tags: [
      {
        id: 1,
        label: '#vue',
        backgroundColor: '#42b883',
        textColor: '#12181B',
      },
      {
        id: 2,
        label: '#node',
        backgroundColor: '#66BB6A',
        textColor: '#12181B',
      },
      {
        id: 3,
        label: '#firebase',
        backgroundColor: '#F87F00',
        textColor: '#202124',
      },
      {
        id: 4,
        label: '#notion-api',
        backgroundColor: '#000000',
        textColor: '#FFFFFF',
      },
    ],
  },
  mutations: {},
  actions: {},
})
