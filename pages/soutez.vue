<template>
  <main>
    <HeroBig
        :imgUrl="'/soutez-hero.jpg'">
        <h1>Soutěž o<br />
          <i>GRAFICKÝ NÁVRH</i> Vašeho e-shopu<br />
          na shoptetu<br />
          v hodnotě <i>100.000 Kč</i>
        </h1>
    </HeroBig>
    <section id="scroll" ref="pageNavBar" class="page-nav">
      <div class="page-nav__wrapper container">
        <ul>
          <li>
            <a href="#registration" :class="{ '--active': activeSection === 'registration' }">Registrace do soutěže</a>
          </li>
          <li>
            <a href="#rewards" :class="{ '--active': activeSection === 'rewards' }">O co se soutěží</a>
          </li>
          <li>
            <a href="#participate" :class="{ '--active': activeSection === 'participate' }">Jak se zúčastnit</a>
          </li>
          <li>
            <a href="#announcement" :class="{ '--active': activeSection === 'announcement' }">Vyhlášení vítězů</a>
          </li>
          <li>
            <a href="#competition-rules" :class="{ '--active': activeSection === 'competition-rules' }">Pravidla soutěže</a>
          </li>
        </ul>
      </div>
    </section>

    <section id="registration" class="registration">
      <div class="registration__wrapper container">
        <div v-if="formSending">Odesílám...</div>
        <div v-else-if="formSent">Formulář byl v pořádku odeslán, děkujeme za registraci do soutěže!</div>
        <form
            v-else
            @submit.prevent="sendForm"
            class="registration__form" id="registration-form" method="post">
          <fieldset class="registration__column registration__column--left">
            <label for="name">Jméno a příjmení <i>*</i></label>
            <input type="text" id="name" name="name" :ref="form.jmeno" placeholder="Zadejte Vaše jméno a příjmení" required />

            <label for="company-name">Vaše firma <i>*</i></label>
            <input type="text" id="company-name" name="company-name" :ref="form.companyName" placeholder="Název firmy / IČO" required />

            <label for="phone">Telefon <i>*</i></label>
            <div class="--phone">
              <input type="tel" id="phone" name="phone" :ref="form.phone" placeholder="Vaše telefonní číslo" required />
              <span>+420 | </span>
            </div>

            <label for="email">E-mail <i>*</i></label>
            <input type="email" id="email" name="email" :ref="form.email" placeholder="Váš@email.cz" required />

            <label for="eshop">Adresa Vašeho e-shopu</label>
            <input type="text" id="eshop" name="eshop" :ref="form.URLeshop" placeholder="Adresa e-shopu" />
          </fieldset>
          <fieldset class="registration__column registration__column--right">
            <span>Jaká témata v e-commerce Vás zajímají?</span>

            <input
                class="visually-hidden"
                type="checkbox"
                id="migration"
                name="migration"
                value="Migrace e-shopu z jiné platformy na Shoptet"
                :ref="form.ShoptetMigration"
            />
            <label for="migration">Migrace e-shopu z jiné platformy na Shoptet</label>

            <input class="visually-hidden" type="checkbox" id="development" name="development" value="Rozvoj e-shopu" :ref="form.EshopDevelopment" />
            <label for="development">Rozvoj e-shopu</label>

            <input class="visually-hidden" type="checkbox" id="ppc" name="ppc" value="PPC kampaně" :ref="form.EshopPPC" />
            <label for="ppc">PPC kampaně</label>

            <input class="visually-hidden" type="checkbox" id="design" name="design" value="Grafika a design" :ref="form.graphicDesign" />
            <label for="design">Grafika a design</label>

            <input
                class="visually-hidden"
                type="checkbox"
                id="connection"
                name="connection"
                value="Možnosti propojení e-shopu s ERP, CRM apod."
                :ref="form.EshopConnection"
            />
            <label for="connection">Možnosti propojení e-shopu s ERP, CRM apod.</label>

            <input class="visually-hidden" type="checkbox" id="social-networks" name="social-networks" value="Sociální sítě" :ref="form.socialSite" />
            <label for="social-networks">Sociální sítě</label>

            <input class="visually-hidden" type="checkbox" id="product-photos" name="product-photos" value="Produktové fotografie" :ref="form.productPhotos" />
            <label for="product-photos">Produktové fotografie</label>

            <input class="visually-hidden" type="checkbox" id="other" name="other" value="Ostatní" :ref="form.otherThings"/>
            <label for="other">Ostatní</label>

            <textarea name="message" rows="3" placeholder="Popište, o co se zajímáte" :ref="form.message"></textarea>
          </fieldset>

          <div class="registration__submit buttons-wrapper">
            <button type="submit" class="btn btn-third">
              <span data-hover="Registrovat do soutěže">Registrovat do soutěže</span>
            </button>
            <input
                class="visually-hidden"
                type="checkbox"
                id="personal-data-processing"
                name="personal-data-processing"
                value="Souhlasím s  podmínkami soutěže a zpracování osobních údajů"
                checked />
            <label for="personal-data-processing">
              Souhlasím s <a href="/podminky-souteze">podmínkami soutěže</a> a <a href="/zpracovani-osobnich-udaju">zpracování osobních údajů</a>
            </label>
          </div>
        </form>
      </div>
    </section>
    <section id="rewards" class="rewards container">
      <h2 class="rewards__title">O co se soutěží?</h2>
      <div class="rewards__wrapper">
        <div class="rewards__image">
          <img src="/Rituals-soutez.png" alt="Rituals" />
        </div>
        <div class="rewards__content">
          <div class="rewards__card">
            <div class="rewards__headline">
              <span>1.místo</span>
              <h3>Unikátní design na míru Vašemu e-shopu</h3>
            </div>
            <p>
              Grafický design připravený na míru Vašemu e-shopu dokáže zvednout obraty až o desítky procent! Naši seniornní grafici pro Vás
              připraví unikátní návrh hlavní strany, kategorie a detailu produktu v desktopové a mobilní verzi včetně implementace na Váš
              Shoptet.
            </p>
            <div class="buttons-wrapper" style="margin-top: 20px">
              <BtnSecondary
                  url="/pripadove-studie"
                  text="Prohlédnout případové studie" />
            </div>
          </div>
          <div class="rewards__card">
            <div class="rewards__headline">
              <span>2. místo</span>
              <h3>3 měsíce správy PPC výkonnostních kampaní Google a Sklik + kompletní audit.</h3>
            </div>
            <p>
              Kompletní správa Vašich PPC kampaní na 3 měsíce zdarma včetně detailního auditu! Pomůžeme Vám získat více zákazníků a dodáme výkon Vašemu e-shopu! Bez podmínek, bez závazků!
            </p>
            <div class="buttons-wrapper" style="margin-top: 20px">
              <BtnSecondary
                  url="/pripadove-studie"
                  text="Prohlédnout případové studie" />
            </div>
          </div>
          <div class="rewards__card">
            <div class="rewards__headline">
              <span>3. - 10. místo</span>
              <h3>Poukaz v hodnotě 3000 Kč na produktové fotografie</h3>
            </div>
            <div class="buttons-wrapper" style="margin-top: 20px">
              <BtnSecondary
                  url="https://www.produktovefotografie.cz"
                  text="www.produktovefotografie.cz"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="participate" class="participate">
      <div class="participate__wrapper container">
        <h2 class="participate__title">Jak se zůčastnit</h2>
        <div class="participate__content">
          <div class="participate__card">
            <h3><span>01</span> Registrujte se na této stránce</h3>
            <p>Stačí pouze registrace do soutěže a následně vyčkat na slosování, které proběhne od 17. 5. do 17. 6.</p>
          </div>
          <div class="participate__card">
            <h3><span>02</span> Registrace na Reshoper 2023</h3>
            <p>Můžete se registrovat také na akci Reshoper 2023, kde najdete pod číslem stánku 49.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="announcement" class="announcement">
      <h2 class="announcement__title">Vyhlášení vítězů proběhne zde!</h2>
      <div class="announcement__content">
<!--        <table>
          <tr>
            <td>1.</td>
            <td>Jméno příjmení</td>
            <td>Adresa e-shopu</td>
            <td>Grafický návrh e-shopu v hodnotě 100&nbsp;000&nbsp;Kč.</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Jméno příjmení</td>
            <td>Adresa e-shopu</td>
            <td>Správa výkonnostních kampaní Google a Sklik na 3 měsíce zdarma.</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Jméno příjmení</td>
            <td>Adresa e-shopu</td>
            <td>Poukaz v hodnotě 3000 Kč na produktové fotografie.</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Jméno příjmení</td>
            <td>Adresa e-shopu</td>
            <td>Poukaz v hodnotě 3000 Kč na produktové fotografie.</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>Jméno příjmení</td>
            <td>Adresa e-shopu</td>
            <td>Poukaz v hodnotě 3000 Kč na produktové fotografie.</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>Jméno příjmení</td>
            <td>Adresa e-shopu</td>
            <td>Poukaz v hodnotě 3000 Kč na produktové fotografie.</td>
          </tr>
          <tr>
            <td>7.</td>
            <td>Jméno příjmení</td>
            <td>Adresa e-shopu</td>
            <td>Poukaz v hodnotě 3000 Kč na produktové fotografie.</td>
          </tr>
          <tr>
            <td>8.</td>
            <td>Jméno příjmení</td>
            <td>Adresa e-shopu</td>
            <td>Poukaz v hodnotě 3000 Kč na produktové fotografie.</td>
          </tr>
          <tr>
            <td>9.</td>
            <td>Jméno příjmení</td>
            <td>Adresa e-shopu</td>
            <td>Poukaz v hodnotě 3000 Kč na produktové fotografie.</td>
          </tr>
          <tr>
            <td>10.</td>
            <td>Jméno příjmení</td>
            <td>Adresa e-shopu</td>
            <td>Poukaz v hodnotě 3000 Kč na produktové fotografie.</td>
          </tr>
        </table>-->
      </div>
    </section>
    <section id="competition-rules" class="competition-rules">
      <h2 class="competition-rules__title">Pravidla soutěže</h2>
      <div class="competition-rules__text" :class="{ 'competition-rules__text--expanded': isExpanded }">
        <p><strong>Název soutěže:</strong> Grafický návrh e-shopu a další ceny</p>
        <p><strong>Období soutěže:</strong> 17. 5. – 17. 6. 2023</p>
        <strong>Účastníci soutěže:</strong>
        <p>
          Soutěže se mohou zúčastnit všichni zájemci starší 18 let s trvalým bydlištěm v České republice a Slovenské republice.
        </p>
        <strong>Registrace do soutěže</strong>
        <p>
          Účastníci soutěže se musí zaregistrovat prostřednictvím online formuláře na internetových stránkách soutěže nebo na veletrhu Reshoper 2023. Registrace je otevřena od 17. 5. do 17. 6. Každý účastník se může zaregistrovat pouze jednou s jedním e-shopem.
        </p>
        <strong>Slosování výherce</strong>
        <p>
          Výherce bude vybrán prostřednictvím slosování. Slosování se uskuteční dne 18. 7. 2023 za účasti notáře. Výherce bude informován prostřednictvím e-mailu nebo telefonu nejpozději do [31. 7. 2023].
        </p>
        <strong>Ceny:</strong>
        <ol>
          <li>
            místo: Grafický návrh e-shopu v hodnotě 100.000 Kč. Design e-shopu bude navržen a nakódován firmou MirandaMedia.
          </li>
          <li>
            místo: Správa výkonnostních kampaní Google a Sklik na 3 měsíce zdarma.
          </li>
          <li>
            až 10. místo: Poukaz v hodnotě 3000 Kč na produktové fotografie.
          </li>
        </ol>
        <strong>Unikátní grafický návrh</strong>
        <p>
          Výherce grafického návrhu bude mít možnost spolupracovat s firmou MirandaMedia při tvorbě grafického návrhu na míru pro jeho e-shop na platformě Shoptet nebo Shoptet Premium. Navrhovaný design se bude skládat z hlavní strany, kategorie a detailu produktu v mobilní a desktopové verzi. Výherce dostane k dispozici až 2 iterace s pro případné požadavky na změny a úpravy grafického návrhu. Grafický návrh bude následně nakódován v plně responzivní verzi na stránky výherního e-shopu.
        </p>
      </div>
      <div class="competition-rules__buttons">
        <button class="competition-rules__button" @click.prevent="isExpanded = !isExpanded">{{ isExpanded ? 'Přečíst méně' : 'Přečíst více' }}</button>
      </div>
    </section>
    <section class="no-margin">
      <BannerMiranda />
    </section>
  </main>
</template>
<script setup>
// HANDLE SCROLL

/*const pageNavBar = ref(null);
const positionY = ref(0);
let isFixed = ref(false);

onMounted(() => {
  positionY.value = pageNavBar.value.getBoundingClientRect().top;
  window.addEventListener('scroll', function () {
    let scroll = window.pageYOffset;

    if (scroll >= positionY.value) {
      isFixed = true;
    }
    if (scroll < positionY.value) {
      isFixed = false;
    }
  });
});*/
const pageNavBar = ref(null);
const pageNavItems = ref([]);
const activeSection = ref(null);

onMounted(() => {
  pageNavItems.value = Array.from(pageNavBar.value.querySelectorAll('a[href^="#"]'));
  window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset + document.documentElement.clientHeight / 2;

    for (const section of document.querySelectorAll('section[id]')) {
      const positionTop = section.getBoundingClientRect().top + window.pageYOffset;
      const id = section.id;

      if (scroll >= positionTop) {
        activeSection.value = id;
      } else {
        break;
      }
    }
  });
});

const form = {
  jmeno: ref(null),
  companyName: ref(null),
  email: ref(null),
  URLeshop: ref(null),
  phone: ref(null),
  message: ref(null),
  ShoptetMigration: ref(null),
  EshopDevelopment: ref(null),
  EshopPPC: ref(null),
  graphicDesign: ref(null),
  EshopConnection: ref(null),
  socialSite: ref(null),
  productPhotos: ref(null),
  otherThings: ref(null),
}
const formSending = useState('formSending', () => false)
const formSent = useState('formSent', () => false)

const sendForm = async (e) => {
  e.preventDefault()
  try {
    formSending.value = true
    const response = await $fetch(getStrapiURL('/api/ezforms/submit'), {
      method: 'POST',
      body: JSON.stringify({
        formData: {
          jmeno: form.jmeno.value.value,
          companyName: form.companyName.value.value,
          email: form.email.value.value,
          URLeshop: form.URLeshop.value.value,
          phone: form.phone.value.value,
          message: form.message.value.value,
          ShoptetMigration: form.ShoptetMigration.value.checked,
          EshopDevelopment: form.EshopDevelopment.value.checked,
          EshopPPC: form.EshopPPC.value.checked,
          graphicDesign: form.graphicDesign.value.checked,
          EshopConnection: form.EshopConnection.value.checked,
          socialSite: form.socialSite.value.checked,
          productPhotos: form.productPhotos.value.checked,
          otherThings: form.otherThings.value.checked,
        },
      }),
    })
    formSending.value = false
    formSent.value = true
  } catch (e) {
    console.log(e)
  }
}

// -- Competition-rules -- //
import MainHeader from "../components/MainHeader";

const isExpanded = ref(false);
</script>
<style lang="scss" scoped>
// -------------
// --- CUBES ---
// -------------
.hero .texts {
  h1 {
    color: $color-green;
    font-weight: 500;
    @media ($mobile-responsive) {
      font-size: rem(32);
      line-height: em(48, 32);
    }
  }
  i {
    color: $color-white;
    font-weight: 700;
    font-style: normal;
  }

}
body {
  background: url("../public/background-cubes-3.png"), url("../public/background-cubes-4.png"), url("../public/background-cubes-5.png");
  background-position: top 1618px left 0, top 3714px right 0, top 4540px left 0;
  background-repeat: no-repeat, no-repeat, no-repeat;
  @media (max-width: 1250px) {
    background: none;
  }
}

.container {
  @include container(1440px);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

// ----------------
// --- PAGE-NAV ---
// ----------------

.page-nav {
  margin-bottom: 30px;
  position: sticky;
  background-color: $color-white;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  transition: top .3s ease-in-out;
}
header.fade-in ~ main .page-nav {
  top: 97.5px;
}
.page-nav.--fixed {
  position: fixed;
  top: 0;
  background-color: $color-white;
}

.page-nav__wrapper {
  position: relative;
  z-index: 30;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
  @media (max-width: 1250px) {
    justify-content: flex-start;
    overflow: auto;
  }
  @media ($mobile-responsive) {
    padding-top: 0;
    padding-bottom: 0;
  }
  h2 {
    padding: 15px 0;
    font-weight: 700;
    font-size: rem(16);
    line-height: em(28, 16);
    text-align: center;
    white-space: nowrap;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    li a {
      display: block;
      padding: 15px;
      font-weight: 400;
      font-size: rem(16);
      line-height: em(28, 16);
      color: $color-black;
      text-decoration: none;
      transition: all 0.15s ease-out;
      text-align: center;
      white-space: nowrap;
      &:hover {
        background-color: $color-black;
        color: $color-white;
      }
    }
    li a.--active {
      background-color: $color-black;
      color: $color-white;
    }
  }
}

// --------------------
// --- REGISTRATION ---
// --------------------

.registration {
  scroll-margin-top: 12rem;
  position: relative;
  margin-bottom: 100px;

  @media ($mobile-responsive) {
    margin-bottom: 50px;
  }
}

.registration__form {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media ($mobile-responsive) {
    flex-direction: column;
  }

  .registration__column {
    margin: 0;
    width: calc(50% - 10px);
    border: none;
    @media ($mobile-responsive) {
      width: 100%;
    }
  }
  .registration__column--left {
    padding-top: 10px;
    label {
      display: block;
      font-weight: 700;
      margin-top: 20px;
      margin-bottom: 10px;
      i {
        font-style: normal;
        color: $color-red;
      }
    }
    input {
      padding: 10px;
      background-color: $color-grey;
      border: none;
      border-bottom: 1px solid $color-grey-secondary;
      width: 100%;
      color: $color-font;
      line-height: 1;
      transition: all 0.15s ease-out;

      &:focus {
        background-color: #f6fdf9;
        border-bottom: 1px solid $color-green;
        outline: none;
      }
      &::placeholder {
        color: $color-font;
        opacity: .6;
      }
    }
    .--phone {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      span {
        white-space: nowrap;
        padding: 10px;
        padding-right: 0;
        background-color: $color-grey;
        border: none;
        border-bottom: 1px solid $color-grey-secondary;
        transition: all 0.15s ease-out;
        line-height: normal;
      }
      input:focus + span {
        background-color: #f6fdf9;
        border-bottom: 1px solid $color-green;
        outline: none;
      }
    }
  }
  .registration__column--right {
    padding: 30px;
    @media ($mobile-responsive) {
      padding: 0;
    }
    span {
      display: block;
      font-weight: 700;
      margin-top: 0px;
      margin-bottom: 10px;
    }
    label {
      position: relative;
      display: flex;
      gap: 10px;
      align-items: center;
      font-weight: 400;
      margin-top: 20px;
      margin-bottom: 20px;
      &::before {
        content: "";
        width: 20px;
        height: 20px;
        border: 1px solid $color-grey-secondary;
      }
    }
    input:checked + label::before {
      background: $color-green;
      border: 1px solid $color-green-secondary;
    }
    input:checked + label:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 20px;
      height: 20px;
      background: url("/icon/checked.svg");
      background-position: center;
      background-repeat: no-repeat;
    }
    textarea {
      padding: 10px;
      width: 100%;
      height: 104px;
      color: $color-font;
      background-color: $color-grey;
      border: none;
      border-bottom: 1px solid $color-grey-secondary;
      resize: none;
      transition: all 0.15s ease-out;

      &:focus {
        background-color: #f6fdf9;
        border-bottom: 1px solid $color-green;
        outline: none;
      }
      &::placeholder {
        color: $color-font;
        opacity: .6;
      }
    }
  }
}
.registration__submit {
  width: 100%;
  text-align: center;
  label {
    display: block;
    margin-top: 30px;
    a {
      color: $color-font;
    }
  }
}
.btn-third {
  width: 100%;
    button, span {
      display: block;
      text-align: center;
      background-color: $color-green;
      color: $color-white;
      font-weight: 400;
      border: none;
      padding: 15px;
      cursor: pointer;
      transition: background-color .3s ease-in-out;
      &:hover {
        background-color: #222e27;
      }
    }
}
.form-info {
  text-align: center;
  margin-top: 20px;
}
/* -------------------- */
/* --O co se soutěží -- */
/* -------------------- */
#rewards {
  scroll-margin-top: 13rem;
}
.rewards__title {
  text-align: center;
  margin-bottom: 40px;
}
.rewards__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 20px;
  }
}
.rewards__image {
  flex: 0 1 720px;
  img {
    position: relative;
    z-index: -1;
  }
}
.rewards__content {
  flex: 0 1 720px;
}
.rewards__card:not(:last-child) {
  margin-bottom: 20px;
}
.rewards__content {
  p {
    color: #656d68;
  }
}
.rewards__headline {
  span {
    font-size: clamp(rem(36), 2.5vw, rem(48));
    line-height: 72px;
    font-weight: 700;
    color: $color-green;
  }
  h3 {
    margin: 0;
    font-size: clamp(rem(16), 2.5vw, rem(24));
  }
  margin-bottom: 20px;
}
/* ---------------------- */
/* -- Jak se zůčastnit -- */
/* ---------------------- */
.participate {
  max-width: 100%;
  height: auto;
  margin-inline: auto;
  background-image: url("/background-participate.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-block: 300px;
  @media ($mobile-responsive) {
    margin-block: -150px;
  }
}
.participate__title {
  margin-bottom: 40px;
  text-align: center;
  color: $color-white;
}
.participate__content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  @media ($mobile-responsive) {
    flex-direction: column;
  }
}
.participate__card {
  width: calc(50% - 20px);
  max-width: 700px;
  padding: 50px;
  background: $color-white;
  border: 1px solid #e9ebea;
  @media ($mobile-responsive) {
    width: 100%;
    padding: 25px;
  }

  /* Note: backdrop-filter has minimal browser support */
  h3 {
    margin: 0;
    font-size: clamp(rem(16), 2.5vw, rem(24));
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      font-size: clamp(rem(24), 2.5vw, rem(32));
      font-weight: 700;
      color: $color-green;
    }
  }
  p {
    color: #656d68;
  }
}
/* ---------------------- */
/* -- Vyhlášení vítězů -- */
/* ---------------------- */
.announcement {
  scroll-margin-top: 7rem;
  @include container(920px);
  margin-bottom: 100px;
  @media ($mobile-responsive) {
    margin-bottom: 50px;
  }
}
.announcement__title {
  text-align: center;
  margin-bottom: 40px;
}
.announcement__content {
  overflow-x: auto;
}
.announcement__content table {
  width: 100%;
  border-collapse: collapse;
  background-color: $color-white;

  tr {
    padding-block: 20px;
    border-bottom: 1px solid $color-grey;
    vertical-align: baseline;
    &:first-child {
      font-weight: 700;
    }
    &:last-child {
      border-bottom: none;
    }
    td {
      padding-block: 20px;
      &:first-child {
        color: $color-green;
      }
    }
  }
  tr {
    td:nth-child(1) {
      width: 5%;
    }
    td:nth-child(2) {
      width: 25%;
    }
    td:nth-child(3) {
      width: 30%;
    }
    td:nth-child(4) {
      width: 40%;
    }
  }
}

@media ($mobile-responsive) {
  .announcement__content table {
    tbody {
      display: flex;
      flex-direction: column;
      tr {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        width: 100%;
        padding: 10px 0;
        td {
          margin: 0;
          padding: 0;
        }
        td:nth-child(1) {
          width: 100%;
        }
        td:nth-child(2) {
          width: 100%;
        }
        td:nth-child(3) {
          width: 100%;
        }
        td:nth-child(4) {
          width: 100%;
        }
      }
    }
  }
}
/* ---------------------- */
/* -- Pravidla soutěže -- */
/* ---------------------- */
.competition-rules {
  scroll-margin-top: 7rem;
  @include container(920px);
  margin-bottom: 100px;
  @media ($mobile-responsive) {
    margin-bottom: 50px;
  }
}
.competition-rules__title {
  margin-bottom: 40px;
  text-align: center;
}
.competition-rules__text {
  position: relative;
  max-height: 350px;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 150px, white);
    pointer-events: none;
  }
  strong {
    font-size: rem(20);
    line-height: em(36);
    color: $color-black;
  }
  p {
    margin-bottom: 20px;
    color: #656D68;
    &:last-child {
      margin-bottom: 0;
    }
  }
  ol {
    margin-bottom: 20px;
    padding-left: 15px;
    font-size: rem(16);
    line-height: 28px;
    color: #656D68;
  }
}
.competition-rules__text--expanded {
  max-height: 5000px !important;
  transition: max-height 0.35s ease-in-out;
  &::after {
    display: none;
  }
  ~ .competition-rules__buttons .competition-rules__button::after {
    transform: rotate(-135deg);
  }
}
.competition-rules__buttons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.competition-rules__button {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 2px solid #999798;
  background-color: transparent;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border: 2px none $color-black;
    border-right-style: solid;
    border-bottom-style: solid;
    transform: rotate(45deg);
    transition: transform, border-color, 0.4s ease-in-out;
  }
}
</style>
