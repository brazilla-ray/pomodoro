<template>
  <div>
    <header class="pieton-red-dark-bg h-auto flex justify-center">
      <h1 class="pieton-blue-light-fg text-8xl py-8">pomodoro timer</h1>
    </header>
    <div class="flex">
      <div class="order-2 flex-auto w-96 pt-8">
        <main>
          <Nuxt />
        </main>
      </div>
      <div
        class="
          order-1
          flex-initial
          px-8
          pt-8
          pieton-blue-dark-bg pieton-blue-light-fg
        "
      >
        <aside>
          <section>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, rerum at modi, fugiat enim, consectetur saepe ab
              deserunt perspiciatis praesentium nulla quibusdam! Laboriosam
              optio, eligendi dolorum et at iste dolor?
            </p>
          </section>
        </aside>
      </div>
      <div
        class="order-3 flex-auto px-8 pt-8 pieton-blue-dark-bg pieton-yellow-fg"
      >
        <aside>
          <section>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, rerum at modi, fugiat enim, consectetur saepe ab
              deserunt perspiciatis praesentium nulla quibusdam! Laboriosam
              optio, eligendi dolorum et at iste dolor?
            </p>
          </section>
        </aside>
      </div>
    </div>
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
