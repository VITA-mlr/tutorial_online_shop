<template>
    <div class='v-catalog'>
        <h1>Catalog</h1>
        <div class='v-catalog__list'>
            <v-catalog-item 
                v-for="product of products"
                :key="product.article"
                :product_data="product"
                @sendDataToParent="showChildArticleInConsole"
            />
        </div>
    </div>
</template>

<script>
    import vCatalogItem from './v-catlog-item'

    export default {
        name: 'v-catalog',
        components: {
            vCatalogItem,
        },
        props: {},
        data() {
            return {
                "products": [
                    {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1gtsCzj4HBntToljpvgRiEhbQRd_fszF18Aa2gUbEJxdRknyzA29zFxr4fSSMssN_qLEOnZr5&usqp=CAc",
                    "name": "T-shirt 1",
                    "price": 100,
                    "article": "T1",
                    "available": true
                    },
                    {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwV7W1JLtK39CM4RKpqewlUSJTSfxeQJruhw&usqp=CAU",
                    "name": "T-shirt 2",
                    "price": 150,
                    "article": "T2",
                    "available": true
                    },
                    {
                    "image": "data:image/jpeg;base64,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",
                    "name": "T-shirt 3",
                    "price": 200,
                    "article": "T3",
                    "available": false
                    },
                    {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-E7ukmdvUsitsCeQdqHgODLG8ENOMsiJvUg&usqp=CAU",
                    "name": "T-shirt 4",
                    "price": 300,
                    "article": "T4",
                    "available": true
                    },
                    {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9lUmEZ7z2XU3sGBYhG1GSsHBrc3lNJIoa9Q&usqp=CAU",
                    "name": "T-shirt 5",
                    "price": 500,
                    "article": "T5",
                    "available": false
                    },
                    {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpJBPH7SpEXpGSy705no95fXDRjq_q-H_rg&usqp=CAUg",
                    "name": "T-shirt 6",
                    "price": 700,
                    "article": "T6",
                    "available": true
                    }
                ]
            }
        },
        computed: {},
        methods: {
            showChildArticleInConsole(data) {console.log(data)}
        }
    }
</script>

<style lang="scss">
    .v-catalog {
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>