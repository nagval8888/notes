<script>
export default {
    name: "TheForm",
    emits: ['onSubmit'],
    data() {
        return {
            value: ''
        }
    },
    methods: {
        onSubmit() {
            // $emit - передает, родителю 'home', слушатель события 'onSubmit' с параметром 'value'
            this.$emit('onSubmit', this.value)
            console.log(this.value)
            this.value = ''
        }
    }
}
</script>

<template>
    <div class="note-form__wrapper">
        <form @submit.prevent="onSubmit" class="note-form">
        <textarea
                type="text"
                v-model="value"
                required
                placeholder="Type your note"
        ></textarea>
            <button class="btn btnPrimary" type="submit">Add new note</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
.note-form__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.note-form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
}
</style>
