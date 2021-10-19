<template src="./Character.html"></template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Character',
  props: {
    character: {
      type: Object,
      required: true
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Character.scss"></style>
