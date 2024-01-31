// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ['normalize.css/normalize.css', '@/assets/global.css'],
	modules: [
		'@nuxtjs/strapi',
		'nuxt-swiper',
		'nuxt-simple-sitemap',
		'@nuxt/image',
		'@dargmuesli/nuxt-cookie-control',
		'@zadigetvoltaire/nuxt-gtm',
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/assets/_mixins.scss";
					    @import "@/assets/_variables.scss";
						@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');`,
				},
			},
		},
	},
	image: {
		provider: 'netlify',
		domains: ['backend.mirandamedia.cz'],
		strapi: {},
	},
	strapi: {
		url: 'https://backend.mirandamedia.cz',
		prefix: '/api',
		version: 'v4',
		cookie: {},
		cookieName: 'strapi_jwt',
	},
	swiper: {
		prefix: 'Swiper',
		styleLang: 'css',
	},
	runtimeConfig: {
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.mirandamedia.cz',
		},
	},
	gtm: {
		id: 'GTM-MDK728Q',
		defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
		compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
		nonce: '2726c7f26c', // Will add `nonce` to the script tag
		enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
		debug: true, // Whether or not display console logs debugs (optional)
		loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
		enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
		trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
	},
	cookieControl: {
		barPosition: 'bottom-full',
		closeModalOnClickOutside: true,
		colors: {
			barBackground: '#fff',
			barButtonBackground: '#59dc8e',
			barButtonColor: '#fff',
			barButtonHoverBackground: '#358455',
			barTextColor: '#222e27',
			checkboxActiveBackground: '#59dc8e',
			checkboxActiveCircleBackground: '#fff',
			checkboxDisabledBackground: '#ddd',
			checkboxDisabledCircleBackground: '#fff',
			checkboxInactiveBackground: '#000',
			checkboxInactiveCircleBackground: '#fff',
			controlButtonBackground: '#59dc8e',
			controlButtonHoverBackground: '#358455',
			controlButtonIconColor: '#fff',
			controlButtonIconHoverColor: '#fff',
			focusRingColor: '#808080',
			modalBackground: '#fff',
			modalButtonBackground: '#59dc8e',
			modalButtonColor: '#fff',
			modalButtonHoverBackground: '#358455',
			modalButtonHoverColor: '#fff',
			modalOverlay: '#000',
			modalOverlayOpacity: 0.8,
			modalTextColor: '#000',
			modalUnsavedColor: '#fff',
		},
		cookies: {
			necessary: [
				{
					description: {
						cs: 'Tento web používá cookies, které jsou nezbytné pro jeho správné fungování.',
					},
					id: 'necessary',
					name: {
						cs: 'Nezbytné',
					},
				},
			],
			optional: [
				{
					description: {
						cs: 'Používáme Google Analytics k měření návštěvnosti webu.',
					},
					id: 'google-analytics',
					name: {
						cs: 'Google Analytics',
					},
					src: 'https://www.googletagmanager.com/gtag/js?id=GTM-MDK728Q',
					targetCookieIds: ['cookie_control_consent', 'cookie_control_enabled_cookies'],
				},
			],
		},
		cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 30,
		cookieNameIsConsentGiven: 'ncc_c',
		cookieNameCookiesEnabledIds: 'ncc_e',
		locales: ['cs'],
	},
	site: {
		url: 'https://www.mirandamedia.cz',
	},
})
