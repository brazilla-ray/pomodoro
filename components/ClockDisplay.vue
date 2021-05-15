<template>
  <div class="flex-col">
    <figure>
      <h1
        class="
          text-8xl
          p-8
          rounded-full
          pieton-red-light-bg pieton-blue-dark-fg
        "
      >
        {{ mode.shortBreak }}
      </h1>
      <figcaption class="text-left">
        <pre>
          <code v-pre>
&lt;h1&gt;
  {{ mode.shortBreak }}
&lt;/h1&gt;
          </code>
        </pre>
      </figcaption>
    </figure>
    <figure>
      <h1 class="text-8xl p-8 rounded-full pieton-red-bg pieton-yellow-fg">
        {{ mode.longBreak }}
      </h1>
      <figcaption class="text-left">
        <pre>
          <code v-pre>
&lt;h1&gt;
  {{ mode.longBreak }}
&lt;/h1&gt;
          </code>
        </pre>
      </figcaption>
    </figure>
    <figure>
      <h1 class="text-8xl p-8 rounded-full pieton-blue-bg pieton-near-white-fg">
        {{ mode.pomodoro }}
      </h1>
      <figcaption class="text-left">
        <pre>
          <code v-pre>
&lt;h1&gt;
  {{ mode.pomodoro }}
&lt;/h1&gt;
          </code>
        </pre>
      </figcaption>
    </figure>
    <h3>{{ currentTime }}</h3>
    <button>start</button>
  </div>
</template>

<script>
export default {
  computed: {
    mode() {
      return this.$store.state.mode
    },
    total() {
      return this.$store.state.total
    },
    currentTime() {
      return this.$store.state.currentTime
    },
  },
}
</script>

<style lang="css" scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
