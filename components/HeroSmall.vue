<template>
    <section class="hero">
        <div class="image-wrapper">
            <NuxtPicture
                :src="props.imgUrl"
                :imgAttrs="{ style: 'display: block;width:100%;height:100%;object-fit:cover;' }"
            />
        </div>
        <div class="container">
            <h1>{{ props.heading }}</h1>
        </div>
    </section>
</template>
<script setup>
const props = defineProps({
    imgUrl: String,
    heading: String,
});
</script>
<style lang="scss" scoped>
.hero {
    height: 100vh;
    max-height: 540px;
    position: relative;
    color: $color-white;
    text-align: center;
    .container {
        position: absolute;
        top: 130px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h1 {
        font-size: clamp(2.375rem, 5.5vw, 3.875rem);
    }
    .image-wrapper {
        height: 100%;
    }
}
@media (max-width: 767px) {
    .hero {
        max-height: 200px;
        .container {
            top: 90px;
        }
    }
}
</style>
