<template>
  <footer class="footer">
    <div class="footer-copy">&copy; Mudat Studio 2024</div>
    <div class="footer-description">Multidisciplinary Creative<br>Studio Based in Valencia</div>
  </footer>
</template>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: calc(1rem + 1vw) calc(1rem + 2vw);

  &-description {
    text-align: right;
  }
}

@include media('<medium') {
  .footer {
    font-size: .8rem;
  }
}
</style>