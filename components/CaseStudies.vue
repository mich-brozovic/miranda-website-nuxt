<template>
  <div class="case-studies">
  <div class="case-studies__wrapper" style="position: relative">
    <div class="swiper-button-prev">
      <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.939339 10.9393C0.353552 11.5251 0.353552 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.80761 11.0711 0.80761 10.4853 1.3934L0.939339 10.9393ZM32 10.5L2 10.5L2 13.5L32 13.5L32 10.5Z"
            fill="#000" />
      </svg>
    </div>
    <div class="case-studies__swiper">
    <Swiper
        :slides-per-view="1"
        :spaceBetween="10"
        :modules="[SwiperNavigation, SwiperPagination]"
        :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        pagination
        :loop="true"
        :breakpoints="{
          '768': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }"
    >
      <SwiperSlide
          v-for="(item, index) in data.data.filter(item => item.attributes.url)"
          :index="index"
          class="item">
        <nuxt-link
            v-if="item.attributes.url"
            :to="`/pripadove-studie/${item.attributes.url}`">
          <NuxtPicture
              class="bg-img"
              provider="strapi"
              :src="bgImageURL(item)"
              loading="lazy"
              :alt="item.attributes.nazev"
              :width="item.attributes.thumbnail.data.attributes.width"
              :height="item.attributes.thumbnail.data.attributes.height" />
          <div class="logo">
            <NuxtPicture
                provider="strapi"
                :src="logoURL(item)"
                loading="lazy"
                :width="item.attributes.logo.data.attributes.width"
                :height="item.attributes.logo.data.attributes.height"
                alt="" />
          </div>
          <div class="reference__arrow">
            <span class="arrow-detail">Detail studie</span>
            <span class="arrow-line"></span>
            <span class="arrow-head"></span>
          </div>
        </nuxt-link>
        <div v-else>
          <NuxtPicture
              class="bg-img"
              provider="strapi"
              :src="bgImageURL(item)"
              loading="lazy"
              :alt="item.attributes.nazev"
              :width="item.attributes.thumbnail.data.attributes.width"
              :height="item.attributes.thumbnail.data.attributes.height" />
          <div class="logo">
            <NuxtPicture
                provider="strapi"
                :src="logoURL(item)"
                loading="lazy"
                :width="item.attributes.logo.data.attributes.width"
                :height="item.attributes.logo.data.attributes.height"
                alt="" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
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
</template>
<script setup>
const { find } = useStrapi()
const data = useState('referenceData', () => null)
const { data: referenceData, error: referenceError } = await useAsyncData('referencePage', () =>
    find('references', {
      populate: '*',
      sort: 'priorita',
    })
)
data.value = referenceData.value;

const logoURL = (item) => {
  return getStrapiMedia(item.attributes.logo)
}
const bgImageURL = (item) => {
  return getStrapiMedia(item.attributes.thumbnail)
}
</script>

<style scoped lang="scss">
.case-studies {
  padding-inline: 2rem;
}
.case-studies__swiper {
  max-width: 1430px;
  width: 100%;
}
.case-studies__wrapper {
  max-width: calc(1650px + 4rem);
  margin-inline: auto;
  gap: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: unset;
    bottom: unset;
    left: unset;
    right: unset;
    margin: unset;
    margin-top: 0;
    transition: all 0.3s ease-in;
    flex-shrink: 0;
    &::before {
      display: none;
    }
    &::after {
      display: none;
    }
    @media screen and ($mobile-responsive) {
      display: none;
    }
  }
  .swiper-button-prev {
    left: 0;
    width: 74px;
    height: 74px;
    & svg {
      & path {
        transition: all 0.3s ease-in;
      }
    }
    @media screen and ($mobile-responsive) {
      width: 56px;
      height: 56px;
    }
  }
  .swiper-button-next {
    right: 0;
    width: 74px;
    height: 74px;
    & svg {
      transform: rotate(180deg);
      & path {
        transition: all 0.3s ease-in;
      }
    }
    @media screen and ($mobile-responsive) {
      width: 56px;
      height: 56px;
    }
  }
}
.item {
  overflow: hidden;
  a {
    display: block;
  }
  img {
    display: block;
  }
  aspect-ratio: 1;
  position: relative;
  &.large {
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(0.5);
    transition: all 0.2s ease-in-out;
  }
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 70%;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    img {
      width: 100%;
    }
  }
  a::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.2);
    transition: all 0.2s ease-in-out;
  }
  .case-study {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: $color-white;
    padding: em(10) em(20);
    color: $color-font;
    z-index: 1;
    font-size: rem(12);
    transition: all 0.2s ease-in-out;
  }
  &:hover,
  &:focus {
    .bg-img {
      transform: scale(1.1);
      filter: none;
    }
    .logo {
      transform: translate(-50%, -50%) scale(0.7);
      opacity: 0;
    }
    .case-study {
      opacity: 0;
    }
    .reference__arrow {
      opacity: 1;
      .arrow-line {
        width: 100%;
      }
      .arrow-detail {
        opacity: 1;
        transform: none;
      }
    }
  }
  .reference__arrow {
    position: absolute;
    bottom: 33px;
    right: 33px;
    transition: all 0.3s ease-in-out;
    width: 150px;
    z-index: 1;
    opacity: 0;
    .arrow-line {
      display: block;
      width: 50px;
      height: 2px;
      background-color: $color-white;
      position: absolute;
      right: -1px;
      transition: all 0.3s ease-in-out;
    }
    .arrow-head {
      display: block;
      width: 12px;
      height: 12px;
      border: 2px solid $color-white;
      border-style: none solid solid none;
      transform: rotate(-45deg);
      position: absolute;
      right: 0;
      bottom: -7px;
    }
    .arrow-detail {
      color: $color-white;
      display: block;
      margin-bottom: 10px;
      opacity: 0;
      transform: translateX(50%);
      transition: all 0.3s ease-in-out;
    }
  }
  .swiper-pagination {
    display: none;
    @media screen and ($mobile-responsive) {
      display: block;
    }
  }
}
</style>