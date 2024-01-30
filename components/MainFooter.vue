<template>
	<footer>
		<div class="container">
			<div class="footer-menu-wrapper">
				<nav class="footer-navigation">
					<ul>
						<li>
							<nuxt-link to="/">Homepage</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/o-nas">O nás</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pripadove-studie">Případové studie</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/sluzby">Služby</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/kariera">Kariéra</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/clanky">Blog</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/kontakty">Kontakt</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
			<div class="awards-wrapper">
				<a href="https://www.webtop100.cz/vysledky/2023/firemni-web" target="_blank" rel="noopener">
					<NuxtImg src="/webtop100.png" alt="WEBTOP100" width="200" height="176" loading="lazy" />
				</a>
				<a href="https://www.apek.cz/seznam-clenu/mirandamedia-group-sro" target="_blank" rel="noopener">
					<NuxtImg src="/apek.png" alt="APEK" width="200" height="176" loading="lazy" />
				</a>
			</div>
			<div class="footer-top">
				<div>
					<div class="inner-max-width">
						<h4>Potkejte se s námi osobně</h4>
						<p>
							<strong>IČO:</strong> 08272930 <br />
							<strong>DIČ:</strong> CZ08272930 <br />
							<strong>BÚ:</strong> 2201649999/2010
						</p>
					</div>
				</div>
				<div class="office">
					<div class="office__map">
						<a href="https://maps.app.goo.gl/X1NpbRQhez2RqfJ19" target="_blank" rel="noopener" title="Zobrazit na mapě">
							<NuxtImg src="/praha.svg" alt="Pobočka Praha" width="120" height="70" loading="lazy" />
						</a>
					</div>
					<div class="office__address">
						<strong>Praha</strong> <br />
						Jankovcova 1596/14b <br />
						157 00, Praha 7 - Holešovice
					</div>
				</div>
				<div class="office">
					<div class="office__map">
						<a href="https://maps.app.goo.gl/is2kh3D1ojUgqhre9" target="_blank" rel="noopener" title="Zobrazit na mapě">
							<NuxtImg src="/brno.svg" alt="Pobočka Brno" width="120" height="70" loading="lazy" />
						</a>
					</div>
					<div class="office__address">
						<strong>Brno</strong> <br />
						Holandská 2/4 <br />
						639 00, Brno
					</div>
				</div>
				<div class="office">
					<div class="office__map">
						<a href="https://maps.app.goo.gl/7GaZ6CktpPiWGL396" target="_blank" rel="noopener" title="Zobrazit na mapě">
							<NuxtImg src="/bratislava.svg" alt="Pobočka Bratislava" width="125" height="60" loading="lazy" />
						</a>
					</div>
					<div class="office__address">
						<strong>Bratislava</strong> <br />
						Suché Mýto 1 <br />
						811 03, Bratislava
					</div>
				</div>
			</div>
			<div class="footer-middle">
				<div class="partneri-wrapper">
					<h5>Naši partneři</h5>
					<div class="partneri">
						<div>
							<!-- <a href="https://partnersdirectory.withgoogle.com/partners/3133375494" target="_blank" rel="noopener"> -->
							<NuxtImg src="/google-partner.svg" loading="lazy" alt="Google Partner" width="111" height="78" />
							<!-- </a> -->
						</div>
						<div class="wide">
							<!-- <a href="https://partneri.shoptet.cz/profesionalove/shoptetnamiru-cz/" target="_blank" rel="noopener"> -->
							<NuxtImg src="/shoptet-partner.png" loading="lazy" alt="Zlatý Shoptet Partner" width="175" height="40" />
							<!-- </a> -->
						</div>
						<div>
							<NuxtImg src="/meta-partner.svg" loading="lazy" alt="Meta Business Partner" width="113" height="40" />
						</div>
						<div>
							<NuxtImg src="/heureka-partner.png" loading="lazy" alt="Heureka Partner" width="78" height="93" />
						</div>
						<div>
							<NuxtImg src="/sklik.png" loading="lazy" alt="Ověření Sklik" width="123" height="63" />
						</div>
						<div>
							<!-- <a href="https://www.axfone.cz/" target="_blank" rel="noopener"> -->
							<NuxtImg src="/axfone.png" loading="lazy" alt="Axfone" width="161" height="39" />
							<!-- </a> -->
						</div>
						<div>
							<!-- <a href="https://partneri.shoptet.cz/profesionalove/shoptetnamiru-cz/" target="_blank" rel="noopener"> -->
							<NuxtImg src="/premium-parnet.svg" loading="lazy" alt="Shoptet Premium Partner" width="101" height="101" />
							<!-- </a> -->
						</div>
					</div>
				</div>
				<div class="certifikace-wrapper">
					<h5>Certifikace</h5>
					<div class="certifikace">
						<NuxtImg
							src="/co2.svg"
							loading="lazy"
							alt="Clean Advantage - Certifikát o kompenzaci C02"
							width="130"
							height="101" />
					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<a href="mailto:info@mirandamedia.cz" class="project-mail">
					<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M4.00232 4H20.0023C21.1023 4 22.0023 4.9 22.0023 6V18C22.0023 19.1 21.1023 20 20.0023 20H4.00232C2.90232 20 2.00232 19.1 2.00232 18V6C2.00232 4.9 2.90232 4 4.00232 4Z"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round" />
						<path
							d="M22.0023 6L12.0023 13L2.00232 6"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
					info@mirandamedia.cz
				</a>
				<div class="socials">
					<a target="_blank" href="https://www.instagram.com/mirandamediagroup/">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<title>Instagram</title>
							<path
								d="M12 2.16221C15.2041 2.16221 15.5836 2.1744 16.849 2.23213C18.019 2.28553 18.6544 2.48102 19.0773 2.64531C19.6373 2.863 20.0371 3.12308 20.457 3.54297C20.8769 3.96287 21.137 4.36266 21.3546 4.92274C21.519 5.34564 21.7145 5.98103 21.7679 7.15097C21.8256 8.41637 21.8378 8.79587 21.8378 12C21.8378 15.2042 21.8256 15.5837 21.7679 16.849C21.7145 18.019 21.519 18.6544 21.3546 19.0773C21.137 19.6374 20.8769 20.0372 20.457 20.4571C20.0371 20.877 19.6373 21.137 19.0773 21.3547C18.6544 21.519 18.019 21.7145 16.849 21.7679C15.5838 21.8256 15.2043 21.8378 12 21.8378C8.79563 21.8378 8.41613 21.8256 7.15097 21.7679C5.98098 21.7145 5.34559 21.519 4.92274 21.3547C4.36261 21.137 3.96282 20.877 3.54293 20.4571C3.12303 20.0372 2.86295 19.6374 2.64531 19.0773C2.48097 18.6544 2.28548 18.019 2.23209 16.8491C2.17435 15.5837 2.16216 15.2042 2.16216 12C2.16216 8.79587 2.17435 8.41637 2.23209 7.15102C2.28548 5.98103 2.48097 5.34564 2.64531 4.92274C2.86295 4.36266 3.12303 3.96287 3.54293 3.54297C3.96282 3.12308 4.36261 2.863 4.92274 2.64531C5.34559 2.48102 5.98098 2.28553 7.15092 2.23213C8.41632 2.1744 8.79582 2.16221 12 2.16221ZM12 0C8.74095 0 8.33234 0.0138139 7.05241 0.0722133C5.77511 0.130517 4.90283 0.333343 4.1395 0.630008C3.35039 0.936677 2.68118 1.347 2.01406 2.01411C1.34695 2.68123 0.936629 3.35044 0.629961 4.13954C0.333296 4.90288 0.13047 5.77516 0.0721656 7.05246C0.0137662 8.33234 0 8.741 0 12C0 15.2591 0.0137662 15.6677 0.0721656 16.9476C0.13047 18.2249 0.333296 19.0972 0.629961 19.8605C0.936629 20.6496 1.34695 21.3188 2.01406 21.9859C2.68118 22.6531 3.35039 23.0634 4.1395 23.37C4.90283 23.6667 5.77511 23.8695 7.05241 23.9278C8.33234 23.9862 8.74095 24 12 24C15.259 24 15.6677 23.9862 16.9475 23.9278C18.2248 23.8695 19.0971 23.6667 19.8605 23.37C20.6496 23.0634 21.3188 22.6531 21.9859 21.9859C22.653 21.3188 23.0633 20.6496 23.37 19.8605C23.6667 19.0972 23.8695 18.2249 23.9278 16.9476C23.9862 15.6677 24 15.2591 24 12C24 8.741 23.9862 8.33234 23.9278 7.05246C23.8695 5.77516 23.6667 4.90288 23.37 4.13954C23.0633 3.35044 22.653 2.68123 21.9859 2.01411C21.3188 1.347 20.6496 0.936677 19.8605 0.630008C19.0971 0.333343 18.2248 0.130517 16.9475 0.0722133C15.6677 0.0138139 15.259 0 12 0ZM12 5.83784C8.59671 5.83784 5.83779 8.59676 5.83779 12C5.83779 15.4033 8.59671 18.1622 12 18.1622C15.4032 18.1622 18.1622 15.4033 18.1622 12C18.1622 8.59676 15.4032 5.83784 12 5.83784ZM12 16C9.79085 16 7.99995 14.2091 7.99995 12C7.99995 9.7909 9.79085 8 12 8C14.2091 8 16 9.7909 16 12C16 14.2091 14.2091 16 12 16ZM19.8456 5.59438C19.8456 6.38968 19.2009 7.03441 18.4056 7.03441C17.6103 7.03441 16.9656 6.38968 16.9656 5.59438C16.9656 4.79909 17.6103 4.15441 18.4056 4.15441C19.2009 4.15441 19.8456 4.79909 19.8456 5.59438Z"></path>
						</svg>
					</a>
					<a target="_blank" href="https://www.facebook.com/mirandamedia.cz">
						<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<title>Facebook</title>
							<path
								d="M11.5748 7.77H7.7948V5.28C7.7948 4.33 8.3948 4.14 8.8448 4.14H11.5348V0H7.8448C3.7148 0 2.8148 3.09 2.8148 5.03V7.77H0.424805V12H2.8148V24H7.7948V12H11.1848L11.5748 7.77Z"></path>
						</svg>
					</a>
					<a target="_blank" href="https://www.youtube.com/channel/UCHWcwUeHvHtfpJkLsFOsqpQ">
						<svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<title>YouTube</title>
							<path
								d="M14.9999 0C10.4338 0 4.50722 1.14407 4.50722 1.14407L4.49231 1.16112C2.41265 1.49372 0.819336 3.28075 0.819336 5.45406V11.9989V12.0011V18.5438V18.5459C0.821365 19.5839 1.19334 20.5871 1.86848 21.3755C2.54361 22.1639 3.47768 22.6857 4.50296 22.8474L4.50722 22.8538C4.50722 22.8538 10.4338 24 14.9999 24C19.566 24 25.4926 22.8538 25.4926 22.8538L25.4947 22.8517C26.5211 22.6903 27.4562 22.168 28.1319 21.3787C28.8075 20.5894 29.1794 19.5849 29.1805 18.5459V18.5438V12.0011V11.9989V5.45406C29.1789 4.41575 28.8072 3.41201 28.132 2.62319C27.4568 1.83438 26.5225 1.31219 25.4968 1.15047L25.4926 1.14407C25.4926 1.14407 19.566 0 14.9999 0ZM11.7275 6.97949L20.454 11.9989L11.7275 17.0184V6.97949Z"></path>
						</svg>
					</a>
					<a target="_blank" href="https://www.linkedin.com/company/mirandamedia/">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<title>LinkedIn</title>
							<path
								d="M22.1447 0.000390816H1.85516C0.895179 -0.0196088 0.0951949 0.730376 0.0751953 1.70036C0.0751953 1.71036 0.0751953 1.73036 0.0751953 1.74036V22.2699C0.0751953 23.2299 0.85518 23.9999 1.81516 23.9999C1.82516 23.9999 1.84516 23.9999 1.85516 23.9999H22.1447C23.1147 24.0099 23.9047 23.2299 23.9247 22.2599V1.74036C23.8947 0.770375 23.1047 0.0103906 22.1447 0.000390816ZM7.30505 20.05H3.68512V9.2502H7.30505V20.05ZM5.47509 7.76023C4.45511 7.85023 3.54513 7.09025 3.45513 6.07027C3.44513 6.01027 3.44513 5.94027 3.44513 5.88027C3.44513 4.84029 4.29511 3.99031 5.34509 4.00031C5.38509 4.00031 5.43509 4.00031 5.47509 4.00031C6.51507 3.93031 7.41505 4.7103 7.49505 5.75027C7.49505 5.79027 7.49505 5.83027 7.49505 5.88027C7.53504 6.88025 6.76506 7.73023 5.76508 7.77023C5.66508 7.77023 5.57508 7.77023 5.47509 7.76023ZM20.2748 20.05H16.6549V14.2701C16.6549 12.8201 16.1249 11.8102 14.8249 11.8102C13.9949 11.8102 13.2649 12.3301 12.9949 13.1101C12.9049 13.3901 12.8749 13.6801 12.8949 13.9801V20H9.27501C9.27501 20 9.32501 10.1702 9.27501 9.1602H12.8849V10.7002C13.5549 9.5602 14.7949 8.88021 16.1149 8.92021C18.4748 8.92021 20.2648 10.4602 20.2648 13.7901L20.2748 20.05Z"></path>
						</svg>
					</a>
				</div>
				<a href="tel:00420732264251" class="project-phone">
					<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M21.0024 15.9201V18.9201C21.0035 19.1986 20.9465 19.4743 20.8349 19.7294C20.7233 19.9846 20.5597 20.2137 20.3545 20.402C20.1492 20.5902 19.9069 20.7336 19.6431 20.8228C19.3793 20.912 19.0997 20.9452 18.8224 20.9201C15.7452 20.5857 12.7894 19.5342 10.1924 17.8501C7.7762 16.3148 5.72771 14.2663 4.19237 11.8501C2.50235 9.2413 1.45062 6.27109 1.12237 3.1801C1.09739 2.90356 1.13025 2.62486 1.21887 2.36172C1.3075 2.09859 1.44995 1.85679 1.63714 1.65172C1.82434 1.44665 2.05218 1.28281 2.30617 1.17062C2.56015 1.05843 2.83472 1.00036 3.11237 1.0001H6.11237C6.59768 0.995321 7.06817 1.16718 7.43614 1.48363C7.80411 1.80008 8.04445 2.23954 8.11237 2.7201C8.239 3.68016 8.47382 4.62282 8.81238 5.5301C8.94692 5.88802 8.97604 6.27701 8.89628 6.65098C8.81653 7.02494 8.63124 7.36821 8.36237 7.6401L7.09237 8.9101C8.51593 11.4136 10.5888 13.4865 13.0924 14.9101L14.3624 13.6401C14.6343 13.3712 14.9775 13.1859 15.3515 13.1062C15.7255 13.0264 16.1145 13.0556 16.4724 13.1901C17.3796 13.5286 18.3223 13.7635 19.2824 13.8901C19.7681 13.9586 20.2118 14.2033 20.5289 14.5776C20.846 14.9519 21.0145 15.4297 21.0024 15.9201Z"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
					+420 732 264 251
				</a>
			</div>
			<div class="signature">
				<p>
					© MirandaMedia Group s.r.o. {{ new Date().getFullYear() }} |
					<NuxtLink href="/zpracovani-osobnich-udaju">Zpracování osobních údajů</NuxtLink>
				</p>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
	footer {
		padding: 100px 0 30px;
		background-color: $color-font;
		color: $color-white;
		h4 {
			color: $color-white;
			font-size: rem(24);
			margin: 0 0 em(10, 24);
		}
		a {
			text-decoration: none;
			color: $color-white;
			display: inline-block;
			line-height: 1.5em;
			&:hover,
			&:focus {
				text-decoration: underline;
			}
		}
		p:last-child {
			margin-bottom: 0;
		}
		@media (max-width: 767px) {
			padding: 50px 0;
			h4 {
				font-size: rem(18);
			}
		}
	}
	.footer-navigation {
		text-align: center;
		margin-bottom: 50px;
		ul {
			list-style: none;
			margin: 0;
			padding: 20px 0;
			display: inline-flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: 20px 60px;
			background: linear-gradient(90deg, rgba(234, 255, 242, 0) 0%, rgba(234, 255, 242, 0.05) 51%, rgba(234, 255, 242, 0) 100%);
			@media (max-width: 767px) {
				flex-direction: column;
				background: none;
				padding: 0;
				gap: 0;
			}
		}
		a {
			padding: em(10);
			color: #bdf1d2;
			font-weight: 700;
			&:hover,
			&.router-link-active {
				color: $color-white;
				text-decoration: none;
			}
		}
	}
	.awards-wrapper {
		display: flex;
		justify-content: center;
		gap: 40px;
		margin-bottom: 50px;
		a {
			&:hover {
				img {
					transform: scale(1.05);
				}
			}
		}
		img {
			width: auto;
			max-width: 100%;
			transition: all 0.6s ease-in-out;
		}
	}
	.footer-top {
		padding-bottom: 50px;
		margin-bottom: 50px;
		border-bottom: 1px solid #656d68;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 50px;
		.inner-max-width {
			max-width: 220px;
		}
		& > div {
			flex: 1 1 300px;
		}
	}
	.office {
		display: flex;
		align-items: center;
		gap: 20px;
		&__address {
			line-height: em(28);
			strong {
				color: $color-accent;
			}
		}
		img {
			transition: all 0.6s ease-in-out;
		}
		a {
			&:hover {
				img {
					transform: scale(1.05);
				}
			}
		}
	}
	.footer-middle {
		display: flex;
		flex-wrap: wrap;
		gap: 60px;
		padding-bottom: 50px;
		margin-bottom: 50px;
		border-bottom: 1px solid #656d68;
		h5 {
			font-size: rem(16);
		}
		img {
			width: auto;
			max-width: 100%;
			filter: grayscale(1);
		}
		@media (max-width: 767px) {
			text-align: center;
			gap: 20px;
			.certifikace-wrapper {
				width: 100%;
			}
		}
	}
	.partneri {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 50px;
		@media (max-width: 767px) {
			gap: 30px;
			div {
				flex: 1 1 80px;
				&.wide {
					order: 1000;
					flex-basis: auto;
				}
			}
		}
	}
	.footer-bottom {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 60px;
		margin-bottom: 30px;
		gap: 20px;
		& > * {
			flex: 0 1 350px;
		}
	}
	.project-mail,
	.project-phone {
		font-size: rem(24);
		font-weight: 700;
		color: $color-accent;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
	}
	.socials {
		display: flex;
		justify-content: center;
		gap: 20px;
		a {
			display: inline-block;
			padding: 10px;
			&:hover,
			&:focus {
				svg {
					fill: $color-white;
				}
			}
		}
		svg {
			fill: $color-accent;
			transition: all 0.15s ease-in-out;
		}
	}
	.signature {
		text-align: center;
		p,
		a {
			color: rgba($color-white, 0.7);
		}
	}
</style>
