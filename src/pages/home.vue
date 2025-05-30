<script>
import TheForm from '@/components/Notes/TheForm.vue'
import TheList from '@/components/Notes/TheList.vue'

export default {
    name: "home",
    components: {TheList, TheForm},
    data() {
        return {
            notes: [
                {
                    title: 'learn vue3',
                    tags: ['work']
                },
                {
                    title: 'finish cource',
                    tags: ['work', 'home']
                },
                {
                    title: 'hello vue3',
                    tags: []
                },
            ]
        }
    },
    methods: {
        handleRemove(index) {
            this.notes.splice(index, 1)
        },
        handleSubmit(note) {
            this.notes.push(note)
        },
        // handleName(args) {
        //     console.log(args.name, args.age)
        // }
        // handleName({name, age}) {
        //     console.log(name, age)
        // }
    }
}
</script>

<template>
    <!--@onSubmit - ловим($emit 'onSubmit') из компонента TheForm -->
    <!--с параметром 'value' и вызываем функцию 'handleSubmit' без (),
     а переданные аргументы принимаем в самом методе 'handleSubmit(args) {}' -->
    <!--<TheForm @onSubmit="handleSubmit" @onName="handleName"/>-->
    <TheForm @onSubmit="handleSubmit"/>

    <TheList :items="notes" @onRemove="handleRemove"/>
</template>

<style lang="scss">
@import '../assets/scss/main';

</style>
