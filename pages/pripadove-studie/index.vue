<template>
	<main>
		<HeroBig imgUrl="/rozcestnik/hero.jpg" :hideScroll="true">
			<div class="logos">
				<img src="/rozcestnik/logos.png" alt="Shoptet" />
			</div>
			<h1>Případové studie</h1>
			<ul class="styled-list">
				<li>Tvoříme e-shopy na míru na Shoptet a Shoptet Premium</li>
				<li>Spravujeme PPC kampaně</li>
				<li>Staráme se o sociálně sítě</li>
				<li>Navrhujeme design produktů a značek</li>
				<li>Fotíme produkty ve vlastním studiu</li>
			</ul>
			<div class="buttons">
				<a class="btn btn-ghost font" href="#kontakt"> Domluvte si schůzku </a>
			</div>
		</HeroBig>
		<section class="container">
			<h2 class="text-center">Případové studie a reference</h2>
			<div class="text-center container narrow">
				<p>Nahlédněte pod pokličku vzniku e-shopů na Shoptetu a správy kampaní</p>
			</div>
			<div class="reference-grid">
				<SingleCasestudy
					url="rituals"
					background="/rozcestnik/rituals/bg.jpg"
					nb="/rozcestnik/rituals/nb.png"
					mob="/rozcestnik/rituals/mob.png"
					logo="/rozcestnik/rituals/logo.png"
					fragmentLeft="/rozcestnik/rituals/fragment-top-left.png"
					fragmentTop="/rozcestnik/rituals/fragment-top.png"
					fragmentBottom="/rozcestnik/rituals/fragment-bottom.png"
					:premium="true" />
				<SingleCasestudy
					url="petcenter"
					background="/rozcestnik/petcenter/bg.jpg"
					nb="/rozcestnik/petcenter/nb.png"
					mob="/rozcestnik/petcenter/mob.png"
					logo="/rozcestnik/petcenter/logo.png"
					:premium="true" />
				<SingleCasestudy
					url="philips"
					background="/rozcestnik/philips/bg.jpg"
					nb="/rozcestnik/philips/nb.png"
					mob="/rozcestnik/philips/mob.png"
					logo="/rozcestnik/philips/logo.png"
					fragmentLeft="/rozcestnik/philips/fragment-left.png"
					fragmentTop="/rozcestnik/philips/fragment-top.png"
					fragmentBottom="/rozcestnik/philips/fragment-bottom.png"
					:premium="true" />
				<SingleCasestudy
					url="pennydomu"
					background="/rozcestnik/pennydomu/bg.jpg"
					nb="/rozcestnik/pennydomu/nb.png"
					mob="/rozcestnik/pennydomu/mob.png"
					logo="/rozcestnik/pennydomu/logo.png"
					fragmentLeft="/rozcestnik/pennydomu/fragment-left.png"
					fragmentTop="/rozcestnik/pennydomu/fragment-top.png"
					fragmentBottom="/rozcestnik/pennydomu/fragment-bottom.png"
					:premium="true" />
				<SingleCasestudy
					url="dolce-imperial"
					background="/rozcestnik/dolce-imperial/bg.jpg"
					nb="/rozcestnik/dolce-imperial/nb.png"
					mob="/rozcestnik/dolce-imperial/mob.png"
					logo="/rozcestnik/dolce-imperial/logo.png"
					fragmentLeft="/rozcestnik/dolce-imperial/fragment-left.png"
					fragmentTop="/rozcestnik/dolce-imperial/fragment-top.png"
					fragmentBottom="/rozcestnik/dolce-imperial/fragment-bottom.png" />
				<SingleCasestudy
					url="4-kavky"
					background="/rozcestnik/4-kavky/bg.jpg"
					nb="/rozcestnik/4-kavky/nb.png"
					mob="/rozcestnik/4-kavky/mob.png"
					logo="/rozcestnik/4-kavky/logo.png"
					fragmentLeft="/rozcestnik/4-kavky/fragment-left.png"
					fragmentTop="/rozcestnik/4-kavky/fragment-top.png"
					fragmentBottom="/rozcestnik/4-kavky/fragment-bottom.png" />
				<SingleCasestudy
					url="rebel-bean"
					background="/rozcestnik/rebel-bean/bg.jpg"
					nb="/rozcestnik/rebel-bean/nb.png"
					mob="/rozcestnik/rebel-bean/mob.png"
					logo="/rozcestnik/rebel-bean/logo.png"
					fragmentLeft="/rozcestnik/rebel-bean/fragment-left.png"
					fragmentTop="/rozcestnik/rebel-bean/fragment-top.png"
					fragmentBottom="/rozcestnik/rebel-bean/fragment-bottom.png" />
				<SingleCasestudy
					url="motosalon-klokocka"
					background="/rozcestnik/motosalon-klokocka/bg.jpg"
					nb="/rozcestnik/motosalon-klokocka/nb.png"
					mob="/rozcestnik/motosalon-klokocka/mob.png"
					logo="/rozcestnik/motosalon-klokocka/logo.png"
					fragmentLeft="/rozcestnik/motosalon-klokocka/fragment-left.png"
					fragmentTop="/rozcestnik/motosalon-klokocka/fragment-top.png"
					fragmentBottom="/rozcestnik/motosalon-klokocka/fragment-bottom.png" />
				<SingleCasestudy
					url="pivovar-svijany"
					background="/rozcestnik/pivovar-svijany/bg.jpg"
					nb="/rozcestnik/pivovar-svijany/nb.png"
					mob="/rozcestnik/pivovar-svijany/mob.png"
					logo="/rozcestnik/pivovar-svijany/logo.png"
					fragmentLeft="/rozcestnik/pivovar-svijany/fragment-left.png"
					fragmentTop="/rozcestnik/pivovar-svijany/fragment-top.png"
					fragmentBottom="/rozcestnik/pivovar-svijany/fragment-bottom.png"
					:premium="true" />
				<SingleCasestudy
					url="trebbia"
					background="/rozcestnik/trebbia/bg.jpg"
					nb="/rozcestnik/trebbia/nb.png"
					mob="/rozcestnik/trebbia/mob.png"
					logo="/rozcestnik/trebbia/logo.png"
					fragmentLeft="/rozcestnik/trebbia/fragment-left.png"
					fragmentTop="/rozcestnik/trebbia/fragment-top.png"
					fragmentBottom="/rozcestnik/trebbia/fragment-bottom.png" />
				<SingleCasestudy
					url="zatisi-group"
					background="/rozcestnik/zatisi-group/bg.jpg"
					nb="/rozcestnik/zatisi-group/nb.png"
					mob="/rozcestnik/zatisi-group/mob.png"
					logo="/rozcestnik/zatisi-group/logo.png"
					fragmentLeft="/rozcestnik/zatisi-group/fragment-left.png"
					fragmentTop="/rozcestnik/zatisi-group/fragment-top.png"
					fragmentBottom="/rozcestnik/zatisi-group/fragment-bottom.png"
					:premium="true" />
				<SingleCasestudy
					url="blanka-matragi"
					background="/rozcestnik/blanka-matragi/bg.jpg"
					nb="/rozcestnik/blanka-matragi/nb.png"
					mob="/rozcestnik/blanka-matragi/mob.png"
					logo="/rozcestnik/blanka-matragi/logo.png"
					fragmentLeft="/rozcestnik/blanka-matragi/fragment-left.png"
					fragmentTop="/rozcestnik/blanka-matragi/fragment-top.png"
					fragmentBottom="/rozcestnik/blanka-matragi/fragment-bottom.png" />
				<SingleCasestudy
					url="pre-utulky"
					background="/rozcestnik/pre-utulky/bg.jpg"
					nb="/rozcestnik/pre-utulky/nb.png"
					mob="/rozcestnik/pre-utulky/mob.png"
					logo="/rozcestnik/pre-utulky/logo.png"
					fragmentLeft="/rozcestnik/pre-utulky/fragment-left.png"
					fragmentTop="/rozcestnik/pre-utulky/fragment-top.png"
					fragmentBottom="/rozcestnik/pre-utulky/fragment-bottom.png"
					:premium="true" />
				<SingleCasestudy
					url="zdravotal"
					background="/rozcestnik/zdravotal/bg.jpg"
					nb="/rozcestnik/zdravotal/nb.png"
					mob="/rozcestnik/zdravotal/mob.png"
					logo="/rozcestnik/zdravotal/logo.png"
					fragmentLeft="/rozcestnik/zdravotal/fragment-left.png"
					fragmentTop="/rozcestnik/zdravotal/fragment-top.png"
					fragmentBottom="/rozcestnik/zdravotal/fragment-bottom.png"
					:premium="true" />
				<SingleCasestudy
					url="svojtka"
					background="/rozcestnik/svojtka/bg.jpg"
					nb="/rozcestnik/svojtka/nb.png"
					mob="/rozcestnik/svojtka/mob.png"
					logo="/rozcestnik/svojtka/logo.png"
					fragmentLeft="/rozcestnik/svojtka/fragment-left.png"
					fragmentTop="/rozcestnik/svojtka/fragment-top.png"
					fragmentBottom="/rozcestnik/svojtka/fragment-bottom.png"
					:premium="true" />
			</div>
		</section>
		<section class="container">
			<h2 class="text-center">Pomohli jsme více jak stovkám značek</h2>
			<div class="text-center container narrow">
				<p>Seznamte se s naším portfoliem</p>
			</div>
			<div class="partners-grid">
				<div class="partner" v-for="(item, index) in partneri" :key="index">
					<NuxtImg :src="item.url" width="180" height="120" :alt="item.name" />
				</div>
				<div class="partner">
					<strong>+ mnoho dalších</strong>
				</div>
			</div>
		</section>
		<section class="commentary">
			<div class="container">
				<h2 class="text-center">Co říkáte na Mirandu?</h2>
				<div class="text-center container narrow">
					<p>
						I ten slavnej českej šéfík z televize, co zatopil nejednomu gastru, pustil pár slov o Mirandě. No a jak jsme dopadli
						s jeho novým, parádně vymazleným e-shopem a co na nás říkají další vybraní klienti...
					</p>
				</div>
				<CoONasRikaji />
			</div>
		</section>
		<section id="kontakt" class="no-margin">
			<ContactForm />
		</section>
	</main>
</template>
<script setup>
	const partneri = ref([
		{ url: '/rozcestnik/loga/zatisi.png', name: 'Zátiší Group' },
		{ url: '/rozcestnik/loga/penny.png', name: 'Penny Market' },
		{ url: '/rozcestnik/loga/svijany.png', name: 'Pivovar Svijany' },
		{ url: '/rozcestnik/loga/blauer.png', name: 'Blauer USA' },
		{ url: '/rozcestnik/loga/gwc.png', name: 'Girls Without Clothes' },
		{ url: '/rozcestnik/loga/summitbikes.png', name: 'Summit Bikes' },
		{ url: '/rozcestnik/loga/peugeot.png', name: 'Peugeot' },
		{ url: '/rozcestnik/loga/novy-prostor.png', name: 'Nový Prostor' },
		{ url: '/rozcestnik/loga/rebelbean.png', name: 'Rebel Bean' },
		{ url: '/rozcestnik/loga/renault.png', name: 'Renault' },
		{ url: '/rozcestnik/loga/neio.png', name: 'Ne-Io' },
		{ url: '/rozcestnik/loga/rapitec.png', name: 'Rapi-Tec' },
		{ url: '/rozcestnik/loga/amazinc.png', name: 'Amazinc' },
		{ url: '/rozcestnik/loga/blanka-matragi.png', name: 'Blanka Matragi' },
		{ url: '/rozcestnik/loga/rituals.png', name: 'Rituals' },
		{ url: '/rozcestnik/loga/zdravotal.png', name: 'Zdravotal' },
		{ url: '/rozcestnik/loga/petcenter.png', name: 'Pet Center' },
	])
	useHead({
		bodyAttrs: {
			class: 'header-black',
		},
		title: 'Mirandamedia.cz - Naše práce a projekty',
		meta: [
			{
				name: 'description',
				content:
					'Podívejte se na naše dosavadní práce a projekty, které jsme realizovali pro naše spokojené klienty. Zahrnujeme design webových stránek, grafiku, marketingová videa a mnoho dalšího. Inspirujte se naším portfoliem a připojte se k našim spokojeným zákazníkům.',
			},
		],
	})
</script>
<style lang="scss" scoped>
	.reference-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(470px, 1fr));
		gap: 20px;
		margin-top: 60px;
		a {
			color: $color-font;
		}
	}
	.partners-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
		justify-items: center;
		align-items: center;
		justify-content: center;
		gap: 20px 60px;
	}

	.logos {
		margin-bottom: 20px;
		img {
			width: auto;
		}
	}
	.buttons {
		margin-top: 20px;
	}
	@media (max-width: 767px) {
		.reference-grid {
			grid-template-columns: minmax(1px, 1fr);
		}
	}
	@media (max-width: 540px) {
		.partners-grid {
			grid-template-columns: repeat(2, minmax(1px, 1fr));
			gap: 20px;
		}
	}
</style>
