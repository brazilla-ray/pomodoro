<template>
  <div class="flex-col">
    <figure>
      <h2 class="text-8xl p-8 rounded-full pieton-red-bg pieton-yellow-fg">
        {{ mode.pomodoro }}
      </h2>
      <figcaption class="text-left">
        <pre>
          <code v-pre>
&lt;h2&gt;
  {{ mode.pomodoro }}
&lt;/h2&gt;
          </code>
        </pre>
      </figcaption>
    </figure>
    <figure>
      <h2
        class="
          text-8xl
          p-8
          rounded-full
          pieton-red-light-bg pieton-blue-dark-fg
        "
      >
        {{ mode.shortBreak }}
      </h2>
      <figcaption class="text-left">
        <pre>
          <code v-pre>
&lt;h2&gt;
  {{ mode.shortBreak }}
&lt;/h2&gt;
          </code>
        </pre>
      </figcaption>
    </figure>
    <figure>
      <h2 class="text-8xl p-8 rounded-full pieton-blue-bg pieton-near-white-fg">
        {{ mode.longBreak }}
      </h2>
      <figcaption class="text-left">
        <pre>
          <code v-pre>
&lt;h2&gt;
  {{ mode.longBreak }}
&lt;/h2&gt;
          </code>
        </pre>
      </figcaption>
    </figure>
    <section>
      <button>start</button>
      <h3>{{ currentMode }}</h3>
      <button @click="switchMode">pomodoro</button>
      <button>short break</button>
      <button>long break</button>
      <button @click="increment">sessionCount</button>
      <h3>{{ sessionCount }}</h3>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    mode() {
      return this.$store.state.mode
    },
    currentMode() {
      return this.$store.state.currentMode
    },
    sessionCount() {
      return this.$store.state.sessionCount
    },
  },
  methods: {
    increment() {
      if (this.$store.state.sessionCount < 4) {
        return this.$store.commit('increment')
      } else {
        return this.$store.commit('clearSessionCount')
      }
    },
    switchMode() {
      return this.$store.commit('switchMode')
    },
  },
}
</script>

<style lang="css" scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
