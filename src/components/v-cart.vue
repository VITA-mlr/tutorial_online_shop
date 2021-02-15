<template>
    <div class="v-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="v-catalog__link_to_cart">Go back to catalog</div>
        </router-link>

        <h2>Card!!</h2>
        <v-cart-item 
            v-for="(item, index) in cart_data" 
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
        />
        <p v-if="!cart_data.length">There are no products in cart...</p>
    </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import {mapActions} from 'vuex'

    export default {
        name: "v-cart",
        components: {
            vCartItem
        },
        props: {
            cart_data: {        
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            ...mapActions ([
                'DELETE_FROM_CART'
            ]),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index);
            }
        }
    }
</script>

<style lang="scss">
</style> 