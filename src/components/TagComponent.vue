<template>
  <v-chip
    :color="backgroundColor"
    :text-color="textColor"
    class="font-weight-medium"
  >
    {{ style(value) }}
  </v-chip>
</template>

<script>
export default {
  name: 'TagComponent',

  props: ['value'],

  data: () => ({
    backgroundColor: null,
    textColor: null,
    tags: null,
  }),

  created() {
    this.tags = this.getTags()
  },

  methods: {
    getTags() {
      return this.$store.state.tags
    },

    style(value) {
      // TODO: Get Database here for Tags in Firebase and to be stored in Store

      const data = this.tags.filter((tag) => value === tag.label)
      const { backgroundColor, textColor } = data[0]

      this.backgroundColor = backgroundColor
      this.textColor = textColor
      return value
    },
  },
}
</script>