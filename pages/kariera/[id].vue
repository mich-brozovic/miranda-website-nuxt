<template>
	<main>
		<HeroSmall
			imgUrl="/kariera-hero.jpg"
			:heading="data.data.attributes.Nazev" />
		<section class="single-career">
			<div class="container single-career__content">
				<ClientOnly
					fallback-tag="div"
					fallback="Načítám...">
					<Markdown :source="data.data.attributes.content" />
				</ClientOnly>
				<div class="single-career__cta">
					<p>Jdeš do toho?</p>
					<BtnSecondary
						:url="`#kontakt`"
						text="No jistě!" />
				</div>
			</div>
		</section>
		<section
			class="no-margin"
			id="kontakt">
			<ContactForm />
		</section>
	</main>
</template>
<script setup>
	import Markdown from 'vue3-markdown-it'
	const { findOne } = useStrapi()
	const router = useRouter()
	const { data, error } = await useAsyncData('career', () => findOne('careers', router.currentRoute.value.params.id, { populate: '*' }))
	useHead({
		title: data.value.data.attributes.Nazev + ' | MirandaMedia',
	})
</script>
<style lang="scss">
	.single-career {
		position: relative;
		background: linear-gradient(180deg, #f3f3f3, hsla(0, 0%, 85%, 0));
		background-position-y: 0%;
		background-repeat: repeat;
		background-size: auto;
		background-size: 100% 707px;
		background-repeat: no-repeat;
		background-position-y: 100px;
		&__content {
			max-width: 1000px;
			margin-top: -200px;
			background-color: $color-white;
			position: relative;
			padding: 50px;
			p:first-child {
				font-size: rem(24);
				text-align: center;
			}
			ul {
				list-style: none;
				padding: 0;
				margin: 0;
				li {
					position: relative;
					padding-left: 30px;
					line-height: 1.6em;
					&::before {
						content: '';
						display: block;
						width: 10px;
						height: 10px;
						background-color: $color-accent;
						position: absolute;
						left: 0;
						top: 0.4em;
					}
				}
			}
		}
		&__cta {
			margin-top: 40px;
			text-align: center;
		}
	}
</style>
