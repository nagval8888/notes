<script>
export default {
    name: "TagsList",
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <div class="tags-list">
        <div
                class="tag-item"
                v-for="item in items"
                :key="tag"
                @click="$emit('onItemClick', item)"
        >
            <span>{{ item }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tags-list{
    padding: 10px 0;
    display: flex;
    justify-content: center;
}
.tag-item{
    padding: 8px 22px;
    margin-right: 10px;
    background-color: white;
    border-radius: 22px;
    user-select: none;
    cursor: pointer;
    &:last-child{
        margin-right: 0;
    }
}
</style>
