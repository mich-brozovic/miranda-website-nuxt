<template>
	<div>
		<LoadingBar />
		<MainHeader />
		<NuxtPage />
		<MainFooter />
	</div>
</template>
<script>
	import 'vue3-lottie/dist/style.css'
</script>
<script setup>
	const screenWidth = useState('screenWidth', () => 1920)
	onMounted(() => {
		screenWidth.value = window.innerWidth
		window.addEventListener('resize', () => {
			screenWidth.value = window.innerWidth
		})
	})
	useHead({
		htmlAttrs: {
			lang: 'cs',
		},
	})
</script>
<style lang="scss">
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	html {
		scroll-behavior: smooth;
	}
	body {
		font-family: 'Poppins', sans-serif;
		color: $color-font;
	}
	section:not(.no-margin) {
		margin-bottom: 100px;
	}
	a {
		transition: all 0.3s ease-in-out;
	}
	p {
		line-height: 1.5em;
		&.large {
			font-size: 1.5rem;
			color: rgba($color-font, 0.7);
		}
	}
	img {
		width: 100%;
		height: auto;
	}
	.container {
		max-width: calc(1440px + 4rem);
		padding-left: 2rem;
		padding-right: 2rem;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}
	.narrow {
		max-width: 900px;
		padding-left: 0;
		padding-right: 0;
		p {
			line-height: 1.8em;
		}
	}
	.text-center {
		text-align: center;
	}
	h2,
	h3 {
		line-height: 1.5em;
	}
	h2,
	h3 {
		font-size: 3rem;
	}
	.buttons-center {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
	}
	.columns {
		display: flex;
		flex-wrap: wrap;
		&.align-center {
			align-items: center;
		}
		&.row-reverse {
			flex-direction: row-reverse;
		}
		&.col-2 {
			.column {
				flex: 1 1 460px;
			}
		}
		.column {
			&.padding {
				padding: 50px;
				@media (max-width: 1240px) {
					padding: 20px;
				}
			}
			&.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		}
		&.col-4-6 {
			.column {
				&:first-of-type {
					flex: 1 1 200px;
				}
				&:last-of-type {
					flex: 1 1 400px;
				}
			}
		}
		&.col-1-2 {
			.column {
				&:first-of-type {
					flex: 1 1 200px;
				}
				&:last-of-type {
					flex: 1 1 400px;
				}
			}
		}
		&.gap50 {
			gap: 50px;
			@media (max-width: 767px) {
				gap: 20px;
			}
		}
	}
	header nav ul a.router-link-active {
		color: $color-accent;
		border-color: $color-accent;
		box-shadow: 0 0 15px rgba($color-accent, 0.3);
	}
	button {
		box-shadow: none;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
	input[type='text'],
	input[type='email'],
	input[type='phone'],
	textarea,
	select {
		background-color: rgba($color-accent, 0.8);
		border: 1px solid $color-accent;
		padding: 0.625em 1.25em;
		width: 100%;
		color: $color-white;
		&::placeholder {
			color: $color-white;
			opacity: 1;
		}
	}
	.form-row {
		margin-bottom: 10px;
	}
	.anchors-wrapper {
		position: sticky;
		top: 0;
		background-color: $color-white;
		z-index: 3;
		nav {
			overflow-x: auto;
			ul {
				list-style: none;
				padding: 0;
				margin: 0;
				display: flex;
				justify-content: center;
				white-space: nowrap;
				a {
					display: inline-block;
					padding: 0.625em 1.25em;
					text-decoration: none;
					color: $color-font;
					&:hover,
					&:focus {
						color: $color-white;
						background-color: $color-font;
					}
				}
			}
			scrollbar-color: $color-accent transparent;
			scrollbar-width: thin;
			&::-webkit-scrollbar {
				width: 5px;
				height: 5px;
				border-radius: 9999px;
				background: transparent;
			}
			&::-webkit-scrollbar-thumb {
				background: $color-accent;
				border-radius: 9999px;
			}
			&::-webkit-scrollbar-track {
				background: transparent;
			}
		}
		@media (max-width: 860px) {
			nav ul {
				justify-content: flex-start;
			}
		}
	}
	.disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	.swiper {
		margin-bottom: 30px;
	}
	.swiper-pagination {
		position: initial;
		padding: 20px 0;
		align-items: center;
		display: flex;
		justify-content: center;
		&-bullet {
			border-radius: 999px;
			height: 3px;
			width: 30px;
			&-active {
				height: 5px;
				background-color: $color-accent;
			}
		}
	}
	.swiper-button-next,
	.swiper-button-prev {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 74px;
		height: 74px;
		background-color: #e9ebea;
		transition: all 0.15s ease-in-out;
		top: 50%;
		transform: translateY(-50%);
		margin: 0;
		&::after {
			line-height: 0;
			display: block;
			content: url('/icon/swiper-arrow-black.svg');
		}
		&:hover {
			background-color: $color-font;
			&::after {
				content: url('/icon/swiper-arrow.svg');
			}
		}
	}

	.swiper-button-prev {
		&::after {
			transform: rotate(180deg);
		}
	}
	@media (max-width: 1150px) {
		.swiper-button-next,
		.swiper-button-prev {
			width: 48px;
			height: 48px;
		}
	}
	@media (max-width: 767px) {
		.container {
			padding-left: 20px;
			padding-right: 20px;
		}
		section:not(.no-margin) {
			margin-bottom: 50px;
		}
		h2,
		h3 {
			font-size: rem(28);
		}
	}
	.btn {
		display: inline-block;
		padding: em(10) em(20);
		text-decoration: none;
		&.btn-ghost {
			border: 1px solid $color-font;
			color: $color-font;
			transition: background-color, color, 0.3s ease-in-out;
			&:hover {
				background-color: $color-font;
				color: $color-white;
			}
		}
		&.btn-ghost-v2 {
			border: 1px solid $color-white;
			color: $color-white;
			padding: em(19);
			transition: background-color, color, 0.3s ease-in-out;
			&:hover {
				background-color: $color-white;
				color: $color-font;
			}
		}
		&.btn-tertiary {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;
			background-color: $color-font;
			color: $color-white;
			width: 100%;
			text-align: center;
			max-width: 335px;
		}
		&.btn-accent {
			background-color: $color-accent;
			color: $color-black;
			padding: em(15) em(30);
			line-height: em(28);
			font-weight: 700;
			text-transform: uppercase;
			display: inline-flex;
			align-items: center;
			gap: 0.6em;
			svg {
				stroke: $color-font;
				transition: inherit;
			}
			&:hover {
				background-color: $color-font;
				color: $color-white;
				svg {
					stroke: $color-white;
				}
			}
		}
		&.btn-ghost-accent {
			color: $color-white;
			font-weight: 700;
			padding: em(20);
			border: 2px solid $color-accent;
			background-color: rgba($color-accent, 0.6);
		}
	}
	.styled-list {
		padding: 0;
		margin: 0;
		list-style: none;
		text-align: left;
		li {
			position: relative;
			padding-left: 20px;
			font-size: rem(20);
			line-height: em(36, 20);
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
	.overflow-hidden {
		overflow: hidden;
	}
</style>
