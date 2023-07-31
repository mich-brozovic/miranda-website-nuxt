<template>
	<main>
		<HeroSmall heading="Blog &amp; podcasty" imgUrl="/blog-hero.jpg" />
		<section class="container">
			<PostsGrid>
				<SinglePost v-for="(item, index) in data" :key="index" :item="item" />
			</PostsGrid>
		</section>
	</main>
</template>
<script setup>
	const { find } = useStrapi()
	const { data } = await find('clanky', {
		populate: '*',
		sort: 'publishedAt:desc',
	})
</script>
