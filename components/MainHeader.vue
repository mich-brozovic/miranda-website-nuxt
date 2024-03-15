<template>
	<header :class="{
		'scrolled-up': scrolledUp,
		'fade-in': fadeIn,
		'fade-out': fadeOut,
		'submenu-visible': submenuVisible,
		'header-black': headerBlack,
	}">
		<NuxtLink to="/" class="logo">
			<svg width="67" height="55" viewBox="0 0 67 55" xmlns="http://www.w3.org/2000/svg">
				<title>MirandaMedia Group s.r.o.</title>
				<path
					d="M0 0H6.76955V6.54484H0V0ZM0 8.08755H6.76955V14.6324H0V8.08755ZM0 16.1517H6.76955V22.6966H0V16.1517ZM0 24.2159H6.76955V30.7607H0V24.2159ZM0 32.3034H6.76955V38.8483H0V32.3034ZM0 40.3676H6.76955V46.9125H0V40.3676ZM0 48.4552H6.76955V55H0V48.4552ZM8.60104 0H15.3706V6.54484H8.60104V0ZM8.60104 8.08755H15.3706V14.6324H8.60104V8.08755ZM8.60104 16.1517H15.3706V22.6966H8.60104V16.1517ZM8.60104 24.2159H15.3706V30.7607H8.60104V24.2159ZM8.60104 32.3034H15.3706V38.8483H8.60104V32.3034ZM8.60104 40.3676H15.3706V46.9125H8.60104V40.3676ZM8.60104 48.4552H15.3706V55H8.60104V48.4552ZM17.2253 8.08755H23.9948V14.6324H17.2253V8.08755ZM17.2253 16.1517H23.9948V22.6966H17.2253V16.1517ZM17.2253 24.2159H23.9948V30.7607H17.2253V24.2159ZM17.2253 32.3034H23.9948V38.8483H17.2253V32.3034ZM25.8263 16.1517H32.5959V22.6966H25.8263V16.1517ZM25.8263 24.2159H32.5959V30.7607H25.8263V24.2159ZM25.8263 32.3034H32.5959V38.8483H25.8263V32.3034ZM25.8263 40.3676H32.5959V46.9125H25.8263V40.3676ZM34.4273 16.1517H41.1969V22.6966H34.4273V16.1517ZM34.4273 24.2159H41.1969V30.7607H34.4273V24.2159ZM34.4273 32.3034H41.1969V38.8483H34.4273V32.3034ZM34.4273 40.3676H41.1969V46.9125H34.4273V40.3676ZM43.0284 8.08755H49.7979V14.6324H43.0284V8.08755ZM43.0284 16.1517H49.7979V22.6966H43.0284V16.1517ZM43.0284 24.2159H49.7979V30.7607H43.0284V24.2159ZM43.0284 32.3034H49.7979V38.8483H43.0284V32.3034ZM51.6294 0H58.399V6.54484H51.6294V0ZM51.6294 8.08755H58.399V14.6324H51.6294V8.08755ZM51.6294 16.1517H58.399V22.6966H51.6294V16.1517ZM51.6294 24.2159H58.399V30.7607H51.6294V24.2159ZM51.6294 32.3034H58.399V38.8483H51.6294V32.3034ZM51.6294 40.3676H58.399V46.9125H51.6294V40.3676ZM51.6294 48.4552H58.399V55H51.6294V48.4552ZM60.2305 0H67V6.54484H60.2305V0ZM60.2305 8.08755H67V14.6324H60.2305V8.08755ZM60.2305 16.1517H67V22.6966H60.2305V16.1517ZM60.2305 24.2159H67V30.7607H60.2305V24.2159ZM60.2305 32.3034H67V38.8483H60.2305V32.3034ZM60.2305 40.3676H67V46.9125H60.2305V40.3676ZM60.2305 48.4552H67V55H60.2305V48.4552Z">
				</path>
			</svg>
		</NuxtLink>
		<nav v-if="screenWidth >= 1300">
			<ul>
				<li>
					<NuxtLink to="/o-nas">O nás</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/pripadove-studie">Případové studie</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/shoptetnamiru">Shoptet na míru</NuxtLink>
				</li>
				<li class="has-children">
					<NuxtLink to="/sluzby">Služby</NuxtLink>
					<ul class="menu-level-2">
						<li>
							<NuxtLink to="/sprava-ppc-kampani">Správa PPC kampaní</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/audit-ppc">Audit PPC</NuxtLink>
						</li>
					</ul>
				</li>
				<li>
					<NuxtLink to="/clanky">Blog</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/kariera">Kariéra</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/kontakty">Kontakty</NuxtLink>
				</li>
			</ul>
		</nav>
		<nav v-else id="mobile-navigation">
			<div class="hamburger" @click.prevent="submenuVisible ? (submenuVisible = false) : (submenuVisible = true)">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul>
				<li>
					<NuxtLink to="/o-nas">O nás</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/pripadove-studie">Případové studie</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/shoptetnamiru">Shoptet na míru</NuxtLink>
				</li>
				<li class="has-children">
					<NuxtLink to="/sluzby">
						Služby
						<span class="submenu-arrow" @click.prevent="openSubmenu"></span>
					</NuxtLink>
					<ul class="menu-level-2">
						<li>
							<NuxtLink to="/sprava-ppc-kampani">Správa PPC kampaní</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/audit-ppc">Audit PPC</NuxtLink>
						</li>
					</ul>
				</li>
				<li>
					<NuxtLink to="/clanky">Blog</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/kariera">Kariéra</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/kontakty">Kontakty</NuxtLink>
				</li>
				<li class="language-switcher mobile">
					<a href="https://mirandamedia.sk/">
						<svg id="sk" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path id="Path_6" data-name="Path 6"
								d="M7.225,8H29.853A12,12,0,0,0,18.548,0H18.53A12,12,0,0,0,7.225,8Z"
								transform="translate(-6.539)" fill="#f3f4f5" />
							<path id="Path_7" data-name="Path 7" d="M29.853,168.6H7.225a12,12,0,0,0,22.628,0Z"
								transform="translate(-6.539 -152.6)" fill="#ee1c25" />
							<path id="Path_8" data-name="Path 8"
								d="M23.314,92.3a12.011,12.011,0,0,0,0-8H.686a12.011,12.011,0,0,0,0,8Z"
								transform="translate(0 -76.3)" fill="#0b4ea2" />
							<path id="Path_9" data-name="Path 9" d="M137.493,99.277Z"
								transform="translate(-124.445 -89.856)" fill="#f3f4f5" />
							<path id="Path_10" data-name="Path 10" d="M115.379,99.277Z"
								transform="translate(-104.429 -89.856)" fill="#f3f4f5" />
							<path id="Path_11" data-name="Path 11" d="M117.374,91.325Z"
								transform="translate(-106.235 -82.658)" fill="#f3f4f5" />
							<path id="Path_12" data-name="Path 12"
								d="M42.435,63.841c-2.412-1.162-5.863-3.468-5.863-8.03s.218-6.637.218-6.637H48.079s.218,2.075.218,6.637-3.45,6.868-5.863,8.03Z"
								transform="translate(-33.102 -44.508)" fill="#fff" />
							<path id="Path_13" data-name="Path 13"
								d="M47.051,69.009c-2.213-1.066-5.379-3.182-5.379-7.367s.2-6.089.2-6.089H52.229s.2,1.9.2,6.089S49.264,67.943,47.051,69.009Z"
								transform="translate(-37.718 -50.282)" fill="#ee1c25" />
							<path id="Path_14" data-name="Path 14"
								d="M67.515,65.187a8.614,8.614,0,0,0,2.809-.315s-.027.373-.027.806.027.807.027.807a9.04,9.04,0,0,0-2.809-.318v2.312h-.947V66.167a9.04,9.04,0,0,0-2.809.318s.027-.373.027-.807-.027-.806-.027-.806a8.614,8.614,0,0,0,2.809.315V63.735a6.642,6.642,0,0,0-2.223.319s.027-.373.027-.807-.027-.806-.027-.806a6.648,6.648,0,0,0,2.221.319,12.9,12.9,0,0,0-.3-2.078s.551.043.771.043.772-.043.772-.043a12.909,12.909,0,0,0-.3,2.078,6.64,6.64,0,0,0,2.22-.319s-.027.373-.027.806.027.806.027.806a6.642,6.642,0,0,0-2.223-.319v1.452Z"
								transform="translate(-57.708 -54.923)" fill="#fff" />
							<path id="Path_15" data-name="Path 15"
								d="M57.252,140.2c-1.114,0-1.711,1.546-1.711,1.546a1.366,1.366,0,0,0-1.241-.733,1.749,1.749,0,0,0-1.357,1.054,10.225,10.225,0,0,0,4.308,3.556,10.227,10.227,0,0,0,4.31-3.556,1.75,1.75,0,0,0-1.357-1.054,1.369,1.369,0,0,0-1.242.733S58.366,140.2,57.252,140.2Z"
								transform="translate(-47.919 -126.895)" fill="#0b4ea2" />
						</svg>
						SK
					</a>
				</li>
			</ul>
		</nav>
		<div class="contacts">
			<a href="tel:00420732264251" class="project-phone">
				<!--				<span
					class="status"
					:class="{ online: actualHour >= 9 && actualHour < 17 }"></span>-->
				+420 732 264 251
			</a>
			<a href="mailto:info@mirandamedia.cz" class="project-mail"> info@mirandamedia.cz </a>
		</div>
		<div class="language-switcher">
			<a href="https://www.mirandamedia.sk/">SK</a>
		</div>
	</header>
</template>
<script setup>
const screenWidth = useState('screenWidth')
const submenuVisible = useState('submenuVisible', () => false)
const headerBlack = useState('headerBlack', () => false)

const router = useRouter()
router.beforeEach((to, from, next) => {
	submenuVisible.value = false
	next()
})

// HANDLE STATUS LIGHT
// const actualHour = ref(0)
// const isHoliday = ref(false)
// const { data, error } = await useAsyncData('holidayAPI', () => $fetch('https://svatkyapi.cz/api/day/'))
// if (!error) isHoliday.value = data.value.isHoliday
// const day = ref(new Date().getDay())
// if (day === 0 || day === 6 || isHoliday.value) {
// 	actualHour.value = 18
// } else {
// 	actualHour.value = new Date().getHours()
// }

// setInterval(() => {
// 	actualHour.value = new Date().getHours()
// }, 60000)

// HANDLE SCROLL
const scrolledUp = ref(false)
const fadeIn = ref(false)
const fadeOut = ref(false)
const scrollBefore = ref(0)
const handleScroll = () => {
	const scroll = window.scrollY
	if (scroll > 300 && scrollBefore.value > scroll) {
		scrolledUp.value = true
		fadeIn.value = true
	} else {
		if (fadeIn.value) {
			fadeOut.value = true
			fadeIn.value = false
			setTimeout(() => {
				fadeOut.value = false
				scrolledUp.value = false
			}, 300)
		}
	}
	scrollBefore.value = scroll
}
const openSubmenu = (e) => {
	const parent = e.target.closest('.has-children')
	if (parent) parent.classList.toggle('submenu-visible')
}
onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})
</script>
<style lang="scss" scoped>
header {
	padding: 70px;
	display: flex;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;

	a {
		display: inline-block;
		text-decoration: none;
		color: $color-white;
	}

	&.scrolled-up {
		position: fixed;
		background-color: rgba($color-font, 0.9);
		padding-top: 20px;
		padding-bottom: 20px;
		backdrop-filter: blur(10px);
	}

	&.fade-in {
		animation: fade-in 0.3s ease-in-out;
	}

	&.fade-out {
		animation: fade-out 0.3s ease-in-out;
	}

	&.submenu-visible {
		position: fixed;
		top: 0;
	}
}

.header-black header:not(.scrolled-up) {
	.logo svg {
		fill: $color-font;
	}

	nav ul a,
	a {
		color: $color-font;
	}

	.hamburger span {
		background-color: $color-font;
	}
}

.logo {
	position: relative;
	z-index: 2;

	svg {
		fill: $color-white;
		transition: all 0.3s ease-in-out;
	}
}

nav {
	margin-left: auto;

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;

		a {
			padding: em(15);
			border: 1px solid transparent;

			&:hover,
			&:focus {
				color: $color-accent;
				border-color: $color-accent;
				box-shadow: 0 0 15px rgba($color-accent, 0.3);
			}
		}
	}

	.menu-level-2 {
		display: none;
		position: absolute;
		top: 100%;
		flex-direction: column;
		white-space: nowrap;
		padding: 10px;
		gap: 10px;
		background-color: $color-font;

		a {
			color: $color-white !important;
		}
	}

	li {
		&.has-children {
			position: relative;

			&:hover,
			&:focus {
				.menu-level-2 {
					display: flex;
				}
			}
		}
	}
}

.contacts {
	padding-left: 20px;
	margin-left: 20px;
	border-left: 2px solid $color-accent;
	position: relative;

	a {
		display: block;
		line-height: 1.4em;
		position: relative;

		&:hover {
			color: $color-green;
		}
	}

	.project-phone {
		font-weight: 700;
		display: flex;
		align-items: center;
	}

	/*.project-mail {
			padding-left: 38px;
		}*/
}

.language-switcher {
	position: relative;
	margin-left: 30px;
	display: inline-block;

	&.mobile {
		display: none;
		margin: 0;

		a {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;

			svg {
				margin-right: 5px;
			}
		}
	}

	a {
		&:hover {
			color: $color-green;
		}
	}
}

.status {
	display: inline-block;
	width: 26px;
	height: 26px;
	border-radius: 50%;
	border: 3px solid $color-white;
	box-shadow: 0 0 20px $color-white;
	top: 0;
	left: 20px;
	margin-right: 10px;
	background: radial-gradient(50% 50% at 50% 50%, #ffc896 0%, #d73f3f 100%);

	&.online {
		background: radial-gradient(50% 50% at 50% 50%, #a5ff96 0, #59dc8e 100%);
	}
}

@keyframes fade-in {
	0% {
		transform: translateY(-100%);
	}

	100% {
		transform: none;
	}
}

@keyframes fade-out {
	0% {
		transform: none;
	}

	100% {
		transform: translateY(-100%);
	}
}

.hamburger {
	cursor: pointer;
	position: relative;
	z-index: 1;

	span {
		height: 3px;
		border-radius: 9999px;
		width: 45px;
		display: block;
		background-color: $color-white;
		transition: all 0.3s ease-in;

		&:not(:last-of-type) {
			margin-bottom: 7px;
		}
	}
}

.submenu-visible {
	.hamburger {
		span {
			background-color: $color-font;
		}

		span:nth-of-type(2) {
			transform: translateX(100%);
			opacity: 0;
			visibility: hidden;
		}

		span:first-of-type {
			transform: rotate(45deg) translateY(7px) translateX(7px);
		}

		span:last-of-type {
			transform: rotate(-45deg) translateY(-7px) translateX(7px);
		}
	}

	.contacts {
		.status {
			border-color: $color-font;
			box-shadow: 0 0 20px rgba($color-font, 0.2);
		}

		a {
			color: $color-font;
		}
	}

	.language-switcher {
		a {
			color: $color-font;

			&:hover {}
		}
	}

	#mobile-navigation>ul {
		max-width: 480px;
	}
}

#mobile-navigation {
	&>ul {
		transition: all 0.3s ease-in-out;
		position: fixed;
		top: 0;
		right: 0;
		flex-direction: column;
		background-color: $color-white;
		max-width: 0;
		width: 100%;
		height: 100vh;
		padding: 170px 0 0;

		a {
			color: $color-font;
			width: 100%;

			&:hover,
			&:focus {
				border-color: transparent;
				background-color: rgba($color-accent, 0.3);
			}
		}

		li {
			&.has-children {
				&>a {
					display: flex;
					align-items: center;
					gap: 20px;
					justify-content: space-between;
				}

				&.submenu-visible {
					.submenu-arrow {
						transform: rotate(-135deg);
					}

					.menu-level-2 {
						display: flex;
					}
				}

				.submenu-arrow {
					padding: 3px;
					transform: rotate(45deg);
					transition: all 0.15s ease-in-out;

					&::before {
						content: '';
						display: block;
						width: 12px;
						height: 12px;
						border: 2px solid $color-font;
						border-style: none solid solid none;
					}
				}
			}

			.menu-level-2 {
				position: initial;
				background-color: transparent;

				a {
					color: $color-font !important;
				}
			}
		}
	}
}

@media (max-width: 991px) {
	header {
		padding: 20px;
	}

	#mobile-navigation>ul {
		padding-top: 90px;
	}
}

@media (max-width: 620px) {
	.contacts {
		display: none;
	}

	.language-switcher {
		display: none;

		&.mobile {
			display: inline-block;
		}
	}

	.logo {
		svg {
			width: 42px;
		}
	}

	.submenu-visible {
		.logo {
			svg {
				fill: $color-accent;
			}
		}

		#mobile-navigation>ul {
			max-width: 620px;
		}
	}
}
</style>
