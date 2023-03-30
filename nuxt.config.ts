// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ['normalize.css/normalize.css'],
	modules: ['@nuxt/image-edge', '@nuxtjs/strapi', 'nuxt-swiper'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/assets/_mixins.scss";
					    @import "@/assets/_variables.scss";
						@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');`,
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
})
