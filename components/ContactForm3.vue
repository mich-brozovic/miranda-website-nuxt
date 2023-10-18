<template>
	<div class="contact-ppc">
		<div class="container columns col-2">
			<div class="column">
				<h3>
					Získejte BEZPLATNÝ <br />
					PPC audit
				</h3>
				<p>
					Vyplňte prosím formulář níže.
					<strong>Ozveme se ještě dnes!</strong>
				</p>
			</div>
			<div class="column">
				<div v-if="formSending">Odesílám...</div>
				<div v-else-if="formSent">Formulář byl v pořádku odeslán, naši accounti se Vám co nejdříve ozvou.</div>
				<form v-else @submit.prevent="sendForm">
					<div class="form-row">
						<input type="text" name="fullName" placeholder="Jméno a příjmení *" required :ref="form.jmeno" />
					</div>
					<div class="form-row">
						<input type="text" name="phone" placeholder="Vaše telefonní číslo *" required :ref="form.phone" />
					</div>
					<div class="form-row">
						<input type="text" name="email" placeholder="Váš e-mail *" required :ref="form.email" />
					</div>
					<div class="form-row">
						<input type="text" name="web" placeholder="Webové stránky, na které směrují vaše reklamy" :ref="form.web" />
					</div>
					<div class="form-row">
						<select name="platform" :ref="form.platform">
							<option value="" disabled selected>Platforma auditu</option>
							<option value="Google Ads">Google Ads (AdWords)</option>
							<option value="Facebook/Instagram">Facebook/Instagram</option>
							<option value="Amazaon Advertising">Amazon Advertising</option>
							<option value="Shoptet">Shoptet</option>
							<option value="Bing">Bing</option>
							<option value="Sklik">Sklik</option>
							<option value="Jiná">Jiná</option>
						</select>
					</div>
					<div class="form-row">
						<select name="budget" :ref="form.budget">
							<option value="" disabled selected>Aktuální náklady na reklamu / plánovaný rozpočet</option>
							<option value="10.000/20.000">10 000 CZK / 20 000 CZK</option>
							<option value="20.000/50.000">20 000 CZK / 50 000 CZK</option>
							<option value="50.000/100.000">50 000 CZK / 100 000 CZK</option>
							<option value="100.000/200.000">100 000 CZK / 200 000 CZK</option>
							<option value="200.000/500.000">200 000 CZK / 500 000 CZK</option>
						</select>
					</div>
					<div class="form-row">
						<textarea name="message" placeholder="Vaše zpráva..." rows="5" :ref="form.message"></textarea>
					</div>
					<div class="form-row">
						<button class="btn btn-primary" type="submit"><span>Odeslat</span></button>
					</div>
					<div class="consents">
						Odesláním souhlasíte s <nuxt-link to="/zpracovani-osobnich-udaju">Podmínkami zpracování osobních údajů</nuxt-link>
					</div>
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
		web: ref(null),
		message: ref(null),
		platform: ref(null),
		budget: ref(null),
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
						web: form.web.value.value,
						platform: form.platform.value.value,
						budget: form.budget.value.value,
					},
				}),
			})
			formSending.value = false
			formSent.value = true
			// fbq('track', 'Lead', {
			// 	content_category: 'contact',
			// 	content_name: 'audit-form',
			// })
			fbq('trackCustom', 'LeadAuditForm', {
				content_category: 'contact',
				content_name: 'audit-form',
			})
		} catch (e) {
			console.log(e)
		}
	}
</script>
<style lang="scss" scoped>
	button.btn.btn-primary {
		padding: 0;
	}
	.contact-ppc {
		padding: 100px 0;
		color: $color-white;
		background: url(/contact-form-bg.jpg) no-repeat right center;
		background-size: cover;
		position: relative;
		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(#000, 0.3);
		}
		.columns {
			position: relative;
			gap: 80px;
		}
	}
</style>
