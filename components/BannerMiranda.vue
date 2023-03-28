<template>
	<div class="banner-miranda">
		<NuxtPicture
			class="background-image"
			src="/banner-miranda.jpg"
			:imgAttrs="{ style: 'width:100%; height:100%; object-fit:cover;' }"
			loading="lazy" />
		<div class="container">
			<h2>Tady začínají nové příběhy</h2>
			<p>
				Miranda od počátku tvrdí, že je to hlavně o lidech, co umí vzít za práci a do každýho projektu přinesou pořádnej zápal a
				nadšení! Tahle energie se šíří napříč celým týmem. Není pak divu, že vznikaj projekty, na které jsme právem pyšní!
			</p>
			<BtnPrimary
				url="/kontakty"
				text="Spojit se s Mirandou" />
		</div>
	</div>
</template>
<script></script>
<style lang="scss">
	.banner-miranda {
		color: $color-white;
		text-align: center;
		padding: 100px 0;
		position: relative;
		.container {
			max-width: 670px;
			position: relative;
		}
		h2 {
			margin-bottom: 0;
		}
		.background-image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
