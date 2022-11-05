<template>
	<main>
		<HeroBig></HeroBig>
		<section id="scroll" class="reference">
			<div class="container">
				<h2 class="text-center">Na co jsme hrdí</h2>
				<div class="text-center container narrow">
					<p>
						Tvoříme ziskové e-shopy a weby pro ty, kteří požadují jen to nejlepší. Spravujeme výkonnostní kampaně a přinášíme dosah sociálním sítím.
						Stojíme za vznikem nových značek a produktů, které hýbou trhem.
					</p>
				</div>
				<ReferenceGrid></ReferenceGrid>
				<div class="buttons-center">
					<BtnSecondary url="/reference" text="Objevit další projekty" />
				</div>
			</div>
		</section>
		<section class="sluzby">
			<div class="container">
				<h2 class="text-center">Miranda je ta pravá</h2>
				<div class="text-center container narrow">
					<p>
						Uvařit pořádně hutnej a dlouhodobej výkon v digitálu není jen tak, ale když se spojí dobrý nápad s vytrvalostí a zápalem a k tomu
						přidáte pár nadšených profíků, může z toho vzniknout něco, na co budete právem pyšní!
					</p>
				</div>
				<SluzbyBlock></SluzbyBlock>
				<div class="buttons-center">
					<BtnSecondary url="/kontakty#kontakt" text="Poptat službu" />
				</div>
			</div>
		</section>
		<section class="proc-miranda">
			<div class="container">
				<div class="columns col-4-6 align-center">
					<div class="column">
						<h2>Proč si začít s Mirandou?</h2>
						<p>
							Protože tahle agenturní dáma umí být věrná a spolehlivá každým coulem. Pro svého zákazníka udělá, co mu na očích vidí a nikdy
							nenechá ležet kdejakou pořádnou výzvu bokem.
						</p>
						<BtnSecondary url="/o-nas" text="Více o nás" />
					</div>
					<div class="column">
						<NuxtPicture src="/proc-miranda-grid.webp" />
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
	.proc-miranda {
		.columns {
			gap: 60px;
		}
		p {
			line-height: 1.8em;
		}
	}
</style>
