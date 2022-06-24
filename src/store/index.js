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
      {
        id: 5,
        label: '#tensorflow',
        backgroundColor: '#F78B00',
        textColor: '#FFFFFF',
      },
    ],
    projects: [
      {
        id: 1,
        title: 'POLLIMAC-TF 🐝',
        short: 'Pollen Image Classifier using TensorFlow built on the Web',
        tags: ['#tensorflow', '#vue', '#node'],
        projectName: 'pollimac-tf',
      },
      {
        id: 2,
        title: 'Test Me At AWS 📝',
        short:
          'A Flashcard App on SAA-AWS topics on the exploration of Notion API',
        tags: ['#vue', '#node', '#notion-api'],
        projectName: 'test-me-at-aws',
      },
      {
        id: 3,
        title: 'Daily Reading Counter 📖',
        short: 'Number of Pages generator given a Page and a Session',
        tags: ['#vue'],
        projectName: 'daily-reading-counter',
      },
    ],
    studies: [],
  },
  mutations: {},
  actions: {},
})
