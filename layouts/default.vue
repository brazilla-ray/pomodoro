<template>
  <div class="pieton-near-white-bg h-screen">
    <header class="pieton-red-dark-bg h-auto">
      <h1 class="pieton-blue-light-fg text-5xl md:text-8xl py-8 text-center">
        pomodoro timer
      </h1>
    </header>
    <main>
      <Nuxt />
    </main>
    <footer class="h-48 pieton-near-white-bg">
      <div class="max-w-min mx-auto relative -bottom-2/4">
        <a
          href="https://github.com/brazilla-ray/pomodoro"
          class="border-b-2 pieton-near-black-fg mb-2"
          >github</a
        >
      </div>
    </footer>
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
