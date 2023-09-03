<template>
	<NuxtLink :to="props.url" class="btn-primary">
		<span><slot></slot>{{ props.text }}</span>
	</NuxtLink>
</template>
<script setup>
	const props = defineProps(['url', 'text'])
</script>
<style lang="scss">
	.btn-primary {
		padding: 0;
		display: inline-block;
		position: relative;
		color: $color-font;
		background-color: $color-white;
		text-decoration: none;
		transition: all 0.4s ease-in-out;
		overflow: hidden;
		span {
			display: flex;
			align-items: center;
			gap: 1em;
			position: relative;
			z-index: 1;
			padding: 1.25em;
			svg {
				stroke: $color-font;
				transition: all 0.4s ease-in-out;
			}
		}
		a {
			display: flex;
			align-items: center;
			gap: 10px;
			position: relative;
			z-index: 1;
			padding: 1.25em;
			color: $color-font;
			font-weight: 700;
			text-decoration: none;
			transition: color 0.3s ease-in-out;
			svg path {
				transition: all 0.3s ease-in-out;
			}
			&:hover,
			&:focus {
				color: $color-white;
				svg path {
					stroke: $color-white;
				}
			}
		}
		&::before,
		&::after {
			content: '';
			display: block;
			height: 100%;
			position: absolute;
			top: 0;
		}
		&::before {
			width: 30px;
			background-color: hsla(0, 0%, 100%, 0.3);
			right: calc(100% + 20px);
			transform: skew(-20deg);
			transition: all 0.4s ease-in-out 0.2s;
			z-index: 1;
		}
		&::after {
			right: 0;
			width: 0;
			background-color: $color-accent;
			transition: all 0.4s ease-in-out 0s;
		}
		&:hover,
		&:focus {
			color: $color-white;
			span svg {
				stroke: $color-white;
			}
			&::after {
				left: 0;
				right: auto;
				width: 100%;
			}
			&::before {
				right: -40px;
			}
		}
	}
</style>
