import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store( {
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_TO_CART: (state, product) => {   
            if (state.cart.length) {
                let my_flag = false;
                state.cart.map(function(item) {
                    if (item.article === product.article) {                        
                        my_flag = true;
                        item.quantity++;
                    }                    
                })
                if (!my_flag) state.cart = [...state.cart, product];
            } else {
                state.cart = [...state.cart, product]; 
            }          
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1);
        },
        DECREMENT_ITEM_QUANTITY: (state, index) => {
            state.cart[index].quantity > 1 && state.cart[index].quantity--;
        },
        INCREMENT_ITEM_QUANTITY: (state, index) => {
            state.cart[index].quantity++;
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({ commit }) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        ADD_TO_CART({ commit }, product) {
            commit('SET_TO_CART', product);
        },
        DELETE_FROM_CART({ commit }, product) {
            commit('REMOVE_FROM_CART', product);
        },
        DECREMENT_ITEM({ commit }, index) { 
            commit('DECREMENT_ITEM_QUANTITY', index);
        },
        INCREMENT_ITEM({ commit }, index) {
            commit('INCREMENT_ITEM_QUANTITY', index);
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store;