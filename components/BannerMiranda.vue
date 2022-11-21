<template>
	<div class="banner-miranda">
		<div class="container">
			<h2>Tady začínají nové příběhy</h2>
			<p>
				Miranda od počátku tvrdí, že je to hlavně o lidech, co umí vzít za práci a do každýho projektu přinesou pořádnej zápal a nadšení! Tahle energie
				se šíří napříč celým týmem. Není pak divu, že vznikaj projekty, na které jsme právem pyšní!
			</p>
			<BtnPrimary url="/kontakty" text="Spojit se s Mirandou" />
		</div>
	</div>
</template>
<script></script>
<style lang="scss">
	.banner-miranda {
		background: url(/banner-miranda.jpg) center no-repeat;
		background-size: cover;
		color: $color-white;
		text-align: center;
		padding: 100px 0;
		.container {
			max-width: 670px;
		}
		h2 {
			margin-bottom: 0;
		}
	}
</style>
