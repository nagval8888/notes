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
    <div class="md-body">
<!--        @onSubmit - принимает из компонента TheForm слушатель 'onSubmit'-->
<!--        с параметром 'value' и присваивается функции 'handleSubmit'-->
        <TheForm @onSubmit="handleSubmit"/>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/main';

</style>
