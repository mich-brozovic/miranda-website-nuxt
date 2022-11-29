<template lang="">
	<div class="form-wrapper columns col-2 align-center">
		<div class="column"></div>
		<div class="column">
			<form>
				<div class="form-row">
					<input type="text" id="jemno" name="jmeno" placeholder="Jméno a příjmení" />
				</div>
				<div class="form-row">
					<input type="email" id="email" name="email" placeholder="E-mail*" required />
				</div>
				<div class="form-row">
					<input type="phone" id="phone" name="phone" placeholder="Telefon" />
				</div>
				<div class="form-row">
					<textarea id="message" name="message" placeholder="Váš vzkaz" rows="5"></textarea>
				</div>
				<div class="form-row">
					<input type="checkbox" name="consent" id="consent" readonly checked required />
					<label for="consent">
						<strong>Odesláním</strong> souhlasíte s <NuxtLink to="/ochrana-osobnich-udaju">Podmínkami zpracování osobních údajů</NuxtLink>.
					</label>
				</div>
				<button class="btn btn-primary">
					<span>Odeslat poptávku</span>
				</button>
			</form>
		</div>
	</div>
</template>
<script>
	export default {}
</script>
<style lang=""></style>
