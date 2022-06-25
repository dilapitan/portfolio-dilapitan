<template>
  <div>
    <v-card class="pa-2" outlined tile hover @click.stop="dialog = true">
      <v-card-title>{{ data.title }}</v-card-title>
      <v-card-subtitle>{{ data.short }}</v-card-subtitle>

      <v-card-actions height="50" id="actions">
        <v-chip-group class="mt-2">
          <TagComponent v-for="tag in data.tags" :key="tag" :value="tag" />
        </v-chip-group>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="dialog" max-width="700">
      <v-card>
        <v-card-title class="text-h4">
          {{ data.title }}
        </v-card-title>

        <v-card-text>
          <div class="text-subtitle-1">{{ data.short }}</div>

          <br />

          <div class="text-subtitle-1 font-weight-bold">How it works:</div>
          <div class="text-subtitle-1">{{ data.long.howItWorks }}</div>

          <br />

          <div class="text-subtitle-1 font-weight-bold">How it was built:</div>
          <div class="text-subtitle-1">{{ data.long.howItWasBuilt }}</div>

          <br />

          <div class="d-flex justify-center">
            <v-img
              :src="`/projects/${data.projectImageLink}`"
              class="shrink mr-2"
              contain
              :width="`${$vuetify.breakpoint.smAndUp ? '500' : '300'}`"
            ></v-img>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import TagComponent from '@/components/TagComponent'

export default {
  name: 'CardComponent',
  props: ['data'],
  components: {
    TagComponent,
  },

  data: () => ({
    dialog: false,
  }),
}
</script>
