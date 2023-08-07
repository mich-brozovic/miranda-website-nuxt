<template>
    <main>
        <!-- HERO -->
        <HeroBig imgUrl="/kariera/kariera-hero.jpg">
            <h1>Kariéra v Mirandě</h1>
            <h2>
                Vítej v kariérní sekci agentury Miranda. Jsme tým nadšenců, kteří spojují firmy se zákazníky na základě
                dat, příběhů a hodnot. Pokud hledáš příležitost růst, učit se a sdílet své nápady v dynamickém a
                přátelském prostředí, jsi na správném místě.
            </h2>
        </HeroBig>
        <!-- OFFICE BANNER -->
        <section class="office container">
            <div class="office__content">
                <h2>Naše kanceláře – místo, kde se rodí kreativita</h2>
                <p>
                    Vítej v našich moderních kancelářích v holešovické Marině, kde vymýšlíme strategie, projekty a
                    nápady, které překonávají očekávání našich klientů. Naše kanceláře nejsou jen místem, kde pracujeme.
                    Jsou symbolem našeho závazku k vytváření silné firemní kultury, podporují naši produktivitu a jsou
                    místem, kde se rodí skvělé nápady. Přijď nás navštívit a prožij tu jedinečnou atmosféru na vlastní
                    kůži!
                </p>
                <div class="office__slider-btns">
                    <div class="office__btn-prev swiper-button-prev">
                        <svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM2 13.5L52 13.5L52 10.5L2 10.5L2 13.5Z"
                                fill="#59DC8E"
                            />
                        </svg>
                    </div>
                    <div class="office__btn-next swiper-button-next">
                        <svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
                                fill="#59DC8E"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <Swiper
                :slidesPerView="'auto'"
                :navigation="{
                    nextEl: '.office__btn-next',
                    prevEl: '.office__btn-prev',
                }"
                :space-between="20"
                :modules="[SwiperNavigation]"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                class="office__slider"
            >
                <SwiperSlide class="office__slide">
                    <img src="/kariera/office-banner-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide class="office__slide">
                    <img src="/kariera/office-banner-2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide class="office__slide">
                    <img src="/kariera/office-banner-3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide class="office__slide office__slide--content">
                    <img src="/kariera/office-banner-4.jpg" alt="" />
                    <div>
                        <h3>Zastav se u nás na kávu</h3>
                        <p>
                            MirandaMedia Group, s.r.o.<br />
                            Jankovcova 1596/14b<br />
                            Praha 7 - Holešovice
                        </p>
                        <BtnPrimary url="https://goo.gl/maps/JrVr6gURPT7wB4Po8" text="Navigovat" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
        <!-- MIRANDA GRID -->
        <section id="scroll" class="container">
            <div class="miranda-grid">
                <div class="item large">
                    <h3>Zábava a týmová spolupráce – klíč k našemu úspěchu</h3>
                    <p>
                        V Mirandě věříme v sílu týmu. Pravidelné teambuildingy a firemní večírky nám pomáhají posilovat
                        naše vztahy a vytvářet nezapomenutelné vzpomínky. Když jsme spolu, jsme silnější. A zábavnější.
                    </p>
                </div>
                <div class="item image large">
                    <NuxtPicture
                        src="/kariera/zabava-banner-1.jpg"
                        :imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div class="item image">
                    <NuxtPicture
                        src="/kariera/zabava-banner-2.jpg"
                        :imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div class="item image">
                    <NuxtPicture
                        src="/kariera/zabava-banner-3.jpg"
                        :imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div class="item image">
                    <NuxtPicture
                        src="/kariera/zabava-banner-4.jpg"
                        :imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div class="item image wide mobile-wide">
                    <NuxtPicture
                        src="/kariera/zabava-banner-5.jpg"
                        :imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div class="item center">
                    <h3>
                        <strong>
                            15 let
                            <small>zkušeností</small>
                        </strong>
                    </h3>
                    <p>
                        Během 15 let na trhu jsme byli svědky rychlého růstu a proměny digitálního obchodu. Ale místo
                        toho, abychom byli pouhými pozorovateli, stáli jsme na čele této revoluce. S naším týmem
                        talentovaných odborníků jsme nejen sledovali trendy, ale také je sami vytvářeli.
                    </p>
                </div>
            </div>
        </section>
        <!-- LIDE -->
        <section class="lide">
            <div class="lide__content container">
                <h2>Naši lidé - základ našeho úspěchu</h2>
                <p>
                    Poznej náš tým - skutečné hvězdy agentury Miranda. Každý z nás přispívá troškou svého talentu a
                    jedinečnou osobností. Podívej se, kdo stojí za našimi úspěšnými projekty a kdo by mohl být tvým
                    budoucím kolegou!
                </p>
            </div>
            <div class="lide__container">
                <div class="lide__wrapper container">
                    <Swiper
                        :slidesPerView="3"
                        :space-between="20"
                        :navigation="{
                            nextEl: '.lide__btn-next',
                            prevEl: '.lide__btn-prev',
                        }"
                        :breakpoints="{
                            0: {
                                slidesPerView: 1,
                            },
                            505: {
                                slidesPerView: 2,
                            },
                            1015: {
                                slidesPerView: 3,
                            },
                        }"
                        :modules="[SwiperNavigation]"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        class="lide__slider"
                    >
                        <SwiperSlide>
                            <div class="lide__slide">
                                <div class="lide__slide-image">
                                    <NuxtPicture
                                        src="/lide/hana-alt.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img"
                                    />
                                    <NuxtPicture
                                        src="/lide/hana.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img lide__img--hover"
                                    />
                                </div>
                                <div class="lide__slide-content">
                                    <h3>Hana</h3>
                                    <p>Senior PPC specialist</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div class="lide__slide">
                                <div class="lide__slide-image">
                                    <NuxtPicture
                                        src="/lide/martin2-alt.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img"
                                    />
                                    <NuxtPicture
                                        src="/lide/martin2.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img lide__img--hover"
                                    />
                                </div>
                                <div class="lide__slide-content">
                                    <h3>Martin</h3>
                                    <p>PPC specialist</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div class="lide__slide">
                                <div class="lide__slide-image">
                                    <NuxtPicture
                                        src="/lide/dima-alt.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img"
                                    />
                                    <NuxtPicture
                                        src="/lide/dima.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img lide__img--hover"
                                    />
                                </div>
                                <div class="lide__slide-content">
                                    <h3>Dmirty</h3>
                                    <p>Senior PPC specialist</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div class="lide__slide">
                                <div class="lide__slide-image">
                                    <NuxtPicture
                                        src="/lide/monika-alt.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img"
                                    />
                                    <NuxtPicture
                                        src="/lide/monika.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img lide__img--hover"
                                    />
                                </div>
                                <div class="lide__slide-content">
                                    <h3>Monika</h3>
                                    <p>Front office manager</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div class="lide__slide">
                                <div class="lide__slide-image">
                                    <NuxtPicture
                                        src="/lide/karel-alt.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img"
                                    />
                                    <NuxtPicture
                                        src="/lide/karel.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img lide__img--hover"
                                    />
                                </div>
                                <div class="lide__slide-content">
                                    <h3>Karel</h3>
                                    <p>PPC specialist</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div class="lide__slide">
                                <div class="lide__slide-image">
                                    <NuxtPicture
                                        src="/lide/timur-alt.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img"
                                    />
                                    <NuxtPicture
                                        src="/lide/timur.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img lide__img--hover"
                                    />
                                </div>
                                <div class="lide__slide-content">
                                    <h3>Timur</h3>
                                    <p>UX/UI designer</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div class="lide__slide">
                                <div class="lide__slide-image">
                                    <NuxtPicture
                                        src="/lide/martin-alt.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img"
                                    />
                                    <NuxtPicture
                                        src="/lide/martin.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img lide__img--hover"
                                    />
                                </div>
                                <div class="lide__slide-content">
                                    <h3>Martin</h3>
                                    <p>Senior Frontend developer</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div class="lide__slide">
                                <div class="lide__slide-image">
                                    <NuxtPicture
                                        src="/lide/anton-alt.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img"
                                    />
                                    <NuxtPicture
                                        src="/lide/anton.jpg"
                                        :imgAttrs="{
                                            style: 'display:block; width:100%; height:100%; object-fit:cover;',
                                        }"
                                        alt=""
                                        loading="lazy"
                                        class="lide__img lide__img--hover"
                                    />
                                </div>
                                <div class="lide__slide-content">
                                    <h3>Anton</h3>
                                    <p>Frontend developer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div class="lide__btn-prev swiper-button-prev"></div>
                <div class="lide__btn-next swiper-button-next"></div>
            </div>
        </section>
        <!-- POZICE -->
        <section id="pozice" class="pozice container">
            <div class="pozice-grid">
                <div class="item wide image" style="height: 320px">
                    <div>
                        <h2>Dostupné pozice</h2>
                        <p>Hledáme kolegy na následující pozice:</p>
                    </div>
                </div>
                <article class="item" v-for="(item, index) in data" :key="index">
                    <NuxtLink :to="`/kariera/${item.id}`" class="item-link">
                        <div class="item-wrap">
                            <h1>
                                {{ item.attributes.Nazev }}
                            </h1>
                            <p>
                                {{
                                    item.attributes.description
                                        ? item.attributes.description
                                        : "Hledáme do svých řad nového kolegu / novou kolegyni."
                                }}
                            </p>
                            <div class="item-btn-wrap">
                                <BtnSecondary :url="``" text="Zobrazit pozici" />
                                <span>Praha</span>
                            </div>
                        </div>
                    </NuxtLink>
                </article>
            </div>
        </section>
        <!-- PROC MIRANDA BANNER -->
        <section class="proc-miranda">
            <div class="container">
                <div class="columns col-4-6 align-center">
                    <div class="column">
                        <h2>Chceš se stát součástí našeho týmu?</h2>
                        <p>
                            Místo u stolu máme připravené, možná čeká právě na tebe. Vyplň formulář níže a pošli nám své
                            CV. Obratem se Ti ozveme.
                        </p>
                        <BtnSecondary url="#pozice" text="Ano, chci do týmu! " />
                    </div>
                    <div class="column">
                        <NuxtPicture src="/kariera/tym-banner.png" width="806" height="636" alt="" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
        <!-- KONTAKT FORM 2 -->
        <section id="kontakt">
            <ContactForm2 />
        </section>
    </main>
</template>

<script setup>
const { find } = useStrapi();
const { data } = await find("careers", { populate: "*" });
</script>

<style lang="scss" scoped>
:deep(.texts) {
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 50px 50px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
}
// OFFICE BANNER
.office {
    display: flex;
    align-items: center;
}
.office__content {
    flex: 1;
    max-width: 620px;
    padding-right: 100px;
    h2 {
        margin-top: 0;
        margin-bottom: 30;
    }
    p {
        margin: 0;
    }
}
.office__slider {
    flex: 1.5;
    margin-right: calc(50% - 50vw);
    padding-right: calc(50vw - 50%);
}
.office__slide {
    width: unset !important;
    img {
        display: block;
    }
}
.office__slider-btns {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 45px;
    .office__btn-next,
    .office__btn-prev {
        position: static;
        transform: none;
        height: 30px;
        width: 50px;
        background-color: transparent;
        &::after {
            display: none;
        }
    }
    .swiper-button-disabled {
        opacity: 1;
        path {
            fill: #b7b7b7;
        }
    }
}
.office__slide--content {
    display: flex;
    // height: 450px;
    margin: 0;
    img {
        width: auto;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 335px;
        padding: 40px;
        color: $color-white;
        background-color: #222e27;
        h3 {
            margin: 0;
            font-size: rem(32);
            line-height: 1.5em;
        }
    }
}
@media (max-width: 1050px) {
    .office {
        flex-direction: column;
    }
    .office__content {
        padding-right: 0;
        margin-bottom: 30px;
        max-width: unset;
    }
    .office__slider {
        margin-left: -2rem;
        padding-left: 2rem;
    }
}
@media (max-width: 767px) {
    .office__slide--content {
        flex-direction: column;
        margin-right: 0;
        height: auto;
        img {
            display: none;
        }
        div {
            padding: 20px;
            height: 100%;
        }
    }
    .office__slider {
        width: calc(100% + 40px);
        margin-left: -20px;
        padding-left: 20px;
        margin-right: -20px;
        padding-right: 20px;
    }
}
// MIRANDA GRID
.miranda-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(1px, 1fr));
    gap: 20px;
    margin-top: 60px;
    .item {
        grid-column-end: span 2;
        h3 {
            margin-top: 0;
            margin-bottom: em(30, 48);
            strong {
                font-size: inherit;
                line-height: inherit;
                font-weight: inherit;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                small {
                    font-size: rem(16);
                    line-height: 1.75em;
                }
            }
        }
        p {
            margin-top: 0;
            &:last-child {
                margin-bottom: 0;
            }
        }
        &.large {
            grid-column-end: span 3;
        }

        &.wide {
            grid-column-end: span 4;
        }
        &.center {
            text-align: center;
            strong {
                font-size: rem(48);
                line-height: 1.5em;
                display: block;
                small {
                    font-size: 1rem;
                    line-height: 1.5em;
                    display: block;
                }
            }
        }
        &:not(.image) {
            padding: 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            &.large {
                padding: 100px;
            }
        }

        &:first-of-type,
        &:nth-of-type(7) {
            background-color: rgba($color-font, 0.05);
        }
    }
}
@media (max-width: 1050px) {
    .miranda-grid {
        grid-template-columns: repeat(2, minmax(1px, 1fr));
        grid-auto-flow: dense;
        .item {
            grid-column-end: unset;
            &:not(.wide):not(.mobile-wide) {
                aspect-ratio: 1;
            }
            &.large,
            &.wide {
                grid-column-end: span 2;
            }
            &.image.large,
            &.image {
                grid-column-end: unset;
            }
        }
    }
}
@media (max-width: 930px) {
    .miranda-grid {
        .item {
            &:not(.image) {
                padding: 20px;
                grid-column-end: span 2;
                &.large:not(.image) {
                    padding: 20px;
                }
            }
            &.mobile-wide {
                grid-column-end: span 2;
            }
        }

        .item.center strong {
            font-size: 2rem;
        }
    }
}
// LIDE
.lide__container {
    position: relative;
    .lide__btn-next {
        right: 2rem;
    }
    .lide__btn-prev {
        left: 2rem;
    }
    @media (max-width: 767px) {
        .lide__btn-next,
        .lide__btn-prev {
            width: 50px;
            height: 50px;
        }
        .lide__btn-next {
            right: 20px;
        }
        .lide__btn-prev {
            left: 20px;
        }
    }
}
.lide__content {
    max-width: 920px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 60px;
    h2 {
        margin: 0;
        margin-bottom: 30px;
    }
    p {
        margin: 0;
    }
    @media (max-width: 767px) {
        margin-bottom: 30px;
        h2 {
            margin-bottom: 20px;
        }
    }
}
.lide__slide {
    .lide__slide-image {
        position: relative;
        overflow: hidden;
        aspect-ratio: 1 / 1;
    }
    .lide__img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        transition: opacity 0.5s ease-in-out;
    }
    .lide__img--hover {
        opacity: 0;
    }
    &:hover {
        .lide__img {
            animation-name: imgHover;
            animation-duration: 0.5s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
        }
        .lide__img--hover {
            opacity: 1;
        }
    }
    .lide__slide-content {
        background-color: #f4f4f4;
        padding: 20px;
        text-align: center;

        h3 {
            margin: 0;
            font-size: rem(32);
            line-height: 1.3125em;
        }
        p {
            margin: 0;
            color: #7a827d;
        }
    }
}
.lide__btn-wrap {
    position: relative;
}
@keyframes imgHover {
    0% {
        filter: blur(0);
    }
    50% {
        filter: blur(5px);
    }
    100% {
        filter: blur(0);
    }
}
// POZICE
.pozice-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(1px, 1fr));
    gap: 20px;
    margin-top: 60px;
    .item:not(.image) {
        position: relative;
        background-color: rgba($color-font, 0.05);
        .item-link {
            display: block;
            padding: 40px 50px;
            text-decoration: none;
            height: 100%;
            &:hover {
                h1 {
                    color: $color-accent;
                }
            }
        }
        h1 {
            margin: 0;
            color: $color-font;
            transition: all 0.15s ease-in;
        }
        p {
            color: $color-font-gray;
            margin-bottom: auto;
        }
    }
    .wide {
        grid-column-end: span 2;
    }
    .image {
        background-image: url("/kariera/pozice-bg.jpg");
        background-position: center;
        background-size: cover;
        height: 320px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $color-white;
        h2 {
            margin: 0;
            margin-bottom: 20px;
        }
        h2,
        p {
            text-align: center;
        }
    }
    .item-wrap {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .item-btn-wrap {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            display: flex;
            align-items: center;
            gap: 10px;
            color: $color-font;
            &:before {
                content: url("/kariera/place-icon.png");
                line-height: 0;
            }
        }
    }
}
@media (max-width: 930px) {
    .pozice-grid {
        .item {
            grid-column-end: span 2;
        }
        .item:not(.image) {
            .item-link {
                padding: 20px;
            }
        }
    }
}
// KONTAKT FORM 2
#kontakt {
    margin-bottom: -40px;
    @media (max-width: 767px) {
        margin-bottom: 30px;
    }
}
</style>
