<script>
export default {
    name: "Card",
    props: {
        name: {type: String, required: true},
        title: {type: String, required: true},
        imgUrl: {type: String},
        link: {type: String},
    }
}
</script>

<template>
    <div class="card">
        <div class="card-header">
            <slot name="header"></slot>
        </div>

        <div v-if="imgUrl" class="card-img__wrapper">
            <img :src="imgUrl" :alt="title" class="card-img">
        </div>

        <span class="card-name">{{ name }}</span>

        <span class="card-title">{{ title }}</span>

        <div class="card-body">
            <slot name="body"></slot>
            <router-link
            style="display: block;margin-top: 16px;"
            class="link"
            v-if="link"
            :to="link"
            >see more</router-link>
        </div>

        <slot name="footer"></slot>
    </div>
</template>

<style scoped lang="scss"></style>
