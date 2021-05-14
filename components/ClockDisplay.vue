<template>
  <div class="container mt-8 flex-col">
    <figure>
      <h1
        class="
          text-8xl
          p-8
          rounded-full
          pieton-red-light-bg pieton-blue-dark-fg
        "
      >
        {{ pomodoro.shortBreak }}
      </h1>
      <figcaption class="text-left">
        <pre>
          <code>
&lt;h1&gt;
  &lbrace; &lbrace; pomodoro.shortBreak &rbrace; &rbrace;
&lt;/h1&gt;
          </code>
        </pre>
      </figcaption>
    </figure>
    <figure>
      <h1 class="text-8xl p-8 rounded-full pieton-red-bg pieton-yellow-fg">
        {{ pomodoro.longBreak }}
      </h1>
      <figcaption class="text-left">
        <pre>
          <code>
&lt;h1&gt;
  &lbrace; &lbrace; pomodoro.longBreak &rbrace; &rbrace;
&lt;/h1&gt;
          </code>
        </pre>
      </figcaption>
    </figure>
    <figure>
      <h1 class="text-8xl p-8 rounded-full pieton-blue-bg pieton-near-white-fg">
        {{ pomodoro.pomodoro }}
      </h1>
      <figcaption class="text-left">
        <pre>
          <code>
&lt;h1&gt;
  &lbrace; &lbrace; pomodoro.pomodoro &rbrace; &rbrace;
&lt;/h1&gt;
          </code>
        </pre>
      </figcaption>
    </figure>
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

<style lang="css" scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
