<template>
	<div v-if="screenWidth > 1040" class="sluzby-wrapper">
		<div class="image-wrapper">
			<div ref="kampane" v-show="activeRef == kampane">
				<div class="bg-img">
					<NuxtPicture
						src="/kampane.webp"
						loading="lazy"
						width="900"
						height="900"
						alt=""
						:img-attrs="{ style: 'display: block; width: 100%; height: 100%; object-fit: cover;' }" />
				</div>
				<div class="texts">
					<p>
						Mirandina partička nápadama vyzbrojenejch markeťáků poskytuje komplexní služby internetového marketingu. Onlinový
						PPC kampaně, co podávaj solidní výkon, SEO vychytávky pro tučnej traffic z organicu, správu sociálních sítí Facebook
						& Instagram pro hladový fanoušky, zbožové vyhledávače, e-mailing, webovou analytiku a další neodmyslitelný
						marketovky pro váš do maxima vyladěný onlajnový flow.
					</p>
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
			</div>
			<div ref="ehopy" v-show="activeRef == eshopy">
				<div class="bg-img">
					<NuxtPicture
						src="/weby_eshopy.webp"
						loading="lazy"
						width="900"
						height="900"
						alt=""
						:img-attrs="{ style: 'display: block; width: 100%; height: 100%; object-fit: cover;' }" />
				</div>
				<div class="texts">
					<p>
						Vytuněný webovky a nabušenej e-shop je naše specializace a opus magnum. Vaši onlajnovou výkladní skříň podnikání si
						vezmeme celou na starost. Zajistíme návrh UX/UI, pořádně vymazlenou grafiku, programování a kódování. Pak to celé
						otestujeme, napojíme na kdejaký měřící nástroje a přivedeme tam plnotučnej trafiic, to dá přeci rozum.
					</p>
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
			<div ref="social" v-show="activeRef == social">
				<div class="bg-img">
					<NuxtPicture
						src="/social.webp"
						loading="lazy"
						width="900"
						height="900"
						alt=""
						:img-attrs="{ style: 'display: block; width: 100%; height: 100%; object-fit: cover;' }" />
				</div>
				<div class="texts">
					<p>
						Mirandiny digitální pavučiny se nebezpečně rozvíjej napříč tímhle sociálním prostorem a pochytávaj kdejakého
						fanouška. Přidělenej stratég sociálních mega-sítí, co tuní obsah, četuje a ladí vizuály s grafikem, bude měsíc co
						měsíc sedět nad vaším profilem.
					</p>
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
			</div>
			<div ref="kreativa" v-show="activeRef == kreativa">
				<div class="bg-img">
					<NuxtPicture
						src="/kreativa.webp"
						loading="lazy"
						width="900"
						height="900"
						alt=""
						:img-attrs="{ style: 'display: block; width: 100%; height: 100%; object-fit: cover;' }" />
				</div>
				<div class="texts">
					<p>
						Vyladěná grafika od Mirandy, co má hlavu plnou nápadů a hýří kreativitou, to je pane kumšt. Obzvlášť, když přijde na
						takovou korporátní identitu, to se pak jeden zapotí, než to začne lícovat. Všechny tyhle bannery, tiskoviny, letáky
						a loga.
					</p>
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
			<div ref="influencing" v-show="activeRef == influencing">
				<div class="bg-img">
					<NuxtPicture
						src="/influencing.webp"
						loading="lazy"
						width="900"
						height="900"
						alt=""
						:img-attrs="{ style: 'display: block; width: 100%; height: 100%; object-fit: cover;' }" />
				</div>
				<div class="texts">
					<p>
						Zajistíme ty správný influencery pro tvý vymazlený kampaně. Disponujeme top databází těch nejvlivnějších týpků, co
						pozvednou tvůj brand na úplně jinej level.
					</p>
					<div class="hashtags">
						<span>Influencer marketing</span>
						<span>Microinfluencing</span>
					</div>
				</div>
			</div>
		</div>
		<div class="options-wrapper">
			<div class="option" @mouseenter="activeRef = kampane" @click="navigateTo('/sprava-ppc-kampani')">
				<small>Miranda</small>
				<h3>PPC kampaně</h3>
			</div>
			<div class="option" @mouseenter="activeRef = eshopy" @click="navigateTo('/shoptetnamiru')">
				<small>Miranda</small>
				<h3>Weby & e-shopy</h3>
			</div>
			<div class="option" @mouseenter="activeRef = social">
				<small>Miranda</small>
				<h3>Sociální sítě</h3>
			</div>
			<div class="option" @mouseenter="activeRef = kreativa">
				<small>Miranda</small>
				<h3>Kreativa</h3>
			</div>
			<div class="option" @mouseenter="activeRef = influencing">
				<small>Miranda</small>
				<h3>Influencing</h3>
			</div>
		</div>
	</div>
	<div v-else>
		<div class="sluzby-inline">
			<div class="sluzba">
				<div class="sluzba__header" @click.prevent="toggleContent">
					<small>Miranda</small>
					<h3>PPC kampaně</h3>
				</div>
				<div class="sluzba__content">
					<p>
						Mirandina partička nápadama vyzbrojenejch markeťáků poskytuje komplexní služby internetového marketingu. Onlinový
						PPC kampaně, co podávaj solidní výkon, SEO vychytávky pro tučnej traffic z organicu, správu sociálních sítí Facebook
						& Instagram pro hladový fanoušky, zbožové vyhledávače, e-mailing, webovou analytiku a další neodmyslitelný
						marketovky pro váš do maxima vyladěný onlajnový flow.
					</p>
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
			</div>
			<div class="sluzba">
				<div class="sluzba__header" @click.prevent="toggleContent">
					<small>Miranda</small>
					<h3>Weby & e-shopy</h3>
				</div>
				<div class="sluzba__content">
					<p>
						Vytuněný webovky a nabušenej e-shop je naše specializace a opus magnum. Vaši onlajnovou výkladní skříň podnikání si
						vezmeme celou na starost. Zajistíme návrh UX/UI, pořádně vymazlenou grafiku, programování a kódování. Pak to celé
						otestujeme, napojíme na kdejaký měřící nástroje a přivedeme tam plnotučnej trafiic, to dá přeci rozum.
					</p>
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
			<div class="sluzba">
				<div class="sluzba__header" @click.prevent="toggleContent">
					<small>Miranda</small>
					<h3>Sociální sítě</h3>
				</div>
				<div class="sluzba__content">
					<p>
						Mirandiny digitální pavučiny se nebezpečně rozvíjej napříč tímhle sociálním prostorem a pochytávaj kdejakého
						fanouška. Přidělenej stratég sociálních mega-sítí, co tuní obsah, četuje a ladí vizuály s grafikem, bude měsíc co
						měsíc sedět nad vaším profilem.
					</p>
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
			</div>
			<div class="sluzba">
				<div class="sluzba__header" @click.prevent="toggleContent">
					<small>Miranda</small>
					<h3>Kreativa</h3>
				</div>
				<div class="sluzba__content">
					<p>
						Vyladěná grafika od Mirandy, co má hlavu plnou nápadů a hýří kreativitou, to je pane kumšt. Obzvlášť, když přijde na
						takovou korporátní identitu, to se pak jeden zapotí, než to začne lícovat. Všechny tyhle bannery, tiskoviny, letáky
						a loga.
					</p>
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
			<div class="sluzba">
				<div class="sluzba__header" @click.prevent="toggleContent">
					<small>Miranda</small>
					<h3>Influencing</h3>
				</div>
				<div class="sluzba__content">
					<p>
						Vyladěná grafika od Mirandy, co má hlavu plnou nápadů a hýří kreativitou, to je pane kumšt. Obzvlášť, když přijde na
						takovou korporátní identitu, to se pak jeden zapotí, než to začne lícovat. Všechny tyhle bannery, tiskoviny, letáky
						a loga.
					</p>
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
		</div>
	</div>
</template>

<script setup>
	const kampane = ref(null)
	const eshopy = ref(null)
	const social = ref(null)
	const kreativa = ref(null)
	const influencing = ref(null)
	const screenWidth = useState('screenWidth')

	const activeRef = ref(null)
	onMounted(() => {
		activeRef.value = kampane.value
	})

	const toggleContent = (event) => {
		event.target.closest('.sluzba').classList.toggle('active')
	}
</script>

<style lang="scss" scoped>
	.sluzby-wrapper {
		display: flex;
		gap: 50px;
		margin: 60px 0;
		& > div {
			flex: 0 1 50%;
			width: 50%;
		}
		.option {
			cursor: pointer;
		}
	}
	.image-wrapper {
		position: relative;
		& > div {
			height: 100%;
		}
	}
	.bg-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		&::before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.4);
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.texts {
		position: relative;
		height: 100%;
		padding: 100px;
		color: $color-white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 2;
		line-height: 1.5em;
	}
	.hashtags {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
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
	.options-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.option {
		padding: 20px 0;
		&:not(:last-of-type) {
			border-bottom: 1px solid $color-border;
		}
		h3 {
			font-size: 3rem;
			margin: 0;
			transition: all 0.2s ease-in-out;
		}
		small {
			font-size: rem(16);
			font-weight: 400;
			display: block;
		}
		&:hover,
		&:focus {
			h3 {
				color: $color-accent;
			}
		}
	}
	.sluzby-inline {
		margin-bottom: 30px;
		.sluzba {
			&__header {
				border-bottom: 1px solid rgba($color-font, 0.1);
				padding: 20px 0;
				position: relative;
				h3 {
					margin: 0;
				}
				&::after {
					content: '';
					position: absolute;
					top: 50%;
					right: 0;
					width: 14px;
					height: 14px;
					border: 2px solid $color-font;
					border-style: none solid solid none;
					transform: rotate(45deg) translateY(-50%);
				}
			}
			&__content {
				background-color: rgba($color-font, 0.1);
				padding: 0 20px;
				max-height: 0;
				overflow: hidden;
				transition: all 0.15s ease-in-out;
				p {
					margin-top: 0;
				}
			}
			.hashtags {
				span {
					border: 1px solid $color-font;
				}
			}
			&.active {
				.sluzba__content {
					max-height: 1000px;
					padding: 20px;
				}
			}
		}
	}
	@media (max-width: 1340px) {
		.texts {
			padding: 30px;
		}
	}
</style>
