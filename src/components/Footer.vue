<script>
import {LINKS} from '@/_config.js'

export default {
   data() {
       return {
           links: LINKS
       }
   }
}
</script>

<template>
    <footer class="footer">
        <div class="container">
            <ul class="navbar-list">
                <li class="navbar-item" v-for="link in links" :key="link.alias">
                    <router-link class="navbar-link" :to="link.url">{{ link.title }}</router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style scoped lang="scss">

</style>
