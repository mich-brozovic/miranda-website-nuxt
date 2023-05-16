<template lang="">
	<div class="form-wrapper">
		<div class="columns col-2 align-center container">
			<div class="column">
				<h2>Mám zájem o spolupráci</h2>
				<p>Zanechte nám na sebe kontakt, spojíme se s vámi.</p>
				<a
					href="tel:00420732264251"
					class="project-phone">
					<svg
						width="23"
						height="22"
						viewBox="0 0 23 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M21.0024 15.9201V18.9201C21.0035 19.1986 20.9465 19.4743 20.8349 19.7294C20.7233 19.9846 20.5597 20.2137 20.3545 20.402C20.1492 20.5902 19.9069 20.7336 19.6431 20.8228C19.3793 20.912 19.0997 20.9452 18.8224 20.9201C15.7452 20.5857 12.7894 19.5342 10.1924 17.8501C7.7762 16.3148 5.72771 14.2663 4.19237 11.8501C2.50235 9.2413 1.45062 6.27109 1.12237 3.1801C1.09739 2.90356 1.13025 2.62486 1.21887 2.36172C1.3075 2.09859 1.44995 1.85679 1.63714 1.65172C1.82434 1.44665 2.05218 1.28281 2.30617 1.17062C2.56015 1.05843 2.83472 1.00036 3.11237 1.0001H6.11237C6.59768 0.995321 7.06817 1.16718 7.43614 1.48363C7.80411 1.80008 8.04445 2.23954 8.11237 2.7201C8.239 3.68016 8.47382 4.62282 8.81238 5.5301C8.94692 5.88802 8.97604 6.27701 8.89628 6.65098C8.81653 7.02494 8.63124 7.36821 8.36237 7.6401L7.09237 8.9101C8.51593 11.4136 10.5888 13.4865 13.0924 14.9101L14.3624 13.6401C14.6343 13.3712 14.9775 13.1859 15.3515 13.1062C15.7255 13.0264 16.1145 13.0556 16.4724 13.1901C17.3796 13.5286 18.3223 13.7635 19.2824 13.8901C19.7681 13.9586 20.2118 14.2033 20.5289 14.5776C20.846 14.9519 21.0145 15.4297 21.0024 15.9201Z"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
					+420 732 264 251
				</a>
				<p>Pondělí - Pátek: <strong>9:00 - 17:00</strong></p>
				<a
					href="mailto:info@mirandamedia.cz"
					class="project-mail">
					<svg
						width="25"
						height="24"
						viewBox="0 0 25 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
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
			</div>
			<div class="column form-col">
				<div v-if="formSending">Odesílám...</div>
				<div v-else-if="formSent">Formulář byl v pořádku odeslán, naši accounti se Vám co nejdříve ozvou.</div>
				<form
					v-else
					@submit.prevent="sendForm">
					<div class="form-row">
						<input
							type="text"
							id="jemno"
							name="jmeno"
							placeholder="Jméno a příjmení*"
							:ref="form.jmeno"
							required />
					</div>
					<div class="form-row">
						<input
							type="email"
							id="email"
							name="email"
							placeholder="E-mail*"
							:ref="form.email"
							required />
					</div>
					<div class="form-row">
						<input
							type="phone"
							id="phone"
							name="phone"
							placeholder="Telefon"
							:ref="form.phone" />
					</div>
					<div class="form-row">
						<textarea
							id="message"
							name="message"
							placeholder="Váš vzkaz"
							rows="5"
							:ref="form.message"></textarea>
					</div>
					<div class="form-row">
						<input
							type="checkbox"
							name="consent"
							id="consent"
							readonly
							checked
							required />
						<label for="consent">
							<strong>Odesláním</strong> souhlasíte s
							<NuxtLink to="/zpracovani-osobnich-udaju">Podmínkami zpracování osobních údajů</NuxtLink>.
						</label>
					</div>
					<button class="btn btn-primary">
						<span>Odeslat poptávku</span>
					</button>
				</form>
			</div>
		</div>
	</div>
</template>
<script setup>
	const form = {
		jmeno: ref(null),
		email: ref(null),
		phone: ref(null),
		message: ref(null),
	}
	const formSending = useState('formSending', () => false)
	const formSent = useState('formSent', () => false)

	const sendForm = async (e) => {
		e.preventDefault()
		try {
			formSending.value = true
			const response = await $fetch(getStrapiURL('/api/ezforms/submit'), {
				method: 'POST',
				body: JSON.stringify({
					formData: {
						jmeno: form.jmeno.value.value,
						email: form.email.value.value,
						phone: form.phone.value.value,
						message: form.message.value.value,
					},
				}),
			})
			formSending.value = false
			formSent.value = true
		} catch (e) {
			console.log(e)
		}
	}
</script>
<style lang="scss" scoped>
	.form-wrapper {
		padding: 190px 0 100px;
		background: url(/contact-form-bg.jpg) no-repeat center center;
		background-size: cover;
		color: $color-white;
		@include overlay;
		.container {
			position: relative;
			z-index: 1;
		}
		form a {
			color: $color-white;
		}
		.columns {
			gap: 20px;
		}
		h2 {
			margin-top: 0;
		}
		p {
			margin-top: 0;
		}
		button {
			cursor: pointer;
		}
	}
	#consent {
		@include sr-only;
	}
	.form-col {
		max-width: 570px;
	}
	.project-mail,
	.project-phone {
		display: flex;
		align-items: center;
		gap: 10px;
		margin: 0;
		font-size: rem(24);
		text-decoration: none;
		font-weight: 700;
		color: $color-white;
	}
	@media (max-width: 767px) {
		.form-wrapper {
			padding: 40px 0;
			text-align: center;
		}
		.project-mail,
		.project-phone {
			justify-content: center;
			font-size: 1.4rem;
		}
	}
</style>
