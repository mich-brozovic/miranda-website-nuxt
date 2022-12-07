<template>
	<main>
		<HeroBig imgUrl="/shoptetnamiru-hero.jpg" heading="Postavíme vám Shoptet na míru" subheading="Kompletní e-shopové řešení za nejkratší možnou dobu" />
		<section class="container anchors-wrapper">
			<nav>
				<ul>
					<li><a href="#reference">Reference</a></li>
					<li><a href="#sluzby">Služby</a></li>
					<li><a href="#proc-shoptet">Proč Shoptet</a></li>
					<li><a href="#reakce">Reakce zákazníků</a></li>
					<li><a href="#konfigurator">Konfigurátor</a></li>
					<li><a href="#kontakt">Kontakty</a></li>
				</ul>
			</nav>
		</section>
		<section id="reference" class="container">
			<h2 class="text-center">Naše e-shopy na Shoptetu na míru</h2>
			<ReferenceGrid type="shop" />
		</section>
		<section class="container">
			<div class="shoptet-sluzby-grid">
				<div class="large item">
					<NuxtPicture src="/shoptet-premium-logo.webp" :imgAttrs="{ style: 'max-width: 160px; width: auto;' }" />
					<h2>Služby, které nabízíme</h2>
					<p class="large">
						Postavíme celý e-shop na klíč, zaškolíme vás v práci s administrací a posuneme výkon vašich kampaní na zcela jinou úroveň.
					</p>
					<ul>
						<li>Napojení jakéhokoliv systému pomocí API</li>
						<li>Možnost programovat vlastní funkce</li>
						<li>Neomezený počet produktů, uživatelů, e-mailů</li>
						<li>Bez nutnosti vlastních programátorů</li>
					</ul>
					<a href="#kontakt" class="btn-secondary">Poptat služby</a>
				</div>
			</div>
		</section>
		<section id="kontakt" class="no-margin"><ContactForm /></section>
	</main>
</template>
<script setup></script>
<style lang="scss">
	.anchors-wrapper {
		position: sticky;
		top: 0;
		background-color: $color-white;
		z-index: 2;
		nav {
			overflow-x: auto;
			ul {
				list-style: none;
				padding: 0;
				margin: 0;
				display: flex;
				justify-content: center;
				white-space: nowrap;
				a {
					display: inline-block;
					padding: 0.625em 1.25em;
					text-decoration: none;
					color: $color-font;
					&:hover,
					&:focus {
						color: $color-white;
						background-color: $color-font;
					}
				}
			}
		}
	}
</style>
