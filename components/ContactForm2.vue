<template lang="">
	<div class="container">
		<div class="form-banner-wrapper">
			<div class="banner">
				<h2>Jdeš do toho?</h2>
				<p>Tenhle formulář odešle Tvoji zprávu rychleji, než řekneš švec. Tak to tam naťukej, ať se můžeme konečně poznat.</p>
			</div>
			<div class="form">
				<div v-if="formSending">Odesílám...</div>
				<div v-else-if="formSent">Formulář byl v pořádku odeslán, naši accounti se Vám co nejdříve ozvou.</div>
				<form v-else @submit.prevent="sendForm">
					<div class="form-wrapper">
						<div class="form-row">
							<input type="text" id="jemno" name="jmeno" placeholder="Jméno*" :ref="form.jmeno" required />
						</div>
						<div class="form-row">
							<input type="text" id="prijemni" name="prijmeni" placeholder="Příjmení*" :ref="form.prijemni" required />
						</div>
						<div class="form-row">
							<input type="email" id="email" name="email" placeholder="E-mail*" :ref="form.email" required />
						</div>
						<div class="form-row">
							<input type="phone" id="phone" name="phone" placeholder="Telefon*" :ref="form.phone" required />
						</div>
						<div class="form-row wide">
							<textarea id="message" name="message" placeholder="Co máte na srdci?" rows="7" :ref="form.message"></textarea>
						</div>
						<div class="form-row wide">
							<input type="text" id="linkedin" name="linkedin" placeholder="Odkaz na LinkedIn profil" :ref="form.linkedin" />
						</div>
						<div class="form-row wide">
							<input type="checkbox" name="consent" id="consent" required />
							<label for="consent">
								Odesláním formuláře souhlasíte se
								<NuxtLink to="/zpracovani-osobnich-udaju">zpracováním osobních údajů.</NuxtLink>
							</label>
						</div>
						<div class="form-row wide file">
							<label for="file">Nahrát soubor</label>
							<input type="file" id="file" name="file" multiple="multiple" required :ref="form.file" />
							<span class="info">Nahrajte prosím soubor typu PDF, DOC(X) nebo ODT.</span>
						</div>
					</div>
					<div class="btn-wrap">
						<button class="btn-secondary">
							<span>Odeslat formulář</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	const form = {
		jmeno: ref(null),
		prijemni: ref(null),
		email: ref(null),
		phone: ref(null),
		message: ref(null),
		linkedin: ref(null),
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
						prijemni: form.prijemni.value.value,
						email: form.email.value.value,
						phone: form.phone.value.value,
						message: form.message.value.value,
						linkedin: form.linkedin.value.value,
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
	form {
		max-width: 600px;
		margin: 0 auto;
	}
	.form-banner-wrapper {
		display: flex;
		box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 0.15);
		background-color: $color-white;
		z-index: 10;
		position: relative;
	}
	.banner {
		flex: 1 1 560px;
		background-image: url('/kariera/form-bg.jpg');
		background-size: cover;
		background-position: center;
		padding: 66px;
		color: $color-white;
		h2 {
			margin-top: 0;
			margin-bottom: 20px;
		}
	}
	.form {
		flex: 1 1 880px;
		padding: 50px;
		padding-top: 66px;
		padding-bottom: 120px;
	}
	.form-wrapper {
		display: grid;
		grid-template-columns: repeat(2, minmax(1px, 1fr));
		gap: 20px;
		.wide {
			grid-column-end: span 2;
		}
		.form-row {
			margin: 0;
			input[type='text'],
			input[type='email'],
			input[type='phone'],
			textarea {
				background-color: #f2f2f2;
				border: 1px solid #d3d5d4;
				color: $color-font;
				&::placeholder {
					color: #bdc1bf;
				}
			}
			input[type='checkbox'] {
				display: none;
			}
			input[type='checkbox'] + label {
				position: relative;
				padding-left: 34px;
				line-height: 24px;
				display: inline-block;
				&::before {
					content: '';
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					width: 24px;
					height: 24px;
					border: 1px solid #d3d5d4;
					display: block;
				}
				a {
					color: inherit;
				}
			}
			input[type='checkbox']:checked + label {
				&::before {
					background-image: url('/kariera/checkbox.svg');
					background-position: center;
					background-repeat: no-repeat;
					background-color: $color-green;
					border-color: $color-green;
				}
			}
		}
		.file {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 20px;
			row-gap: 10px;
			margin-top: 20px;
			label {
				padding: 15px;
				border: 2px solid $color-font;

				display: inline-flex;
				align-items: center;
				gap: 10px;
				cursor: pointer;
				&::before {
					content: url('/kariera/file.svg');
				}
			}
			input::file-selector-button {
				display: none;
			}
			input {
				color: $color-font-gray;
			}
			.info {
				width: 100%;
				font-size: rem(12);
				list-style: 2em;
			}
		}
	}
	@media (max-width: 1200px) {
		.banner {
			padding: 30px;
		}
	}
	@media (max-width: 930px) {
		.form-banner-wrapper {
			flex-direction: column;
		}
		.banner {
			flex: unset;
			background-image: url('/kariera/form-bg-small.jpg');
			background-position: top;
			padding: 50px;
		}
		form {
			max-width: 100%;
		}
	}
	@media (max-width: 767px) {
		.banner {
			padding: 30px;
		}
		.form {
			padding: 40px 20px;
		}
		.form-row {
			grid-column-end: span 2;
		}
	}
	.btn-wrap {
		display: flex;
		justify-content: center;
		margin-top: 40px;
	}
</style>
