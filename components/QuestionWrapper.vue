<template>
	<article class="question-wrapper">
		<div class="question" @click="toggleAnswer">
			<slot name="question"></slot>
		</div>
		<div class="answer">
			<slot name="answer"></slot>
		</div>
	</article>
</template>
<script setup>
	const toggleAnswer = (e) => {
		e.target.closest('.question-wrapper').classList.toggle('active')
	}
</script>
<style lang="scss" scoped>
	:slotted(h3) {
		font-size: rem(32);
		margin: 0;
		display: inline-flex;
		gap: 0.3em;
		em {
			font-style: normal;
			color: $color-accent;
			white-space: nowrap;
		}
	}
	:slotted(h4) {
		margin: 1.5em 0 0.5em;
	}
	:slotted(ul, ol) {
		margin-top: 0;
	}
	:slotted(p) {
		line-height: inherit;
	}
	.question-wrapper {
		border-bottom: 1px solid rgba($color-font, 0.2);
		margin-bottom: 30px;

		.question {
			padding: 0 40px 30px;
			display: flex;
			align-items: center;
			gap: 20px;
			justify-content: space-between;
			cursor: pointer;
			&::after {
				content: '';
				display: block;
				width: 20px;
				height: 20px;
				border: 3px solid $color-accent;
				border-style: none solid solid none;
				transform: rotate(45deg);
				transition: all 0.15s ease-in-out;
			}
		}
		.answer {
			background-color: rgba($color-font, 0.05);
			line-height: em(28, 16);
			max-height: 0;
			overflow: hidden;
			padding: 0 170px;
			transition: all 0.15s ease-in-out;
		}
		&.active {
			.answer {
				padding: 60px 170px;
				max-height: 5000px;
			}
			.question::after {
				transform: rotate(-135deg);
			}
		}
	}
	:slotted(.grid-3) {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 30px 25px;
		h4 {
			font-size: 1rem;
			line-height: em(28, 16);
			margin: 0 0 em(10);
		}
	}
</style>
