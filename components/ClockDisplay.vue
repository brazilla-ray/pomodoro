<template>
  <div class="container">
    <section class="flex">
      <button class="pieton-gray-light-bg order-1" @click="startTimer">
        start
      </button>
      <button class="pieton-gray-light-bg order-3" @click="stopTimer">
        stop
      </button>
      <figure
        class="
          p-10
          mx-auto
          pieton-red-bg pieton-yellow-fg
          rounded-full
          display-block
          w-80
          order-2
        "
      >
        <span class="text-8xl inline-block w-30">{{ minutes }}</span
        ><span class="text-2xl inline-block w-10">:{{ seconds }}</span>
      </figure>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: '',
    }
  },
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
    remainingTime() {
      return this.$store.state.remainingTime
    },
    minutes() {
      return Number.parseInt((this.remainingTime / 60) % 60, 10)
        .toString()
        .padStart(2, '0')
    },
    seconds() {
      return Number.parseInt(this.remainingTime % 60, 10)
        .toString()
        .padStart(2, '0')
    },
  },
  methods: {
    increment() {
      if (this.$store.state.sessionCount < 4) {
        return this.$store.commit('increment')
      } else {
        return this.$store.commit('restartSessionCount')
      }
    },
    switchMode() {
      return this.$store.commit('switchMode')
    },
    startTimer() {
      this.interval = setInterval(() => {
        if (this.$store.state.remainingTime === 0) {
          clearInterval(this.interval)
          if (this.currentMode === this.mode.pomodoro) this.increment()
          this.switchMode()
          this.$store.commit('resetTimer')
          return this.startTimer()
        } else {
          this.$store.commit('countdown')
        }
      }, 1000)
    },
    stopTimer() {
      return clearInterval(this.interval)
    },
  },
}
</script>

<style lang="css" scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.custom-border {
  border-width: 2rem;
  border-style: solid;
  border-color: var(--pieton-red);
  border-radius: 50%;
}
</style>
