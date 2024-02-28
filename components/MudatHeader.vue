<template>
  <nav class="mudat-nav">
    <span class="mudat-brand">The Brand</span>
    <MudatLogo class="mudat-logo" />
    <a href="mailto:info@mudatstudio.com" class="mudat-contact">info@mudatstudio.com</a>
  </nav>
</template>

<style lang="scss">
  .mudat-nav {
    display: flex;
    text-transform: uppercase;
    justify-content: space-between;
    align-items: center;
    padding: calc(1rem + 1vw) calc(1rem + 2vw);
  }

  .mudat-logo {
    height: calc(3rem + 1vh);
  }

  @include media('<medium') {
    .mudat-logo {
      height: 2rem;
      margin: 0 auto;
    }

    .mudat-brand {
      display: none;
    }

    .mudat-contact {
      display: none;
    }
  }
</style>