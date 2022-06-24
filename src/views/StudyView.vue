<template>
  <v-container>
    <div :class="{ 'px-16': $vuetify.breakpoint.smAndUp }">
      <div class="text-h6">Study Projects I built as I learn new tech.</div>

      <br />
      <v-container>
        <v-row v-if="studies.length > 0"></v-row>
        <v-row v-else>No study projects to display yet.</v-row>
      </v-container>
    </div>
  </v-container>
</template>


<script>
export default {
  name: 'Study',

  data: () => ({
    studies: [],
  }),
}
</script>
