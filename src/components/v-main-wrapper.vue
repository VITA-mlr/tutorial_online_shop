<template>
    <div class="v-main-wrapper">
        <v-catalog />
        <v-cart />
    </div>
</template>

<script>
    import vCatalog from './v-catalog'
    import vCart from './v-cart'

    export default {
        name: 'v-main-wrapper',
        components: {
            vCatalog,
            vCart,
        },
        props: {},
        data() {
            return {
                title: 'I`m a main wraper'
            }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {
            console.log('Hello, I`m alive!')
        }
    }
</script>

<style lang="scss">
  .v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>
