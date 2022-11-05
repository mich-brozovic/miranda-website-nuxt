<template>
	<div class="reference-grid">
		<div class="item" v-for="(item, index) in data.data" :key="index" :class="{ large: index == 2 || index == 3 }">
			<img class="bg-img" :src="bgImageURL(item)" />
			<div class="logo">
				<img :src="logoURL(item)" />
			</div>
		</div>
	</div>
</template>

<script setup>
	const data = await fetchAPI('/references', { populate: '*', sort: 'priorita', 'pagination[page]': 1, 'pagination[pageSize]': 6 })

	const logoURL = (item) => {
		return getStrapiMedia(item.attributes.logo)
	}
	const bgImageURL = (item) => {
		return getStrapiMedia(item.attributes.thumbnail)
	}
</script>

<style lang="scss" scoped>
	.reference-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 20px;
		margin: 60px 0;
	}
	.item {
		overflow: hidden;
		img {
			display: block;
		}
		aspect-ratio: 1;
		position: relative;
		&.large {
			grid-column-end: span 2;
			grid-row-end: span 2;
		}
		.bg-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			filter: grayscale(0.5);
			transition: all 0.2s ease-in-out;
		}
		.logo {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-width: 70%;
			z-index: 1;
			transition: all 0.3s ease-in-out;
			img {
				width: 100%;
			}
		}
		&::after {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(#000, 0.2);
			transition: all 0.2s ease-in-out;
		}
		&:hover,
		&:focus {
			.bg-img {
				transform: scale(1.1);
				filter: none;
			}
			.logo {
				transform: translate(-50%, -50%) scale(0.7);
				opacity: 0;
			}
		}
	}
</style>
