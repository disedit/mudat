<template>
  <nav class="mudat-nav">
    <a href="https://www.instagram.com/mudat.studio/" class="mudat-brand">The Brand</a>
    <div class="mudat-logo"><MudatLogo /></div>
    <a href="mailto:info@mudatstudio.com" class="mudat-contact desktop-only">info@mudatstudio.com</a>
    <a href="mailto:info@mudatstudio.com" class="mudat-contact mobile-only">Contact us</a>
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
    .mudat-nav {
      font-size: .7rem;
    }

    .mudat-logo {
      svg {
        display: block;
        margin: 0 auto;
        height: 1.5rem;
      }
    }
  }
</style>