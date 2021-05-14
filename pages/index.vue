<template>
  <div class="container">
    <h1 class="pieton-blue-fg">{{ pomodoro.shortBreak }}</h1>
    <clock-display></clock-display>
  </div>
</template>

<script>
import ClockDisplay from '~/components/ClockDisplay.vue'

export default {
  components: { ClockDisplay },

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
