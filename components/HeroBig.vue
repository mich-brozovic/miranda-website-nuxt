<template>
	<section class="hero">
		<video poster="/img/blank-black.jpg" autoplay playsinline muted>
			<source src="/img/intro-hp-nove.mp4" type="video/mp4" />
		</video>
		<div class="container">
			<div class="texts">
				<h1>Marketingová digitální agentura</h1>
				<h2>Tvoříme ziskové e-shopy a weby, navrhujeme design produktů a značek, staráme se o výkon kampaní, ctíme fair play</h2>
			</div>
			<div class="scroll">
				<a href="#scroll">
					<svg width="24" height="155" viewBox="0 0 24 155" fill="none" xmlns="http://www.w3.org/2000/svg">
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

<style lang="scss" scoped>
	.hero {
		width: 100%;
		height: 100vh;
		position: relative;
		video {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.container {
		position: absolute;
		top: 0;
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
		font-size: 62px;
		line-height: 82px;
		margin-bottom: 20px;
	}
	h2 {
		font-size: rem(24);
		line-height: em(40, 24);
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
</style>
