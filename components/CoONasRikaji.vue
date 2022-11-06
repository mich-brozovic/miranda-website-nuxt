<template>
	<div class="columns col-4-6">
		<div class="column image">
			<NuxtPicture provider="strapi" :src="imageURL(data.data[activeData])" alt="" width="620" height="595" />
			<div class="tiles">
				<div v-for="(item, index) in tiles" :key="index" class="tile"></div>
			</div>
			<div class="arrows">
				<div class="arrow prev" @click="prevData()">
					<svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807613 19.9792 0.807613 19.3934 1.3934C18.8076 1.97919 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM-1.31134e-07 13.5L30 13.5L30 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"></path>
					</svg>
				</div>
				<div class="arrow next" @click="nextData()">
					<svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807613 19.9792 0.807613 19.3934 1.3934C18.8076 1.97919 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM-1.31134e-07 13.5L30 13.5L30 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"></path>
					</svg>
				</div>
			</div>
		</div>
		<div class="column texts">
			<Markdown :source="data.data[activeData].attributes.text" />
			<div class="author">
				<strong>{{ data.data[activeData].attributes.jmeno }}</strong>
				<span class="position">{{ data.data[activeData].attributes.pozice }}</span>
			</div>
		</div>
	</div>
</template>
<script setup>
	import Markdown from 'vue3-markdown-it'

	const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
	const data = await fetchAPI('onasData', '/co-o-nas-rikajis', { populate: '*', sort: 'id' })
	const activeData = useState('activeData', () => {
		return 0
	})
	const dataLength = data.value.data.length - 1

	const prevData = () => {
		if (activeData.value > 0) {
			activeData.value--
		} else {
			activeData.value = dataLength
		}
	}
	const nextData = () => {
		if (activeData.value < dataLength) {
			activeData.value++
		} else {
			activeData.value = 0
		}
	}

	const imageURL = (item) => {
		return getStrapiMedia(item.attributes.obrazek)
	}
</script>
<style lang="scss" scoped>
	.columns {
		margin: 60px 0 200px;
	}
	.image {
		position: relative;
	}
	.arrows {
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		.arrow {
			background-color: $color-white;
			width: 74px;
			height: 74px;
			display: flex;
			align-items: center;
			justify-content: center;
			svg {
				fill: $color-font;
			}
			&.prev {
				svg {
					transform: rotate(180deg);
				}
			}
			&.next {
			}
		}
	}
	.tiles {
		display: grid;
		grid-template-columns: repeat(4, 50px);
		grid-template-rows: repeat(4, 50px);
		gap: 10px;
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 1;
		transform: translate(calc(50% + 5px), calc(50% + 5px));
		.tile {
			background-color: $color-accent;
			animation: 10s pulse ease-in infinite;
			&:nth-of-type(1),
			&:nth-of-type(2),
			&:nth-of-type(5),
			&:nth-of-type(6),
			&:nth-of-type(4),
			&:nth-of-type(13),
			&:nth-of-type(16) {
				visibility: hidden;
			}
			&:nth-of-type(3) {
				opacity: 1;
				animation-delay: 0;
			}
			&:nth-of-type(7) {
				opacity: 1;
				animation-delay: 200ms;
			}
			&:nth-of-type(8) {
				opacity: 1;
				animation-delay: 1.3s;
			}
			&:nth-of-type(9) {
				opacity: 1;
				animation-delay: 2.4s;
			}
			&:nth-of-type(10) {
				opacity: 1;
				animation-delay: 1s;
			}
			&:nth-of-type(11) {
				opacity: 1;
				animation-delay: 3.5s;
			}
			&:nth-of-type(12) {
				opacity: 1;
				animation-delay: 500ms;
			}
			&:nth-of-type(14) {
				opacity: 1;
				animation-delay: 2.8s;
			}
			&:nth-of-type(15) {
				opacity: 1;
				animation-delay: 1.8s;
			}
		}
	}

	.texts {
		line-height: 2em;
		padding: 50px 0 50px 90px;
		display: flex;
		flex-direction: column;
		background: url(/icon/quotes.svg) center 80px no-repeat;
		.author {
			margin-top: auto;
			align-self: flex-end;
			text-align: right;
			strong {
				display: block;
				color: $color-accent;
				font-size: rem(32);
			}
		}
	}

	@keyframes pulse {
		0% {
			opacity: 0.1;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.1;
		}
	}
</style>
