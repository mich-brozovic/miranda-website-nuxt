<template>
	<main>
		<HeroCarousel :data="carouselData">
			<div class="buttons">
				<button @click.prevent="showPopup = true" class="btn btn-accent" href="#kontakt">PPC audit zdarma</button>
			</div>
			<div class="logos">
				<NuxtImg src="/ppc/google-ads.png" width="110" height="56" alt="Google Ads" />
				<NuxtImg src="/ppc/sklik.png" width="111" height="20" alt="Sklik" />
				<NuxtImg src="/ppc/favi.png" width="111" height="50" alt="Favi" />
				<NuxtImg src="/ppc/zbozi-cz.png" width="110" height="23" alt="Zboží.cz" />
				<NuxtImg src="/ppc/amazon-ads.png" width="110" height="56" alt="Amazon Ads" />
				<NuxtImg src="/ppc/heureka.png" width="110" height="24" alt="Heureka" />
				<NuxtImg src="/ppc/linkedin.png" width="111" height="29" alt="LinkedIn" />
				<NuxtImg src="/ppc/instagram.png" width="111" height="33" alt="Instagram" />
				<NuxtImg src="/ppc/facebook.png" width="110" height="25" alt="Facebook" />
				<NuxtImg src="/ppc/tiktok-ads.png" width="110" height="18" alt="TikTok Ads" />
			</div>
		</HeroCarousel>
		<section class="ppcSticky no-margin">
			<div class="container">
				<div class="texts">
					<h2>Jak si stojí vaše PPC?</h2>
					<p>Získejte ještě dnes bezplatný odborný posudek výkonnosti svých reklam.</p>
				</div>
				<div class="button">
					<button @click.prevent="showPopup = true" class="btn btn-accent" href="#kontakt">PPC audit zdarma</button>
				</div>
			</div>
		</section>
		<section class="anchors-wrapper container">
			<nav>
				<ul>
					<li><a href="#priklady">Reálné příklady</a></li>
					<li><a href="#tym">Náš tým</a></li>
					<li><a href="#certifikace">Certifikace</a></li>
					<li><a href="#4-kroky">4 kroky</a></li>
					<li><a href="#faq">F.A.Q.</a></li>
					<li><a href="#edukace">Edukace</a></li>
					<li><a href="#kontakt">Kontakt</a></li>
				</ul>
			</nav>
		</section>
		<section id="priklady" class="container">
			<h2 class="text-center">Výkon PPC kampaní na reálných příkladech</h2>
			<Swiper :slides-per-view="1" :loop="true" :modules="[SwiperNavigation, SwiperPagination]" navigation pagination>
				<SwiperSlide class="banner-study">
					<NuxtLink to="/pripadove-studie/zdravotal">
						<picture>
							<source media="(min-width:880px)" srcset="/ppc/banner-zdravotal.jpg" width="1440" height="350" />
							<source srcset="/ppc/banner-zdravotal-mobile.jpg" width="670" height="670" />
							<nuxt-img src="/ppc/banner-zdravotal.jpg" width="1440" height="350" loading="lazy" alt="" />
						</picture>
						<div class="texts">
							<NuxtImg src="/ppc/zdravotal-logo.png" width="159" height="35" alt="Zdravotal" />
							<h3>
								Zvýšení tržeb <strong class="black">o&nbsp;160,7&nbsp;%</strong> <small>již po 6 měsících spolupráce</small>
							</h3>
							<span class="detail-button">
								Detail studie
								<svg xmlns="http://www.w3.org/2000/svg" width="51" height="16" viewBox="0 0 51 16" fill="none">
									<path
										d="M50.7071 8.70711C51.0976 8.31659 51.0976 7.68342 50.7071 7.2929L44.3431 0.928936C43.9526 0.538412 43.3195 0.538412 42.9289 0.928936C42.5384 1.31946 42.5384 1.95263 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM-8.74228e-08 9L50 9L50 7L8.74228e-08 7L-8.74228e-08 9Z"
										fill="white" />
								</svg>
							</span>
						</div>
						<span class="detail-button mobile">
							<svg xmlns="http://www.w3.org/2000/svg" width="51" height="16" viewBox="0 0 51 16" fill="none">
								<path
									d="M50.7071 8.70711C51.0976 8.31659 51.0976 7.68342 50.7071 7.2929L44.3431 0.928936C43.9526 0.538412 43.3195 0.538412 42.9289 0.928936C42.5384 1.31946 42.5384 1.95263 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM-8.74228e-08 9L50 9L50 7L8.74228e-08 7L-8.74228e-08 9Z"
									fill="white" />
							</svg>
						</span>
					</NuxtLink>
				</SwiperSlide>
				<SwiperSlide class="banner-study">
					<NuxtLink to="/pripadove-studie/petcenter">
						<picture>
							<source media="(min-width:880px)" srcset="/ppc/banner-petcenter.jpg" width="1440" height="350" />
							<source srcset="/ppc/banner-petcenter-mobile.jpg" width="670" height="670" />
							<nuxt-img src="/ppc/banner-petcenter.jpg" width="1440" height="350" loading="lazy" alt="" />
						</picture>
						<div class="texts">
							<NuxtImg src="/ppc/petcenter-logo.png" width="159" height="35" alt="PetCenter" />
							<h3>
								Zvýšení tržeb <strong class="accent">o&nbsp;112&nbsp;%</strong>
								<small>Porovnání mezi měsíci <br />květen 2022 a květen 2023</small>
							</h3>
							<span class="detail-button">
								Detail studie
								<svg xmlns="http://www.w3.org/2000/svg" width="51" height="16" viewBox="0 0 51 16" fill="none">
									<path
										d="M50.7071 8.70711C51.0976 8.31659 51.0976 7.68342 50.7071 7.2929L44.3431 0.928936C43.9526 0.538412 43.3195 0.538412 42.9289 0.928936C42.5384 1.31946 42.5384 1.95263 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM-8.74228e-08 9L50 9L50 7L8.74228e-08 7L-8.74228e-08 9Z"
										fill="white" />
								</svg>
							</span>
						</div>
						<span class="detail-button mobile">
							<svg xmlns="http://www.w3.org/2000/svg" width="51" height="16" viewBox="0 0 51 16" fill="none">
								<path
									d="M50.7071 8.70711C51.0976 8.31659 51.0976 7.68342 50.7071 7.2929L44.3431 0.928936C43.9526 0.538412 43.3195 0.538412 42.9289 0.928936C42.5384 1.31946 42.5384 1.95263 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM-8.74228e-08 9L50 9L50 7L8.74228e-08 7L-8.74228e-08 9Z"
									fill="white" />
							</svg>
						</span>
					</NuxtLink>
				</SwiperSlide>
				<SwiperSlide class="banner-study">
					<NuxtLink to="/pripadove-studie/pivovar-svijany">
						<picture>
							<source media="(min-width:880px)" srcset="/ppc/banner-svijany.jpg" width="1440" height="350" />
							<source srcset="/ppc/banner-svijany-mobile.jpg" width="670" height="670" />
							<nuxt-img src="/ppc/banner-svijany.jpg" width="1440" height="350" loading="lazy" alt="" />
						</picture>
						<div class="texts">
							<NuxtImg src="/ppc/svijany-logo.png" width="159" height="35" alt="Svijany" />
							<h3>
								Zvýšení tržeb <strong class="accent">o&nbsp;84&nbsp;%</strong> <small>Porovnání v meziročním nárůstu</small>
							</h3>
							<span to="/pripadove-studie/svijany" class="detail-button">
								Detail studie
								<svg xmlns="http://www.w3.org/2000/svg" width="51" height="16" viewBox="0 0 51 16" fill="none">
									<path
										d="M50.7071 8.70711C51.0976 8.31659 51.0976 7.68342 50.7071 7.2929L44.3431 0.928936C43.9526 0.538412 43.3195 0.538412 42.9289 0.928936C42.5384 1.31946 42.5384 1.95263 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM-8.74228e-08 9L50 9L50 7L8.74228e-08 7L-8.74228e-08 9Z"
										fill="white" />
								</svg>
							</span>
						</div>
						<span class="detail-button mobile">
							<svg xmlns="http://www.w3.org/2000/svg" width="51" height="16" viewBox="0 0 51 16" fill="none">
								<path
									d="M50.7071 8.70711C51.0976 8.31659 51.0976 7.68342 50.7071 7.2929L44.3431 0.928936C43.9526 0.538412 43.3195 0.538412 42.9289 0.928936C42.5384 1.31946 42.5384 1.95263 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM-8.74228e-08 9L50 9L50 7L8.74228e-08 7L-8.74228e-08 9Z"
									fill="white" />
							</svg>
						</span>
					</NuxtLink>
				</SwiperSlide>
				<SwiperSlide class="banner-study">
					<NuxtLink to="/pripadove-studie/pre-utulky">
						<picture>
							<source media="(min-width:880px)" srcset="/ppc/banner-preutulky.jpg" width="1440" height="350" />
							<source srcset="/ppc/banner-preutulky-mobile.jpg" width="670" height="670" />
							<nuxt-img src="/ppc/banner-preutulky.jpg" width="1440" height="350" loading="lazy" alt="" />
						</picture>
						<div class="texts">
							<NuxtImg src="/ppc/preutulky-logo.png" width="159" height="35" alt="Preutulky" />
							<h3>
								Zvýšení tržeb <strong class="accent">o&nbsp;136&nbsp;%</strong> <small>díky úspěšné správě kampaní</small>
							</h3>
							<span to="/pripadove-studie/pre-utulky" class="detail-button">
								Detail studie
								<svg xmlns="http://www.w3.org/2000/svg" width="51" height="16" viewBox="0 0 51 16" fill="none">
									<path
										d="M50.7071 8.70711C51.0976 8.31659 51.0976 7.68342 50.7071 7.2929L44.3431 0.928936C43.9526 0.538412 43.3195 0.538412 42.9289 0.928936C42.5384 1.31946 42.5384 1.95263 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM-8.74228e-08 9L50 9L50 7L8.74228e-08 7L-8.74228e-08 9Z"
										fill="white" />
								</svg>
							</span>
						</div>
						<span class="detail-button mobile">
							<svg xmlns="http://www.w3.org/2000/svg" width="51" height="16" viewBox="0 0 51 16" fill="none">
								<path
									d="M50.7071 8.70711C51.0976 8.31659 51.0976 7.68342 50.7071 7.2929L44.3431 0.928936C43.9526 0.538412 43.3195 0.538412 42.9289 0.928936C42.5384 1.31946 42.5384 1.95263 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM-8.74228e-08 9L50 9L50 7L8.74228e-08 7L-8.74228e-08 9Z"
									fill="white" />
							</svg>
						</span>
					</NuxtLink>
				</SwiperSlide>
			</Swiper>
			<div class="references">
				<NuxtImg src="/ppc/zatisi-logo.png" width="180" height="120" alt="Zátiší Group" />
				<NuxtImg src="/ppc/penny-logo.png" width="180" height="120" alt="Penny" />
				<NuxtImg src="/ppc/svijany-logo2.png" width="180" height="120" alt="Svijany" />
				<NuxtImg src="/ppc/philips-logo.png" width="180" height="120" alt="Philips" />
				<NuxtImg src="/ppc/gwc-logo.png" width="180" height="120" alt="Girls Without Clothes" />
				<NuxtImg src="/ppc/dolce-logo.png" width="180" height="120" alt="Café Imperial Dolce" />
				<NuxtImg src="/ppc/rituals-logo.png" width="180" height="120" alt="Rituals" />
				<NuxtImg src="/ppc/petcenter-logo2.png" width="180" height="120" alt="PetCenter" />
				<div><strong>+ mnoho dalších</strong></div>
			</div>
		</section>
		<section id="tym" class="container">
			<h2 class="text-center">Náš tým PPC specialistů</h2>
			<div class="team-grid">
				<div class="team-member">
					<NuxtPicture
						src="/ppc/hana.jpg"
						alt=""
						:imgAttrs="{ style: 'display: block; width:100%; height:100%; object-fit: cover; object-position: center;' }" />
					<div class="texts">
						<h3>Hana</h3>
						<span>Senior PPC specialist</span>
						<a class="mail-mobile" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
						<div class="info">
							<a href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
							<p>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
								laborum.
							</p>
						</div>
					</div>
					<div class="info mobile">
						<p>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<div class="team-member">
					<NuxtPicture
						src="/ppc/filip.jpg"
						alt=""
						:imgAttrs="{ style: 'display: block; width:100%; height:100%; object-fit: cover; object-position: center;' }" />
					<div class="texts">
						<h3>Filip</h3>
						<span>Obchodní manager</span>
						<a class="mail-mobile" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
						<div class="info">
							<a href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
							<p>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
								laborum.
							</p>
						</div>
					</div>
					<div class="info mobile">
						<p>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<div class="team-member">
					<NuxtPicture
						src="/ppc/jana.jpg"
						alt=""
						:imgAttrs="{ style: 'display: block; width:100%; height:100%; object-fit: cover; object-position: center;' }" />
					<div class="texts">
						<h3>Jana</h3>
						<span>Customer Success Manager</span>
						<a class="mail-mobile" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
						<div class="info">
							<a href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
							<p>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
								laborum.
							</p>
						</div>
					</div>
					<div class="info mobile">
						<p>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<div class="team-member">
					<NuxtPicture
						src="/ppc/petra.jpg"
						alt=""
						:imgAttrs="{ style: 'display: block; width:100%; height:100%; object-fit: cover; object-position: center;' }" />
					<div class="texts">
						<h3>Petra</h3>
						<span>Account manager</span>
						<a class="mail-mobile" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
						<div class="info">
							<a href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
							<p>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
								laborum.
							</p>
						</div>
					</div>
					<div class="info mobile">
						<p>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<div class="team-member">
					<NuxtPicture
						src="/ppc/dmitry.jpg"
						alt=""
						:imgAttrs="{ style: 'display: block; width:100%; height:100%; object-fit: cover; object-position: center;' }" />
					<div class="texts">
						<h3>Dmitry</h3>
						<span>Senior PPC specialist</span>
						<a class="mail-mobile" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
						<div class="info">
							<a href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
							<p>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
								laborum.
							</p>
						</div>
					</div>
					<div class="info mobile">
						<p>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<div class="team-member">
					<NuxtPicture
						src="/ppc/martin.jpg"
						alt=""
						:imgAttrs="{ style: 'display: block; width:100%; height:100%; object-fit: cover; object-position: center;' }" />
					<div class="texts">
						<h3>Martin</h3>
						<span>PPC specialist</span>
						<a class="mail-mobile" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
						<div class="info">
							<a href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
							<p>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
								laborum.
							</p>
						</div>
					</div>
					<div class="info mobile">
						<p>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<div class="team-member">
					<NuxtPicture
						src="/ppc/karel.jpg"
						alt=""
						:imgAttrs="{ style: 'display: block; width:100%; height:100%; object-fit: cover; object-position: center;' }" />
					<div class="texts">
						<h3>Karel</h3>
						<span>Social media manager</span>
						<a class="mail-mobile" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
						<div class="info">
							<a href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
							<p>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
								laborum.
							</p>
						</div>
					</div>
					<div class="info mobile">
						<p>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<div class="team-member">
					<NuxtPicture
						src="/ppc/timur.jpg"
						alt=""
						:imgAttrs="{ style: 'display: block; width:100%; height:100%; object-fit: cover; object-position: center;' }" />
					<div class="texts">
						<h3>Timur</h3>
						<span>Grafik</span>
						<a class="mail-mobile" href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
						<div class="info">
							<a href="mailto:info@mirandamedia.cz">info@mirandamedia.cz</a>
							<p>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
								laborum.
							</p>
						</div>
					</div>
					<div class="info mobile">
						<p>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section id="certifikace" class="container">
			<h2 class="text-center">Naše certifikace</h2>
			<div class="certifications">
				<NuxtImg src="/ppc/shoptet-partner.png" width="255" height="80" alt="Zlatý Shoptet partner" />
				<NuxtImg src="/ppc/sklik-partner.png" width="157" height="80" alt="Ověření sklik.cz" />
				<NuxtImg src="/ppc/premium-partner.png" width="110" height="110" alt="Shoptet Premium partner" />
				<NuxtImg src="/ppc/google-partner.png" width="128" height="90" alt="Google partner" />
				<NuxtImg src="/ppc/heureka-partner.png" width="90" height="110" alt="Heureka partner" />
				<NuxtImg src="/ppc/meta-partner.png" width="157" height="90" alt="Meta Business partner" />
			</div>
		</section>
		<section class="ppc-audit">
			<div class="container">
				<h2>Bezplatný PPC audit</h2>
				<p>
					Každý audit, který poskytujeme, je exkluzivně vytvořený a pečlivě zpracovaný a čerpá z našich rozsáhlých odborných
					znalostí v oblasti PPC a digitálního marketingu.
				</p>
				<ul class="styled-list">
					<li>Zlepšete výkon kampaní a návratnost investic</li>
					<li>Optimalizujte nastavení reklamního účtu</li>
					<li>Zkontrolujte cílení na publikum</li>
					<li>Analyzujte klíčová slova</li>
					<li>Rozšiřte nejvýkonnější reklamy</li>
					<li>Vyhodnoťte strukturu kampaně</li>
					<li>Potvrďte přesnost sledování KPI</li>
					<li>Získejte nezaujatý odborný pohled</li>
					<li>Prověřte konkurenci a indetifkujte nové příležitosti</li>
					<li>Identifikujte a využijte nové relevantní kanály pro reklamu</li>
				</ul>
				<h3>Zavolejte ještě dnes</h3>
				<div class="buttons">
					<BtnPrimary url="tel:+420732264251" text="+420 732 264 251">
						<svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
							<path
								d="M21.0014 15.9201V18.9201C21.0025 19.1986 20.9455 19.4743 20.8339 19.7294C20.7223 19.9846 20.5587 20.2137 20.3535 20.402C20.1483 20.5902 19.906 20.7336 19.6421 20.8228C19.3783 20.912 19.0988 20.9452 18.8214 20.9201C15.7442 20.5857 12.7884 19.5342 10.1914 17.8501C7.77523 16.3148 5.72673 14.2663 4.1914 11.8501C2.50138 9.2413 1.44964 6.27109 1.1214 3.1801C1.09641 2.90356 1.12927 2.62486 1.2179 2.36172C1.30652 2.09859 1.44897 1.85679 1.63616 1.65172C1.82336 1.44665 2.0512 1.28281 2.30519 1.17062C2.55917 1.05843 2.83374 1.00036 3.1114 1.0001H6.1114C6.5967 0.995321 7.06719 1.16718 7.43516 1.48363C7.80313 1.80008 8.04348 2.23954 8.1114 2.7201C8.23802 3.68016 8.47285 4.62282 8.8114 5.5301C8.94594 5.88802 8.97506 6.27701 8.8953 6.65098C8.81555 7.02494 8.63026 7.36821 8.3614 7.6401L7.0914 8.9101C8.51495 11.4136 10.5879 13.4865 13.0914 14.9101L14.3614 13.6401C14.6333 13.3712 14.9766 13.1859 15.3505 13.1062C15.7245 13.0264 16.1135 13.0556 16.4714 13.1901C17.3787 13.5286 18.3213 13.7635 19.2814 13.8901C19.7672 13.9586 20.2108 14.2033 20.5279 14.5776C20.8451 14.9519 21.0136 15.4297 21.0014 15.9201Z"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
					</BtnPrimary>
					<button @click.prevent="showPopup = true" class="btn btn-accent">Zdarma audit PPC Google Ads</button>
				</div>
			</div>
		</section>
		<section id="4-kroky" class="container kroky">
			<h2 class="text-center">Jak můžete začít</h2>
			<div class="steps">
				<div class="step wide">
					<strong class="step-no">01</strong>
					<h3>Domluvte si s námi schůzku nebo nám zavolejte</h3>
					<p>
						Můžeme se na začátek potkat i on-line. Na schůzce se pobavíme o vašich potřebách a cílech. Seznámíte se s Mirandou,
						a pokud se potkáme osobně, dáme si i naší dobrou kávu.
					</p>
				</div>
				<div class="step wide">
					<strong class="step-no">02</strong>
					<h3>Zauditujeme současný stav vašich kampaní</h3>
					<p>
						Audit odkryje kvalitu nastavení a správy vašich současných kampaní a potenciál spolupráce na obou stranách.
						Výsledkem bude audit se zcela konkrétními body.
					</p>
				</div>
				<div class="step">
					<strong class="step-no">03</strong>
					<h3>Navrhhneme konkrétní strategie a připravíme nabídku</h3>
					<p>Na základě auditu PPC kampaní, s ohledem na vaše potřeby a naše doporučení, připravíme návrh na spolupráci.</p>
				</div>
				<div class="step">
					<strong class="step-no">04</strong>
					<h3>Zahájíme spolupráci & správu kampaní</h3>
					<p>
						Budeme pravidelně monitorovat a optimalizovat vaše kampaně, aby byly co nejefektivnější a generovaly co nejvyšší
						návratnost investice. Současně vám budeme poskytovat zpětnou vazbu o výsledcích.
					</p>
				</div>
				<div class="step contact-us">
					<h3>Kontaktujte nás <small>ještě dnes!</small></h3>
					<a href="tel:+420732264251" class="project-phone">
						<svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
							<path
								d="M20.5013 15.51V18.26C20.5023 18.5153 20.45 18.768 20.3477 19.0019C20.2455 19.2358 20.0955 19.4458 19.9074 19.6184C19.7192 19.791 19.4971 19.9224 19.2553 20.0042C19.0135 20.0859 18.7572 20.1163 18.5029 20.0933C15.6822 19.7868 12.9727 18.823 10.5921 17.2792C8.37729 15.8718 6.49951 13.994 5.09212 11.7792C3.54293 9.38778 2.57884 6.66509 2.27795 3.83167C2.25504 3.57819 2.28517 3.3227 2.36641 3.0815C2.44765 2.84029 2.57822 2.61864 2.74982 2.43066C2.92141 2.24268 3.13027 2.09249 3.36309 1.98965C3.59591 1.88681 3.84759 1.83358 4.10212 1.83334H6.85212C7.29698 1.82896 7.72826 1.9865 8.06556 2.27658C8.40287 2.56666 8.62319 2.9695 8.68545 3.41001C8.80152 4.29007 9.01678 5.15417 9.32712 5.98584C9.45045 6.31394 9.47714 6.67051 9.40403 7.01331C9.33092 7.35612 9.16107 7.67078 8.91461 7.92001L7.75045 9.08417C9.05537 11.3791 10.9555 13.2792 13.2504 14.5842L14.4146 13.42C14.6638 13.1736 14.9785 13.0037 15.3213 12.9306C15.6641 12.8575 16.0207 12.8842 16.3488 13.0075C17.1804 13.3178 18.0446 13.5331 18.9246 13.6492C19.3699 13.712 19.7766 13.9363 20.0673 14.2794C20.358 14.6225 20.5124 15.0605 20.5013 15.51Z"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
						+420 732 264 251
					</a>
					<button @click.prevent="showPopup = true" class="btn btn-primary"><span>Audit zdarma</span></button>
				</div>
			</div>
		</section>
		<section class="miranda-expert">
			<NuxtPicture
				src="/ppc/ppc-expert.jpg"
				width="780"
				height="780"
				alt=""
				:img-attrs="{ style: 'display:block;width:100%;height:100%;object-fit:cover;' }" />
			<div class="texts">
				<h2>Proč spolupracovat s Miranda PPC Expert</h2>
				<ul>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
							<path
								d="M25.6666 3.6665H10.9999C10.0275 3.6665 9.09483 4.05281 8.40719 4.74045C7.71956 5.42808 7.33325 6.36071 7.33325 7.33317V36.6665C7.33325 37.639 7.71956 38.5716 8.40719 39.2592C9.09483 39.9469 10.0275 40.3332 10.9999 40.3332H32.9999C33.9724 40.3332 34.905 39.9469 35.5926 39.2592C36.2803 38.5716 36.6666 37.639 36.6666 36.6665V14.6665L25.6666 3.6665Z"
								stroke="#59DC8E"
								stroke-width="3.14286"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M25.6667 3.6665V14.6665H36.6667"
								stroke="#59DC8E"
								stroke-width="3.14286"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M29.3334 23.8335H14.6667"
								stroke="#59DC8E"
								stroke-width="3.14286"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M29.3334 31.1665H14.6667"
								stroke="#59DC8E"
								stroke-width="3.14286"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M18.3334 16.5H16.5001H14.6667"
								stroke="#59DC8E"
								stroke-width="3.14286"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
						<span> Audit PPC zdarma </span>
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
							<path
								d="M20.1667 3.66675V7.46175C16.9403 7.87154 13.9415 9.34189 11.6417 11.6417C9.34189 13.9415 7.87154 16.9403 7.46175 20.1667H3.66675V23.8334H7.46175C7.87154 27.0599 9.34189 30.0587 11.6417 32.3585C13.9415 34.6583 16.9403 36.1286 20.1667 36.5384V40.3334H23.8334V36.5384C27.0599 36.1286 30.0587 34.6583 32.3585 32.3585C34.6583 30.0587 36.1286 27.0599 36.5384 23.8334H40.3334V20.1667H36.5384C36.1286 16.9403 34.6583 13.9415 32.3585 11.6417C30.0587 9.34189 27.0599 7.87154 23.8334 7.46175V3.66675M20.1667 11.1467V14.6667H23.8334V11.1651C28.4167 11.9167 32.0834 15.5834 32.8534 20.1667H29.3334V23.8334H32.8351C32.0834 28.4167 28.4167 32.0834 23.8334 32.8534V29.3334H20.1667V32.8351C15.5834 32.0834 11.9167 28.4167 11.1467 23.8334H14.6667V20.1667H11.1651C11.9167 15.5834 15.5834 11.9167 20.1667 11.1467ZM22.0001 20.1667C21.5139 20.1667 21.0475 20.3599 20.7037 20.7037C20.3599 21.0475 20.1667 21.5139 20.1667 22.0001C20.1667 22.4863 20.3599 22.9526 20.7037 23.2964C21.0475 23.6403 21.5139 23.8334 22.0001 23.8334C22.4863 23.8334 22.9526 23.6403 23.2964 23.2964C23.6403 22.9526 23.8334 22.4863 23.8334 22.0001C23.8334 21.5139 23.6403 21.0475 23.2964 20.7037C22.9526 20.3599 22.4863 20.1667 22.0001 20.1667Z"
								fill="#59DC8E" />
						</svg>
						<span> Přesně zaměřené cílení </span>
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
							<path
								d="M34.2967 27.0355C33.0754 27.0349 31.8945 27.4665 30.9688 28.2516L26.5965 24.8994C26.9471 24.2043 27.1294 23.4386 27.1289 22.6623C27.1285 22.4599 27.116 22.2578 27.0914 22.0568L29.8595 21.1485C30.4792 22.2095 31.4691 23.0123 32.6449 23.4073C33.8206 23.8023 35.1019 23.7625 36.2501 23.2954C37.3983 22.8283 38.3351 21.9658 38.8858 20.8684C39.4366 19.7711 39.5638 18.5139 39.2437 17.331C38.9236 16.1481 38.1782 15.1202 37.1462 14.4389C36.1142 13.7575 34.866 13.4692 33.6343 13.6276C32.4026 13.786 31.2713 14.3803 30.4512 15.2998C29.6312 16.2193 29.1782 17.4013 29.1769 18.6255C29.1773 18.8279 29.1898 19.0301 29.2144 19.2311L26.4463 20.1393C25.9047 19.2094 25.0758 18.4743 24.0805 18.0413C23.0852 17.6084 21.9755 17.5001 20.9134 17.7324L19.5242 14.6543C20.557 13.9284 21.2796 12.8505 21.552 11.6294C21.8244 10.4084 21.6271 9.13113 20.9984 8.04524C20.3698 6.95935 19.3545 6.14214 18.1493 5.75199C16.9441 5.36184 15.6349 5.42653 14.4753 5.93353C13.3158 6.44052 12.3885 7.35371 11.8732 8.49613C11.3579 9.63854 11.2912 10.9288 11.6861 12.1169C12.081 13.305 12.9094 14.3063 14.0107 14.9268C15.112 15.5472 16.4078 15.7426 17.6469 15.4752L19.0361 18.5532C17.9981 19.2808 17.2735 20.3644 17.0045 21.5914C16.7355 22.8185 16.9415 24.1003 17.5821 25.1853L12.7933 29.3903C11.775 28.639 10.5098 28.287 9.24318 28.4027C7.97652 28.5183 6.79854 29.0934 5.9376 30.0163C5.07666 30.9393 4.59409 32.1445 4.58343 33.3982C4.57278 34.6519 5.0348 35.8648 5.87993 36.8019C6.72506 37.7389 7.8931 38.3333 9.15763 38.4699C10.4221 38.6064 11.6931 38.2754 12.724 37.541C13.755 36.8065 14.4726 35.7209 14.7376 34.4947C15.0027 33.2685 14.7963 31.989 14.1586 30.9041L18.9371 26.6991C19.8673 27.3882 21.0085 27.7433 22.1715 27.7057C23.3345 27.668 24.4495 27.2399 25.3318 26.4923L29.7042 29.8445C29.2109 30.8276 29.0559 31.9423 29.2629 33.02C29.4699 34.0976 30.0274 35.0795 30.8512 35.8169C31.675 36.5543 32.7201 37.007 33.8284 37.1067C34.9366 37.2063 36.0476 36.9473 36.9931 36.369C37.9387 35.7907 38.6673 34.9245 39.0687 33.9015C39.4701 32.8786 39.5223 31.7546 39.2176 30.6997C38.9128 29.6449 38.2677 28.7166 37.3798 28.0554C36.4919 27.3943 35.4096 27.0362 34.2967 27.0355ZM34.2967 15.5979C34.9043 15.5979 35.4982 15.7755 36.0034 16.1082C36.5086 16.4409 36.9023 16.9137 37.1348 17.4669C37.3673 18.0202 37.4281 18.6289 37.3096 19.2162C37.1911 19.8035 36.8985 20.343 36.4689 20.7664C36.0393 21.1898 35.4919 21.4781 34.896 21.595C34.3001 21.7118 33.6825 21.6518 33.1212 21.4227C32.5598 21.1935 32.0801 20.8055 31.7425 20.3076C31.405 19.8097 31.2248 19.2243 31.2248 18.6255C31.2248 17.8226 31.5485 17.0525 32.1246 16.4847C32.7006 15.9169 33.482 15.5979 34.2967 15.5979ZM13.476 10.5519C13.476 9.95314 13.6561 9.36779 13.9937 8.8699C14.3312 8.37202 14.811 7.98396 15.3723 7.75481C15.9336 7.52566 16.5513 7.4657 17.1472 7.58252C17.7431 7.69934 18.2904 7.98769 18.72 8.41111C19.1497 8.83453 19.4422 9.37399 19.5608 9.96129C19.6793 10.5486 19.6185 11.1573 19.386 11.7106C19.1534 12.2638 18.7597 12.7366 18.2545 13.0693C17.7494 13.402 17.1554 13.5795 16.5479 13.5795C15.7331 13.5795 14.9518 13.2606 14.3757 12.6928C13.7996 12.125 13.476 11.3549 13.476 10.5519ZM9.72139 36.4547C9.11382 36.4547 8.5199 36.2772 8.01473 35.9445C7.50955 35.6118 7.11582 35.139 6.88331 34.5857C6.6508 34.0325 6.58997 33.4238 6.7085 32.8365C6.82703 32.2492 7.1196 31.7097 7.54922 31.2863C7.97883 30.8629 8.5262 30.5745 9.12209 30.4577C9.71798 30.3409 10.3356 30.4008 10.897 30.63C11.4583 30.8591 11.9381 31.2472 12.2756 31.7451C12.6131 32.243 12.7933 32.8283 12.7933 33.4271C12.7933 34.2301 12.4697 35.0002 11.8936 35.568C11.3175 36.1358 10.5361 36.4547 9.72139 36.4547ZM22.0091 25.6899C21.4015 25.6899 20.8076 25.5124 20.3024 25.1797C19.7972 24.847 19.4035 24.3742 19.171 23.821C18.9385 23.2677 18.8776 22.659 18.9962 22.0717C19.1147 21.4844 19.4073 20.9449 19.8369 20.5215C20.2665 20.0981 20.8139 19.8097 21.4098 19.6929C22.0056 19.5761 22.6233 19.6361 23.1846 19.8652C23.7459 20.0944 24.2257 20.4824 24.5633 20.9803C24.9008 21.4782 25.081 22.0635 25.081 22.6623C25.081 23.4653 24.7573 24.2354 24.1812 24.8032C23.6051 25.371 22.8238 25.6899 22.0091 25.6899ZM34.2967 35.1091C33.6892 35.1091 33.0952 34.9316 32.5901 34.5989C32.0849 34.2662 31.6911 33.7934 31.4586 33.2401C31.2261 32.6869 31.1653 32.0782 31.2838 31.4909C31.4024 30.9036 31.6949 30.3641 32.1246 29.9407C32.5542 29.5173 33.1015 29.2289 33.6974 29.1121C34.2933 28.9953 34.911 29.0552 35.4723 29.2844C36.0336 29.5135 36.5134 29.9016 36.8509 30.3995C37.1885 30.8974 37.3686 31.4827 37.3686 32.0815C37.3686 32.8845 37.045 33.6546 36.4689 34.2224C35.8928 34.7902 35.1114 35.1091 34.2967 35.1091Z"
								fill="#59DC8E"
								stroke="#59DC8E"
								stroke-width="1.14" />
						</svg>
						<span>Display, retargeting, sociální kampaně ad</span>
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
							<path d="M37.125 5.5H1.375V33H37.125V5.5ZM34.375 30.25H4.125V8.25H34.375V30.25Z" fill="#59DC8E" />
							<path d="M39.875 12.375V35.75H8.25V38.5H42.625V12.375H39.875Z" fill="#59DC8E" />
							<path
								d="M19.25 25.9927C22.6617 25.9927 25.4375 22.9731 25.4375 19.2615C25.4375 15.55 22.6617 12.5304 19.25 12.5304C15.8383 12.5304 13.0625 15.5499 13.0625 19.2615C13.0625 22.9732 15.8383 25.9927 19.25 25.9927ZM19.25 15.2804C21.1454 15.2804 22.6875 17.0663 22.6875 19.2615C22.6875 21.4567 21.1454 23.2427 19.25 23.2427C17.3546 23.2427 15.8125 21.4567 15.8125 19.2615C15.8125 17.0663 17.3546 15.2804 19.25 15.2804ZM6.875 11.6875H9.625V26.8125H6.875V11.6875ZM28.875 11.6875H31.625V26.8125H28.875V11.6875Z"
								fill="#59DC8E" />
						</svg>
						<span>Transparentní cena</span>
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M5.5 5.5H7.5625V36.4375H38.5V38.5H5.5V5.5ZM36.0601 11.9206C36.1649 12.0064 36.2519 12.112 36.3159 12.2315C36.3799 12.3509 36.4198 12.4818 36.4332 12.6166C36.4466 12.7515 36.4333 12.8877 36.394 13.0174C36.3548 13.1471 36.2904 13.2678 36.2044 13.3726L26.9232 24.7163C26.832 24.8277 26.7184 24.9187 26.5899 24.9835C26.4614 25.0483 26.3207 25.0855 26.177 25.0927C26.0332 25.0999 25.8895 25.0769 25.7552 25.0252C25.6208 24.9736 25.4988 24.8943 25.3969 24.7926L20.0612 19.4569L12.5208 29.8251C12.3558 30.0349 12.116 30.1725 11.8516 30.2091C11.5873 30.2458 11.3191 30.1785 11.1033 30.0215C10.8876 29.8645 10.7411 29.6299 10.6946 29.3672C10.6482 29.1044 10.7054 28.8338 10.8542 28.6124L19.1042 17.2686C19.1918 17.148 19.3045 17.0478 19.4345 16.9749C19.5645 16.902 19.7088 16.8582 19.8574 16.8464C20.006 16.8347 20.1554 16.8552 20.2953 16.9068C20.4351 16.9583 20.5622 17.0395 20.6676 17.1449L26.0487 22.528L34.6081 12.0649C34.6939 11.9601 34.7995 11.8731 34.919 11.8091C35.0384 11.7451 35.1693 11.7052 35.3041 11.6918C35.439 11.6784 35.5752 11.6917 35.7049 11.731C35.8346 11.7702 35.9553 11.8346 36.0601 11.9206Z"
								fill="#59DC8E"
								stroke="#59DC8E"
								stroke-width="1.14" />
						</svg>
						<span>Výsledky zaměřené na podnikání</span>
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
							<path
								d="M22.0001 3.66675L27.6651 15.1434L40.3334 16.9951L31.1667 25.9234L33.3301 38.5367L22.0001 32.5784L10.6701 38.5367L12.8334 25.9234L3.66675 16.9951L16.3351 15.1434L22.0001 3.66675Z"
								stroke="#59DC8E"
								stroke-width="3.14286"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
						<span>Vše, co potřebujete, abyste byli superúspěšní!</span>
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
							<path
								d="M5.5 13.5667V6.6C5.5 6.30826 5.61589 6.02847 5.82218 5.82218C6.02847 5.61589 6.30826 5.5 6.6 5.5H17.2333C17.5251 5.5 17.8049 5.61589 18.0112 5.82218C18.2174 6.02847 18.3333 6.30826 18.3333 6.6V13.5667C18.3333 13.8584 18.2174 14.1382 18.0112 14.3445C17.8049 14.5508 17.5251 14.6667 17.2333 14.6667H6.6C6.30826 14.6667 6.02847 14.5508 5.82218 14.3445C5.61589 14.1382 5.5 13.8584 5.5 13.5667ZM25.6667 37.4V30.4333C25.6667 30.1416 25.7826 29.8618 25.9888 29.6555C26.1951 29.4492 26.4749 29.3333 26.7667 29.3333H37.4C37.6917 29.3333 37.9715 29.4492 38.1778 29.6555C38.3841 29.8618 38.5 30.1416 38.5 30.4333V37.4C38.5 37.6917 38.3841 37.9715 38.1778 38.1778C37.9715 38.3841 37.6917 38.5 37.4 38.5H26.7667C26.4749 38.5 26.1951 38.3841 25.9888 38.1778C25.7826 37.9715 25.6667 37.6917 25.6667 37.4ZM25.6667 22.7333V6.6C25.6667 6.30826 25.7826 6.02847 25.9888 5.82218C26.1951 5.61589 26.4749 5.5 26.7667 5.5H37.4C37.6917 5.5 37.9715 5.61589 38.1778 5.82218C38.3841 6.02847 38.5 6.30826 38.5 6.6V22.7333C38.5 23.0251 38.3841 23.3049 38.1778 23.5112C37.9715 23.7174 37.6917 23.8333 37.4 23.8333H26.7667C26.4749 23.8333 26.1951 23.7174 25.9888 23.5112C25.7826 23.3049 25.6667 23.0251 25.6667 22.7333ZM5.5 37.4V21.2667C5.5 20.9749 5.61589 20.6951 5.82218 20.4888C6.02847 20.2826 6.30826 20.1667 6.6 20.1667H17.2333C17.5251 20.1667 17.8049 20.2826 18.0112 20.4888C18.2174 20.6951 18.3333 20.9749 18.3333 21.2667V37.4C18.3333 37.6917 18.2174 37.9715 18.0112 38.1778C17.8049 38.3841 17.5251 38.5 17.2333 38.5H6.6C6.30826 38.5 6.02847 38.3841 5.82218 38.1778C5.61589 37.9715 5.5 37.6917 5.5 37.4Z"
								stroke="#59DC8E"
								stroke-width="3.14286" />
						</svg>
						<span>Podrobný a přehledný reporting</span>
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="34" height="36" viewBox="0 0 34 36" fill="none">
							<path
								d="M20.0116 2.30539C26.2424 2.95822 31.2914 8.23434 31.8734 14.986L31.2539 14.8869V15.1767H19.8454V2.9507H20.1042L20.0116 2.30539Z"
								stroke="#59DC8E"
								stroke-width="3.14286" />
							<path
								d="M16.6705 20.6557H16.6717H28.5044C28.1204 28.1267 22.2805 33.9287 15.298 33.9287C8.07308 33.9287 2.07143 27.717 2.07143 19.8719C2.07143 12.5451 7.30622 6.64303 13.8833 5.89511V5.93424L14.3426 5.90295L14.2529 6.52761H14.5118V18.4623C14.5118 19.0169 14.7195 19.5649 15.1141 19.982C15.5114 20.4019 16.0693 20.6553 16.6705 20.6557Z"
								stroke="#59DC8E"
								stroke-width="3.14286" />
						</svg>

						<span>Analýza konkurence</span>
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M2.29175 3.66675C2.29175 3.30208 2.43661 2.95234 2.69448 2.69448C2.95234 2.43661 3.30208 2.29175 3.66675 2.29175H40.3334C40.6981 2.29175 41.0478 2.43661 41.3057 2.69448C41.5635 2.95234 41.7084 3.30208 41.7084 3.66675C41.7084 4.03142 41.5635 4.38116 41.3057 4.63902C41.0478 4.89688 40.6981 5.04175 40.3334 5.04175H38.0417V19.3564C38.0417 22.0752 38.0417 24.2624 37.7979 25.9821C37.5449 27.7696 37.0022 29.2527 35.7721 30.4187C34.5511 31.5774 33.0166 32.0761 31.1667 32.3126C29.3682 32.5417 27.0729 32.5417 24.1927 32.5417H23.3751V37.6512L26.2809 39.1032C26.4439 39.183 26.5895 39.2943 26.7092 39.4306C26.829 39.5669 26.9206 39.7256 26.9788 39.8975C27.0369 40.0694 27.0605 40.2511 27.0481 40.4322C27.0357 40.6132 26.9876 40.79 26.9065 40.9524C26.8255 41.1147 26.7131 41.2594 26.5758 41.3781C26.4386 41.4969 26.2792 41.5872 26.1068 41.644C25.9345 41.7009 25.7526 41.723 25.5717 41.7092C25.3907 41.6954 25.2143 41.6459 25.0526 41.5636L22.0001 40.0382L18.9476 41.5636C18.7859 41.6459 18.6094 41.6954 18.4285 41.7092C18.2476 41.723 18.0657 41.7009 17.8933 41.644C17.721 41.5872 17.5616 41.4969 17.4243 41.3781C17.2871 41.2594 17.1747 41.1147 17.0936 40.9524C17.0126 40.79 16.9645 40.6132 16.9521 40.4322C16.9397 40.2511 16.9632 40.0694 17.0214 39.8975C17.0795 39.7256 17.1711 39.5669 17.2909 39.4306C17.4107 39.2943 17.5563 39.183 17.7192 39.1032L20.6251 37.6494V32.5417H19.8074C16.9272 32.5417 14.6319 32.5417 12.8334 32.3126C10.9817 32.0761 9.44908 31.5774 8.22808 30.4187C6.99791 29.2527 6.45525 27.7696 6.20225 25.9821C5.95841 24.2624 5.95841 22.0752 5.95841 19.3564V5.04175H3.66675C3.30208 5.04175 2.95234 4.89688 2.69448 4.63902C2.43661 4.38116 2.29175 4.03142 2.29175 3.66675ZM8.70841 5.04175V19.2501C8.70841 22.0991 8.71208 24.0901 8.92475 25.5934C9.13191 27.0509 9.51141 27.8447 10.1201 28.4241C10.7397 29.0107 11.6087 29.3847 13.1817 29.5846C14.7859 29.7899 16.9034 29.7917 19.9046 29.7917H24.0956C27.0949 29.7917 29.2142 29.7899 30.8184 29.5846C32.3914 29.3829 33.2604 29.0107 33.8801 28.4241C34.4887 27.8447 34.8701 27.0509 35.0754 25.5952C35.2881 24.0919 35.2917 22.0991 35.2917 19.2501V5.04175H8.70841ZM28.4717 14.6117C28.7292 14.8696 28.8739 15.219 28.8739 15.5834C28.8739 15.9478 28.7292 16.2973 28.4717 16.5551L26.1012 18.9256L26.0572 18.9714C25.7974 19.2428 25.5206 19.4976 25.2286 19.7341C24.834 20.056 24.3426 20.2362 23.8334 20.2456C23.3242 20.2362 22.8329 20.056 22.4382 19.7341C22.1462 19.4976 21.8695 19.2428 21.6096 18.9714L21.5656 18.9256L20.4912 17.8512L20.1667 17.5304L19.8422 17.8512L17.4717 20.2217C17.3459 20.3568 17.1941 20.4652 17.0254 20.5403C16.8567 20.6155 16.6747 20.6559 16.49 20.6592C16.3054 20.6624 16.122 20.6285 15.9508 20.5593C15.7796 20.4901 15.6241 20.3872 15.4935 20.2566C15.3629 20.1261 15.26 19.9706 15.1909 19.7993C15.1217 19.6281 15.0877 19.4447 15.091 19.2601C15.0943 19.0755 15.1347 18.8934 15.2098 18.7248C15.285 18.5561 15.3933 18.4043 15.5284 18.2784L17.8989 15.9079L17.9429 15.8621C18.2087 15.5962 18.4966 15.3084 18.7716 15.0994C19.1662 14.7774 19.6575 14.5973 20.1667 14.5879C20.7791 14.5879 21.2392 14.8537 21.5619 15.0994C21.8369 15.3084 22.1247 15.5962 22.3906 15.8621L22.4346 15.9079L23.5089 16.9822L23.8334 17.3031L24.1579 16.9822L26.5284 14.6117C26.7862 14.3543 27.1357 14.2096 27.5001 14.2096C27.8645 14.2096 28.2139 14.3543 28.4717 14.6117Z"
								fill="#59DC8E" />
						</svg>

						<span>Obchodní strategie pro výkonnou E-commerce</span>
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M18.9997 38.3334C22.1294 38.3334 27.4809 34.6667 27.4809 20.0001C27.4809 5.33342 22.1294 1.66675 18.9997 1.66675C15.87 1.66675 10.5186 5.5805 10.5186 20.0001C10.5186 34.4197 15.87 38.3334 18.9997 38.3334Z"
								stroke="#59DC8E"
								stroke-width="3.14286"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M2.97475 28.7304C4.34048 31.1856 9.88077 33.463 22.701 25.7804C35.5212 18.0979 36.3911 11.9792 35.0254 9.52402C33.6596 7.06884 27.9035 4.92077 15.2992 12.4739C2.69493 20.027 1.60906 26.2752 2.97475 28.7304Z"
								stroke="#59DC8E"
								stroke-width="3.14286"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M2.97465 9.52426C1.60896 11.9794 2.47884 18.0982 15.2991 25.7807C28.1194 33.4632 33.6595 31.1858 35.0252 28.7306C36.391 26.2754 35.3051 20.0273 22.7008 12.4742C10.0966 4.92101 4.34038 7.06908 2.97465 9.52426Z"
								stroke="#59DC8E"
								stroke-width="3.14286"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
						<span>Optimalizace koverzního poměru</span>
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
							<path
								d="M22 5.5C18.7366 5.5 15.5465 6.46771 12.8331 8.28075C10.1197 10.0938 8.00484 12.6707 6.756 15.6857C5.50715 18.7007 5.18039 22.0183 5.81705 25.219C6.45371 28.4197 8.02518 31.3597 10.3327 33.6673C12.6403 35.9748 15.5803 37.5463 18.781 38.1829C21.9817 38.8196 25.2993 38.4929 28.3143 37.244C31.3293 35.9952 33.9062 33.8803 35.7193 31.1669C37.5323 28.4535 38.5 25.2634 38.5 22C38.5 17.6239 36.7616 13.4271 33.6673 10.3327C30.5729 7.23839 26.3761 5.5 22 5.5V5.5ZM19.6549 28.8357H15.0978V24.2786H19.6549V28.8357ZM28.7692 24.2786H24.2363V19.7214H19.6549V15.1643H28.7692V19.7214V24.2786Z"
								stroke="#59DC8E"
								stroke-width="3.14" />
						</svg>
						<span>Shoptet PREMIUM partner</span>
					</li>
				</ul>
				<div class="buttons">
					<button @click.prevent="showPopup = true" class="btn btn-accent">Bezplatný PPC audit</button>
					<NuxtLink class="btn btn-tertiary" to="/kontakty">Kontaktujte nás</NuxtLink>
				</div>
			</div>
		</section>
		<section id="faq" class="container">
			<h2 class="text-center">Na co se nejčastěji ptáte</h2>
			<QuestionWrapper>
				<template #question>
					<h3><em>Otázka 00:</em> Jaké jsou výhody PPC kampaní?</h3>
				</template>
				<template #answer>
					<p>
						<strong>Flexibilita a rychlá implementace:</strong> Oproti jiným typům marketingu mohou být PPC kampaně nastaveny
						velmi rychle a umožňují okamžitou změnu taktiky a strategie na základě aktuálních výsledků.
					</p>
					<p>
						<strong>Přesné cílení:</strong> PPC reklama umožňuje precizně definovat, komu bude vaše reklama zobrazena. Můžete
						cílit na základě demografických údajů, geografické polohy, zájmů, chování na internetu a mnoha dalších faktorů.
					</p>
					<p>
						<strong>Měřitelnost a sledování výsledků:</strong> Každý proklik a konverzi lze sledovat a měřit. Toto vám umožňuje
						analyzovat výkonnost vašich reklam a optimalizovat je pro dosažení lepších výsledků.
					</p>
					<p>
						<strong>Kontrola nad rozpočtem:</strong> U PPC reklamy můžete přesně definovat, kolik chcete utratit. Můžete
						nastavit denní, týdenní nebo měsíční limit a ujistit se tak, že vaše výdaje nepřekročí vámi stanovený rozpočet.
					</p>
					<p>
						<strong>Platba za skutečnou akci:</strong> V případě PPC reklamy platíte pouze za konkrétní akci – proklik na vaši
						reklamu. Tím se zvyšuje efektivita vašeho marketingového rozpočtu.
					</p>
					<p>
						<strong>Optimalizace:</strong> PPC platformy nabízí řadu nástrojů pro optimalizaci vašich reklam. Můžete testovat
						různé varianty reklamních sdělení, klíčových slov, nabídek atd., abyste dosáhli co nejlepších výsledků.
					</p>
					<p>
						<strong>Vysoká návratnost investice (ROI):</strong> Pokud jsou PPC kampaně správně nastavené a spravované, mohou
						přinést vysokou návratnost investice, protože platíte pouze za prokliky, které mohou vést k konverzím.
					</p>
				</template>
			</QuestionWrapper>
			<QuestionWrapper>
				<template #question>
					<h3><em>Otázka 01:</em> V čem jsme jiní nebo lepší než ostatní agentury?</h3>
				</template>
				<template #answer>
					<p>
						V naší digitální agentuře se snažíme pro klienty vytvářet kvalitní a inovativní řešení, která přinášejí skutečnou
						hodnotu a pomáhají jim dosáhnout jejich cílů. Na rozdíl od jiných agentur se zaměřujeme na přizpůsobení našich
						služeb specifickým potřebám a požadavkům každého klienta.
					</p>
					<h4>Zde je několik faktorů, které nás odlišují od ostatních agentur:</h4>
					<ol>
						<li>
							<strong>Zkušenosti:</strong> Naše digitální agentura má mnoho let zkušeností v oblasti digitálního marketingu a
							vytváření webových stránek a e-shopů pro různé druhy klientů. Náš tým totiž tvoří lidé s různorodými zkušenostmi
							a odbornými znalostmi, kteří se společně snaží přinášet inovativní nápady a řešení.
						</li>
						<li>
							<strong>Flexibilita:</strong> Jsme flexibilní v přizpůsobení se potřebám a požadavkům našich klientů a snažíme
							se být co nejvíce responzivní k jejich potřebám.
						</li>
						<li>
							<strong>Zákaznický servis:</strong> Snažíme se s našimi partnery vytvářet dlouhodobé vztahy a poskytnout jim co
							nejlepší zákaznický servis a podporu.
						</li>
						<li>
							<strong>Kreativita:</strong> Jsme tým lidí, kteří milují kreativitu a inovaci a snažíme se vytvořit jedinečná a
							nezapomenutelná řešení.
						</li>
					</ol>
				</template>
			</QuestionWrapper>
			<QuestionWrapper>
				<template #question>
					<h3><em>Otázka 02:</em> Jak spolupráce s vámi probíhá?</h3>
				</template>
				<template #answer>
					<p>
						<strong>Stanovíme si jasné a měřitelné cíle kampaní:</strong> Na začátku spolupráce si společně stanovíme cíle,
						kterých chcete dosáhnout prostřednictvím PPC kampaní. Tyto cíle jsou specifické, měřitelné, dosažitelné, relevantní
						a časově omezené (zkráceně SMART). Získáme tím jasnou vizi toho, čeho chceme kampaněmi dosáhnout.
					</p>
					<p>
						<strong>Připravíme komplexní strategii napříč všemi kanály:</strong> Na základě stanovených cílů vytvoříme komplexní
						strategii, která zahrnuje volbu vhodných kanálů, klíčových slov, cílových skupin a způsobů oslovení. Strategie je
						přizpůsobena vašim potřebám a jejím cílem je dosáhnout co nejlepších výsledků.
					</p>
					<p>
						<strong>Nastavíme kompletní měření:</strong> Pro účinné sledování výkonu kampaní nastavíme kompletní měření pomocí
						nástrojů jako Google Analytics. To nám umožňuje sledovat klíčové metriky, jako jsou konverze, náklady na konverzi,
						návštěvnost stránek a další, abychom mohli průběžně vyhodnocovat výkonnost kampaní.
					</p>
					<p>
						<strong>Vytvoříme a spustíme kampaně:</strong> Na základě strategie vytvoříme přesné a poutavé reklamní texty,
						nastavíme klíčová slova a cílové stránky. Posléze spustíme PPC kampaně a začneme sledovat jejich výkon. Zaměříme se
						nato, jaké by mohl mít cílový klient zájmy, chování a celkové uvažování, abychom mohli oslovit konkrétní typ
						publika.
					</p>
					<p>
						<strong>Pravidelně vás informujeme o jejich výkonu:</strong> V průběhu vás pravidelně informujeme o výkonu kampaní.
						Poskytujeme vám transparentní a přehledné reporty, které obsahují klíčové statistiky a analýzy. Tím vám umožňujeme
						být v obraze a lépe porozumět tomu, jak kampaně dosahují stanovených cílů.
					</p>
					<p>
						<strong>Přicházíme s dalšími nápady na zlepšení:</strong> Neustále sledujeme vývoj kampaní a hledáme nové
						příležitosti a nápady na zlepšení. Na základě našich znalostí a odbornosti v oblasti PPC reklamy přicházíme s novými
						nápady a doporučeními, jak optimalizovat a zdokonalit kampaně.
					</p>
					<p>
						<strong>Plníme dohodnuté cíle:</strong> Sledujeme klíčové metriky a průběžně hodnotíme, zda kampaně dosahují
						stanovených výsledků. V případě potřeby provádíme další úpravy a optimalizace, abychom se ujistili, že kampaně
						splňují vaše očekávání a přinášejí maximální výkon.
					</p>
				</template>
			</QuestionWrapper>
			<QuestionWrapper>
				<template #question>
					<h3><em>Otázka 03:</em> K čemu je dobrý audit PPC kampaní?</h3>
				</template>
				<template #answer>
					<p>
						<strong>PPC audit je důležitým nástrojem pro zhodnocení a následnou optimalizaci PPC kampaní.</strong> Jeho cílem je
						poskytnout přehled o účinnosti kampaní a ověřit, zda dosahují stanovených cílů. Během PPC auditu je zkoumáno několik
						klíčových faktorů s ohledem na efektivitu a návratnost investic.
					</p>
					<p>
						Jedním z hlavních aspektů PPC auditu je zhodnocení potenciálu kampaní
						<strong>generovat vyšší výnosy.</strong> Zjišťuje se, zda jsou kampaně optimálně nastaveny a zda dosahují
						maximálního výkonu v rámci stanoveného rozpočtu. Dále je sledováno, zda neexistují případy příliš vysokých plateb za
						prokliky, což by mohlo negativně ovlivňovat návratnost investic.
					</p>
					<p>
						PPC audit rovněž <strong>odhaluje případné nedostatky ve struktuře kampaní a souvisejících prvcích</strong>, jako
						jsou sestavy, klíčová slova, cílení a další. Tímto způsobem je možné identifikovat oblasti, které vyžadují
						optimalizaci a vylepšení.
					</p>
					<p>
						Důležitou součástí PPC auditu je také <strong>posouzení správnosti a dodržování optimálních postupů</strong> ve
						správě kampaní ze strany vaší agentury nebo kolegů. Prostřednictvím auditu je možné ověřit, zda jsou dodržovány
						nejlepší postupy a zda jsou implementovány vhodné strategie pro dosažení stanovených cílů.
					</p>
				</template>
			</QuestionWrapper>
			<QuestionWrapper>
				<template #question>
					<h3><em>Otázka 04:</em> Aktuálně využívám služeb jiné agentury, mohu přejít pod vaši správu?</h3>
				</template>
				<template #answer>
					<p>
						Ano, je možné přejít pod naši správu i v případě, že aktuálně využíváte služby jiné agentury. Přechod většinou
						probíhá postupně, abychom minimalizovali riziko výpadku výkonu vašich kampaní.
					</p>
				</template>
			</QuestionWrapper>
			<QuestionWrapper>
				<template #question>
					<h3><em>Otázka 05:</em> Kolik mě bude spolupráce s vaší agenturou stát?</h3>
				</template>
				<template #answer>
					<p>
						Cena spolupráce <strong>závisí na mnoha faktorech</strong>, včetně rozsahu a náročnosti projektu, vašich
						specifických požadavcích a očekávání. Naším cílem je poskytnout vám efektivní a přizpůsobenou strategii, která bude
						odpovídat vašim potřebám. Cena se tedy odvíjí od času, který budeme věnovat analýze, plánování, nastavování a
						optimalizaci vašich kampaní. Každý projekt je individuální a vyžaduje odlišný časový rámec. Na základě reálného
						odhadu času, který bude potřeba na vytvoření a implementaci strategie odpovídající vašim potřebám, jsme schopni
						připravit cenovou nabídku.
					</p>
				</template>
			</QuestionWrapper>
			<QuestionWrapper>
				<template #question>
					<h3><em>Otázka 06:</em> Jakou výši kreditu budu na kampaně potřebovat?</h3>
				</template>
				<template #answer>
					<p>
						Pro přesnou výši kreditu je nezbytné provést detailní analýzu vašich potřeb a cílů, abychom mohli navrhnout
						optimální rozpočet.
					</p>
				</template>
			</QuestionWrapper>
		</section>
		<section class="ppc-banner">
			<div class="container text-center">
				<h2>Už nečekejte a objednejte si PPC audit zdarma!</h2>
				<div class="buttons">
					<button @click.prevent="showPopup = true" class="btn btn-primary">
						<span> Bezplatný PPC audit </span>
					</button>
					<a href="tel:+420732264251" class="btn btn-ghost-accent">
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
							<path
								d="M22.5004 16.9201V19.9201C22.5016 20.1986 22.4445 20.4743 22.3329 20.7294C22.2214 20.9846 22.0577 21.2137 21.8525 21.402C21.6473 21.5902 21.405 21.7336 21.1412 21.8228C20.8773 21.912 20.5978 21.9452 20.3204 21.9201C17.2433 21.5857 14.2874 20.5342 11.6904 18.8501C9.27425 17.3148 7.22576 15.2663 5.69042 12.8501C4.0004 10.2413 2.94866 7.27109 2.62042 4.1801C2.59543 3.90356 2.6283 3.62486 2.71692 3.36172C2.80555 3.09859 2.94799 2.85679 3.13519 2.65172C3.32238 2.44665 3.55023 2.28281 3.80421 2.17062C4.0582 2.05843 4.33276 2.00036 4.61042 2.0001H7.61042C8.09573 1.99532 8.56621 2.16718 8.93418 2.48363C9.30215 2.80008 9.5425 3.23954 9.61042 3.7201C9.73704 4.68016 9.97187 5.62282 10.3104 6.5301C10.445 6.88802 10.4741 7.27701 10.3943 7.65098C10.3146 8.02494 10.1293 8.36821 9.86042 8.6401L8.59042 9.9101C10.014 12.4136 12.0869 14.4865 14.5904 15.9101L15.8604 14.6401C16.1323 14.3712 16.4756 14.1859 16.8495 14.1062C17.2235 14.0264 17.6125 14.0556 17.9704 14.1901C18.8777 14.5286 19.8204 14.7635 20.7804 14.8901C21.2662 14.9586 21.7098 15.2033 22.027 15.5776C22.3441 15.9519 22.5126 16.4297 22.5004 16.9201Z"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
						+420 732 264 251
					</a>
				</div>
			</div>
		</section>
		<section class="container">
			<h2 class="text-center">Aktuální články</h2>
			<PostsGrid>
				<SinglePost v-for="(item, index) in data" :key="index" :item="item" />
			</PostsGrid>
			<div class="buttons buttons-center">
				<nuxt-link to="/clanky" class="btn btn-secondary">Zobrazit další</nuxt-link>
			</div>
		</section>
		<section id="edukace" class="container">
			<h2 class="text-center">Slovník PPC pojmů</h2>
			<QuestionWrapper>
				<template #question>
					<h3><em>01</em> Marketingové systémy</h3>
				</template>
				<template #answer>
					<ul class="grid-3">
						<li>
							<h4>PPC (Pay Per Click)</h4>
							<span> platba za každý klik, model prodeje reklamy. </span>
						</li>
						<li>
							<h4>CPC (Cost Per Click)</h4>
							<span> náklady na jedno kliknutí, cena za jedno kliknutí na reklamu. </span>
						</li>
						<li>
							<h4>CPM (Cost Per Mille) nebo CPT (Cost Per Thousand)</h4>
							<span> náklady na tisíc zobrazení reklamy. Používá se především u displayových a bannerových formátů. </span>
						</li>
						<li>
							<h4>CPV (Cost Per View)</h4>
							<span> cena za každé zhlédnutí reklamy. Typické pro video reklamy. </span>
						</li>
						<li>
							<h4>CPA (Cost Per Acquisition)</h4>
							<span> náklady na získání zákazníka, cena za jednu konverzi. </span>
						</li>
						<li>
							<h4>CPL (Cost Per Lead)</h4>
							<span> cena za získání kontaktu, náklady na jedno získání potenciálního zákazníka. </span>
						</li>
						<li>
							<h4>PNO (podíl nákladů na obratu)</h4>
							<span> procentuální podíl nákladů na obratu, který byl vynaložen na reklamu. </span>
						</li>
						<li>
							<h4>ROAS (Return On Ad Spend)</h4>
							<span> návratnost investice do reklamy, poměr mezi výdaji na reklamu a jejich výsledným ziskem. </span>
						</li>
						<li>
							<h4>ROI (Return On Investment)</h4>
							<span> návratnost investice, poměr mezi ziskem a investicí do reklamy. </span>
						</li>
						<li>
							<h4>CTR (Click Through Rate)</h4>
							<span>
								míra prokliku, poměr mezi počtem kliknutí na reklamu a počtem jejích zobrazení, vyjádřeno v procentech.
							</span>
						</li>
						<li>
							<h4>CTA (Call To Action)</h4>
							<span>
								výzva k akci. Textová i bannerová reklama by měla obsahovat výzvu k provedení konkrétní akce, často
								umístěnou na tlačítku.
							</span>
						</li>
						<li>
							<h4>LTV (Life Time Value)</h4>
							<span>
								celoživotní hodnota zákazníka, celkový zisk zákazníka za dobu trvání jeho vztahu s firmou. Například pokud
								zákazník pravidelně nakupuje každý půlrok po dobu pěti let za 2000 Kč, jeho LTV je 20 000 Kč (10 objednávek
								během 5 let).
							</span>
						</li>
						<li>
							<h4>KPI (Key Performance Indicator)</h4>
							<span> klíčový ukazatel výkonnosti, vyčíslený cíl kampaně. </span>
						</li>
						<li>
							<h4>API (Application Programming Interface)</h4>
							<span>
								rozhraní pro komunikaci mezi dvěma aplikacemi. Používá se například při integraci skladových dat do reklamy
								Google.
							</span>
						</li>
						<li>
							<h4>GTM (Google Tag Manager)</h4>
							<span> nástroj pro správu a implementaci sledovacích kódů. </span>
						</li>
						<li>
							<h4>CRO (Conversion Rate Optimization)</h4>
							<span> optimalizace konverzního poměru webové stránky. </span>
						</li>
						<li>
							<h4>UTM (Urchin Tracking Module)</h4>
							<span> parametry pro sledování zdrojů návštěvnosti v Google Analytics. </span>
						</li>
						<li>
							<h4>STDC (See Think Do Care)</h4>
							<span> framework Avinashe Kaushika pro vytváření marketingové strategie. </span>
						</li>
						<li>
							<h4>AIDA (Attention Interest Desire Action)</h4>
							<span> model popisující mechanismus reklamy. </span>
						</li>
						<li>
							<h4>GDPR (General Data Protection Regulation)</h4>
							<span> legislativa Evropské unie o ochraně osobních údajů. </span>
						</li>
						<li>
							<h4>HTTPS (HyperText Transfer Protocol Secure)</h4>
							<span> zabezpečená verze protokolu pro přenos hypertextu (nešifrovaná verze je HTTP). </span>
						</li>
						<li>
							<h4>XML (eXtented Markup Language)</h4>
							<span>
								rozšiřitelný značkovací jazyk, často používaný pro produktové feedy (např. Google Merchant Center,
								Zboží.cz).
							</span>
						</li>
						<li>
							<h4>SEO (Search Engine Optimization)</h4>
							<span> optimalizace pro vyhledávače. </span>
						</li>
						<li>
							<h4>SEM (Search Engine Marketing)</h4>
							<span> marketing ve vyhledávačích. </span>
						</li>
						<li>
							<h4>SWOT (Strengths Weaknesses Opportunities Threats)</h4>
							<span> analýza silných stránek, slabých stránek, příležitostí a hrozeb. </span>
						</li>
						<li>
							<h4>CTBO (Chance To Beat Original)</h4>
							<span>
								hodnota používaná při hodnocení A/B testů, vyjadřující procentuální šanci, že testovaná verze bude
								úspěšnější než původní varianta.
							</span>
						</li>
					</ul>
				</template>
			</QuestionWrapper>
			<QuestionWrapper>
				<template #question>
					<h3><em>02</em> Zkratky používané (víceméně jen) v Google Ads</h3>
				</template>
				<template #answer>
					<ul class="grid-3">
						<li>
							<h4>PLA (Product Listing Ads)</h4>
							<span> původní termín pro Shopping Ads (Nákupy Google). </span>
						</li>
						<li>
							<h4>RSA (Responsive Search Ads)</h4>
							<span> responzivní reklamy pro vyhledávání. </span>
						</li>
						<li>
							<h4>DKI (Dynamic Keyword Insertion)</h4>
							<span> dynamické vkládání klíčového slova do textu inzerátu. </span>
						</li>
						<li>
							<h4>GDN (Google Display Network)</h4>
							<span> síť zobrazovacích reklam Google. </span>
						</li>
						<li>
							<h4>QS (Quality Score)</h4>
							<span> hodnocení kvality reklamy. </span>
						</li>
						<li>
							<h4>RLSA (Remarketing Lists for Search Ads)</h4>
							<span> remarketingové seznamy pro reklamy ve vyhledávání. </span>
						</li>
						<li>
							<h4>DSA (Dynamic Search Ads)</h4>
							<span> dynamické reklamy pro vyhledávání. </span>
						</li>
						<li>
							<h4>CSS (Comparison Shopping Service)</h4>
							<span>
								srovnávací služba pro e-commerce produkty, která umožňuje prodejcům inzerovat pomocí Google Shopping Ads.
							</span>
						</li>
					</ul>
				</template>
			</QuestionWrapper>
			<QuestionWrapper>
				<template #question>
					<h3><em>03</em> Stránky výsledků vyhledávání</h3>
				</template>
				<template #answer>
					<ul class="grid-3">
						<li>
							<h4>SERP (Search Engine Result Pages)</h4>
							<span
								>stránky výsledků vyhledávání (to, co vidíte na Googlu, Seznamu nebo jiném vyhledávači po zadání
								vyhledávacího dotazu).
							</span>
						</li>
						<li>
							<h4>Knowledge graph</h4>
							<span>výsledky v boxíku, např. o počasí nebo hledané celebritě. </span>
						</li>
						<li>
							<h4>Featured snippet</h4>
							<span
								>když zadáte dotaz do vyhledávače, někdy se objeví nad výsledky vyhledávání rovnou celá odpověď na něj v
								několika větách nebo bodech.
							</span>
						</li>
						<li>
							<h4>Sitelinky</h4>
							<span>odkazy na podstránky webů, u reklam je přidáváme, u organických výsledků je Google přidává sám. </span>
						</li>
						<li>
							<h4>Local Teaser Pack</h4>
							<span>když hledáte například hotel nebo restauraci, zobrazí se mapa a několik navržených míst. </span>
						</li>
						<li>
							<h4>Related questions</h4>
							<span>při zadání dotazu Google nabídne další otázky, které uživatelé často pokládají. </span>
						</li>
					</ul>
				</template>
			</QuestionWrapper>
			<QuestionWrapper>
				<template #question>
					<h3><em>04</em> Marketingové pojmy</h3>
				</template>
				<template #answer>
					<ul class="grid-3">
						<li>
							<h4>Imprese</h4>
							<span>
								měří počet zobrazení reklamy. V rámci vyhledávání se tím rozumí, kolikrát bylo vyhledáno vaše klíčové slovo
								a vaše reklama byla zobrazena.
							</span>
						</li>
						<li>
							<h4>Kliknutí</h4>
							<span> kolikrát někdo na vaši reklamu kliknul. </span>
						</li>
						<li>
							<h4>Konverze</h4>
							<span>
								počet dosažených cílů. Můžete měřit různé typy cílů, jako jsou objednávky, přihlášení k odběru newsletteru,
								odeslání kontaktního formuláře atd. Jakmile uživatel splní určitý cíl, dosáhnete úspěšné akce.
							</span>
						</li>
						<li>
							<h4>Konverzní poměr</h4>
							<span>
								míra, jakým procentem uživatelů, kteří klikli na reklamu, byla provedena konverze. Jinými slovy, udává podíl
								mezi počtem konverzí a kliknutí. Například pokud na vaši reklamu kliklo 100 uživatelů a získali jste jednu
								konverzi, poměr konverzí je 1 %.
							</span>
						</li>
						<li>
							<h4>Hodnota konverze</h4>
							<span>
								hodnota, kterou má pro vás konkrétní konverze. V případě objednávky je to například celková cena zboží v
								nákupním košíku, kterou zákazník nakoupil.
							</span>
						</li>
						<li>
							<h4>A/B testování</h4>
							<span>
								metoda testování, ve které se v reálném čase porovnávají výsledky dvou variant (např. reklamy nebo prvků na
								webu), s cílem identifikovat lepší a výkonnější variantu.
							</span>
						</li>
						<li>
							<h4>Google Ads</h4>
							<span> systém pro zobrazování reklam ve vyhledávání na Googlu a v obsahové síti. </span>
						</li>
						<li>
							<h4>Sklik</h4>
							<span> systém pro zobrazování reklam ve vyhledávání na Seznamu a v obsahové síti. </span>
						</li>
						<li>
							<h4>Google Analytics</h4>
							<span> nástroj pro měření a analýzu návštěvnosti webových stránek. </span>
						</li>
						<li>
							<h4>Data Studio</h4>
							<span> nástroj pro automatické generování reportů a vizualizaci dat z analytických platforem. </span>
						</li>
						<li>
							<h4>Google Search Console</h4>
							<span> nástroj pro monitorování viditelnosti vašeho webu ve vyhledávači Google. </span>
						</li>
						<li>
							<h4>Bounce rate</h4>
							<span> míra okamžitého opuštění webu (kolik % lidí opustilo web, aniž by navštívilo další jeho stránku). </span>
						</li>
						<li>
							<h4>Cookie</h4>
							<span>
								textový soubor obsahující informace o uživateli, který je uložen v prohlížeči (například informace o
								navštívených stránkách).
							</span>
						</li>
						<li>
							<h4>Facebook Ads</h4>
							<span> reklamní systém pro propagaci na Facebooku. </span>
						</li>
						<li>
							<h4>Instagram Ads</h4>
							<span> reklamní systém pro propagaci na Instagramu. </span>
						</li>
						<li>
							<h4>LinkedIn Ads</h4>
							<span> reklamní systém pro propagaci na LinkedInu. </span>
						</li>
						<li>
							<h4>Twitter Ads</h4>
							<span> reklamní systém pro propagaci na Twitteru. </span>
						</li>
						<li>
							<h4>Landing page</h4>
							<span> stránka, na které se uživatel ocitne po kliknutí na odkaz. </span>
						</li>
						<li>
							<h4>Long tail</h4>
							<span>
								málo vyhledávaná a specifická klíčová slova, která dohromady tvoří významný podíl celkového objemu
								vyhledávání.
							</span>
						</li>
						<li>
							<h4>Affiliate marketing</h4>
							<span>
								systém, ve kterém se reklama hradí až za konkrétní akci, jako například získání potenciálního zákazníka
								(leadu) nebo provedení objednávky.
							</span>
						</li>
					</ul>
				</template>
			</QuestionWrapper>
		</section>
	</main>
	<PopupAudit></PopupAudit>
</template>
<script setup>
	const showPopup = useState('showPopup')
	useHead({
		bodyAttrs: {
			class: 'header-black',
		},
		title: 'Profesionální Správa PPC Kampaní | Miranda Media',
		meta: [
			{
				name: 'description',
				content:
					'Osvoboďte svůj čas a získejte výsledky s naší PPC správou. Miranda Media vám pomůže optimalizovat a monitorovat vaše reklamy pro maximální ROI. Kontaktujte nás!',
			},
		],
	})
	const { find } = useStrapi()
	const { data } = await find('clanky', {
		populate: '*',
		sort: 'publishedAt:desc',
		pagination: { page: 1, pageSize: 3 },
	})
	const carouselData = ref([
		{
			title: 'Jsme experti na růst E-commerce.<br />Zvyšte své tržby!',
			subtitle:
				'Překonejte svoje obchodní rekordy a připojte se k řadám úspěšných klientů, kteří se rozhodli přidat k <strong>Miranda PPC Expert!</strong>',
			imageUrl: '/ppc-hero.jpg',
			imageMobileUrl: '/ppc-hero-mobile.jpg',
			dataBlack: true,
		},
		{
			title: '#1 Shoptet E-commerce PPC expert pro raketový růst vašeho prodeje!',
			subtitle: `
				<ul class="styled-list">
					<li>Chcete prodávat více produktů?</li>
					<li>Chcete zlepšit ROI (návratnost investic)?</li>
					<li>Chcete odemknout sílu svého Shoptet obchodu?</li>
				</ul>
			`,
			imageUrl: '/ppc-hero-2.jpg',
			imageMobileUrl: '/ppc-hero-mobile2.jpg',
			dataBlack: true,
		},
	])
</script>
<style lang="scss" scoped>
	.buttons {
		margin-top: 40px;
	}
	.logos {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 40px;
		margin-top: 80px;
		img {
			background-blend-mode: color;
			width: 100%;
			flex: 0 1 100px;
		}
		@media (max-width: 767px) {
			display: none;
		}
	}

	.references {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 72px;
		margin-top: 40px;
		img {
			width: auto;
		}
		@media (max-width: 750px) {
			gap: 20px;
			img {
				max-width: 100px;
			}
		}
		@media (max-width: 500px) {
			display: grid;
			grid-template-columns: repeat(3, minmax(1px, 1fr));
			justify-items: center;
			gap: 10px;
			text-align: center;
			img {
				width: 100%;
			}
		}
	}
	.team-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 40px;
		@media (max-width: 767px) {
			gap: 20px;
		}
		@media (max-width: 680px) {
			display: block;
		}
	}
	.team-member {
		aspect-ratio: 1;
		position: relative;
		.texts {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			top: 0;
			text-align: center;
			color: $color-white;
			padding: 10px 30px;
			transition: all 0.15s ease-in-out;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-end;
			span {
				line-height: em(28);
			}
		}
		h3 {
			font-size: rem(32);
			line-height: em(42, 32);
			margin: 0;
		}
		p {
			margin: 0;
		}
		a {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;
			margin: 10px 0 20px;
			text-decoration: none;
			color: $color-font;
			font-weight: 700;
			&::before {
				content: url('/icon/icon-mail.svg');
				display: block;
				line-height: 0;
			}
		}
		.info {
			max-height: 0;
			overflow: hidden;
			transition: all 0.15s ease-in-out;
			&.mobile {
				display: none;
			}
		}
		.mail-mobile {
			display: none;
		}
		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
		}
		&:hover {
			.info {
				max-height: 160px;
			}
			.texts {
				justify-content: center;
				background-color: rgba($color-accent, 0.7);
				backdrop-filter: blur(10px);
				color: $color-font;
			}
		}
		@media (max-width: 680px) {
			&::before {
				display: none;
			}
			&:hover {
				.info {
					max-height: unset;
				}
				.texts {
					background-color: transparent;
					backdrop-filter: none;
					color: $color-font;
				}
			}
			display: grid;
			grid-template-columns: minmax(90px, 190px) auto;
			align-items: center;
			aspect-ratio: auto;
			margin-bottom: 20px;
			padding-bottom: 20px;
			border-bottom: 1px solid $color-border;

			.texts {
				position: initial;
				color: $color-font;
				align-items: flex-start;
				padding: 0 10px;
			}
			.info {
				display: none;
				grid-column-end: span 2;
				&.mobile {
					display: block;
					flex-basis: 100%;
					padding: 0 20px;
					background-color: rgba($color-font, 0.05);
				}
			}
			.mail-mobile {
				display: flex;
				margin: 0;
				&::before {
					content: url('/icon/icon-mail-green.svg');
				}
			}
		}
		@media (max-width: 580px) {
			& > picture {
				flex-basis: 90px;
			}
			h3 {
				font-size: rem(22);
			}
		}
	}
	.certifications {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 40px;
		justify-content: space-between;
		img {
			width: auto;
		}
		@media (max-width: 767px) {
			display: grid;
			justify-items: center;
			grid-template-columns: repeat(3, minmax(1px, 1fr));
			img {
				width: 100%;
			}
		}
	}
	.kroky {
		.project-phone {
			display: flex;
			align-items: center;
			gap: 1em;
		}
	}
	.steps {
		display: grid;
		grid-template-columns: repeat(6, minmax(1px, 1fr));
		gap: 40px;
		.project-phone {
			color: $color-white;
			text-decoration: none;
			font-weight: 700;
			margin-bottom: 40px;
		}
	}
	.step {
		grid-column-end: span 2;
		padding: 50px;
		background-color: #f4f4f4;
		position: relative;
		&.wide {
			grid-column-end: span 3;
		}
		h3 {
			font-size: rem(32);
			margin: 0 0 em(20, 32);
		}
		p {
			color: rgba($color-font, 0.7);
			line-height: em(28);
		}
		h3,
		p {
			position: relative;
			z-index: 2;
		}
		&-no {
			color: rgba($color-accent, 0.4);
			font-size: 136px;
			line-height: 1em;
			position: absolute;
			bottom: 30px;
			right: 50px;
			z-index: 1;
		}
		&.contact-us {
			background: url('/ppc/step-contact-bg.jpg') no-repeat center center;
			background-size: cover;
			color: $color-white;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			h3 {
				font-size: rem(40);
				line-height: em(46, 40);
			}
			small {
				display: block;
				font-size: em(24, 40);
			}
		}
	}
	@media (max-width: 1100px) {
		.steps {
			grid-template-columns: repeat(2, minmax(1px, 1fr));
		}
		.step {
			grid-column-end: unset;
			&.wide {
				grid-column-end: unset;
			}
			&.contact-us {
				grid-column-end: span 2;
			}
		}
	}
	@media (max-width: 900px) {
		.steps {
			gap: 20px;
		}
		.step {
			padding: 20px;
			h3 {
				font-size: rem(22);
			}
			.step-no {
				font-size: 77px;
				bottom: 20px;
				right: 20px;
			}
		}
	}
	@media (max-width: 767px) {
		.steps {
			grid-template-columns: minmax(1px, 1fr);
			gap: 15px;
		}
		.step {
			&.contact-us {
				grid-column-end: unset;
			}
		}
	}

	.ppcSticky {
		background-color: $color-font;
		padding: rem(10) 0;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 4;
		.container {
			display: flex;
			align-items: center;
			gap: 20px;
			justify-content: space-evenly;
			color: $color-white;
		}
		h2 {
			font-size: rem(24);
			margin: 0;
		}
		p {
			margin: 0;
		}
		@media (max-width: 767px) {
			.container {
				flex-direction: column;
				text-align: center;
				gap: 10px;
			}
			h2 {
				font-size: rem(16);
			}
			p {
				font-size: rem(9);
			}
			button {
				font-size: rem(12);
				line-height: 1em;
				padding: em(10, 12);
				width: 100%;
				justify-content: center;
			}
			.button {
				width: 100%;
				max-width: 375px;
			}
		}
	}
	.ppc-audit {
		background: url('/ppc/audit-bg.jpg') no-repeat center center;
		background-size: cover;
		padding: 90px 0;
		h2 {
			margin: 0 0 10px;
		}
		h3 {
			font-size: 1rem;
		}
		p {
			margin: 0 0 20px;
			line-height: em(28);
		}
		ul {
			columns: 2;
			column-gap: 20px;
			li {
				font-size: 1rem;
			}
		}
		.buttons {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 20px;
			margin-top: 0;
		}
		.container {
			& > p {
				max-width: 540px;
			}
			& > * {
				max-width: 930px;
			}
		}
		@media (max-width: 767px) {
			background-image: url('/ppc/audit-bg-mobile.jpg');
			background-position: bottom center;
			padding-bottom: 60vw;
			ul {
				columns: unset;
			}
		}
		@media (max-width: 640px) {
			padding-top: 20px;
		}
	}
	.miranda-expert {
		display: flex;
		gap: 80px;
		.texts {
			align-self: center;
			padding-right: clamp(2rem, calc((100vw - 1440px - 1rem) / 2), calc((100vw - 1440px - 1rem) / 2));
			ul {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 30px;
				padding: 0;
				list-style: none;
				margin: 0;
				font-size: rem(20);
				line-height: em(36, 20);
				li {
					display: flex;
					gap: 10px;
					break-inside: avoid-column;
					svg {
						flex: 0 0 44px;
					}
				}
			}
		}
		h2 {
			margin: 0 0 40px;
		}
		.buttons {
			display: flex;
			flex-wrap: wrap;
			gap: 20px;
			.btn-tertiary {
				width: auto;
				max-width: unset;
				padding: 0.9375em 1.875em;
			}
		}
		@media (max-width: 1260px) {
			gap: 40px;
			.texts ul {
				font-size: 1rem;
				li {
					align-items: center;
					svg {
						flex-basis: 24px;
					}
				}
			}
		}
		@media (max-width: 900px) {
			flex-direction: column;
			padding: 0 2rem;
			& > picture {
				max-height: 240px;
				overflow: hidden;
			}
		}
		@media (max-width: 767px) {
			padding: 0 20px;
		}
		@media (max-width: 640px) {
			& > picture {
				max-height: unset;
			}
			h2 {
				margin: 0 0 25px;
			}
			.texts ul {
				display: block;
			}
		}
	}
	.ppc-banner {
		color: $color-white;
		background: url(/ppc/ppc-banner.jpg) center center no-repeat;
		background-size: cover;
		padding: 85px 0;
		.buttons {
			display: flex;
			flex-wrap: wrap;
			gap: 20px;
			justify-content: center;
		}
		.container {
			max-width: 920px;
		}
		h2 {
			margin: 0;
		}
		.btn-ghost-accent {
			display: inline-flex;
			align-items: center;
			gap: 1em;
		}
		@media (max-width: 767px) {
			padding: 40px 0;
		}
	}
</style>
<style lang="scss">
	#priklady {
		.swiper-pagination-bullet {
			width: 12px;
			height: 12px;
			border-radius: 0;
			transition: all 0.15s ease-in-out;
			&.swiper-pagination-bullet-active {
				transform: scale(1.34);
			}
		}
		@media (min-width: 880px) {
			.swiper-pagination {
				display: none;
			}
		}
		@media (max-width: 879px) {
			.swiper-button-next,
			.swiper-button-prev {
				display: none;
			}
		}
	}
</style>
