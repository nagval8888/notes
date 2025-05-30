<script>
import TagsList from '@/components/UI/TagsList.vue'

export default {
    name: "TheForm",
    components: {TagsList},
    emits: ['onSubmit', 'onName'],
    data() {
        return {
            value: '',
            tags: ['home', 'work', 'travel']
        }
    },
    methods: {
        onSubmit() {
            const name = 'Sergey'
            const age = 33

            // $emit - передает, родителю 'home', слушатель события 'onSubmit' с параметром 'value'
            // можно передать только один параметр - желательно.
            this.$emit('onSubmit', this.value)

            // если параметров несколько, то можно передать их как свойства объекта {name: name, age: age}
            //this.$emit('onName', {name, age})

            console.log(this.value)
            this.value = ''
        },
        handleTagClick(tag) {
            //console.log(tag)

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

            <TagsList :items="tags" @onItemClick="handleTagClick"/>

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

    textarea {
        margin-bottom: 0;
    }
}
</style>
