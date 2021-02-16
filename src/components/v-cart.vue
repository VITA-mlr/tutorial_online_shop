<template>
    <div class="v-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="v-catalog__link_to_cart btn">Go back to catalog</div>
        </router-link>

        <h2>Card!!</h2>
        <p v-if="!cart_data.length">There are no products in cart...</p>
        <div>
            <v-cart-item 
                v-for="(item, index) in cart_data" 
                :key="item.article"
                :cart_item_data="item"
                @deleteFromCart="deleteFromCart(index)"
                @decrementItem="decrementItem(index)"
                @incrementItem="incrementItem(index)"
            />       
            <div class="v-cart__total">
                <p class="total__name">Total:</p>
                <p>{{cartTotalCost}} P.</p>
            </div>
        </div>   
       
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
        computed: {
            cartTotalCost() {
                let result = [];
                if (this.cart_data.length) {
                    for (let item of this.cart_data) {
                        result = [...result, item.price * item.quantity]
                    }
                    return result.reduce((sum, el) => sum + el);
                } else return 0;
                
            }
        },
        methods: {
            ...mapActions ([
                'DELETE_FROM_CART',
                'DECREMENT_ITEM',
                'INCREMENT_ITEM'
            ]),
            decrementItem(index) {
                this.DECREMENT_ITEM(index);
            },
            incrementItem(index) {
                this.INCREMENT_ITEM(index);
            },
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index);
            }
        }
    }
</script>

<style lang="scss">
    .v-cart {
        margin-bottom: 100px;
        
        &__total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: $padding*2 $padding*3;
            display: flex;
            justify-content: center;
            background: $green-bg;
            color: #ffffff;
            font-size: 20px;
        }
        .total__name {
            margin-right: $margin*2;
        }
    }
</style> 