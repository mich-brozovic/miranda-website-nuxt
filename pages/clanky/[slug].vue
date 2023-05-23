<template>
	<HeroSmall imgUrl="/clanek-hero.jpg" />
	<div class="article__wrapper">
		<div class="container">
			<div class="article__image">
				<NuxtPicture
					:src="getStrapiMedia(data.data[0].attributes.obrazek)"
					:imgAttrs="{ style: 'display:block;' }"
					:width="data.data[0].attributes.obrazek.data.attributes.width"
					:height="data.data[0].attributes.obrazek.data.attributes.height"
					:alt="data.data[0].attributes.nazev"
					provider="strapi" />
			</div>
			<div class="article__content">
				<main>
					<h1>{{ data.data[0].attributes.nazev }}</h1>
          <p class="article__excerpt" v-html="data.data[0].attributes.description"></p>
					<ClientOnly
						fallback-tag="div"
						fallback="Načítám...">
						<Markdown class="content" :source="data.data[0].attributes.content" />
					</ClientOnly>
				</main>
				<aside>
					<div class="article__reading">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
								fill="#59DC8E" />
							<path
								d="M13 7H11V12.414L14.293 15.707L15.707 14.293L13 11.586V7Z"
								fill="#59DC8E" />
						</svg>
						<span>Doba čtení článku {{ data.data[0].attributes.read_duration }}</span>
					</div>
					<h4>Autor</h4>
					<div class="article__author">
						<div class="article__author--wrapper">
							<div class="article__author--image">
								<NuxtPicture
									:src="getStrapiMedia(authorData.data.attributes.avatar)"
									:imgAttrs="{ style: 'display:block;' }"
									:width="authorData.data.attributes.avatar.data.attributes.width"
									:height="authorData.data.attributes.avatar.data.attributes.height"
									:alt="authorData.data.attributes.jmeno"
									provider="strapi" />
							</div>
							<div class="article__author--info">
								<h5>{{ authorData.data.attributes.jmeno }}</h5>
								<p>{{ authorData.data.attributes.pozice }}</p>
							</div>
						</div>
					</div>
					<h4>Sdílejte článek</h4>
					<div class="social-sharing">
						<ClientOnly>
							<ShareNetwork
								network="facebook"
								:url="router.currentRoute.value.fullPath"
								:title="data.data[0].attributes.nazev">
								<svg
									width="12"
									height="24"
									viewBox="0 0 12 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill="#59DC8E"
										d="M11.5748 7.77H7.7948V5.28C7.7948 4.33 8.3948 4.14 8.8448 4.14H11.5348V0H7.8448C3.7148 0 2.8148 3.09 2.8148 5.03V7.77H0.424805V12H2.8148V24H7.7948V12H11.1848L11.5748 7.77Z"></path>
								</svg>
							</ShareNetwork>
							<ShareNetwork
								network="twitter"
								:url="router.currentRoute.value.fullPath"
								:title="data.data[0].attributes.nazev">
								<svg
									width="30"
									height="24"
									viewBox="0 0 30 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M29.8203 2.80659C28.7088 3.2759 27.5355 3.59701 26.3375 3.76991C27.6096 3.01655 28.5482 1.81857 28.9805 0.410645C27.7949 1.11461 26.4981 1.63332 25.1395 1.91738C22.8424 -0.527974 19.0015 -0.651477 16.5561 1.64567C15.3334 2.79424 14.6418 4.38743 14.6418 6.05471C14.6418 6.52402 14.7036 6.98098 14.8271 7.43794C9.93639 7.20328 5.37914 4.90614 2.27923 1.12696C1.77287 2.04088 1.50116 3.0783 1.50116 4.12807C1.50116 6.15351 2.51389 8.0431 4.20587 9.16697C3.2302 9.12992 2.27923 8.85822 1.43941 8.38891V8.45066C1.43941 11.3406 3.46485 13.823 6.29306 14.3911C5.762 14.5393 5.21859 14.6134 4.67518 14.6258C4.29232 14.6134 3.90946 14.5764 3.53896 14.5023C4.34172 16.96 6.60182 18.6396 9.18302 18.7014C7.02173 20.381 4.36642 21.2949 1.62467 21.2826C1.14301 21.2949 0.661347 21.2826 0.179688 21.2332C2.95849 23.0487 6.21896 24.012 9.54118 23.9996C19.0262 24.0614 26.7574 16.4289 26.8192 6.94393C26.8192 6.86983 26.8192 6.79573 26.8192 6.70927V5.93121C27.9925 5.06669 29.0052 4.01692 29.8203 2.80659Z"
										fill="#59DC8E"></path>
								</svg>
							</ShareNetwork>
							<ShareNetwork
								network="linkedin"
								:url="router.currentRoute.value.fullPath"
								:title="data.data[0].attributes.nazev">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill="#59DC8E"
										d="M22.1447 0.000390816H1.85516C0.895179 -0.0196088 0.0951949 0.730376 0.0751953 1.70036C0.0751953 1.71036 0.0751953 1.73036 0.0751953 1.74036V22.2699C0.0751953 23.2299 0.85518 23.9999 1.81516 23.9999C1.82516 23.9999 1.84516 23.9999 1.85516 23.9999H22.1447C23.1147 24.0099 23.9047 23.2299 23.9247 22.2599V1.74036C23.8947 0.770375 23.1047 0.0103906 22.1447 0.000390816ZM7.30505 20.05H3.68512V9.2502H7.30505V20.05ZM5.47509 7.76023C4.45511 7.85023 3.54513 7.09025 3.45513 6.07027C3.44513 6.01027 3.44513 5.94027 3.44513 5.88027C3.44513 4.84029 4.29511 3.99031 5.34509 4.00031C5.38509 4.00031 5.43509 4.00031 5.47509 4.00031C6.51507 3.93031 7.41505 4.7103 7.49505 5.75027C7.49505 5.79027 7.49505 5.83027 7.49505 5.88027C7.53504 6.88025 6.76506 7.73023 5.76508 7.77023C5.66508 7.77023 5.57508 7.77023 5.47509 7.76023ZM20.2748 20.05H16.6549V14.2701C16.6549 12.8201 16.1249 11.8102 14.8249 11.8102C13.9949 11.8102 13.2649 12.3301 12.9949 13.1101C12.9049 13.3901 12.8749 13.6801 12.8949 13.9801V20H9.27501C9.27501 20 9.32501 10.1702 9.27501 9.1602H12.8849V10.7002C13.5549 9.5602 14.7949 8.88021 16.1149 8.92021C18.4748 8.92021 20.2648 10.4602 20.2648 13.7901L20.2748 20.05Z"></path>
								</svg>
							</ShareNetwork>
						</ClientOnly>
					</div>
				</aside>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ShareNetwork } from 'vue-social-sharing'
	import Markdown from 'vue3-markdown-it'
	const { find, findOne } = useStrapi()
	const router = useRouter()
	const { data, error } = await useAsyncData('article', () =>
		find('clanky', { filters: { slug: router.currentRoute.value.params.slug }, populate: '*' })
	)
	const { data: authorData, error: authorError } = await useAsyncData('author', () =>
		findOne('autors', data.value.data[0].attributes.autor.data.id, { populate: '*' })
	)
	useHead({
		title: data.value.data[0].attributes.nazev,
		meta: {
			name: 'description',
			content: data.value.data[0].attributes.description,
		},
	})
	useSeoMeta({
		title: data.value.data[0].attributes.nazev,
		ogTitle: data.value.data[0].attributes.nazev,
		description: data.value.data[0].attributes.description,
		ogDescription: data.value.data[0].attributes.description,
		ogImage: getStrapiMedia(data.value.data[0].attributes.obrazek),
	})
</script>
<style lang="scss" scoped>
	.article {
		&__wrapper {
			background: linear-gradient(180deg, #f3f3f3, hsla(0, 0%, 85%, 0));
			background-position-y: 0%;
			background-repeat: repeat;
			background-size: auto;
			background-size: 100% 707px;
			background-repeat: no-repeat;
			background-position-y: 340px;
			position: relative;
			position: relative;
			margin-top: -440px;
			h1 {
				font-size: clamp(2.375rem, 5vw, 3.875rem);
				line-height: em(85, 64);
				margin-top: 0;
			}
		}
		&__content {
			display: flex;
			flex-wrap: wrap;
			main {
				padding: 75px;
				background-color: $color-white;
				flex: 1 1 600px;
				margin-top: -100px;
			}
			aside {
				padding: 40px;
				flex: 0 1 390px;
			}
      .content {
        :deep(p) {
          line-height: em(32);
        }
        :deep(ul) {
          list-style: none;
          padding-left: 0;
          li {
            position: relative;
            padding-left: 20px;
            font-size: rem(16);
            line-height: 2;
            &::before {
              content: '';
              position: absolute;
              top: em(13, 20);
              left: 0;
              width: 10px;
              height: 10px;
              background-color: $color-accent;
            }
          }
        }
      }
		}
    &__excerpt {
      font-size: rem(18);
      line-height: em(32);
    }
		&__reading {
			display: flex;
			align-items: center;
			color: rgba($color-font, 0.5);
			svg {
				margin-right: 10px;
				fill: $color-accent;
			}
		}
		&__author {
			&--wrapper {
				display: flex;
				align-items: center;
				gap: 10px;
			}
			&--image {
				flex: 0 1 80px;
			}
			h5 {
				margin: 0 0 10px;
				font-size: rem(22);
			}
			p {
				margin: 0;
			}
		}
	}
	.social-sharing {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		a {
			display: flex;
			width: 64px;
			height: 64px;
			align-items: center;
			justify-content: center;
			border: 1px solid $color-accent;
		}
	}
	@media (max-width: 1300px) {
		.article__content main {
			padding: 75px 30px;
		}
	}
	@media (max-width: 767px) {
		.article__wrapper {
			margin-top: -150px;
			background-position-y: 100px;
		}
		.article__content main {
			padding: 20px;
			margin-top: 0;
		}
		.article__content aside {
			padding: 20px;
		}
	}
</style>
