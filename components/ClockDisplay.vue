<template>
  <div class="container">
    <section class="flex items-center">
      <button
        class="
          pieton-gray-light-bg
          order-1
          h-auto
          px-8
          pb-1
          rounded-full
          custom-border
          mr-4
        "
        @click="startTimer"
      >
        start
      </button>
      <button
        class="
          pieton-gray-light-bg
          order-3
          h-auto
          px-8
          pb-1
          rounded-full
          custom-border
          ml-4
        "
        @click="stopTimer"
      >
        stop
      </button>
      <figure
        class="p-10 mx-auto rounded-full display-block w-80 order-2"
        :class="counterClasses"
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
    counterClasses() {
      return {
        'counter-red': this.currentMode === this.mode.pomodoro,
        'counter-light-red': this.currentMode === this.mode.shortBreak,
        'counter-blue': this.currentMode === this.mode.longBreak,
      }
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
  border-width: 0.15rem;
  border-style: solid;
  border-color: var(--pieton-yellow-dark);
}

.counter-red {
  background-color: var(--pieton-red);
  color: var(--pieton-yellow);
}

.counter-light-red {
  background-color: var(--pieton-red-light);
  color: var(--pieton-blue-dark);
}

.counter-blue {
  background-color: var(--pieton-blue);
  color: var(--pieton-near-white);
}
</style>
