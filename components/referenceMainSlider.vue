<template>
  <section class="slider">
    <h2 class="sr-only">Seznam hlavních řešení na e-shopu</h2>
    <div  class="slider__container container">
      <div class="slider__image">
        <NuxtPicture v-if="props.imgUrl"
                     :src="props.imgUrl"/>
        <div class="slider__buttons">
          <div class="swiper-button-prev">
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M0.939339 10.9393C0.353552 11.5251 0.353552 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.80761 11.0711 0.80761 10.4853 1.3934L0.939339 10.9393ZM32 10.5L2 10.5L2 13.5L32 13.5L32 10.5Z"
                  fill="#000" />
            </svg>
          </div>
          <div class="swiper-button-next">
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M0.939339 10.9393C0.353552 11.5251 0.353552 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.80761 11.0711 0.80761 10.4853 1.3934L0.939339 10.9393ZM32 10.5L2 10.5L2 13.5L32 13.5L32 10.5Z"
                  fill="#000" />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
          :slides-per-view="3"
          :space-between="20"
          class="slider__slider"
          :modules="[SwiperNavigation]"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="{
          '768': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1125': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }">
          <slot />
      </Swiper>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  imgUrl: String,
})
</script>
<style scoped lang="scss">
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .slider {
    overflow: hidden;
    @media screen and ($mobile-responsive) {
      margin: 0;
    }
  }

  .slider__container {
    display: flex;
    gap: 20px;
    width: 100%;
  }

  .slider__image {
    position: relative;
    z-index: 10;

    width: calc(25% - 15px);
    max-width: 345px;
    picture {
      display: flex;
    }
    img {
      display: block;
    }
  @media screen and (max-width: 1124px) {
    width: calc(1 / 3 * 100% - 2 / 3 * 20px);
    max-width: 332px;
  }
    @media screen and ($mobile-responsive) {
      display: none;
    width: 100%;
    min-width: unset;
    max-width: unset;
    img {
      width: unset;
    }
  }
  }

  .slider__image--custom-klokocka {
    aspect-ratio: 1 / 1;
  img {
    background-color: $color-white;
    position: relative;
    left: 100%;
    transform: translateX(-100%);
    max-width: unset;
    max-height: 100%;
    width: auto;
  }
    @media screen and ($mobile-responsive) {
    aspect-ratio: unset;
    position: unset;
    left: unset;
    transform: unset;

    width: 100%;
    min-width: unset;
    max-width: unset;
    img {
      width: 100%;
    }
  }
  }

  .slider__slider {
    margin-bottom: 0;
    width: calc(75% - 5px);
    overflow: unset;

    @media screen and (max-width: 1124px) {
      width: calc(2 / 3 * 100% - 1 / 3 * 20px);
    }
    @media screen and ($mobile-responsive) {
      display: none;
    }
  }

  .slider__buttons {
    position: relative;
    width: 100%;
    max-width: 345px;

    display: flex;
    justify-content: flex-end;
    z-index: 10;
    @media screen and ($mobile-responsive) {
      display: none;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: unset;
    top: unset;
    bottom: unset;
    left: unset;
    right: unset;
    margin: unset;
    margin-top: -74px;
    transition: all 0.3s ease-in;
  &::before {
     display: none;
   }
  &::after {
     display: none;
   }
  }
  .swiper-button-prev {
    width: 74px;
    height: 74px;
  & svg {
  & path {
      transition: all 0.3s ease-in;
    }
  }
  &:hover {
  & svg {
  & path {
      fill: var(--color-swiper-arrow-hover);
    }
  }
  }
  }
  .swiper-button-next {
    width: 74px;
    height: 74px;
  & svg {
      transform: rotate(180deg);
  & path {
      transition: all 0.3s ease-in;
      fill: var(--color-swiper-arrow);
    }
  }
  &:hover {
  & svg {
  & path {
      fill: var(--color-swiper-arrow-hover);
    }
  }
  }
  }
</style>