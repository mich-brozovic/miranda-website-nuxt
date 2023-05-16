<template>
	<NuxtLink :to="`/pripadove-studie/${props.url}`">
		<div class="reference">
			<div class="reference__background-image">
				<NuxtImg
					:src="props.background"
					width="710"
					height="400"
					alt=""
					:img-attrs="{ style: 'display: block;' }" />
			</div>
			<div class="reference__content">
				<div class="reference__images">
					<div class="reference__notebook-image">
						<NuxtImg
							:src="props.nb"
							width="285"
							height="174"
							alt=""
							:img-attrs="{ style: 'display: block; width: auto;' }" />
					</div>
					<div class="reference__mobile-image">
						<NuxtImg
							:src="props.mob"
							width="72"
							height="150"
							alt=""
							:img-attrs="{ style: 'display: block; width: auto;' }" />
					</div>
					<div class="reference__box-top-right">
						<NuxtImg
							src="/rozcestnik/box-top-right.png"
							width="72"
							height="70"
							alt=""
							:img-attrs="{ style: 'display: block; width: auto;' }" />
					</div>
					<div class="reference__box-bottom-center">
						<NuxtImg
							src="/rozcestnik/box-bottom-center.png"
							width="240"
							height="164"
							alt=""
							:img-attrs="{ style: 'display: block; width: auto;' }" />
					</div>
					<div class="reference__box-left">
						<NuxtImg
							src="/rozcestnik/box-left.png"
							width="142"
							height="80"
							alt=""
							:img-attrs="{ style: 'display: block; width: auto;' }" />
					</div>
					<div class="reference__box-middle">
						<NuxtImg
							src="/rozcestnik/box-middle.png"
							width="83"
							height="65"
							alt=""
							:img-attrs="{ style: 'display: block; width: auto;' }" />
					</div>
					<div class="reference__glow"></div>
					<div
						v-if="props.fragmentTop"
						class="reference__fragment-top">
						<NuxtImg
							:src="props.fragmentTop"
							width="77"
							height="70"
							alt=""
							:img-attrs="{ style: 'display: block; width: auto;' }" />
					</div>
					<div
						v-if="props.fragmentLeft"
						class="reference__fragment-top-left">
						<NuxtImg
							:src="props.fragmentLeft"
							width="140"
							height="130"
							:img-attrs="{ style: 'display: block; width: auto;' }" />
					</div>
					<div
						v-if="props.fragmentBottom"
						class="reference__fragment-bottom">
						<NuxtImg
							:src="props.fragmentBottom"
							width="150"
							height="140"
							alt=""
							:img-attrs="{ style: 'display: block; width: auto;' }" />
					</div>
				</div>
				<div class="reference__logo-wrapper">
					<div class="reference__logo">
						<NuxtImg
							:src="props.logo"
							width="230"
							height="230"
							:alt="props.url"
							:img-attrs="{ style: 'display: block; width: 100%;' }" />
					</div>
				</div>
			</div>
			<div class="reference__case-study">Případová studie</div>
			<div
				v-if="props.premium"
				class="reference__premium">
				<NuxtImg
					src="/rozcestnik/premium.png"
					:img-attrs="{ style: 'display: block; width: auto;' }" />
			</div>
			<div class="reference__arrow">
				<span class="arrow-detail">Detail studie</span>
				<span class="arrow-line"></span>
				<span class="arrow-head"></span>
			</div>
		</div>
	</NuxtLink>
</template>
<script setup>
	const props = defineProps([
		'url',
		'background',
		'nb',
		'mob',
		'logo',
		'premium',
		'fragmentTop',
		'fragmentBottom',
		'fragmentLeft',
		'premium',
	])
</script>
<style lang="scss" scoped>
	.reference {
		position: relative;
		overflow: hidden;
		img {
			display: block;
		}
		&__background-image {
			transform: scale(1.1) translateX(-3%);
			transition: all 0.3s ease-in-out;
			background-color: #000;
			&::before {
				content: '';
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(#000, 0.4);
				transition: all 0.3s ease-in-out;
			}
		}
		&__content {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
		}
		&__images {
			flex: 1 1 60%;
			position: relative;
			& > div {
				transition: all 0.3s ease-in-out;
			}
		}
		&__logo-wrapper {
			flex: 1 1 40%;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.3s ease-in-out;
		}
		&__logo {
			max-width: 12vw;
		}
		&__box-middle {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-45%, -71%);
			z-index: 2;
			max-width: 14vw;
		}
		&__box-top-right {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(100%, -220%);
			z-index: 2;
			max-width: 5vw;
		}
		&__box-bottom-center {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-92%, 52%);
			z-index: 4;
			max-width: 6vw;
		}
		&__box-left {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-167%, -110%);
			z-index: 2;
			max-width: 10vw;
		}
		&__notebook-image {
			position: absolute;
			top: 50%;
			right: 0;
			transform: translate(0, -50%);
			z-index: 3;
			max-width: 19vw;
		}
		&__mobile-image {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-160%, -38%);
			z-index: 5;
			max-width: 5vw;
		}
		&__glow {
			position: absolute;
			top: 42%;
			left: 44%;
			transform: translate(-50%, -50%);
			width: 215px;
			height: 215px;
			filter: blur(50px);
			background: $color-accent;
			opacity: 0.35;
			z-index: 1;
		}
		&__fragment-top {
			position: absolute;
			top: 0;
			right: 0;
			z-index: 1;
			transform: translate(0, -50%);
			max-width: 6vw;
		}
		&__fragment-top-left {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			transform: translate(-50%, -50%);
			max-width: 11vw;
		}
		&__fragment-bottom {
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: 1;
			transform: translate(50%, 50%);
			max-width: 11vw;
		}
		&__case-study {
			position: absolute;
			top: 15px;
			left: 15px;
			text-transform: uppercase;
			font-size: rem(12);
			line-height: em(28, 12);
			padding: em(5, 12) em(10, 12);
			background-color: $color-white;
			z-index: 10;
			transition: all 0.3s ease-in-out;
		}
		&__premium {
			position: absolute;
			bottom: 15px;
			left: 15px;
			transition: all 0.3s ease-in-out;
		}
		&__arrow {
			position: absolute;
			bottom: 33px;
			right: 33px;
			transition: all 0.3s ease-in-out;
			width: 150px;
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
		&:hover,
		&:focus {
			.reference__fragment-top-left {
				transform: translate(-60%, -60%);
			}
			.reference__fragment-top {
				transform: translate(-25%, -50%);
			}
			.reference__fragment-bottom {
				transform: translate(50%, 60%);
			}
			.reference__background-image {
				transform: scale(1);
				&::before {
					opacity: 0;
				}
			}
			.reference__logo-wrapper {
				opacity: 0;
			}
			.reference__glow {
				transform: translate(-50%, -50%) scale(1.1);
			}
			.reference__notebook-image {
				transform: translate(0, -50%) scale(1.1);
			}
			.reference__mobile-image {
				transform: translate(-178%, -38%) scale(1.1);
			}
			.reference__box-middle {
				transform: translate(-45%, -81%) scale(1.1);
			}
			.reference__box-top-right {
				transform: translate(135%, -255%);
			}
			.reference__box-bottom-center {
				transform: translate(-92%, 82%) scale(1.1);
			}
			.reference__box-left {
				transform: translate(-187%, -110%) scale(1.1);
			}
			.reference__case-study {
				background-color: $color-accent;
				color: $color-white;
			}
			.reference__premium {
				transform: translateY(calc(100% + 15px));
				z-index: 50;
			}
			.reference__arrow {
				.arrow-line {
					width: 100%;
				}
				.arrow-detail {
					opacity: 1;
					transform: none;
				}
			}
		}
	}
	@media (max-width: 1038px) {
		.reference {
			&__logo {
				max-width: 24vw;
			}
			&__box-middle {
				max-width: 28vw;
			}
			&__box-top-right {
				max-width: 10vw;
			}
			&__box-bottom-center {
				max-width: 12vw;
			}
			&__box-left {
				max-width: 20vw;
			}
			&__notebook-image {
				max-width: 38vw;
			}
			&__mobile-image {
				max-width: 10vw;
			}
			&__fragment-top {
				max-width: 12vw;
			}
			&__fragment-top-left {
				max-width: 22vw;
			}
			&__fragment-bottom {
				max-width: 22vw;
			}
		}
	}
	@media (max-width: 767px) {
		.reference__case-study {
			font-size: rem(8);
		}
	}
</style>
