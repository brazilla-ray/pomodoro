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
      <button @click="timer">start</button>
      <h3>{{ currentMode }}</h3>
      <button @click="switchMode">toggle mode</button>
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
    timer() {
      const currentMode = this.$store.state.currentMode
      const total = currentMode * 60
      const currentTime = Date.parse(new Date())
      const endTime = currentTime + total * 1000
      const difference = endTime - currentTime
      const remainingTime = Number.parseInt(difference / 1000, 10)
      const minutes = Number.parseInt((remainingTime / 60) % 60, 10).toString()
      const seconds = Number.parseInt(remainingTime % 60, 10).toString()

      if (currentMode === this.mode.pomodoro) {
        this.increment()
      }
      return console.log(
        minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0')
      )
    },
  },
}
</script>

<style lang="css" scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
