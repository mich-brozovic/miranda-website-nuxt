<template>
	<div v-if="props.type === 'hp' && screenWidth <= 767">
		<Swiper :slides-per-view="1" :loop="true" :modules="[SwiperPagination]" pagination>
			<SwiperSlide v-for="(item, index) in data.data" :index="index" class="item">
				<nuxt-link v-if="item.attributes.url" :to="`/pripadove-studie/${item.attributes.url}`">
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
					<div class="case-study">Případová studie</div>
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
	<div v-else>
		<div class="reference-grid" :class="{ hidden: props.type == 'shop' && !visibleAll }">
			<div
				class="item"
				v-for="(item, index) in data.data"
				:key="index"
				:class="{ large: (index == 2 || index == 3) && props.type == 'hp' }">
				<nuxt-link v-if="item.attributes.url" :to="`/pripadove-studie/${item.attributes.url}`">
					<NuxtPicture
						class="bg-img"
						provider="strapi"
						:src="bgImageURL(item)"
						loading="lazy"
						:width="item.attributes.thumbnail.data.attributes.width"
						:height="item.attributes.thumbnail.data.attributes.height"
						:alt="item.attributes.nazev" />
					<div class="logo">
						<NuxtPicture
							provider="strapi"
							:src="logoURL(item)"
							loading="lazy"
							:width="item.attributes.logo.data.attributes.width"
							:height="item.attributes.logo.data.attributes.height"
							alt="" />
					</div>
					<div class="case-study">Případová studie</div>
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
						:width="item.attributes.thumbnail.data.attributes.width"
						:height="item.attributes.thumbnail.data.attributes.height"
						:alt="item.attributes.nazev" />
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
			</div>
		</div>
	</div>

	<div v-if="props.type == 'shop'">
		<div class="buttons-center">
			<button v-if="!visibleAll" class="btn-secondary" @click="visibleAll = true">Zobrazit další případové studie</button>
			<button v-else class="btn-secondary" @click="visibleAll = false">Skrýt reference</button>
		</div>
	</div>
</template>

<script setup>
	const { find } = useStrapi()
	const props = defineProps(['type'])
	const visibleAll = useState('visibleAllRefs', () => false)
	const screenWidth = useState('screenWidth')
	const data = useState('referenceData', () => null)
	if (props.type == 'hp') {
		const { data: referenceData, error: referenceError } = await useAsyncData('referenceHP', () =>
			find('references', {
				populate: '*',
				sort: 'priorita',
				'pagination[page]': 1,
				'pagination[pageSize]': 6,
			})
		)
		data.value = referenceData.value
	} else if (props.type == 'shop') {
		const { data: referenceData, error: referenceError } = await useAsyncData('referenceShoptet', () =>
			find('references', {
				populate: '*',
				sort: 'priorita',
				'filters[kategorie][nazev]': 'E-shop',
			})
		)
		data.value = referenceData.value
	} else {
		const { data: referenceData, error: referenceError } = await useAsyncData('referencePage', () =>
			find('references', {
				populate: '*',
				sort: 'priorita',
			})
		)
		data.value = referenceData.value
	}

	const logoURL = (item) => {
		return getStrapiMedia(item.attributes.logo)
	}
	const bgImageURL = (item) => {
		return getStrapiMedia(item.attributes.thumbnail)
	}
</script>

<style lang="scss" scoped>
	.reference-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(1px, 1fr));
		gap: 20px;
		margin: 60px 0;
		&.hidden {
			.item:nth-of-type(n + 9) {
				display: none;
			}
		}
		@media (max-width: 900px) {
			grid-template-columns: repeat(2, minmax(1px, 1fr));
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
	}
	@media (max-width: 730px) {
		.reference-grid {
			grid-template-columns: repeat(2, minmax(1px, 1fr));
			margin: 20px 0 15px;
			gap: 15px;
		}
	}
</style>
