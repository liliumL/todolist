<template>
      <li @click ="deleteItem">{{ content }}</li>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: [ 'content', 'index' ],
  methods: {
    deleteItem: function () {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
