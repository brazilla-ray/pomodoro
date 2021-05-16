const mode = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
}

export const state = () => ({
  sessionCount: 0,
  currentMode: mode.pomodoro,
  mode,
})

export const mutations = {
  increment(state) {
    state.sessionCount++
  },
  clearSessionCount(state) {
    state.sessionCount = 0
  },
  switchMode(state) {
    state.currentMode = mode
  },
}
