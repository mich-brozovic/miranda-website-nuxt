<template>
	<main>
		<HeroSmall heading="Naše služby" imgUrl="/sluzby-hero.webp" />
		<section class="container">
			<div class="sluzby-wrapper">
				<div class="sluzba columns col-2">
					<div class="column image">
						<NuxtPicture
							src="/kampane.webp"
							loading="lazy"
							:imgAttrs="{ style: 'display: block; width: 100%; height: 100%; object-fit: cover;' }" />
						<div class="hashtags">
							<span>Google Ads</span>
							<span>Sklik</span>
							<span>Sociální sítě</span>
							<span>Zbožové vyhledávače</span>
							<span>Webová analytika</span>
							<span>PPC</span>
							<span>Google Analytics</span>
						</div>
					</div>
					<div class="column texts">
						<span class="subheading">Miranda</span>
						<h2>PPC kampaně</h2>
						<p>
							Mirandina partička nápadama vyzbrojenejch markeťáků poskytuje komplexní služby internetového marketingu.
							Onlinový PPC kampaně, co podávaj solidní výkon, SEO vychytávky pro tučnej traffic z organicu, správu sociálních
							sítí Facebook & Instagram pro hladový fanoušky, zbožové vyhledávače, e-mailing, webovou analytiku a další
							neodmyslitelný marketovky pro váš do maxima vyladěný onlajnový flow.
						</p>
						<NuxtLink to="/sprava-ppc-kampani" class="btn btn-secondary">Detail služby</NuxtLink>
					</div>
				</div>
				<div class="sluzba columns col-2">
					<div class="column texts">
						<span class="subheading">Miranda</span>
						<h2>Weby & e-shopy</h2>
						<p>
							Vytuněný webovky a nabušenej e-shop je naše specializace a opus magnum. Vaši onlajnovou výkladní skříň podnikání
							si vezmeme celou na starost. Zajistíme návrh UX/UI, pořádně vymazlenou grafiku, programování a kódování. Pak to
							celé otestujeme, napojíme na kdejaký měřící nástroje a přivedeme tam plnotučnej trafiic, to dá přeci rozum.
						</p>
						<NuxtLink to="/shoptetnamiru" class="btn btn-secondary">Detail služby</NuxtLink>
					</div>
					<div class="column image">
						<NuxtPicture
							src="/weby_eshopy.webp"
							loading="lazy"
							:imgAttrs="{ style: 'display: block; width: 100%; height: 100%; object-fit: cover;' }" />
						<div class="hashtags">
							<span>Shoptet</span>
							<span>Shoptet PREMIUM</span>
							<span>API napojení</span>
							<span>SEO</span>
							<span>Analytika</span>
							<span>Projektové řízení</span>
							<span>UX/UI</span>
							<span>Datové služby</span>
							<span>Školení</span>
							<span>Copywriting</span>
						</div>
					</div>
				</div>
				<div class="sluzba columns col-2">
					<div class="column image">
						<NuxtPicture
							src="/social.webp"
							loading="lazy"
							:imgAttrs="{ style: 'display: block; width: 100%; height: 100%; object-fit: cover;' }" />
						<div class="hashtags">
							<span>Facebook</span>
							<span>Instagram</span>
							<span>LinkedIn</span>
							<span>TikTok</span>
							<span>YouTube</span>
							<span>Strategie</span>
							<span>Firemní identita</span>
							<span>Copywriting</span>
						</div>
					</div>
					<div class="column texts">
						<span class="subheading">Miranda</span>
						<h2>Sociální sítě</h2>
						<p>
							Mirandiny digitální pavučiny se nebezpečně rozvíjej napříč tímhle sociálním prostorem a pochytávaj kdejakého
							fanouška. Přidělenej stratég sociálních mega-sítí, co tuní obsah, četuje a ladí vizuály s grafikem, bude měsíc
							co měsíc sedět nad vaším profilem.
						</p>
						<a class="btn-secondary" href="#kontakt">Spojit se s Mirandou</a>
					</div>
				</div>
				<div class="sluzba columns col-2">
					<div class="column texts">
						<span class="subheading">Miranda</span>
						<h2>Kreativa</h2>
						<p>
							Vyladěná grafika od Mirandy, co má hlavu plnou nápadů a hýří kreativitou, to je pane kumšt. Obzvlášť, když
							přijde na takovou korporátní identitu, to se pak jeden zapotí, než to začne lícovat. Všechny tyhle bannery,
							tiskoviny, letáky a loga.
						</p>
						<a class="btn-secondary" href="#kontakt">Spojit se s Mirandou</a>
					</div>
					<div class="column image">
						<NuxtPicture
							src="/kreativa.webp"
							loading="lazy"
							:imgAttrs="{ style: 'display: block; width: 100%; height: 100%; object-fit: cover;' }" />
						<div class="hashtags">
							<span>Produktové fotografie</span>
							<span>Webdesign</span>
							<span>Návrh značek</span>
							<span>Tiskoviny</span>
							<span>Korporátní design a identita</span>
							<span>Reklamní bannery</span>
						</div>
					</div>
				</div>
				<div class="sluzba columns col-2">
					<div class="column image">
						<NuxtPicture
							src="/influencing.webp"
							loading="lazy"
							:imgAttrs="{ style: 'display: block; width: 100%; height: 100%; object-fit: cover;' }" />
						<div class="hashtags">
							<span>Influencer marketing</span>
							<span>Microinfluencing</span>
						</div>
					</div>
					<div class="column texts">
						<span class="subheading">Miranda</span>
						<h2>Influencing</h2>
						<p>
							Zajistíme ty správný influencery pro tvý vymazlený kampaně. Disponujeme top databází těch nejvlivnějších týpků,
							co pozvednou tvůj brand na úplně jinej level.
						</p>
						<a class="btn-secondary" href="#kontakt">Spojit se s Mirandou</a>
					</div>
				</div>
			</div>
		</section>
		<section id="kontakt" class="no-margin">
			<ContactForm />
		</section>
	</main>
</template>
<script setup>
	useHead({
		title: 'Mirandamedia.cz - Naše nabídka služeb pro digitální marketing',
		meta: [
			{
				name: 'description',
				content:
					'Mirandamedia.cz nabízí širokou škálu služeb v oblasti digitálního marketingu. Zahrnujeme webový design, SEO optimalizaci, správu sociálních sítí, obsahový marketing a mnoho dalšího. Přečtěte si více o našich službách a jak vám mohou pomoci.',
			},
		],
	})
</script>
<style lang="scss" scoped>
	.image {
		position: relative;
		color: $color-white;
		img,
		picture {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&::after {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(#000, 0.4);
		}
	}
	.hashtags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 10px;
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		transform: translateY(-50%);
		padding: 50px;
		z-index: 1;
		span {
			display: inline-block;
			padding: 0.625em 1.25em;
			border: 1px solid $color-white;
			&::before {
				content: '#';
				margin-right: 0.2em;
			}
		}
	}
	.texts {
		align-self: center;
		padding: 100px;
		h2 {
			margin: 0;
		}
	}
	.sluzba {
		background-color: rgba($color-font, 0.05);
	}
	@media (max-width: 1300px) {
		.texts {
			padding: 50px;
		}
	}
	@media (max-width: 998px) {
		.hashtags {
			padding: 20px;
		}
		.sluzba.columns:nth-of-type(2n) {
			flex-direction: column-reverse;
		}
		.sluzba.columns .column {
			flex-basis: auto;
		}
	}
	@media (max-width: 767px) {
		.hashtags {
			font-size: rem(12);
		}
		.texts {
			padding: 20px;
		}
	}
</style>
