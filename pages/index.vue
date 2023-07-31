<template>
	<main>
		<HeroBig :video="true">
			<h1>Marketingová digitální agentura</h1>
			<h2>Tvoříme ziskové e-shopy a weby, navrhujeme design produktů a značek, staráme se o výkon kampaní, ctíme fair play</h2>
		</HeroBig>
		<section id="scroll" class="reference">
			<div class="container">
				<h2 class="text-center">Na co jsme hrdí</h2>
				<div class="text-center container narrow">
					<p>
						Tvoříme ziskové e-shopy a weby pro ty, kteří požadují jen to nejlepší. Spravujeme výkonnostní kampaně a přinášíme
						dosah sociálním sítím. Stojíme za vznikem nových značek a produktů, které hýbou trhem.
					</p>
				</div>
				<ReferenceGrid type="hp" />
				<div class="buttons-center">
					<BtnSecondary url="/pripadove-studie" text="Objevit další projekty" />
				</div>
			</div>
		</section>
		<section class="sluzby">
			<div class="container">
				<h2 class="text-center">Miranda je ta pravá</h2>
				<div class="text-center container narrow">
					<p>
						Uvařit pořádně hutnej a dlouhodobej výkon v digitálu není jen tak, ale když se spojí dobrý nápad s vytrvalostí a
						zápalem a k tomu přidáte pár nadšených profíků, může z toho vzniknout něco, na co budete právem pyšní!
					</p>
				</div>
				<SluzbyBlock />
				<div class="buttons-center">
					<BtnSecondary url="/kontakty#kontakt" text="Poptat službu" />
				</div>
			</div>
		</section>
		<section class="proc-miranda">
			<div class="container">
				<div class="columns col-4-6 align-center">
					<div class="column">
						<h2>Proč si začít s Mirandou?</h2>
						<p>
							Protože tahle agenturní dáma umí být věrná a spolehlivá každým coulem. Pro svého zákazníka udělá, co mu na očích
							vidí a nikdy nenechá ležet kdejakou pořádnou výzvu bokem.
						</p>
						<BtnSecondary url="/o-nas" text="Více o nás" />
					</div>
					<div class="column">
						<NuxtPicture src="/proc-miranda-grid.webp" width="1612" height="1272" alt="" loading="lazy" />
					</div>
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
		<!-- <section class="container">
			<div class="podcast">
				<NuxtPicture
					class="background-image"
					src="/podcast-bg.jpg"
					:imgAttrs="{ style: 'width:100%; height:100%; object-fit:cover;' }"
					loading="lazy"
					width="1441"
					height="574"
					alt="" />
				<div class="pripravujeme">
					<svg
						width="214"
						height="211"
						viewBox="0 0 214 211"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12.9697 190.222L-3.14957e-07 203.192L12.9697 210.397L12.9697 190.222Z"
							fill="#9BEABB" />
						<path
							d="M-3.60421e-06 120.737L-1.51248e-06 168.591L0 203.192L204.633 0.000219937L118.586 0.000223698L-3.60421e-06 120.737Z"
							fill="#59DC8E" />
						<path
							d="M25.2754 133.462C25.7865 133.986 26.1355 134.584 26.3222 135.257C26.5006 135.921 26.4705 136.629 26.232 137.382C25.9935 138.134 25.5048 138.87 24.766 139.591L23.4001 140.923L26.5672 144.17L24.3637 146.32L15.5411 137.274L19.1105 133.792C19.8321 133.088 20.5636 132.618 21.3048 132.381C22.046 132.144 22.7549 132.124 23.4313 132.319C24.1077 132.514 24.7224 132.895 25.2754 133.462ZM22.8893 138.002C23.3102 137.591 23.5274 137.187 23.5409 136.788C23.5544 136.389 23.3852 136.01 23.0333 135.649C22.6814 135.288 22.306 135.109 21.9071 135.113C21.5082 135.116 21.0983 135.323 20.6774 135.734L19.479 136.903L21.6909 139.171L22.8893 138.002ZM39.5953 131.464L34.3834 129.884L33.8551 130.399L37.1856 133.814L34.9821 135.963L26.1595 126.917L29.8578 123.31C30.5708 122.615 31.2979 122.149 32.0392 121.912C32.789 121.667 33.5021 121.642 34.1786 121.837C34.8466 122.023 35.4404 122.383 35.9598 122.916C36.5463 123.517 36.8982 124.222 37.0154 125.029C37.1412 125.828 36.9697 126.649 36.5009 127.492L42.0823 129.038L39.5953 131.464ZM32.3344 128.84L33.7003 127.508C34.1041 127.114 34.3084 126.722 34.3133 126.332C34.3268 125.933 34.1575 125.553 33.8057 125.193C33.4705 124.849 33.1035 124.679 32.7046 124.682C32.3143 124.678 31.9173 124.872 31.5135 125.266L30.1476 126.598L32.3344 128.84ZM29.9987 120.181L28.9942 123.147L26.004 124.077L24.521 122.556L27.6118 121.729L28.5157 118.66L29.9987 120.181ZM39.3463 114.056L48.1689 123.102L45.9654 125.251L37.1428 116.205L39.3463 114.056ZM53.2547 106.174C53.7658 106.698 54.1147 107.296 54.3015 107.969C54.4799 108.633 54.4498 109.341 54.2113 110.093C53.9728 110.846 53.4841 111.582 52.7453 112.303L51.3794 113.635L54.5465 116.882L52.343 119.031L43.5204 109.985L47.0898 106.504C47.8114 105.8 48.5428 105.33 49.2841 105.093C50.0253 104.856 50.7342 104.835 51.4106 105.03C52.087 105.226 52.7017 105.607 53.2547 106.174ZM50.8686 110.713C51.2895 110.303 51.5067 109.898 51.5202 109.5C51.5337 109.101 51.3645 108.721 51.0126 108.36C50.6607 108 50.2853 107.821 49.8864 107.824C49.4875 107.828 49.0776 108.035 48.6566 108.446L47.4582 109.614L49.6702 111.882L50.8686 110.713ZM67.5746 104.176L62.3627 102.596L61.8344 103.111L65.1649 106.526L62.9614 108.675L54.1388 99.629L57.8371 96.022C58.5501 95.3266 59.2772 94.8604 60.0185 94.6236C60.7683 94.3784 61.4814 94.3534 62.1578 94.5485C62.8259 94.7351 63.4197 95.0947 63.9391 95.6273C64.5256 96.2286 64.8775 96.9331 64.9947 97.7408C65.1205 98.54 64.949 99.361 64.4802 100.204L70.0616 101.75L67.5746 104.176ZM60.3137 101.552L61.6796 100.22C62.0834 99.8259 62.2877 99.4338 62.2926 99.0435C62.3061 98.6449 62.1368 98.2651 61.7849 97.9043C61.4498 97.5607 61.0828 97.3906 60.6839 97.3941C60.2936 97.3892 59.8966 97.5837 59.4928 97.9775L58.1269 99.3097L60.3137 101.552ZM78.0175 90.8728L74.6413 94.1656L75.6585 96.2913L73.3519 98.541L67.8024 86.3027L70.3538 83.8143L82.4495 89.6681L80.1171 91.9429L78.0175 90.8728ZM75.7916 89.7249L71.4405 87.5066L73.5623 91.8991L75.7916 89.7249ZM85.6921 68.8548L91.3061 81.0302L88.5485 83.7197L76.5173 77.8031L78.8625 75.5157L87.7656 80.1585L83.3597 71.1295L85.6921 68.8548ZM91.3551 63.3316L96.6336 68.7437C97.1615 69.285 97.701 69.5717 98.2522 69.6041C98.8033 69.6364 99.3367 69.4012 99.8521 68.8985C100.368 68.3958 100.62 67.8644 100.61 67.3042C100.6 66.744 100.331 66.1933 99.8036 65.6521L94.5251 60.2399L96.7286 58.0908L101.995 63.4901C102.782 64.2976 103.276 65.1481 103.477 66.0417C103.678 66.9352 103.625 67.8086 103.317 68.6618C103.018 69.5067 102.512 70.2768 101.799 70.9722C101.086 71.6676 100.312 72.1544 99.477 72.4325C98.6421 72.6936 97.7891 72.7041 96.9181 72.4641C96.0386 72.2155 95.2051 71.6875 94.4175 70.88L89.1516 65.4807L91.3551 63.3316ZM106.523 48.5383L112.53 54.6978C113.46 55.6514 113.906 56.6498 113.868 57.6931C113.838 58.728 113.368 59.6895 112.457 60.5777C111.503 61.5077 110.475 61.9828 109.371 62.0029C108.268 62.0231 107.23 61.5349 106.258 60.5384L108.449 58.4018C108.818 58.7798 109.176 58.9922 109.523 59.039C109.862 59.0771 110.178 58.9538 110.47 58.6689C110.736 58.4092 110.858 58.1222 110.837 57.808C110.815 57.4937 110.645 57.1734 110.327 56.8469L104.319 50.6874L106.523 48.5383ZM114.805 43.9051L116.59 45.7349L119.541 42.8569L121.2 44.5578L118.249 47.4359L120.184 49.4203L123.522 46.1652L125.244 47.9306L119.703 53.3348L110.88 44.2888L116.421 38.8846L118.143 40.65L114.805 43.9051ZM130.673 24.9844L139.496 34.0304L137.292 36.1795L132.001 30.7545L135.269 38.1527L133.491 39.887L126.151 36.4348L131.455 41.8727L129.251 44.0218L120.429 34.9758L123.032 32.4371L131.678 36.2239L128.083 27.5105L130.673 24.9844ZM138.76 20.5417L140.545 22.3715L143.496 19.4935L145.155 21.1944L142.204 24.0725L144.139 26.0569L147.477 22.8018L149.199 24.5672L143.658 29.9714L134.835 20.9254L140.376 15.5212L142.098 17.2866L138.76 20.5417Z"
							fill="#222E27" />
						<path
							d="M204.633 0.000273138L191.663 12.97L214 12.97L204.633 0.000273138Z"
							fill="#9BEABB" />
					</svg>
				</div>
				<div class="columns col-2 align-center">
					<div class="column">
						<h3>Miranda podcast</h3>
						<p>
							Pokud tě zajímá svět digitálních a marketingových agentur, autentické a inspirativní příběhy napříč všemi
							oblastmi podnikání nebo chceš jednoduše vyplnit volný čas, tak pouštej!
						</p>
					</div>
					<div class="column"></div>
				</div>
			</div>
		</section> -->
		<section class="no-margin">
			<BannerMiranda />
		</section>
	</main>
</template>
<script setup>
	useHead({
		title: 'Mirandamedia.cz - Kreativní digitální agentura pro vaše podnikání',
		meta: [
			{
				name: 'description',
				content:
					'Mirandamedia.cz je kreativní digitální agentura, která vám pomůže posílit online přítomnost vašeho podnikání. Nabízíme komplexní služby v oblasti webového designu, marketingu a online strategie.',
			},
		],
	})
</script>
<style lang="scss">
	.proc-miranda {
		.columns {
			gap: 60px;
		}
		p {
			line-height: 1.8em;
		}
	}
	.podcast {
		color: $color-white;
		position: relative;
		min-height: 574px;
		display: flex;
		.column:first-of-type {
			padding: 100px;
		}
		.pripravujeme {
			position: absolute;
			top: -13px;
			left: -13px;
		}
		h3 {
			font-size: 3rem;
			margin: 0 0 em(10, 48);
		}
		& > div {
			position: relative;
		}
		.background-image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
	@media (max-width: 767px) {
		.podcast {
			margin-left: -20px;
			margin-right: -20px;
			margin-bottom: -50px;
			flex-direction: column;
			justify-content: flex-end;
			.pripravujeme {
				top: 0;
				left: 0;
				right: 0;
				padding: em(15) em(20);
				background-color: $color-accent;
				text-align: center;
				color: $color-font;
				text-transform: uppercase;
				font-weight: 700;
				letter-spacing: 0.2em;
				&::before {
					content: 'Připravujeme';
				}
				svg {
					display: none;
				}
			}
			p {
				display: none;
			}
			h3 {
				font-size: rem(28);
			}
			.columns {
				flex-direction: column-reverse;
				height: 100%;
				.column {
					flex-basis: auto;
				}
			}
			.column:first-of-type {
				padding: 0 0 50px;
				text-align: center;
			}
		}
	}
</style>
