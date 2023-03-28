<template>
	<main>
		<HeroSmall
			heading="Blog &amp; podcasty"
			imgUrl="/blog-hero.jpg" />
		<section class="container">
			<div class="post-grid">
				<article
					class="post"
					v-for="(item, index) in data.data"
					:key="index">
					<NuxtLink
						:to="`/blog/${item.attributes.slug}`"
						class="post__link">
						<div class="post__image">
							<NuxtPicture
								:src="getStrapiMedia(item.attributes.obrazek)"
								:imgAttrs="{ style: 'display:block;' }"
								width="467"
								height="262"
								:alt="item.attributes.nazev"
								provider="strapi" />
							<div class="post__tags">
								<span
									v-for="(tag, index) in item.attributes.kategorie_clankus.data"
									:key="index">
									{{ tag.attributes.nazev }}
								</span>
							</div>
						</div>
						<div class="post__meta">
							<span
								v-if="item.attributes.read_duration"
								class="read-duration">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M7.99967 1.33337C4.32367 1.33337 1.33301 4.32404 1.33301 8.00004C1.33301 11.676 4.32367 14.6667 7.99967 14.6667C11.6757 14.6667 14.6663 11.676 14.6663 8.00004C14.6663 4.32404 11.6757 1.33337 7.99967 1.33337ZM7.99967 13.3334C5.05901 13.3334 2.66634 10.9407 2.66634 8.00004C2.66634 5.05937 5.05901 2.66671 7.99967 2.66671C10.9403 2.66671 13.333 5.05937 13.333 8.00004C13.333 10.9407 10.9403 13.3334 7.99967 13.3334Z"
										fill="#222E27" />
									<path
										d="M8.66634 4.66663H7.33301V8.27596L9.52834 10.4713L10.471 9.52863L8.66634 7.72396V4.66663Z"
										fill="#222E27" />
								</svg>
								{{ item.attributes.read_duration }}
							</span>
							<span
								v-if="item.attributes.publishedAt"
								class="published-date">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M11.6667 2.66675H3.66667C2.19391 2.66675 1 3.86066 1 5.33341V12.0001C1 13.4728 2.19391 14.6667 3.66667 14.6667H11.6667C13.1394 14.6667 14.3333 13.4728 14.3333 12.0001V5.33341C14.3333 3.86066 13.1394 2.66675 11.6667 2.66675Z"
										stroke="#222E27"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round" />
									<path
										d="M1 6.66671H14.3333M5 1.33337V4.00004V1.33337ZM10.3333 1.33337V4.00004V1.33337Z"
										stroke="#222E27"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
								{{ new Date(item.attributes.publishedAt).toLocaleDateString() }}
							</span>
							<span
								v-if="item.attributes.autor.data.attributes.jmeno"
								class="author">
								<svg
									width="17"
									height="16"
									viewBox="0 0 17 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.33301 1.33337C7.67374 1.33337 7.02927 1.52887 6.48111 1.89514C5.93294 2.26141 5.5057 2.78201 5.25341 3.3911C5.00112 4.00018 4.93511 4.67041 5.06372 5.31701C5.19234 5.96361 5.50981 6.55756 5.97599 7.02373C6.44216 7.48991 7.0361 7.80737 7.68271 7.93599C8.32931 8.06461 8.99953 7.9986 9.60862 7.74631C10.2177 7.49401 10.7383 7.06677 11.1046 6.51861C11.4708 5.97044 11.6663 5.32598 11.6663 4.66671C11.6663 3.78265 11.3152 2.93481 10.69 2.30968C10.0649 1.68456 9.21706 1.33337 8.33301 1.33337V1.33337ZM8.33301 6.66671C7.93745 6.66671 7.55077 6.54941 7.22187 6.32965C6.89297 6.10988 6.63662 5.79753 6.48525 5.43207C6.33387 5.06662 6.29427 4.66449 6.37144 4.27653C6.44861 3.88856 6.63909 3.5322 6.91879 3.25249C7.1985 2.97279 7.55487 2.78231 7.94283 2.70514C8.33079 2.62797 8.73292 2.66757 9.09837 2.81895C9.46383 2.97032 9.77618 3.22667 9.99595 3.55557C10.2157 3.88447 10.333 4.27114 10.333 4.66671C10.333 5.19714 10.1223 5.70585 9.74722 6.08092C9.37215 6.45599 8.86344 6.66671 8.33301 6.66671V6.66671ZM14.333 14V13.3334C14.333 12.0957 13.8413 10.9087 12.9662 10.0335C12.091 9.15837 10.904 8.66671 9.66634 8.66671H6.99967C5.762 8.66671 4.57501 9.15837 3.69984 10.0335C2.82467 10.9087 2.33301 12.0957 2.33301 13.3334V14H3.66634V13.3334C3.66634 12.4493 4.01753 11.6015 4.64265 10.9764C5.26777 10.3512 6.11562 10 6.99967 10H9.66634C10.5504 10 11.3982 10.3512 12.0234 10.9764C12.6485 11.6015 12.9997 12.4493 12.9997 13.3334V14H14.333Z"
										fill="black" />
								</svg>
								{{ item.attributes.autor.data.attributes.jmeno }}
							</span>
						</div>
						<h1 class="post__title">{{ item.attributes.nazev }}</h1>
						<p class="post__excerpt">{{ item.attributes.description }}</p>
						<div class="read-more">
							<svg
								width="52"
								height="24"
								viewBox="0 0 52 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"></path>
							</svg>
						</div>
					</NuxtLink>
				</article>
			</div>
		</section>
	</main>
</template>
<script setup>
	const data = useState('blogArticles', () => null)

	data.value = await fetchAPI('blogData', '/clanky', { populate: '*', sort: 'publishedAt:desc' })
	console.log(data.value)
</script>
<style lang="scss">
	.post-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
		gap: 20px;
	}
	.post {
		a {
			text-decoration: none;
			color: $color-font;
			&:hover,
			&:focus {
				.post__title {
					color: $color-accent;
				}
				.read-more svg {
					margin-left: 20px;
				}
			}
		}
		&__image {
			position: relative;
			margin-bottom: 20px;
		}
		&__tags {
			position: absolute;
			top: 10px;
			left: 10px;
			display: flex;
			flex-wrap: wrap;
			gap: 6px;
			span {
				background-color: $color-accent;
				display: block;
				padding: em(10) em(20);
				line-height: em(42);
				font-weight: 700;
			}
		}
		&__meta {
			display: flex;
			align-items: center;
			gap: 10px;
			font-size: rem(12);
			color: rgba($color-font, 0.5);
			margin-bottom: 20px;
			svg {
				opacity: 0.5;
			}
			span {
				display: flex;
				align-items: center;
				gap: 0.3em;
			}
		}
		&__title {
			margin-top: 0;
			margin-bottom: 20px;
			font-size: rem(24);
			line-height: em(36, 24);
			transition: all 0.15s ease-in-out;
		}
		.read-more svg {
			transition: all 0.15s ease-in-out;
			fill: rgba($color-font, 0.3);
		}
	}
</style>
