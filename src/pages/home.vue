<script>
import TheForm from '@/components/Notes/TheForm.vue'

export default {
    name: "home",
    components: {TheForm},
    data() {
        return {}
    },
    methods: {
        handleSubmit(note) {
            console.log(note)
        }
    }
}
</script>

<template>
    <!--@onSubmit - ловим($emit 'onSubmit') из компонента TheForm -->
    <!--с параметром 'value' и вызываем функцию 'handleSubmit'-->
    <TheForm @onSubmit="handleSubmit"/>
</template>

<style lang="scss">
@import '../assets/scss/main';

</style>
