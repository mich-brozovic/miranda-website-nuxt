export async function fetchAPI(id, path, urlParamsObject = {}, options = {}, filters) {
	const mergedOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
		...options,
	}

	const queryString = new URLSearchParams(urlParamsObject).toString()
	let requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`
	requestUrl = filters ? requestUrl + filters : requestUrl

	const { data, error } = await useAsyncData(id, () => $fetch(requestUrl, mergedOptions))
	if (error.value) {
		console.error(error)
		throw new Error('Vyskytla se chyba, zkuste to prosim znovu: ' + requestUrl)
	}

	return data
}
