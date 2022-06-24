<template>
  <v-container>
    <div :class="{ 'px-16': $vuetify.breakpoint.smAndUp }">
      <div class="text-h6">I developed:</div>

      <br />

      <v-row v-if="projects.length > 0">
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
      <v-row v-else>No projects to display.</v-row>
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

  mounted() {
    this.projects = this.$store.state.projects
  },

  data: () => ({
    projects: [],
  }),
}
</script>
