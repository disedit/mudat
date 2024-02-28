<template>
  <section class="bentos">
    <ul class="bento bento-top">
      <li class="bento-item">
        <div class="bento-item-wrapper">
          <img src="~assets/images/bento/bold.jpg" alt="" class="image-bold">
          <div class="bento-item-overlay">
            <h2>BOLD</h2>
            <p>product design</p>
          </div>
        </div>
      </li>
      <li class="bento-item">
        <div class="bento-item-wrapper">
          <img src="~assets/images/bento/bancal.jpg" alt="" class="image-bancal">
          <div class="bento-item-overlay">
            <h2>BANCAL</h2>
            <p>stand design</p>
          </div>
        </div>
      </li>
      <li class="bento-item">
        <div class="bento-item-wrapper">
          <img src="~assets/images/bento/mega.jpg" alt="" class="image-mega">
          <div class="bento-item-overlay">
            <h2 class="mobile-only">MEGAMOBILIARIO</h2>
            <h2 class="desktop-only">MEGA-MOBILIARIO</h2>
            <p>branding</p>
          </div>
        </div>
      </li>
      <li class="bento-item">
        <div class="bento-item-wrapper">
          <img src="~assets/images/bento/33.jpg" alt="" class="image-33">
          <div class="bento-item-overlay">
            <h2>CHAIR 33%</h2>
            <p>product design</p>
          </div>
        </div>
      </li>
      <li class="bento-item">
        <div class="bento-item-wrapper">
          <img src="~assets/images/bento/silla.jpg" alt="" class="image-silla">
          <div class="bento-item-overlay">
            <h2>CHAIR 33%</h2>
            <p>product design</p>
          </div>
        </div>
      </li>
    </ul>
    <ul class="bento bento-bottom">
      <li class="bento-item">
        <div class="bento-item-wrapper">
          <img src="~assets/images/bento/remodel.jpg" alt="">
          <div class="bento-item-overlay">
            <h2>REMODEL</h2>
            <p>branding</p>
          </div>
        </div>
      </li>
      <li class="bento-item">
        <div class="bento-item-wrapper">
          <img src="~assets/images/bento/studio.jpg" alt="" class="image-studio">
          <div class="bento-item-overlay">
            <h2>STUDIO</h2>
            <p>about us</p>
          </div>
        </div>
      </li>
      <li class="bento-item">
        <div class="bento-item-wrapper">
          <img src="~assets/images/bento/bancal2.jpg" alt="" class="image-bancal2">
          <div class="bento-item-overlay">
            <h2>BANCAL</h2>
            <p>stand design</p>
          </div>
        </div>
      </li>
      <li class="bento-item">
        <div class="bento-item-wrapper">
          <img src="~assets/images/bento/verao.jpg" alt="" class="image-verao">
          <div class="bento-item-overlay">
            <h2>VERAO</h2>
            <p>product design</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  .bentos {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow: clip;
  }

  .bento {
    list-style: none;
    margin: 0 -4rem;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;    
    overflow: clip;

    &-top {

      .bento-item {
        display: flex;
        align-items: flex-end;
      }
    }

    &-bottom {
      grid-template-columns: repeat(4, 1fr);
    }

    &-item {
      img {
        display: block;
        width: 100%;
        object-fit: cover;
      }

      &-wrapper {
        position: relative;
        width: 100%;
      }
  
      &-overlay {
        inset: 0;
        position: absolute;
        opacity: 0;
        z-index: 10;
        background: rgba($dark-gray, .75);
        transition: .25s ease;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: calc(1.5rem + 1vw);
        text-align: center;
        cursor: default;
        user-select: none;

        h2 {
          font-weight: bold;
          font-size: inherit;
          margin: 0;
          line-height: 1;
        }

        p {
          font-size: .5em;
          margin: 0;
          margin-top: 1rem;
        }
      }

      &:hover .bento-item-overlay {
        opacity: 1;
      }
    }
  }

  .image-bancal {
    height: 20vw;
    width: 100%;
  }

  .image-bento {
    height: 28vw;
    width: 100%;
  }

  .image-mega {
    height: 35vw;
    width: 100%;
  }

  .image-33 {
    height: 30vw;
    width: 100%;
  }

  .image-silla {
    height: 25vw;
    width: 100%;
  }

  .image-remodel {
    height: 35vw;
    width: 100%;
  }

  .image-studio {
    height: 25vw;
    width: 100%;
  }

  .image-bancal2 {
    height: 20vw;
    width: 100%;
  }

  .image-verao {
    height: 30vw;
    width: 100%;
  }

@include media('<medium') {
  .bentos {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .bento {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 0 1rem;

    &-item-overlay {
      opacity: 1;
    }

    &-item {
      img {
        height: 50vh !important;
      }
    }
  }
}
</style>