export default defineNuxtPlugin((nuxtApp) => {
	const cookieControl = useCookieControl()
	const gtm = useGtm()

	if (cookieControl.cookiesEnabledIds.value?.includes('google-analytics')) {
		gtm?.enable()
	}
})
