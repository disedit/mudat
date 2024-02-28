<template>
  <div class="landing">
    <MudatHeader />
    <main class="hero">
      <h1>[this website is a work in progress]</h1>
      <MudatBento />
    </main>
    <MudatFooter />
  </div>
</template>

<style lang="scss" scoped>
.hero {
  h1 {
    font-size: clamp(1.25rem, calc(1.25rem + 1.75vw), 2.75rem);
    font-style: italic;
    text-align: center;
    padding: calc(1rem + 1vw) calc(1rem + 2vw);
    margin: 13vh 0;
  }
}

@include media('<medium') {
  .hero {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 200px);
    justify-content: space-evenly;

    h1 {
      margin: 0;
    }
  }
}
</style>