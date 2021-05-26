<template>
  <div>
    <clock-display></clock-display>
  </div>
</template>

<script>
import ClockDisplay from '~/components/ClockDisplay.vue'

export default {
  components: { ClockDisplay },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
