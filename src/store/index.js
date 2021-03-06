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
        long: {
          howItWorks: `The user uploads an image of a pollen and the app gives a list of species with accuracy
            percentages, with the highest is the identified species of the pollen image. The model has a 98.06% accuracy.`,
          howItWasBuilt: `The app uses a part of Tensorflow that was built on top of trained model for image classification.
          The trained model was retrained given a series of pollen images and uses Transfer Learning. The retrained model
          was then used by a backend that was built on Node that throws the results in the front end, built on Vue,
          to display the image in a User Interface.
          `,
        },
        projectImageLink: 'pollimac-tf.png',
      },
      {
        id: 2,
        title: 'Test Me At AWS 📝',
        short:
          'A Flashcard App on SAA-AWS topics on the exploration of Notion API',
        tags: ['#vue', '#node', '#notion-api'],
        projectName: 'test-me-at-aws',
        long: {
          howItWorks: `The user can choose any category for the set of questions and just start
          using the app like how one would use flashcards.`,
          howItWasBuilt: `My Notion already has these questions and answers. I just used the Notion API
          with Node to create a backend service that throws the data back and display it in the UI.`,
        },
        projectImageLink: 'test-me-at-aws.png',
      },
      {
        id: 3,
        title: 'Daily Reading Counter 📖',
        short: 'Number of Pages generator given a Page and a Session',
        tags: ['#vue'],
        projectName: 'daily-reading-counter',
        long: {
          howItWorks: `The user can just configure the sessions where the book will be read (e.g. morning, lunch, etc.), then enter the starting page,
          and enter how many pages to be read in each session. I created this to drill myself in reading, and since it's
          hassle to do calculation every time I read, the app was built.`,
          howItWasBuilt: `
            This was just built using simple Vue JS with some book pages calculations in the background.
          `,
        },
        projectImageLink: 'daily-reading-counter.png',
      },
    ],
    studies: [],
  },
  mutations: {},
  actions: {},
})
