<template>
	<main>
		<HeroSmall heading="Reference" imgUrl="/reference-hero.webp" />
		<section class="container">
			<ReferenceGrid :isHP="false" />
		</section>
		<section class="commentary">
			<div class="container">
				<h2 class="text-center">Co říkáte na Mirandu?</h2>
				<div class="text-center container narrow">
					<p>
						I ten slavnej českej šéfík z televize, co zatopil nejednomu gastru, pustil pár slov o Mirandě. No a jak jsme dopadli s jeho novým,
						parádně vymazleným e-shopem a co na nás říkají další vybraní klienti...
					</p>
				</div>
				<CoONasRikaji />
			</div>
		</section>
	</main>
</template>
<script>
	export default {}
</script>
<style lang="scss" scoped></style>
