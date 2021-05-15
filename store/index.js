const mode = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
}

const total = mode
const currentTime = Date.parse(new Date())

export const state = () => ({
  currentTime,
  mode,
  total,
})
