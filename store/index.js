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
  restartSessionCount(state) {
    state.sessionCount = 1
  },
  switchMode(state) {
    switch (state.currentMode) {
      case mode.pomodoro: {
        if (state.sessionCount < 4) {
          state.currentMode = mode.shortBreak
          break
        } else {
          state.currentMode = mode.longBreak
          break
        }
      }
      case mode.shortBreak:
      case mode.longBreak:
        state.currentMode = mode.pomodoro
    }
  },
}
