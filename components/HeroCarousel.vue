<template>
	<section class="hero">
		<Swiper
			style="height: 100%"
			:slides-per-view="1"
			:loop="true"
			:modules="[SwiperPagination, SwiperAutoplay]"
			pagination
			:autoplay="{ delay: 5000 }"
			@slideChangeTransitionEnd="onSlideChange()">
			<SwiperSlide v-for="(item, index) in props.data" :key="index" :data-black="item.dataBlack">
				<div class="image-wrapper">
					<NuxtPicture
						:src="screenWidth > 767 ? item.imageUrl : item.imageMobileUrl"
						:imgAttrs="{ style: 'width:100%; height:100%; object-fit:cover;' }" />
				</div>
				<div class="container">
					<div class="texts">
						<slot name="top"></slot>
						<h1 v-html="item.title"></h1>
						<h2 v-html="item.subtitle"></h2>
						<slot></slot>
					</div>
					<!-- <div v-if="!hideScroll" class="scroll">
						<a href="#scroll">
							<svg width="24" height="155" viewBox="0 0 24 155" fill="none" xmlns="http://www.w3.org/2000/svg">
								<title>Scrolluj</title>
								<path
									d="M10.9393 154.061C11.5251 154.646 12.4749 154.646 13.0607 154.061L22.6066 144.515C23.1924 143.929 23.1924 142.979 22.6066 142.393C22.0208 141.808 21.0711 141.808 20.4853 142.393L12 150.879L3.51472 142.393C2.92893 141.808 1.97918 141.808 1.3934 142.393C0.80761 142.979 0.80761 143.929 1.3934 144.515L10.9393 154.061ZM10.5 -1.78873e-08L10.5 153L13.5 153L13.5 1.78873e-08L10.5 -1.78873e-08Z"
									fill="white"></path>
							</svg>
							<span>Scrolluj</span>
						</a>
					</div> -->
				</div>
			</SwiperSlide>
		</Swiper>
	</section>
</template>
<script setup>
	const screenWidth = useState('screenWidth')
	const props = defineProps(['data', 'hideScroll'])
	const onSlideChange = () => {
		const activeSlide = ref(document.querySelector('.hero .swiper-slide-active'))
		const dataBlack = ref(activeSlide.value.getAttribute('data-black'))
		if (dataBlack.value) {
			document.body.classList.add('header-black')
		} else {
			document.body.classList.remove('header-black')
		}
	}
</script>
<style lang="scss" scoped>
	.hero {
		width: 100%;
		height: 100vh;
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
	}
	.texts {
		max-width: 680px;
		color: $color-white;
	}
	:slotted(h1),
	h1 {
		font-size: clamp(2.375rem, 5.5vw, 3.875rem) !important;
		line-height: em(82, 62) !important;
		margin-bottom: 20px !important;
		margin-top: 0 !important;
	}
	:slotted(h2),
	h2 {
		font-size: clamp(1rem, 2vw, 1.5rem) !important;
		line-height: em(40, 24) !important;
		font-weight: 400 !important;
	}
	.scroll {
		position: absolute;
		bottom: 2rem;
		left: 0;
		animation: shakeY 9s infinite;
		&:hover {
			animation-fill-mode: forwards;
			animation-play-state: paused;
		}
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

	@media (max-width: 767px) {
		.hero {
			.container {
				height: auto;
				text-align: center;
				top: 100px;
				padding-bottom: 40vh;
				.scroll {
					display: none;
				}
			}
			h1,
			:slotted(h1) {
				font-size: rem(32) !important;
			}
			h2,
			:slotted(h2) {
				font-size: rem(16) !important;
			}
			:deep(.styled-list li) {
				font-size: 1rem;
			}
			:slotted(.buttons) {
				margin-top: 20px;
			}
		}
	}
	@keyframes shakeY {
		10%,
		30%,
		50%,
		70%,
		90% {
			transform: translate3d(0, -10px, 0);
		}

		20%,
		40%,
		60%,
		80% {
			transform: translate3d(0, 10px, 0);
		}
	}
</style>
<style lang="scss">
	.hero {
		.swiper-pagination {
			position: absolute;
			left: 0;
			bottom: 10px;
		}
		.swiper-pagination-bullet {
			border-radius: 0;
			width: 12px;
			height: 12px;
			transition: all 0.15s ease-in-out;
		}
		.swiper-pagination-bullet-active {
			transform: scale(1.34);
		}
	}
</style>
