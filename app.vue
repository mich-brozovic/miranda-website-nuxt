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
		&.col-2 {
			.column {
				flex: 1 1 460px;
			}
		}
		&.col-4-6 {
			.column {
				&:first-of-type {
					flex: 1 1 300px;
				}
				&:last-of-type {
					flex: 1 1 500px;
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
		}
	}
</style>
