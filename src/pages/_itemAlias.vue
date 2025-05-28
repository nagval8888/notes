<script>
import items from '@/seeders/items.json'

export default {
    name: "_itemAlias",
    data() {
        return {
            item: null
        }
    },
    created() {
        const alias = this.$route.params.itemAlias
        console.log(alias)

        const item = items.find(el => el.alias === alias)
        this.item = item
        console.log(item)
    }
}
</script>

<template>
    <div class="wrapper-person">
        <div v-if="item">
            <img :src="item.img" :alt="item.description">
            <h1 style="color: green" class="title">{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <div class="card-stats">
                <div
                        v-for="(stat, index) in item.info"
                        :key="index"
                        class="one-third"
                >
                    <div class="stat-value">{{ stat.value }}</div>
                    <div class="stat">{{ stat.title }}</div>
                </div>
            </div>
            <br>
            <div>
                <router-link to="/" class="btn btnPrimary">back to home</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.wrapper-person {
    text-align: center;
}

</style>
