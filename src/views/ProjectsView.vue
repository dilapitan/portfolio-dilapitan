<template>
  <v-container>
    <div :class="{ 'px-16': $vuetify.breakpoint.smAndUp }">
      <div class="text-h6">I developed:</div>

      <br />

      <v-row>
        <v-col
          v-for="project in projects"
          :key="project.id"
          cols="12"
          sm="6"
          md="4"
        >
          <CardComponent :data="project" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import CardComponent from '@/components/CardComponent'

export default {
  name: 'Projects',

  components: {
    CardComponent,
  },

  data: () => ({
    projects: [
      {
        id: 1,
        title: 'POLLIMAC-TF',
        short: 'Pollen Image Classifier using TensorFlow built on the Web',
        tags: ['#tensorflow', '#vue', '#node'],
        projectName: 'pollimac-tf',
      },
      {
        id: 2,
        title: 'Test Me At AWS',
        short:
          'A Flashcard App on SAA-AWS topics on the exploration of Notion API',
        tags: ['#vue', '#node', '#notion-api'],
        projectName: 'test-me-at-aws',
      },
      {
        id: 3,
        title: 'Daily Reading Counter',
        short: 'Number of Pages generator given a Page and a Session',
        tags: ['#vue'],
        projectName: 'daily-reading-counter',
      },
    ],
  }),
}
</script>
