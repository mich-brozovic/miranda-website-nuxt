<template>
	<main>
		<HeroSmall
			imgUrl="/kariera-hero.jpg"
			heading="Kariéra v Mirandě" />
		<section class="container">
			<article
				class="career columns col-1-2"
				v-for="(item, index) in data.data"
				:key="index">
				<div class="column">
					<NuxtPicture
						v-if="item.attributes.image.data"
						:src="getStrapiMedia(item.attributes.image)"
						:imgAttrs="{ style: 'display:block;' }"
						:alt="item.attributes.Nazev"
						provider="strapi" />
				</div>
				<div class="column career__content">
					<h1>
						{{ item.attributes.Nazev }}
					</h1>
					<BtnSecondary
						:url="`/kariera/${item.id}`"
						text="Zobrazit pozici" />
				</div>
			</article>
		</section>
	</main>
</template>
<script setup>
	const { find } = useStrapi()
	const { data, error } = await useAsyncData('careers', () => find('careers', { populate: '*' }))
	console.log(data.value, error.value)
</script>
<style lang="scss" scoped>
	.career {
		gap: 50px;
		&__content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			h1 {
				font-size: rem(48);
				margin-bottom: 1em;
				margin-top: 0;
			}
		}
	}
	@media (max-width: 767px) {
		.career {
			gap: 20px;
			&__content {
				h1 {
					font-size: rem(32);
				}
			}
		}
	}
</style>
