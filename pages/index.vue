<template>
  <div class="container">
    <h1 class="pieton-blue-fg">{{ pomodoro.shortBreak }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    pomodoro() {
      return this.$store.state.timer
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
