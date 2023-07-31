<template>
	<main>
		<HeroBig imgUrl="/o-nas-hero.webp">
			<h1>Miranda</h1>
			<h2>Digitální marketingová agentura s citem pro design a perspektivu</h2>
		</HeroBig>
		<section id="scroll" class="container">
			<h2 class="text-center">Poznejte Mirandu</h2>
			<div class="text-center container narrow">
				<p>Spojujeme společnosti se zákazníky na základě podrobných dat, příběhů a hodnot.</p>
			</div>
			<div class="miranda-grid">
				<div class="item large">
					<h3>Jak to všechno začalo</h3>
					<p>
						Když se potkal Tomáš s Michalem, měli oba svou vlastní agenturu. Každý se věnoval trochu něčemu jinému. Všechno do
						sebe začalo zapadat až ve chvíli, kdy získali svého prvního společného klienta a pochopili, že dohromady jim to
						spolu šlape jak hodinky. A tak se začal psát příběh Mirandy.
					</p>
				</div>
				<div class="item image large">
					<NuxtPicture
						src="/buchta.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item image">
					<NuxtPicture
						src="/img1.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item mobile-wide">
					<p>
						Chcete-li poznat Mirandu a to, kým opravdu je, zastavte se za ní v holešovickém přístavu na Praze 7. Uvítá vás s
						vřelostí sobě vlastní, a až si padnete do oka, už nikdy nebudete chtít jinou.
					</p>
				</div>
				<div class="item image">
					<NuxtPicture
						src="/img2.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item center">
					<p>
						<strong>
							+25
							<small>profefionálů</small>
						</strong>
					</p>
				</div>
				<div class="item image">
					<NuxtPicture
						src="/img3.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item image">
					<NuxtPicture
						src="/img4.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item wide">
					<p>
						Na vymýšlení všemožných strategií, projektů a nápadů posbírala Miranda už nějaké ty zkušenostní body. Možná i proto
						jí naslouchají klienti jako Philips, Zdeněk Pohlreich, Pivovar Svijany, PetCenter a mnozí další...sami se jich
						zeptejte, co na Mirandu říkají.
					</p>
				</div>
				<div class="item image">
					<NuxtPicture
						src="/img5.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item image">
					<NuxtPicture
						src="/img6.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item image">
					<NuxtPicture
						src="/img7.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item image">
					<NuxtPicture
						src="/img8.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item image wide">
					<NuxtPicture
						src="/img9.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item center">
					<p>
						<strong>
							15+ let
							<small>cenných zkušeností</small>
						</strong>
					</p>
				</div>
				<div class="item image">
					<NuxtPicture
						src="/tomas.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item center mobile-wide">
					<p>
						<strong>
							Tomáš Cina
							<small>zakladatel společnosti</small>
						</strong>
					</p>
					<p>
						<strong>
							Michal Baloun
							<small>zakladatel společnosti</small>
						</strong>
					</p>
				</div>
				<div class="item image">
					<NuxtPicture
						src="/michal.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item center">
					<p>
						<strong>
							247+
							<small>úžasných projektů</small>
						</strong>
					</p>
				</div>
				<div class="item image">
					<NuxtPicture
						src="/img10.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
				<div class="item image">
					<NuxtPicture
						src="/img11.webp"
						:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
						alt=""
						loading="lazy" />
				</div>
			</div>
		</section>
		<section class="no-margin">
			<BannerMiranda />
		</section>
	</main>
</template>
<script setup>
	useHead({
		title: 'Mirandamedia.cz - Kdo jsme a co děláme',
		meta: [
			{
				name: 'description',
				content:
					'Jsme profesionální digitální agentura zaměřená na tvorbu moderních webových stránek, efektivní online marketing a strategie pro růst vašeho podnikání. Přečtěte si více o našem týmu a našich službách.',
			},
		],
	})
</script>
<style lang="scss" scoped>
	.miranda-grid {
		display: grid;
		grid-template-columns: repeat(6, minmax(1px, 1fr));
		gap: 20px;
		margin-top: 60px;
		.item {
			grid-column-end: span 2;
			h3 {
				margin-top: 0;
				margin-bottom: em(30, 48);
			}
			p {
				margin-top: 0;
				&:last-child {
					margin-bottom: 0;
				}
			}
			&.large {
				grid-column-end: span 3;
			}
			&.wide {
				grid-column-end: span 4;
			}
			&.center {
				text-align: center;
				strong {
					font-size: rem(48);
					line-height: 1.5em;
					display: block;
					small {
						font-size: 1rem;
						line-height: 1.5em;
						display: block;
					}
				}
			}
			&:not(.image) {
				padding: 50px;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			&:first-of-type,
			&:nth-of-type(15) {
				background-color: rgba($color-font, 0.05);
			}
			&:nth-of-type(4),
			&:nth-of-type(9) {
				background-color: rgba($color-font, 0.1);
			}
			&:nth-of-type(6) {
				background-color: rgba($color-font, 0.3);
			}
			&:nth-of-type(17) {
				background-color: $color-accent;
			}
			&:nth-of-type(19) {
				background-color: rgba($color-font, 0.2);
			}
		}
	}
	@media (max-width: 1050px) {
		.miranda-grid {
			grid-template-columns: repeat(2, minmax(1px, 1fr));
			grid-auto-flow: dense;
			.item {
				grid-column-end: unset;
				&:not(.wide):not(.mobile-wide) {
					aspect-ratio: 1;
				}
				&.large,
				&.wide {
					grid-column-end: span 2;
				}
				&.image.large,
				&.image {
					grid-column-end: unset;
				}
			}
		}
	}
	@media (max-width: 930px) {
		.miranda-grid {
			.item:not(.image) {
				padding: 20px;
			}
			.item.mobile-wide {
				grid-column-end: span 2;
			}
			.item.center strong {
				font-size: 2rem;
			}
		}
	}
</style>
