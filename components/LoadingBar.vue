<template>
	<ClientOnly class="loading-fallback loading" fallback-tag="div">
		<div v-if="isLoading" class="loading">
			<Vue3Lottie :animationData="animationData" :height="500" :width="500" />
		</div>
	</ClientOnly>
</template>

<script setup>
	import animationData from '~/assets/loading.json'

	const isLoading = useState('loading', () => false)

	const start = () => {
		isLoading.value = true
	}
	const finish = () => {
		if (process.client) {
			isLoading.value = false
		}
	}

	const nuxtApp = useNuxtApp()
	nuxtApp.hook('app:beforeMount', start)
	nuxtApp.hook('page:start', start)
	nuxtApp.hook('page:finish', finish)
</script>

<style lang="scss">
	.loading {
		background-color: #000;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1010;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.loading-fallback {
		&::before {
			content: '';
			display: block;
			position: absolute;
			width: 100px;
			height: 100px;
			border-radius: 50%;
			border: 4px solid $color-accent;
			border-top-color: transparent;
			animation: spin 1.5s ease-in-out infinite;
		}
	}
	@keyframes spin {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
