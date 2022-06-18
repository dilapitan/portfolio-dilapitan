<template>
  <v-container>
    <div :class="{ 'px-16': $vuetify.breakpoint.smAndUp }">
      <div class="text-h6">Web Applications that I built:</div>

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
        short: 'POLLen IMAge Classifier using TensorFlow built on top of Web',
        tags: ['#tensorflow', '#vue', '#node'],
      },
      {
        id: 2,
        title: 'Test Me At AWS',
        short:
          'A Flashcard App on SAA-AWS topics on the exploration of Notion API',
        tags: ['#vue', '#node', '#notion-api'],
      },
      {
        id: 3,
        title: 'Daily Reading Counter',
        short: 'Number of Pages generator given a Page and a Session',
        tags: ['#vue'],
      },
    ],
  }),
}
</script>
