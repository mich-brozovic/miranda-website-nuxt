<template>
	<div class="post-grid">
		<slot></slot>
	</div>
</template>
<style lang="scss" scoped>
	.post-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
		gap: 20px;
	}

	@media (max-width: 767px) {
		.post-grid {
			grid-template-columns: minmax(1px, 1fr);
		}
	}
</style>
