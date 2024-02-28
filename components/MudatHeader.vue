<template>
  <nav class="mudat-nav">
    <span class="mudat-brand">The Brand</span>
    <div class="mudat-logo"><MudatLogo /></div>
    <a href="mailto:info@mudatstudio.com" class="mudat-contact">info@mudatstudio.com</a>
  </nav>
</template>

<style lang="scss">
  .mudat-nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-transform: uppercase;
    justify-content: space-between;
    align-items: center;
    padding: calc(1rem + 1vw) calc(1rem + 2vw);
  }

  .mudat-contact {
    text-align: right;
  }

  .mudat-logo {
    text-align: center;
    svg {
      height: calc(2.5rem + 1vh);
    }
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