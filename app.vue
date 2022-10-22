<template>
	<div>
		<MainHeader />
		<NuxtPage />
	</div>
</template>
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
	section {
		margin-bottom: 100px;
	}
	a {
		transition: all 0.3s ease-in-out;
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
	h2 {
		font-size: 3rem;
	}
	.buttons-center {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
	}
</style>
