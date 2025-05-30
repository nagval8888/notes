<script>
export default {
    name: "TheList",
    props: {
        items: {
            type: Array,
            required: true
        }
    },

}
</script>

<template>
    <div class="notes-list">
        <div class="note-item" v-for="(note, index) in items" :key="index">
            <div class="note-header">
                <p>{{ note.title }}</p>
                <!--$emit('onRemove', index) - можно использовать и такой способ для emit-->
                <p @click="$emit('onRemove', index)">
                    &#x2718;
                </p>
            </div>
            <div class="note-footer">

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.notes-list {
    padding: 40px 0;
}

.note-item {
    width: 100%;
    padding: 18px 20px;
    margin-bottom: 20px;
    border-radius: 14px;
    background-color: white;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    box-shadow: 0 38px 30px rgba(0, 0, 0, 0.02);

    &:hover {
        box-shadow: 0 38px 30px rgba(0, 0, 0, 0.04);
        transform: translate(0, -6px);
        transition-delay: 0s !important;
    }
}

.note-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p:last-child {
        cursor: pointer;
        color: #b53f3f;
    }

    p:last-child:hover {
        cursor: pointer;
        color: #3f62b5;
    }
}

.note-footer {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
}
</style>
