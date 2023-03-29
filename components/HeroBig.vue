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
			<NuxtPicture
				:src="props.imgUrl"
				:imgAttrs="{ style: 'width:100%; height:100%; object-fit:cover;' }" />
		</div>
		<div class="container">
			<div class="texts">
				<h1>{{ props.heading }}</h1>
				<h2>{{ props.subheading }}</h2>
			</div>
			<div class="scroll">
				<a href="#scroll">
					<svg
						width="24"
						height="155"
						viewBox="0 0 24 155"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
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
	h1 {
		font-size: clamp(2.375rem, 5.5vw, 3.875rem);
		line-height: em(82, 62);
		margin-bottom: 20px;
		margin-top: 0;
	}
	h2 {
		font-size: clamp(1rem, 2vw, 1.5rem);
		line-height: em(40, 24);
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
				height: calc(50vh + 50px);
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
	}
</style>
