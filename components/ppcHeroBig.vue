<template>
  <section class="hero">
    <div
        class="video-wrapper"
        v-if="props.video">
      <div v-if="screenWidth > 767">
        <video
            v-if="!videoPlayed"
            poster="/blank-black.jpg"
            autoplay
            playsinline
            muted
            preload
            @ended="switchVideo">
          <source
              src="/intro-hp-nove.mp4"
              type="video/mp4" />
        </video>
        <video
            v-show="videoPlayed"
            poster="/intro-loop-poster.jpg"
            preload
            playsinline
            muted
            loop
            ref="videoRef">
          <source
              src="/intro-hp-loop.mp4"
              type="video/mp4" />
        </video>
      </div>
      <div v-else>
        <video
            v-if="!videoPlayed"
            poster="/intro-hp-mobile.jpg"
            autoplay
            playsinline
            muted
            preload
            @ended="switchVideo">
          <source
              src="/intro-hp-mobile.mp4"
              type="video/mp4" />
        </video>
        <video
            v-show="videoPlayed"
            poster="/intro-loop-poster-mobile.jpg"
            preload
            playsinline
            muted
            loop
            ref="videoRef">
          <source
              src="/intro-loop-mobile.mp4"
              type="video/mp4" />
        </video>
      </div>
    </div>
    <div
        class="image-wrapper"
        v-else>
      <NuxtImg
          class="hero-image"
          :src="props.imgUrl"
      />
    </div>
    <div class="container">
      <div class="texts">
        <slot />
      </div>
      <div class="ppc-logos">
        <img src="/ppc/logos/google-ads.png" alt="Google Ads" />
        <img src="/ppc/logos/sklik-logo.svg" alt="Sklik" />
        <img src="/ppc/logos/favi-logo.svg" alt="PPC logos" />
        <img src="/ppc/logos/zbozi-logo.svg" alt="PPC logos" />
        <img src="/ppc/logos/heureka-logo.svg" alt="PPC logos" />
        <img src="/ppc/logos/Linkedin-logo.svg" alt="PPC logos" />
        <img src="/ppc/logos/Instagram-logo.svg" alt="PPC logos" />
        <img src="/ppc/logos/facebook-logo.svg" alt="PPC logos" />
      </div>
      <div
          v-if="!hideScroll"
          class="scroll">
        <a href="#scroll">
          <svg width="24" height="112" viewBox="0 0 24 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>scrolluj</title>
            <path d="M10.9393 111.061C11.5251 111.646 12.4749 111.646 13.0607 111.061L22.6066 101.515C23.1924 100.929 23.1924 99.9792 22.6066 99.3934C22.0208 98.8076 21.0711 98.8076 20.4853 99.3934L12 107.879L3.51472 99.3934C2.92893 98.8076 1.97918 98.8076 1.3934 99.3934C0.807611 99.9792 0.807611 100.929 1.3934 101.515L10.9393 111.061ZM10.5 -1.78873e-08L10.5 110L13.5 110L13.5 1.78873e-08L10.5 -1.78873e-08Z" fill="white"/>
          </svg>
          <span>Scrolluj</span>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
const screenWidth = useState('screenWidth')
const props = defineProps({
  video: Boolean,
  imgUrl: String,
  heading: String,
  subheading: String,
  hideScroll: Boolean,
})
const videoRef = ref(null)
const videoPlayed = useState('videoPlayed', () => false)

const switchVideo = () => {
  // console.log(sourceRef)
  // const newVideoSource = '/intro-hp-loop.mp4'
  // sourceRef.value.src = newVideoSource
  // posterRef.value.load()
  // posterRef.value.setAttribute('loop', true)
  // posterRef.value.play()
  videoPlayed.value = true
  videoRef.value.play()
}
</script>
<style lang="scss" scoped>
.hero {
  width: 100%;
  min-height: 865px;
  position: relative;
  .video-wrapper,
  .image-wrapper {
    width: 100%;
    height: 100%;
    div {
      width: 100%;
      height: 100%;
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.hero .image-wrapper .hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
  max-height: 100vh;
  min-height: 915px;
  transition: transform .3s ease-in-out;
  @media screen and ($mobile-responsive) {
    min-height: unset;
  }
}
.header-black .hero .texts {
  color: $color-font;
}
.container {
  position: absolute;
  top: 130px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and ($mobile-responsive) {
    justify-content: flex-start;
  }
}
.texts {
  max-width: 680px;
  color: $color-white;
  @media screen and ($mobile-responsive) {
    max-width: unset;
  }
}
:slotted(h1) {
  font-size: clamp(2.375rem, 5.5vw, 3.875rem) !important;
  line-height: em(82, 62) !important;
  margin-bottom: 20px !important;
  margin-top: 0 !important;
}
:slotted(h2) {
  font-size: clamp(1rem, 2vw, 1.5rem) !important;
  line-height: em(40, 24) !important;
  font-weight: 400 !important;
}
.scroll {
  position: absolute;
  bottom: 2rem;
  left: 0;
  a {
    color: $color-white;
  }
  span {
    transform: rotate(-90deg);
    display: inline-block;
    position: absolute;
    top: 16px;
    left: 0;
  }
}
.ppc-logos {
  margin-block: 30px;
  max-width: 1120px;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 170px;
  row-gap: 50px;
  img {
    flex: 0 1 140px;
  }
  @media screen and ($mobile-responsive) {
    display: none;
  }
}
@media (max-width: 767px) {
  .hero {
    height: auto;
    .video-wrapper,
    .image-wrapper,
    .container {
      position: relative;
      height: 50vh;
      top: unset;
      left: unset;
      right: unset;
      bottom: unset;
    }
    .container {
      background: linear-gradient(180deg, transparent 0, #000 50px);
      transform: none;
      margin-top: -50px;
      height: auto;
      padding-bottom: 100px;
      text-align: center;
    }
    .scroll {
      left: 50%;
      transform: translateX(-50%);
      a {
        svg {
          height: 50px;
        }
        span {
          display: none;
        }
      }
    }
  }
  .header-black .hero .container {
    background: linear-gradient(180deg, transparent 0, #fff 50px);
  }
}
</style>
