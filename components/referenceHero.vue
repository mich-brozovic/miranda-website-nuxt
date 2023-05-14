<template>
	<section class="hero">
		<div class="image-wrapper">
			<NuxtPicture
				:src="props.imgUrl"
				:imgAttrs="{ style: 'width:100%; height:100%; object-fit:cover; object-position: right; min-height: 865px' }" />
		</div>
		<div class="container">
			<div
				class="logo"
				v-if="props.logoUrl">
				<NuxtPicture :src="props.logoUrl" />
			</div>
			<div
				class="texts"
				:style="`max-width: ${props.textWidth}px`">
				<h1>{{ props.heading }}</h1>
				<h2 v-if="props.subheading">{{ props.subheading }}</h2>
			</div>
			<div
				class="page"
				:class="{ white: linkWhite }"
				v-if="props.pageUrl">
				<a
					:href="'https://' + props.pageUrl"
					target="_blank">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round" />
						<path
							d="M3 12H21M15.4615 12C15.2915 15.2912 14.0792 18.4431 12 21C9.92075 18.4431 8.70849 15.2912 8.53846 12C8.70849 8.70878 9.92075 5.5569 12 3C14.0792 5.5569 15.2915 8.70878 15.4615 12Z"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
					<span>{{ props.pageUrl }}</span>
				</a>
			</div>
			<div
				class="page"
				v-if="props.pageUrlAlt">
				<a
					:href="'https://' + props.pageUrlAlt"
					target="_blank">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
							stroke="#59DC8E"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round" />
						<path
							d="M3 12H21M15.4615 12C15.2915 15.2912 14.0792 18.4431 12 21C9.92075 18.4431 8.70849 15.2912 8.53846 12C8.70849 8.70878 9.92075 5.5569 12 3C14.0792 5.5569 15.2915 8.70878 15.4615 12Z"
							stroke="#59DC8E"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
					<span>{{ props.pageUrlAlt }}</span>
				</a>
			</div>
			<div class="scroll">
				<a href="#scroll">
					<svg
						width="24"
						height="155"
						viewBox="0 0 24 155"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<title>Scrolluj</title>
						<path
							d="M10.9393 154.061C11.5251 154.646 12.4749 154.646 13.0607 154.061L22.6066 144.515C23.1924 143.929 23.1924 142.979 22.6066 142.393C22.0208 141.808 21.0711 141.808 20.4853 142.393L12 150.879L3.51472 142.393C2.92893 141.808 1.97918 141.808 1.3934 142.393C0.80761 142.979 0.80761 143.929 1.3934 144.515L10.9393 154.061ZM10.5 -1.78873e-08L10.5 153L13.5 153L13.5 1.78873e-08L10.5 -1.78873e-08Z"
							fill="white"></path>
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
		logoUrl: String,
		pageUrl: String,
		pageUrlAlt: String,
		textWidth: String,
		linkWhite: Boolean,
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
		@media screen and ($mobile-responsive) {
			height: unset;
			min-height: unset;
		}
	}
	.container {
		position: absolute;
		top: 200px;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		.logo {
			margin-bottom: 20px;
			max-width: 150px;
		}
		@media screen and ($mobile-responsive) {
			.texts {
				order: 1;
			}
			.page {
				order: 2;
			}
			.logo {
				order: 3;
			}
			.scroll {
				order: 4;
			}
		}
	}
	.texts {
		max-width: 660px;
		color: $color-white;
	}
	.logo picture {
		display: block;
		text-align: left;
	}
	.page {
		a {
			display: flex;
			align-items: center;
			gap: 10px;
			color: $color-green;
			text-decoration: none;
			span {
				border-bottom: 1px solid transparent;
				transition: border-color 0.3s ease-in-out;
			}
			&:hover span {
				border-color: $color-green;
			}
			@media screen and ($mobile-responsive) {
				justify-content: center;
			}
		}
		margin-bottom: 20px;
		& + .page {
			margin-top: -20px;
			margin-bottom: 20px;
		}
		svg {
			stroke: $color-green;
		}
		&.white {
			a {
				color: $color-white;
			}
			svg {
				stroke: $color-white;
			}
		}
	}
	h1 {
		font-size: clamp(rem(32), 5.5vw, rem(42));
		line-height: em(63, 48);
		margin-bottom: 20px;
		margin-top: 0;
	}
	h2 {
		font-size: clamp(1rem, 2vw, rem(20));
		line-height: em(36, 24);
		font-weight: 400;
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
	@media (max-width: 767px) {
		.hero {
			.video-wrapper,
			.image-wrapper,
			.container {
				position: relative;
				top: unset;
				left: unset;
				right: unset;
				bottom: unset;
			}
			.image-wrapper {
				height: 50vh;
			}
			.container {
				background: linear-gradient(180deg, transparent 0, #000 50px);
				transform: none;
				margin-top: -50px;
				text-align: center;
				padding-bottom: 30px;
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
			.logo {
				margin-bottom: 0;
				max-width: 100px;
			}
		}
	}
</style>
