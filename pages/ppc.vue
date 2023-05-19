<template>
  <main>
    <ppcHeroBig
        :imgUrl="screenWidth > 767 ? 'ppc/ppc-hero-image.jpg' : 'ppc/ppc-hero-image--mobile.jpg'">
      <div class="logos">
        <img
            src="/ppc/PPC-hero-logos.svg"
            alt="Shoptet"
        />
      </div>
      <h1>Správa PPC kampaní a sociálních sítí</h1>
      <h2>S rozpočty pracujeme jako s vlastnímí penězi. Spravujeme Google Ads, Sklik, Facebook, Instagram, LinkedIn, Heureka, Zboží, Favi a další.</h2>
      <div class="buttons">
        <a
            class="btn-primary font"
            href="#kontakt">
          <span>Domluvte si schůzku</span>
        </a>
        <a
            class="btn btn-ghost-v2 font"
            href="#kontakt">
          Chci udělat audit
        </a>
      </div>
    </ppcHeroBig>
    <section class="container anchors-wrapper">
      <nav>
        <ul>
          <li><a href="#reference">Základní popis služby</a></li>
          <li><a href="#sluzby">Jaké platformy využiváme</a></li>
          <li><a href="#proc-shoptet">Reference</a></li>
          <li><a href="#reakce">Co řikají klienti</a></li>
          <li><a href="#konfigurator">F.A.Q.</a></li>
          <li><a href="#kontakt">Edukace</a></li>
          <li><a href="#kontakt">Kontakty</a></li>
        </ul>
      </nav>
    </section>
    <section
        id="reference"
        class="steps container">
      <h2 class="text-center">4 kroky k vyšším ziskům</h2>
      <div class="steps__content">
        <div class="steps__image">
          <img src="/ppc/graph.png" alt="Graf">
        </div>
        <div class="steps__list">
          <div class="steps__step">
            <span>01</span>
            <h3>Domluvte si s námi schůzku</h3>
            <p>Můžeme se na začátek potkat i on-line. Na schůzce se pobavíme o vašich potřebách a cílech. Seznámíte se s Mirandou, a pokud se potkáme osobně, dáme si i naší dobrou kávu.</p>
          </div>
          <div class="steps__step">
            <span>02</span>
            <h3>Zauditujeme současný stav vašich kampaní</h3>
            <p>Audit odkryje kvalitu nastavení a správy vašich současných kampaní a potenciál spolupráce na obou stranách. Výsledkem bude audit se zcela konkrétními body.</p>
          </div>
          <div class="steps__step">
            <span>03</span>
            <h3>Navrhhneme konkrétní strategie a  nabídku</h3>
            <p>Na základě auditu PPC kampaní, s ohledem na vaše potřeby a naše doporučení, připravíme návrh na spolupráci.</p>
          </div>
          <div class="steps__step">
            <span>04</span>
            <h3>Zahájíme spolupráci & správu kampaní</h3>
            <p>Budeme pravidelně monitorovat a optimalizovat vaše kampaně, aby byly co nejefektivnější a generovaly co nejvyšší návratnost investice. Současně vám budeme poskytovat zpětnou vazbu o výsledcích.</p>
          </div>
        </div>
      </div>
      <div class="buttons-center">
        <BtnSecondary
            to="#kontakt"
            text="Kontaktujte nás"></BtnSecondary>
      </div>
    </section>
    <section class="container">
      <NuxtLink
          class="banner-link"
          to="/reference/expresmenu">
        <div
            class="banner"
            style="background-color: rgb(247, 244, 213)">
          <div class="banner__logo">
            <NuxtPicture
                src="/expresmenu-logo.webp"
                :img-attrs="{ style: 'max-width: 100%; width: auto;' }" />
          </div>
          <div class="banner__info">
            <strong>PNO -125 %</strong>
            Díky našim kampaním jsme snížili PNO
          </div>
          <div class="banner__mockup">
            <NuxtPicture src="/ppc/express-menu-mockup.png" />
          </div>
          <div class="banner__arrow">
            <svg
                width="52"
                height="24"
                viewBox="0 0 52 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"></path>
            </svg>
          </div>
        </div>
      </NuxtLink>
    </section>
    <section class="container">
      <h2 class="text-center">Výkon PPC kampaní na reálných příkladech</h2>
      <ReferenceGrid />
    </section>
    <section class="specialists container">
      <h2 class="text-center">Náš tým PPC specialistů</h2>
      <p class="text-center">Zkušení profesionálové v řadách MirandaMedia se postarají o výkon vašich kampaní.</p>
      <div class="specialists__list">
        <div class="specialists__item">
          <div class="specialists__image">
            <NuxtPicture src="/ppc/specialists/hanka.jpg" />
          </div>
          <div class="specialists__text">
            <h3 class="specialists__name">Hana</h3>
            <p class="specialists__position">Senior PPC specialist</p>
            <a class="specialists__email" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
          </div>
        </div>
        <div class="specialists__item">
          <div class="specialists__image">
            <NuxtPicture src="/ppc/specialists/dmitry.jpg" />
          </div>
          <div class="specialists__text">
            <h3 class="specialists__name">Dmitry</h3>
            <p class="specialists__position">Senior PPC specialist</p>
            <a class="specialists__email" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
          </div>
        </div>
        <div class="specialists__item">
          <div class="specialists__image">
            <NuxtPicture src="/ppc/specialists/martin-a.jpg" />
          </div>
          <div class="specialists__text">
            <h3 class="specialists__name">Martin</h3>
            <p class="specialists__position">PPC specialist</p>
            <a class="specialists__email" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
          </div>
        </div>
        <div class="specialists__item">
          <div class="specialists__image">
            <NuxtPicture src="/ppc/specialists/martin-k.jpg" />
          </div>
          <div class="specialists__text">
            <h3 class="specialists__name">Martin</h3>
            <p class="specialists__position">Content manager</p>
            <a class="specialists__email" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
          </div>
        </div>
        <div class="specialists__item">
          <div class="specialists__image">
            <NuxtPicture src="/ppc/specialists/hanka.jpg" />
          </div>
          <div class="specialists__text">
            <h3 class="specialists__name">Karel</h3>
            <p class="specialists__position">Social media manager</p>
            <a class="specialists__email" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
          </div>
        </div>
        <div class="specialists__item">
          <div class="specialists__image">
            <NuxtPicture src="/ppc/specialists/hanka.jpg" />
          </div>
          <div class="specialists__text">
            <h3 class="specialists__name">Karel</h3>
            <p class="specialists__position">Social media manager</p>
            <a class="specialists__email" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <NuxtLink
          class="banner-link"
          to="/reference/epiderma">
        <div
            class="banner"
            style="background-color: #DED2BC">
          <div class="banner__logo">
            <NuxtPicture
                src="/epiderma-logo.png"
                :img-attrs="{ style: 'max-width: 100%; width: auto;' }" />
          </div>
          <div class="banner__info">
            <strong>Nárůst tržeb o 450&nbsp;%</strong>
            Díky naší správě PPC kampaní klientovi rapidně vzrostly tržby
          </div>
          <div class="banner__mockup" style="background: transparent;">
            <NuxtPicture src="ppc/epiderma-mockup.png" />
          </div>
          <div class="banner__arrow">
            <svg
                width="52"
                height="24"
                viewBox="0 0 52 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"></path>
            </svg>
          </div>
        </div>
      </NuxtLink>
    </section>
    <SpojteSeSNamaBanner></SpojteSeSNamaBanner>
    <section class="commentary">
      <div class="container">
        <h2 class="text-center">Co skutečně říkáji naši klienti</h2>
        <div class="text-center container narrow">
          <p>
            I ten slavnej českej šéfík z televize, co zatopil nejednomu gastru, pustil pár slov o Mirandě. No a jak jsme dopadli
            s jeho novým, parádně vymazleným e-shopem a co na nás říkají další vybraní klienti...
          </p>
        </div>
        <CoONasRikaji />
      </div>
    </section>
    <!-- <section>
      <div class="container">
        <div class="konfigurator">
          <div class="pripravujeme">
            <svg
              width="214"
              height="211"
              viewBox="0 0 214 211"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.9697 190.222L-3.14957e-07 203.192L12.9697 210.397L12.9697 190.222Z"
                fill="#9BEABB" />
              <path
                d="M-3.60421e-06 120.737L-1.51248e-06 168.591L0 203.192L204.633 0.000219937L118.586 0.000223698L-3.60421e-06 120.737Z"
                fill="#59DC8E" />
              <path
                d="M25.2754 133.462C25.7865 133.986 26.1355 134.584 26.3222 135.257C26.5006 135.921 26.4705 136.629 26.232 137.382C25.9935 138.134 25.5048 138.87 24.766 139.591L23.4001 140.923L26.5672 144.17L24.3637 146.32L15.5411 137.274L19.1105 133.792C19.8321 133.088 20.5636 132.618 21.3048 132.381C22.046 132.144 22.7549 132.124 23.4313 132.319C24.1077 132.514 24.7224 132.895 25.2754 133.462ZM22.8893 138.002C23.3102 137.591 23.5274 137.187 23.5409 136.788C23.5544 136.389 23.3852 136.01 23.0333 135.649C22.6814 135.288 22.306 135.109 21.9071 135.113C21.5082 135.116 21.0983 135.323 20.6774 135.734L19.479 136.903L21.6909 139.171L22.8893 138.002ZM39.5953 131.464L34.3834 129.884L33.8551 130.399L37.1856 133.814L34.9821 135.963L26.1595 126.917L29.8578 123.31C30.5708 122.615 31.2979 122.149 32.0392 121.912C32.789 121.667 33.5021 121.642 34.1786 121.837C34.8466 122.023 35.4404 122.383 35.9598 122.916C36.5463 123.517 36.8982 124.222 37.0154 125.029C37.1412 125.828 36.9697 126.649 36.5009 127.492L42.0823 129.038L39.5953 131.464ZM32.3344 128.84L33.7003 127.508C34.1041 127.114 34.3084 126.722 34.3133 126.332C34.3268 125.933 34.1575 125.553 33.8057 125.193C33.4705 124.849 33.1035 124.679 32.7046 124.682C32.3143 124.678 31.9173 124.872 31.5135 125.266L30.1476 126.598L32.3344 128.84ZM29.9987 120.181L28.9942 123.147L26.004 124.077L24.521 122.556L27.6118 121.729L28.5157 118.66L29.9987 120.181ZM39.3463 114.056L48.1689 123.102L45.9654 125.251L37.1428 116.205L39.3463 114.056ZM53.2547 106.174C53.7658 106.698 54.1147 107.296 54.3015 107.969C54.4799 108.633 54.4498 109.341 54.2113 110.093C53.9728 110.846 53.4841 111.582 52.7453 112.303L51.3794 113.635L54.5465 116.882L52.343 119.031L43.5204 109.985L47.0898 106.504C47.8114 105.8 48.5428 105.33 49.2841 105.093C50.0253 104.856 50.7342 104.835 51.4106 105.03C52.087 105.226 52.7017 105.607 53.2547 106.174ZM50.8686 110.713C51.2895 110.303 51.5067 109.898 51.5202 109.5C51.5337 109.101 51.3645 108.721 51.0126 108.36C50.6607 108 50.2853 107.821 49.8864 107.824C49.4875 107.828 49.0776 108.035 48.6566 108.446L47.4582 109.614L49.6702 111.882L50.8686 110.713ZM67.5746 104.176L62.3627 102.596L61.8344 103.111L65.1649 106.526L62.9614 108.675L54.1388 99.629L57.8371 96.022C58.5501 95.3266 59.2772 94.8604 60.0185 94.6236C60.7683 94.3784 61.4814 94.3534 62.1578 94.5485C62.8259 94.7351 63.4197 95.0947 63.9391 95.6273C64.5256 96.2286 64.8775 96.9331 64.9947 97.7408C65.1205 98.54 64.949 99.361 64.4802 100.204L70.0616 101.75L67.5746 104.176ZM60.3137 101.552L61.6796 100.22C62.0834 99.8259 62.2877 99.4338 62.2926 99.0435C62.3061 98.6449 62.1368 98.2651 61.7849 97.9043C61.4498 97.5607 61.0828 97.3906 60.6839 97.3941C60.2936 97.3892 59.8966 97.5837 59.4928 97.9775L58.1269 99.3097L60.3137 101.552ZM78.0175 90.8728L74.6413 94.1656L75.6585 96.2913L73.3519 98.541L67.8024 86.3027L70.3538 83.8143L82.4495 89.6681L80.1171 91.9429L78.0175 90.8728ZM75.7916 89.7249L71.4405 87.5066L73.5623 91.8991L75.7916 89.7249ZM85.6921 68.8548L91.3061 81.0302L88.5485 83.7197L76.5173 77.8031L78.8625 75.5157L87.7656 80.1585L83.3597 71.1295L85.6921 68.8548ZM91.3551 63.3316L96.6336 68.7437C97.1615 69.285 97.701 69.5717 98.2522 69.6041C98.8033 69.6364 99.3367 69.4012 99.8521 68.8985C100.368 68.3958 100.62 67.8644 100.61 67.3042C100.6 66.744 100.331 66.1933 99.8036 65.6521L94.5251 60.2399L96.7286 58.0908L101.995 63.4901C102.782 64.2976 103.276 65.1481 103.477 66.0417C103.678 66.9352 103.625 67.8086 103.317 68.6618C103.018 69.5067 102.512 70.2768 101.799 70.9722C101.086 71.6676 100.312 72.1544 99.477 72.4325C98.6421 72.6936 97.7891 72.7041 96.9181 72.4641C96.0386 72.2155 95.2051 71.6875 94.4175 70.88L89.1516 65.4807L91.3551 63.3316ZM106.523 48.5383L112.53 54.6978C113.46 55.6514 113.906 56.6498 113.868 57.6931C113.838 58.728 113.368 59.6895 112.457 60.5777C111.503 61.5077 110.475 61.9828 109.371 62.0029C108.268 62.0231 107.23 61.5349 106.258 60.5384L108.449 58.4018C108.818 58.7798 109.176 58.9922 109.523 59.039C109.862 59.0771 110.178 58.9538 110.47 58.6689C110.736 58.4092 110.858 58.1222 110.837 57.808C110.815 57.4937 110.645 57.1734 110.327 56.8469L104.319 50.6874L106.523 48.5383ZM114.805 43.9051L116.59 45.7349L119.541 42.8569L121.2 44.5578L118.249 47.4359L120.184 49.4203L123.522 46.1652L125.244 47.9306L119.703 53.3348L110.88 44.2888L116.421 38.8846L118.143 40.65L114.805 43.9051ZM130.673 24.9844L139.496 34.0304L137.292 36.1795L132.001 30.7545L135.269 38.1527L133.491 39.887L126.151 36.4348L131.455 41.8727L129.251 44.0218L120.429 34.9758L123.032 32.4371L131.678 36.2239L128.083 27.5105L130.673 24.9844ZM138.76 20.5417L140.545 22.3715L143.496 19.4935L145.155 21.1944L142.204 24.0725L144.139 26.0569L147.477 22.8018L149.199 24.5672L143.658 29.9714L134.835 20.9254L140.376 15.5212L142.098 17.2866L138.76 20.5417Z"
                fill="#222E27" />
              <path
                d="M204.633 0.000273138L191.663 12.97L214 12.97L204.633 0.000273138Z"
                fill="#9BEABB" />
            </svg>
          </div>
          <NuxtPicture
            class="background-image"
            src="/konfigurator-bg.jpg"
            :imgAttrs="{ style: 'width:100%; height:100%; object-fit:cover;' }"
            loading="lazy" />
          <div class="columns col-2">
            <div class="column">
              <h2>Zkuste si nakofigurovat váš Shoptet na míru</h2>
              <p>
                <strong>Zaberete jo jen chvílku</strong> (pár drag&amp;drop),
                <strong>dáte nám váš email a my vám obratem pošleme orientační nabídku.</strong> Kromě toho máte jedinečnou
                příležitost poznat, na čem závisí a z jakých kroků se skládá tvorba skutečně úspěšného e-shopu na Shoptetu.
              </p>
              <BtnSecondary
                class="disabled"
                to="#"
                text="Přejít na konfigurátor"></BtnSecondary>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </div>
    </section> -->
    <section
        id="kontakt"
        class="no-margin">
      <ContactForm />
    </section>
  </main>
</template>
<script setup>
import SpojteSeSNamaBanner from "../components/SpojteSeSNamaBanner";

const screenWidth = useState('screenWidth')
</script>
<style lang="scss" scoped>
.hero .buttons {
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and ($mobile-responsive) {
    justify-content: center;
    .btn-ghost-v2 {
      display: none;
    }
  }
}
.hero .logos {
  max-width: 290px;
  @media screen and ($mobile-responsive) {
    display: none;
  }
}
.steps__content {
  display: flex;
  flex-wrap: wrap;
}
.steps__image {
  flex: 1 1 365px;
}
.steps__list {
  flex: 1 1 725px;
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  @media screen and ($mobile-responsive) {
    gap: 20px;
  }
}
.steps__step {
  flex: 1 1 300px;
  span {
    margin-bottom: 10px;
    font-size: rem(32);
    font-weight: 700;
    color: $color-green;
  }
  h3 {
    margin-block: 10px;
    font-size: rem(16);
    line-height: em(28);
  }
  p {
    margin-bottom: 0;
    color: #686868;
  }
}
.specialists__list {
  margin-top: 40px;
  max-width: 1100px;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}
.specialists__item {
  flex: 1 1 420px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #F4F4F4;
}
.specialists__image {
  picture {
    display: flex;
  }
  @media screen and ($mobile-responsive) {
    max-width: 90px;
  }
}
.specialists__text {
  padding-block: 21px;
  @media screen and ($mobile-responsive) {
    padding-block: 2.5px;
    padding-right: 10px;
  }
}
.specialists__name {
  margin: 0;
  font-size: rem(32);
  @media screen and ($mobile-responsive) {
    font-size: rem(22);
  }
}
.specialists__position {
  margin-block: 5px;
  font-size: rem(16);
  line-height: em(28);
  color: #7A827D;
  @media screen and ($mobile-responsive) {
    margin-block: 0;
  }
}
.specialists__email {
  display: flex;
  align-items: center;
  font-weight: 700;
  color: $color-font;
  text-decoration: none;
  transition: color .3s ease-in-out;
  &::before {
    content: url("public/icon/icon-mail--green.svg");
    line-height: 0;
    display: block;
    margin-right: 10px;
    @media screen and ($mobile-responsive) {
      margin-right: 4px;
    }
  }
  &:hover {
    color: $color-green;
  }

}
ul.checked {
  padding: 0;
  margin: 0 0 20px;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 0.4em;
    &::before {
      content: url(/list-marker.svg);
    }
  }
}
.banner-link {
  color: $color-font;
  text-decoration: none;
}
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 40px 100px;
  & > div {
    flex: 0 1 auto;
  }
  .banner__logo {
    max-width: 175px;
  }
  .banner__info {
    font-size: rem(24);
    position: relative;
    z-index: 1;
    strong {
      display: block;
      font-size: rem(56);
    }
  }
  .banner__arrow {
    svg {
      fill: $color-font;
    }
  }
  .banner__mockup {
    margin: -140px -30px -100px;
    background: radial-gradient(at center, #fff 0, transparent 80%);
    transition: all 0.15s ease-in-out;
  }
  &:hover,
  &:focus {
    .banner__mockup {
      transform: scale(1.1);
    }
  }
}
.proc-shoptet {
  h2 {
    margin-top: 0;
    margin-bottom: em(10, 48);
  }
  h3 {
    font-size: 1.5rem;
  }
}
.vyhody {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 70px 50px;
  margin: 40px 0 80px;
  padding: 0;
  list-style: none;
  counter-reset: vyhody;
  li {
    counter-increment: vyhody;
    line-height: 1.75em;
    &::before {
      content: '0' counter(vyhody);
      display: block;
      color: $color-accent;
      font-size: 2rem;
      line-height: 1.5em;
      font-weight: 700;
    }
  }
}
.systemy {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  flex-wrap: wrap;
  margin: 40px 0;
  picture {
    filter: grayscale(1);
    transition: all 0.15s ease-in-out;
    &:hover,
    &:focus {
      filter: none;
    }
  }
}
.konfigurator {
  position: relative;
  padding: 100px;
  .columns {
    position: relative;
  }
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  h2 {
    margin: 0;
  }
  p {
    margin-bottom: em(26);
  }
  .pripravujeme {
    position: absolute;
    top: -12px;
    left: -12px;
    z-index: 1;
  }
}
@media (min-width: 701px) {
  .mobile-mockup {
    display: none;
  }
}
@media (max-width: 1360px) {
  .banner {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    .banner__info,
    .banner__mockup,
    .banner__arrow {
      flex-basis: calc(50% - 25px);
      max-width: calc(50% - 25px);
    }
    .banner__mockup {
      margin: 0;
    }
  }
}
@media (max-width: 991px) {
  .konfigurator {
    h2 {
      font-size: rem(22);
    }
  }
}
@media (max-width: 767px) {
  .banner__logo {
    max-width: 150px;
  }
  .banner .banner__info {
    font-size: rem(16);
    strong {
      margin-bottom: 5px;
      display: block;
      font-size: rem(24);
    }
  }
  .banner .banner__mockup {
    margin: -70px;
  }
}
@media (max-width: 700px) {
  .banner {
    flex-direction: column;
    padding: 40px 20px;
    .banner__info,
    .banner__mockup,
    .banner__arrow {
      flex-basis: 100%;
      max-width: unset;
    }
  }
  .vyhody {
    gap: 20px;
    margin: 30px 0;
  }
}
@media (max-width: 680px) {
  .shoptet-sluzby-grid {
    grid-template-columns: repeat(2, minmax(1px, 1fr));
    .item {
      h3 {
        font-size: 1rem;
      }
      svg {
        max-width: 30px;
        max-height: 30px;
      }
      .info {
        padding: 0 20px;
      }
      &:not(.image):not(.large) {
        padding: 20px;
        &:hover,
        &:focus {
          .info {
            padding: 20px;
          }
        }
      }
      &.large {
        text-align: center;
        .btn-secondary {
          align-self: center;
        }
      }
    }
  }
  .systemy {
    display: grid;
    grid-template-columns: repeat(3, minmax(1px, 1fr));
    background-color: rgba($color-font, 0.05);
    padding: 20px;
    picture:nth-of-type(n + 7) {
      display: none;
    }
  }
}
@media (max-width: 580px) {
  .shoptet-sluzby-grid {
    grid-template-columns: minmax(1px, 1fr);
    .item {
      &.large {
        grid-column-end: unset;
      }
      &.image {
        display: none;
      }
      &:not(.large):not(.image) {
        background-color: transparent;
        aspect-ratio: unset;
        flex-direction: column;
        align-items: stretch;
        padding: 0;
        .init {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          h3 {
            margin: 0;
          }
        }
        .info {
          position: initial;
          text-align: left;
          background-color: rgba($color-font, 0.05);
          p {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
