<template>
  <v-card class="pa-2" outlined tile height="190" max-height="190" hover>
    <v-card-title>{{ data.title }}</v-card-title>
    <v-card-subtitle>{{ data.short }}</v-card-subtitle>

    <v-card-actions height="50" id="actions">
      <v-chip-group class="mt-2">
        <TagComponent v-for="tag in data.tags" :key="tag" :value="tag" />
      </v-chip-group>
    </v-card-actions>
  </v-card>
</template>

<script>
import TagComponent from '@/components/TagComponent'

export default {
  name: 'CardComponent',
  props: ['data'],
  components: {
    TagComponent,
  },
}
</script>
