<template>
	<NuxtLink class="btn-secondary" :to="props.url">{{ props.text }}</NuxtLink>
</template>
<script setup>
	const props = defineProps({
		url: String,
		text: String,
	})
</script>
<style lang="scss" scoped>
	.btn-secondary {
		text-decoration: none;
		display: inline-block;
		position: relative;
		padding: 0.625em 1.25em 0.625em 57px;
		color: $color-font;
		&::before {
			content: '';
			display: inline-block;
			width: 42px;
			height: 42px;
			background-color: $color-font;
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
		}
		&::after {
			content: url(/icon/btn-arrow.svg);
			display: inline-block;
			line-height: 0;
			position: absolute;
			top: 50%;
			left: 11px;
			transform: translateY(-50%);
		}
		&:hover,
		&:focus {
			text-decoration: underline;
			&::after {
				animation: slideArrow 0.3s ease-in-out;
			}
		}
	}
	@keyframes slideArrow {
		0% {
			transform: translateY(-50%);
		}
		50% {
			transform: translateY(-50%) translateX(30px);
		}
		51% {
			transform: scale(0);
			opacity: 0;
		}
		52% {
			transform: translateY(-50%) translateX(-30px);
		}
		100% {
			transform: translateY(-50%);
		}
	}
</style>
