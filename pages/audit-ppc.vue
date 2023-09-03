<template>
	<HeroCarousel :data="auditData" class="no-margin">
		<div class="buttons">
			<button @click.prevent="showPopup = true" class="btn btn-accent" href="#kontakt">
				Už nečekejte - zajistěte si svůj audit ještě dnes!
			</button>
		</div>
	</HeroCarousel>
	<section id="usp">
		<div class="container">
			<div class="item grey">
				<div class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M7.33301 7H9.95801V46.375H49.333V49H7.33301V7ZM46.2276 15.1716C46.3611 15.2808 46.4718 15.4153 46.5532 15.5673C46.6347 15.7193 46.6855 15.8859 46.7025 16.0575C46.7196 16.2292 46.7027 16.4025 46.6527 16.5676C46.6027 16.7326 46.5207 16.8863 46.4114 17.0196L34.5989 31.4571C34.4828 31.5988 34.3383 31.7147 34.1747 31.7972C34.0112 31.8797 33.8321 31.927 33.6492 31.9362C33.4662 31.9453 33.2833 31.9161 33.1123 31.8503C32.9414 31.7845 32.786 31.6837 32.6564 31.5543L25.8655 24.7634L16.2685 37.9592C16.0586 38.2262 15.7533 38.4014 15.4169 38.448C15.0805 38.4946 14.7391 38.409 14.4645 38.2091C14.1899 38.0093 14.0035 37.7108 13.9444 37.3764C13.8852 37.0419 13.9581 36.6976 14.1475 36.4158L24.6475 21.9782C24.759 21.8247 24.9024 21.6972 25.0678 21.6044C25.2333 21.5117 25.417 21.4559 25.6061 21.4409C25.7952 21.4259 25.9853 21.4521 26.1633 21.5177C26.3414 21.5833 26.503 21.6867 26.6373 21.8207L33.4859 28.672L44.3796 15.3554C44.4889 15.2219 44.6233 15.1112 44.7753 15.0298C44.9273 14.9483 45.0939 14.8976 45.2655 14.8805C45.4372 14.8634 45.6105 14.8804 45.7756 14.9303C45.9406 14.9803 46.0943 15.0623 46.2276 15.1716Z"
							fill="#59DC8E"
							stroke="#59DC8E"
							stroke-width="2" />
					</svg>
				</div>
				<h2>Zvyšte prodeje Google</h2>
			</div>
			<div class="item green">
				<div class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
						<path d="M47.25 7H1.75V42H47.25V7ZM43.75 38.5H5.25V10.5H43.75V38.5Z" fill="white" />
						<path d="M50.75 15.75V45.5H10.5V49H54.25V15.75H50.75Z" fill="white" />
						<path
							d="M24.5 33.0816C28.8422 33.0816 32.375 29.2385 32.375 24.5147C32.375 19.7909 28.8422 15.9477 24.5 15.9477C20.1578 15.9477 16.625 19.7908 16.625 24.5147C16.625 29.2386 20.1578 33.0816 24.5 33.0816ZM24.5 19.4478C26.9124 19.4478 28.875 21.7208 28.875 24.5147C28.875 27.3085 26.9124 29.5816 24.5 29.5816C22.0876 29.5816 20.125 27.3085 20.125 24.5147C20.125 21.7208 22.0876 19.4478 24.5 19.4478ZM8.75 14.875H12.25V34.125H8.75V14.875ZM36.75 14.875H40.25V34.125H36.75V14.875Z"
							fill="white" />
					</svg>
				</div>
				<h2>Snižte náklady na Google</h2>
			</div>
			<div class="item black">
				<div class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3.58301 4.6665C3.58301 4.20238 3.76738 3.75726 4.09557 3.42907C4.42376 3.10088 4.86888 2.9165 5.33301 2.9165H51.9997C52.4638 2.9165 52.9089 3.10088 53.2371 3.42907C53.5653 3.75726 53.7497 4.20238 53.7497 4.6665C53.7497 5.13063 53.5653 5.57575 53.2371 5.90394C52.9089 6.23213 52.4638 6.4165 51.9997 6.4165H49.083V24.6352C49.083 28.0955 49.083 30.8792 48.7727 33.0678C48.4507 35.3428 47.76 37.2305 46.1943 38.7145C44.6403 40.1892 42.6873 40.8238 40.333 41.1248C38.044 41.4165 35.1227 41.4165 31.457 41.4165H30.4163V47.9195L34.1147 49.7675C34.3221 49.8691 34.5074 50.0107 34.6598 50.1842C34.8123 50.3577 34.9289 50.5596 35.0029 50.7784C35.0769 50.9972 35.1069 51.2285 35.0911 51.4589C35.0753 51.6893 35.0141 51.9143 34.9109 52.1209C34.8077 52.3276 34.6647 52.5117 34.49 52.6628C34.3153 52.8139 34.1125 52.9289 33.8931 53.0013C33.6738 53.0736 33.4423 53.1017 33.212 53.0842C32.9817 53.0666 32.7572 53.0036 32.5513 52.8988L28.6663 50.9575L24.7813 52.8988C24.5755 53.0036 24.351 53.0666 24.1207 53.0842C23.8904 53.1017 23.6589 53.0736 23.4396 53.0013C23.2202 52.9289 23.0174 52.8139 22.8427 52.6628C22.668 52.5117 22.525 52.3276 22.4218 52.1209C22.3186 51.9143 22.2574 51.6893 22.2416 51.4589C22.2258 51.2285 22.2558 50.9972 22.3298 50.7784C22.4038 50.5596 22.5204 50.3577 22.6729 50.1842C22.8253 50.0107 23.0106 49.8691 23.218 49.7675L26.9163 47.9172V41.4165H25.8757C22.21 41.4165 19.2887 41.4165 16.9997 41.1248C14.643 40.8238 12.6923 40.1892 11.1383 38.7145C9.57267 37.2305 8.88201 35.3428 8.56001 33.0678C8.24967 30.8792 8.24967 28.0955 8.24967 24.6352V6.4165H5.33301C4.86888 6.4165 4.42376 6.23213 4.09557 5.90394C3.76738 5.57575 3.58301 5.13063 3.58301 4.6665ZM11.7497 6.4165V24.4998C11.7497 28.1258 11.7543 30.6598 12.025 32.5732C12.2887 34.4282 12.7717 35.4385 13.5463 36.1758C14.335 36.9225 15.441 37.3985 17.443 37.6528C19.4847 37.9142 22.1797 37.9165 25.9993 37.9165H31.3333C35.1507 37.9165 37.848 37.9142 39.8897 37.6528C41.8917 37.3962 42.9977 36.9225 43.7863 36.1758C44.561 35.4385 45.0463 34.4282 45.3077 32.5755C45.5783 30.6622 45.583 28.1258 45.583 24.4998V6.4165H11.7497ZM36.903 18.5965C37.2307 18.9246 37.4148 19.3694 37.4148 19.8332C37.4148 20.2969 37.2307 20.7417 36.903 21.0698L33.886 24.0868L33.83 24.1452C33.4992 24.4906 33.147 24.8148 32.7753 25.1158C32.2731 25.5256 31.6478 25.7549 30.9997 25.7668C30.3516 25.7549 29.7263 25.5256 29.224 25.1158C28.8524 24.8148 28.5001 24.4906 28.1693 24.1452L28.1133 24.0868L26.746 22.7195L26.333 22.3112L25.92 22.7195L22.903 25.7365C22.7428 25.9084 22.5496 26.0463 22.3349 26.142C22.1203 26.2376 21.8885 26.2891 21.6536 26.2932C21.4186 26.2974 21.1852 26.2541 20.9673 26.1661C20.7494 26.0781 20.5514 25.9471 20.3853 25.7809C20.2191 25.6147 20.0881 25.4168 20.0001 25.1989C19.912 24.981 19.8688 24.7476 19.873 24.5126C19.8771 24.2776 19.9285 24.0459 20.0242 23.8312C20.1198 23.6166 20.2577 23.4234 20.4297 23.2632L23.4467 20.2462L23.5027 20.1878C23.841 19.8495 24.2073 19.4832 24.5573 19.2172C25.0596 18.8074 25.6849 18.5781 26.333 18.5662C27.1123 18.5662 27.698 18.9045 28.1087 19.2172C28.4587 19.4832 28.825 19.8495 29.1633 20.1878L29.2193 20.2462L30.5867 21.6135L30.9997 22.0218L31.4127 21.6135L34.4297 18.5965C34.7578 18.2688 35.2026 18.0847 35.6663 18.0847C36.1301 18.0847 36.5749 18.2688 36.903 18.5965Z"
							fill="#59DC8E" />
					</svg>
				</div>
				<h2>Získejte 100% bezplatné poradenství</h2>
			</div>
		</div>
	</section>
	<section class="miranda-expert">
		<NuxtPicture src="/audit/banner-1.jpg" width="780" height="780" alt="" :img-attrs="{ style: 'filter:grayscale(1);' }" />
		<div class="texts">
			<h2>Naším cílem je pomoci vám identifikovat oblasti vašeho účtu, které vyžadují pozornost.</h2>
			<p>
				Objednejte si svůj bezplatný audit Google Ads , který vám poskytne praktické informace o tom, jak dosáhnout lepších výsledků
				s útratou za Google Ads! Jen některé z oblastí, o kterých budeme referovat, jsou:
			</p>
			<ul>
				<li>Struktura a nastavení účtu</li>
				<li>Sledování konverzí</li>
				<li>Cílové publikum</li>
				<li>Přehled hlavních KPI</li>
				<li><strong>A mnohem víc!</strong></li>
			</ul>
			<div class="perex">
				<p>
					Získejte svůj audit ještě dnes a brzy byste měli s rozpočtem Google Ads dosahovat lepších výsledků!
					<strong>Ano, je to tak jednoduché!</strong>
				</p>
				<div class="buttons">
					<button @click.prevent="showPopup = true" class="btn btn-accent">Bezplatný PPC audit</button>
					<NuxtLink class="btn btn-tertiary" to="/kontakty">Kontaktujte nás</NuxtLink>
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
	<section class="deset-bodu">
		<div class="container columns col-2">
			<div class="column texts">
				<h2>10 klíčových bodů pro podrobný audit PPC kampaní Google Ads</h2>
				<ol v-if="screenWidth > 767" class="custom-ol">
					<li>
						Analýza klíčových slov: Zkoumání klíčových slov použitých ve vašich kampaních a jejich relevanci pro vaši cílovou
						skupinu.
					</li>
					<li>
						Hodnocení reklamních skupin: Zhodnocení efektivity jednotlivých reklamních skupin, kontrola relevance klíčových slov
						a jejich souvisejících reklam.
					</li>
					<li>Kontrola kvality reklam: Posouzení kvality textu reklam, volba správných rozšíření reklam a jejich účinnost.</li>
					<li>
						Analýza konverzních cílů: Zjištění, zda jsou správně nastaveny konverzní cíle a sledování konverzí, abychom mohli
						vyhodnotit úspěšnost kampaní.
					</li>
					<li>
						Rozpoznání neúčinných klíčových slov: Identifikace klíčových slov, která nepřinášejí žádný relevantní provoz nebo
						mají špatnou návratnost investice.
					</li>
					<li>Hodnocení konkurence: Analyzování konkurenčního prostředí a zjištění, jak můžete konkurovat ve svém odvětví.</li>
					<li>
						Vyhodnocení rozpočtu: Posouzení efektivity rozpočtu a doporučení, jak optimalizovat výdaje a zvýšit návratnost
						investic.
					</li>
					<li>Sledování a analýza kampaní: Kontrola historických dat a sledování trendů výkonu kampaní.</li>
					<li>Testování inzerátů: Navržení a provádění testů různých inzerátů, abychom zjistili, které fungují nejlépe.</li>
					<li>
						Doporučení a strategie: Vypracování konkrétních doporučení a strategií pro zlepšení výkonu vašich kampaní a dosažení
						lepších výsledků.
					</li>
				</ol>
				<ol class="custom-ol" v-else>
					<Swiper :slides-per-view="1.5" :modules="[SwiperPagination]" pagination>
						<SwiperSlide>
							<li>
								Analýza klíčových slov: Zkoumání klíčových slov použitých ve vašich kampaních a jejich relevanci pro vaši
								cílovou skupinu.
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li>
								Hodnocení reklamních skupin: Zhodnocení efektivity jednotlivých reklamních skupin, kontrola relevance
								klíčových slov a jejich souvisejících reklam.
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li>
								Kontrola kvality reklam: Posouzení kvality textu reklam, volba správných rozšíření reklam a jejich účinnost.
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li>
								Analýza konverzních cílů: Zjištění, zda jsou správně nastaveny konverzní cíle a sledování konverzí, abychom
								mohli vyhodnotit úspěšnost kampaní.
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li>
								Rozpoznání neúčinných klíčových slov: Identifikace klíčových slov, která nepřinášejí žádný relevantní provoz
								nebo mají špatnou návratnost investice.
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li>
								Hodnocení konkurence: Analyzování konkurenčního prostředí a zjištění, jak můžete konkurovat ve svém odvětví.
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li>
								Vyhodnocení rozpočtu: Posouzení efektivity rozpočtu a doporučení, jak optimalizovat výdaje a zvýšit
								návratnost investic.
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li>Sledování a analýza kampaní: Kontrola historických dat a sledování trendů výkonu kampaní.</li>
						</SwiperSlide>
						<SwiperSlide>
							<li>
								Testování inzerátů: Navržení a provádění testů různých inzerátů, abychom zjistili, které fungují nejlépe.
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li>
								Doporučení a strategie: Vypracování konkrétních doporučení a strategií pro zlepšení výkonu vašich kampaní a
								dosažení lepších výsledků.
							</li>
						</SwiperSlide>
					</Swiper>
				</ol>
				<div class="buttons">
					<button @click.prevent="showPopup = true" class="btn btn-accent" href="#kontakt">
						Už nečekejte a nechte si zpracovat podrobný audit
					</button>
				</div>
			</div>
			<div class="column image">
				<NuxtPicture src="/audit/banner-1.jpg" />
			</div>
		</div>
	</section>
	<section class="letter">
		<div class="container columns col-2">
			<div class="column image">
				<NuxtPicture src="/audit/tomas.jpg" alt="Tomáš Cina" />
			</div>
			<div class="column texts">
				<h2>Otevřený dopis všem zájemcům</h2>
				<p>
					V Mirande jsme si vědomi, že jako majitel firmy nebo marketingový ředitel se často potýkáte s náročným úkolem vyvážit
					povinnosti a používat efektivní prodejní strategie. Právě proto jsme tu pro vás s nabídkou 100% bezplatných auditů
					Google Ads. Věříme, že získání bezplatného auditu Google Ads je klíčovým krokem pro úspěšný rozvoj vašeho podnikání v
					tomto roce.
				</p>
				<p>
					Naše detailní audity jsou sestavovány ručně a zahrnují hloubkovou analýzu vašeho výkonu v Google Ads. Každý bezplatný
					audit je plně přizpůsobený vašemu účtu Google Ads a přinese vám důkladné pochopení toho, co v kampaních funguje, co
					nefunguje a co může být zlepšeno. Všechny informace vám budeme předávat srozumitelnou češtinou, abyste měli jasno v tom,
					kam a jak investujete své peníze.
				</p>
				<div class="author">
					<strong>Tomáš Cina</strong>
					<span class="position">CEO & co-founder</span>
				</div>
			</div>
		</div>
	</section>
	<section class="ppc-banner">
		<div class="container text-center">
			<h2>Rezervujte si 100% bezplatný audit Google Ads a získejte rychle lepší výsledky!</h2>
			<div class="buttons">
				<button @click.prevent="showPopup = true" class="btn btn-primary">
					<span> Bezplatný PPC audit </span>
				</button>
				<a href="tel:+420732264251" class="btn btn-ghost-accent">
					<svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
						<path
							d="M21.5004 15.9201V18.9201C21.5016 19.1986 21.4445 19.4743 21.3329 19.7294C21.2214 19.9846 21.0577 20.2137 20.8525 20.402C20.6473 20.5902 20.405 20.7336 20.1412 20.8228C19.8773 20.912 19.5978 20.9452 19.3204 20.9201C16.2433 20.5857 13.2874 19.5342 10.6904 17.8501C8.27425 16.3148 6.22576 14.2663 4.69042 11.8501C3.0004 9.2413 1.94866 6.27109 1.62042 3.1801C1.59543 2.90356 1.6283 2.62486 1.71692 2.36172C1.80555 2.09859 1.94799 1.85679 2.13519 1.65172C2.32238 1.44665 2.55023 1.28281 2.80421 1.17062C3.0582 1.05843 3.33276 1.00036 3.61042 1.0001H6.61042C7.09573 0.995321 7.56621 1.16718 7.93418 1.48363C8.30215 1.80008 8.5425 2.23954 8.61042 2.7201C8.73704 3.68016 8.97187 4.62282 9.31042 5.5301C9.44497 5.88802 9.47408 6.27701 9.39433 6.65098C9.31457 7.02494 9.12928 7.36821 8.86042 7.6401L7.59042 8.9101C9.01398 11.4136 11.0869 13.4865 13.5904 14.9101L14.8604 13.6401C15.1323 13.3712 15.4756 13.1859 15.8495 13.1062C16.2235 13.0264 16.6125 13.0556 16.9704 13.1901C17.8777 13.5286 18.8204 13.7635 19.7804 13.8901C20.2662 13.9586 20.7098 14.2033 21.027 14.5776C21.3441 14.9519 21.5126 15.4297 21.5004 15.9201Z"
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
	<section class="experti container">
		<div class="miranda-grid">
			<div class="item large">
				<h2>Miranda PPC Experti</h2>
				<p>
					Naši odborníci na digitální marketing nechávají počítače stranou a osobně provedou váš audit. Budou se věnovat
					detailnímu vysvětlení, jakým způsobem provedení navrhovaných změn zlepší výsledky vašich kampaní. Následně je na vás,
					abyste si vybrali, jaká opatření budete chtít realizovat (a uvědomte si, že to je opravdu snadné).
				</p>
				<p>
					Digitální marketing a Google Ads jsou velmi specializovanými oblastmi, a proto vám doporučujeme spolupráci s PPC
					agenturou, která se na tyto záležitosti specializuje.
				</p>
			</div>
			<div class="item image large mobile-wide">
				<NuxtPicture
					src="/audit/experti-group.jpg"
					:imgAttrs="{ style: 'display:block; width:100%; height:100%; object-fit:cover;' }"
					alt=""
					loading="lazy" />
			</div>
			<div class="item image">
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
			</div>
			<div class="item image">
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
			</div>
			<div class="item center mobile-wide">
				<p>
					Naše agentura disponuje důkazem prokazatelných zkušeností v dosahování nejlepších výsledků pro naše klienty. Vyberte si
					nás jako svého partnera a využijte našich odborných znalostí, které vám zajistí konkurenční výhodu vůči ostatním hráčům
					na trhu.
				</p>
			</div>
			<div class="item wide">
				<p>
					Nečekejte déle, jednoduše se rozhodněte a začněte svůj bezplatný audit Google Ads ještě dnes. Získáte tak cenný náhled
					do svých kampaní a objevíte nové možnosti, jak posílit svou pozici na digitálním trhu. Učiňte tento krok k úspěchu
					vašeho podnikání a objednejte si audit PPC hned teď!
				</p>
				<div class="buttons">
					<button @click.prevent="showPopup = true" class="btn btn-accent" href="#kontakt">
						ZDARMA AUDIT PPC GOOGLE ADS. ANO PROSÍM.
					</button>
				</div>
			</div>
			<div class="item image">
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
			</div>
			<div class="item image">
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
			</div>
			<div class="item image">
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
			</div>
			<div class="item image">
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
			</div>
			<div class="item image">
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
			<div class="item image">
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
			</div>
			<div class="item image mobile-wide">
				<div class="step contact-us">
					<h3>Kontaktujte nás <small>ještě dnes!</small></h3>
					<a href="tel:+420732264251" class="project-phone">
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
							<g clip-path="url(#clip0_7054_18832)">
								<path
									d="M20.1683 15.5101V18.2601C20.1693 18.5154 20.117 18.7681 20.0147 19.002C19.9125 19.2359 19.7625 19.4459 19.5743 19.6185C19.3862 19.7911 19.1641 19.9225 18.9223 20.0043C18.6805 20.0861 18.4242 20.1164 18.1699 20.0935C15.3492 19.787 12.6397 18.8231 10.2591 17.2793C8.04428 15.8719 6.1665 13.9941 4.75911 11.7793C3.20992 9.3879 2.24583 6.66521 1.94494 3.8318C1.92203 3.57831 1.95216 3.32283 2.0334 3.08162C2.11464 2.84041 2.24521 2.61876 2.41681 2.43078C2.5884 2.2428 2.79726 2.09261 3.03008 1.98977C3.2629 1.88694 3.51459 1.8337 3.76911 1.83346H6.51911C6.96397 1.82908 7.39525 1.98662 7.73256 2.2767C8.06986 2.56678 8.29018 2.96962 8.35244 3.41013C8.46851 4.29019 8.68377 5.1543 8.99411 5.98596C9.11744 6.31406 9.14413 6.67063 9.07102 7.01344C8.99791 7.35624 8.82807 7.6709 8.58161 7.92013L7.41744 9.0843C8.72237 11.3792 10.6225 13.2794 12.9174 14.5843L14.0816 13.4201C14.3308 13.1737 14.6455 13.0038 14.9883 12.9307C15.3311 12.8576 15.6877 12.8843 16.0158 13.0076C16.8474 13.318 17.7115 13.5332 18.5916 13.6493C19.0369 13.7121 19.4436 13.9364 19.7343 14.2795C20.025 14.6226 20.1794 15.0606 20.1683 15.5101Z"
									stroke="white"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</g>
							<defs>
								<clipPath id="clip0_7054_18832">
									<rect width="22" height="22" fill="white" />
								</clipPath>
							</defs>
						</svg>
						+420 732 264 251
					</a>
					<button @click.prevent="showPopup = true" class="btn btn-primary"><span>Audit zdarma</span></button>
				</div>
			</div>
		</div>
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
						<h3>Zvýšení tržeb <strong class="black">o 160,7 %</strong> <small>již po 6 měsících spolupráce</small></h3>
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
						<h3>Zvýšení tržeb <strong class="accent">o XX %</strong> <small>consectetur adipiscing elit</small></h3>
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
						<h3>Zvýšení tržeb <strong class="accent">o XX %</strong> <small>consectetur adipiscing elit</small></h3>
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
						<h3>Zvýšení tržeb <strong class="accent">o 136 %</strong> <small>díky úspěšné správě kampaní</small></h3>
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
							výzva k akci. Textová i bannerová reklama by měla obsahovat výzvu k provedení konkrétní akce, často umístěnou na
							tlačítku.
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
							rozšiřitelný značkovací jazyk, často používaný pro produktové feedy (např. Google Merchant Center, Zboží.cz).
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
							hodnota používaná při hodnocení A/B testů, vyjadřující procentuální šanci, že testovaná verze bude úspěšnější
							než původní varianta.
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
							>stránky výsledků vyhledávání (to, co vidíte na Googlu, Seznamu nebo jiném vyhledávači po zadání vyhledávacího
							dotazu).
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
							měří počet zobrazení reklamy. V rámci vyhledávání se tím rozumí, kolikrát bylo vyhledáno vaše klíčové slovo a
							vaše reklama byla zobrazena.
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
							málo vyhledávaná a specifická klíčová slova, která dohromady tvoří významný podíl celkového objemu vyhledávání.
						</span>
					</li>
					<li>
						<h4>Affiliate marketing</h4>
						<span>
							systém, ve kterém se reklama hradí až za konkrétní akci, jako například získání potenciálního zákazníka (leadu)
							nebo provedení objednávky.
						</span>
					</li>
				</ul>
			</template>
		</QuestionWrapper>
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
	<PopupAudit></PopupAudit>
</template>
<script setup>
	const showPopup = useState('showPopup')
	const screenWidth = useState('screenWidth')
	const auditData = ref([
		{
			title: 'Audit PPC',
			subtitle:
				'Každý audit, který poskytujeme, je exkluzivně vytvořený a pečlivě zkonstruovaný a čerpá z našich rozsáhlých odborných znalostí v oblasti PPC a digitálního marketingu.',
			imageUrl: '/audit-bg.jpg',
			imageMobileUrl: '/audit-bg-mobile.jpg',
		},
	])

	useHead({
		bodyAttrs: {
			class: 'header-black',
		},
		title: 'Kompletní Audit PPC Kampaní | Miranda Media',
		meta: [
			{
				name: 'description',
				content:
					'Získejte podrobný přehled o stavu vašich PPC kampaní s naším profesionálním auditem. Miranda Media vám pomůže identifikovat příležitosti ke zlepšení a dosažení lepších výsledků.',
			},
		],
	})
	const { find } = useStrapi()
	const { data } = await find('clanky', {
		populate: '*',
		sort: 'publishedAt:desc',
		pagination: { page: 1, pageSize: 3 },
	})
</script>
<style lang="scss" scoped>
	#usp {
		margin-top: -100px;
		position: relative;
		z-index: 10;
		.container {
			display: flex;
			flex-wrap: wrap;
			gap: 20px;
		}
		.item {
			padding: 45px 30px;
			text-align: center;
			flex: 1 1 auto;
			h2 {
				max-width: 280px;
				font-size: rem(24);
				margin: 20px auto 0;
			}
			&.grey {
				background-color: #e9ebea;
			}
			&.green {
				background-color: $color-accent;
			}
			&.black {
				background-color: $color-font;
				color: $color-white;
			}
		}
		@media (max-width: 767px) {
			margin-top: -50px;
			.container {
				gap: 15px;
				flex-direction: column;
			}
			.item {
				display: flex;
				text-align: left;
				align-items: center;
				gap: 15px;
				padding: 30px 20px;
				h2 {
					max-width: unset;
					margin: 0;
					font-size: 1rem;
				}
				svg {
					max-width: 24px;
					max-height: 24px;
				}
			}
		}
	}
	.miranda-expert {
		display: flex;
		gap: 80px;
		& > picture {
			flex: 1 1 250px;
		}
		.texts {
			flex: 1 1 500px;
			align-self: center;
			padding-right: clamp(2rem, calc((100vw - 1440px - 1rem) / 2), calc((100vw - 1440px - 1rem) / 2));
			p {
				font-size: rem(20);
				line-height: em(36, 20);
			}
			ul {
				padding: 0 0 0 30px;
				list-style: none;
				margin: 0 0 50px 0;
				line-height: em(28, 16);
				li {
					display: flex;
					gap: 10px;
					break-inside: avoid-column;
					margin-bottom: 10px;
					&::before {
						content: '+';
						color: $color-accent;
						font-weight: 700;
						font-size: 1.4em;
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
			margin-top: 30px;
			.btn-tertiary {
				width: auto;
				max-width: unset;
				padding: 0.9375em 1.875em;
			}
		}
		.perex {
			padding: 30px 40px;
			background-color: rgba($color-font, 0.1);
			p {
				margin: 0;
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
			.texts {
				padding-right: 0;
			}
			& > picture {
				max-height: 240px;
				overflow: hidden;
			}
		}
		@media (max-width: 767px) {
			padding: 0 20px;
			.texts {
				ul {
					margin-bottom: 30px;
				}
				p {
					font-size: rem(18);
				}
			}
			.perex {
				padding: 20px;
			}
			.buttons {
				flex-direction: column;
				gap: 15px;
				a,
				button {
					justify-content: center;
				}
			}
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
	.deset-bodu {
		.columns {
			gap: 50px;
		}
		h2 {
			margin-top: 0;
		}

		.buttons {
			margin-top: 60px;
		}
		@media (max-width: 767px) {
			.columns {
				gap: 20px;
			}
			.texts {
				width: 100%;
			}
			.buttons {
				margin-top: 0;
			}
		}
		:deep(.swiper-pagination) {
			width: auto;
			display: inline-flex;
			margin-left: auto;
			margin-right: auto;
			background-color: $color-font;
			padding: 0;
			margin-top: 20px;
			border-radius: 9999px;
		}
		:deep(.swiper-pagination-bullet) {
			margin: 0 !important;
		}
	}
	.custom-ol {
		list-style: none;
		counter-reset: counter;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 30px;
		margin: 0;
		padding: 0;
		li {
			counter-increment: counter;
			line-height: em(28);
			&::before {
				content: '0' counter(counter);
				display: block;
				color: $color-accent;
				font-weight: 700;
				font-size: rem(32);
				line-height: em(42, 32);
			}
		}
		@media (max-width: 767px) {
			display: block;
			:deep(.swiper-wrapper) {
				gap: 20px;
			}
		}
	}
	.letter {
		.container {
			padding: 80px 100px;
			background-color: rgba($color-font, 0.1);
			gap: 80px;
		}
		h2 {
			margin-top: 0;
		}
		p {
			font-size: rem(20);
			line-height: em(36, 20);
		}
		.author {
			margin-top: auto;
			align-self: flex-end;
			text-align: right;
			strong {
				display: block;
				color: $color-accent;
				font-size: rem(32);
			}
		}
		@media (max-width: 1200px) {
			.container {
				padding: 50px;
			}
		}
		@media (max-width: 767px) {
			.container {
				padding: 20px;
			}
			.columns {
				gap: 30px;
			}
			p {
				font-size: rem(18);
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
			margin-top: 40px;
			.btn-ghost-accent {
				display: inline-flex;
				align-items: center;
				gap: 1em;
			}
		}
		.container {
			max-width: 980px;
		}
		h2 {
			margin: 0;
			font-size: rem(40);
		}
		@media (max-width: 767px) {
			padding: 40px 0;
			h2 {
				font-size: rem(28);
			}
		}
	}

	.miranda-grid {
		display: grid;
		grid-template-columns: repeat(6, minmax(1px, 1fr));
		gap: 20px;
		margin-top: 60px;
		.item {
			grid-column-end: span 2;
			h2 {
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
			background-color: rgba($color-font, 0.1);
			.buttons {
				margin-top: 20px;
			}
			.project-phone {
				display: inline-flex;
				align-items: center;
				gap: 1em;
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
				&.image.large:not(.mobile-wide),
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
		@media (max-width: 767px) {
			h3 {
				font-size: 1rem;
			}
			.texts span {
				font-size: rem(12);
			}
		}
	}
	.step {
		&.contact-us {
			padding: 20px;
			background-color: $color-font;
			height: 100%;
			color: $color-white;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			h3 {
				font-size: rem(40);
				line-height: em(46, 40);
				margin-top: 0;
			}
			small {
				display: block;
				font-size: em(24, 40);
			}
			.project-phone {
				color: $color-white;
				text-decoration: none;
				font-weight: 700;
				margin-bottom: 40px;
			}
			@media (max-width: 767px) {
				h3 {
					margin-bottom: 15px;
					font-size: rem(28);
				}
				.project-phone {
					margin-bottom: 15px;
				}
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
	.banner-study {
		position: relative;
		.texts {
			position: absolute;
			top: 50%;
			left: 30%;
			transform: translateY(-50%);
			img {
				width: auto;
			}
		}
		h3 {
			font-size: rem(52);
			line-height: em(64, 52);
			margin: em(15, 52) 0 em(25, 52);
			font-weight: 900;
			color: $color-white;
			small {
				display: block;
				font-size: em(24, 52);
				line-height: em(32, 24);
				font-weight: 400;
			}
		}
		.accent {
			color: $color-accent;
		}
		.black {
			color: $color-font;
		}
		.detail-button {
			display: inline-flex;
			align-items: center;
			color: $color-white;
			text-decoration: none;
			svg {
				margin-left: 10px;
				transform: translateX(0);
				transition: transform 0.3s ease;
			}
			&:hover {
				svg {
					transform: translateX(10px);
				}
			}
			&.mobile {
				display: none;
			}
		}
		@media (max-width: 1150px) {
			h3 {
				font-size: rem(36);
			}
		}
		@media (max-width: 880px) {
			.texts {
				transform: none;
				left: 50px;
				top: 50px;
				right: 50px;
			}
			.detail-button {
				display: none;
				&.mobile {
					display: block;
					position: absolute;
					bottom: 50px;
					right: 50px;
				}
			}
		}
		@media (max-width: 640px) {
			h3 {
				font-size: rem(27);
			}
			.texts {
				left: 20px;
				top: 20px;
				right: 20px;
			}
			.detail-button.mobile {
				bottom: 20px;
				right: 20px;
			}
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
</style>
