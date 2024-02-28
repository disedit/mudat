<template>
  <div class="landing">
    <MudatHeader />
    <main class="hero">
      <h1>[this website is a WIP]</h1>
      <MudatBento />
    </main>
    <MudatFooter />
  </div>
</template>

<style lang="scss" scoped>
.hero {
  h1 {
    font-size: clamp(1.5rem, calc(1.5rem + 4vw), 10rem);
    font-style: italic;
    text-align: center;
    padding: calc(1rem + 1vw) calc(1rem + 2vw);
  }
}
</style>