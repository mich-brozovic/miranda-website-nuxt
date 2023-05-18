<template>
	<header
		:class="{
			'scrolled-up': scrolledUp,
			'fade-in': fadeIn,
			'fade-out': fadeOut,
			'submenu-visible': submenuVisible,
			'header-black': headerBlack,
		}">
		<NuxtLink
			to="/"
			class="logo">
			<svg
				width="67"
				height="55"
				viewBox="0 0 67 55"
				xmlns="http://www.w3.org/2000/svg">
				<title>MirandaMedia Group s.r.o.</title>
				<path
					d="M0 0H6.76955V6.54484H0V0ZM0 8.08755H6.76955V14.6324H0V8.08755ZM0 16.1517H6.76955V22.6966H0V16.1517ZM0 24.2159H6.76955V30.7607H0V24.2159ZM0 32.3034H6.76955V38.8483H0V32.3034ZM0 40.3676H6.76955V46.9125H0V40.3676ZM0 48.4552H6.76955V55H0V48.4552ZM8.60104 0H15.3706V6.54484H8.60104V0ZM8.60104 8.08755H15.3706V14.6324H8.60104V8.08755ZM8.60104 16.1517H15.3706V22.6966H8.60104V16.1517ZM8.60104 24.2159H15.3706V30.7607H8.60104V24.2159ZM8.60104 32.3034H15.3706V38.8483H8.60104V32.3034ZM8.60104 40.3676H15.3706V46.9125H8.60104V40.3676ZM8.60104 48.4552H15.3706V55H8.60104V48.4552ZM17.2253 8.08755H23.9948V14.6324H17.2253V8.08755ZM17.2253 16.1517H23.9948V22.6966H17.2253V16.1517ZM17.2253 24.2159H23.9948V30.7607H17.2253V24.2159ZM17.2253 32.3034H23.9948V38.8483H17.2253V32.3034ZM25.8263 16.1517H32.5959V22.6966H25.8263V16.1517ZM25.8263 24.2159H32.5959V30.7607H25.8263V24.2159ZM25.8263 32.3034H32.5959V38.8483H25.8263V32.3034ZM25.8263 40.3676H32.5959V46.9125H25.8263V40.3676ZM34.4273 16.1517H41.1969V22.6966H34.4273V16.1517ZM34.4273 24.2159H41.1969V30.7607H34.4273V24.2159ZM34.4273 32.3034H41.1969V38.8483H34.4273V32.3034ZM34.4273 40.3676H41.1969V46.9125H34.4273V40.3676ZM43.0284 8.08755H49.7979V14.6324H43.0284V8.08755ZM43.0284 16.1517H49.7979V22.6966H43.0284V16.1517ZM43.0284 24.2159H49.7979V30.7607H43.0284V24.2159ZM43.0284 32.3034H49.7979V38.8483H43.0284V32.3034ZM51.6294 0H58.399V6.54484H51.6294V0ZM51.6294 8.08755H58.399V14.6324H51.6294V8.08755ZM51.6294 16.1517H58.399V22.6966H51.6294V16.1517ZM51.6294 24.2159H58.399V30.7607H51.6294V24.2159ZM51.6294 32.3034H58.399V38.8483H51.6294V32.3034ZM51.6294 40.3676H58.399V46.9125H51.6294V40.3676ZM51.6294 48.4552H58.399V55H51.6294V48.4552ZM60.2305 0H67V6.54484H60.2305V0ZM60.2305 8.08755H67V14.6324H60.2305V8.08755ZM60.2305 16.1517H67V22.6966H60.2305V16.1517ZM60.2305 24.2159H67V30.7607H60.2305V24.2159ZM60.2305 32.3034H67V38.8483H60.2305V32.3034ZM60.2305 40.3676H67V46.9125H60.2305V40.3676ZM60.2305 48.4552H67V55H60.2305V48.4552Z"></path>
			</svg>
		</NuxtLink>
		<nav v-if="screenWidth >= 1300">
			<ul>
				<li><NuxtLink to="/o-nas">O nás</NuxtLink></li>
				<li><NuxtLink to="/pripadove-studie">Případové studie</NuxtLink></li>
				<li><NuxtLink to="/shoptetnamiru">Shoptet na míru</NuxtLink></li>
				<li><NuxtLink to="/sluzby">Služby</NuxtLink></li>
				<li><NuxtLink to="/blog">Blog</NuxtLink></li>
				<li><NuxtLink to="/kariera">Kariéra</NuxtLink></li>
				<li><NuxtLink to="/kontakty">Kontakty</NuxtLink></li>
			</ul>
		</nav>
		<nav
			v-else
			id="mobile-navigation">
			<div
				class="hamburger"
				@click.prevent="submenuVisible ? (submenuVisible = false) : (submenuVisible = true)">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul>
				<li><NuxtLink to="/o-nas">O nás</NuxtLink></li>
				<li><NuxtLink to="/pripadove-studie">Případové studie</NuxtLink></li>
				<li><NuxtLink to="/shoptetnamiru">Shoptet na míru</NuxtLink></li>
				<li><NuxtLink to="/sluzby">Služby</NuxtLink></li>
				<li><NuxtLink to="/blog">Blog</NuxtLink></li>
				<li><NuxtLink to="/kariera">Kariéra</NuxtLink></li>
				<li><NuxtLink to="/kontakty">Kontakty</NuxtLink></li>
			</ul>
		</nav>
		<div class="contacts">
			<a
				href="tel:00420732264251"
				class="project-phone">
<!--				<span
					class="status"
					:class="{ online: actualHour >= 9 && actualHour < 17 }"></span>-->
				+420 732 264 251
			</a>
			<a
				href="mailto:info@mirandamedia.cz"
				class="project-mail">
				info@mirandamedia.cz
			</a>
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
	const actualHour = ref(0)
	const isHoliday = ref(false)
	const { data, error } = await useAsyncData('holidayAPI', () => $fetch('https://svatkyapi.cz/api/day/'))
	if (!error) isHoliday.value = data.value.isHoliday
	const day = ref(new Date().getDay())
	if (day === 0 || day === 6 || isHoliday.value) {
		actualHour.value = 18
	} else {
		actualHour.value = new Date().getHours()
	}
	setInterval(() => {
		actualHour.value = new Date().getHours()
	}, 60000)

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
			fill: $color-accent;
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
	}
	.contacts {
		padding-left: 20px;
		margin-left: 20px;
		border-left: 2px solid $color-accent;
		position: relative;
		a {
			display: block;
			line-height: 1.4em;
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
		#mobile-navigation ul {
			max-width: 480px;
		}
	}
	#mobile-navigation {
		ul {
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
		}
	}
	@media (max-width: 991px) {
		header {
			padding: 20px;
		}
		#mobile-navigation ul {
			padding-top: 90px;
		}
	}
	@media (max-width: 620px) {
		.contacts {
			display: none;
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
			#mobile-navigation ul {
				max-width: 620px;
			}
		}
	}
</style>
