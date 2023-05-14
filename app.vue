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
	}
	input[type='text'],
	input[type='email'],
	input[type='phone'],
	textarea {
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
		z-index: 2;
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
</style>
