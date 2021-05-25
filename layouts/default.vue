<template>
  <div>
    <header class="pieton-red-dark-bg h-auto flex justify-center">
      <h1 class="pieton-blue-light-fg text-5xl md:text-8xl py-8">
        pomodoro timer
      </h1>
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style>
html {
  font-family: 'Alata', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
