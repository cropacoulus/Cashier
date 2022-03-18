<template>
    <v-row>
        <v-col cols="12">
            <h2>Order</h2>
            <v-list>
                <v-list-item v-for="(item, index) in cartItems" :key="index">
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-list-item-subtitle>
                            {{ currency(item.price) }} X {{ item.quantity }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-list-item-title>{{ currency(itemTotal(item.price, item.quantity)) }}</v-list-item-title>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
    methods: {
        currency(value) {
            return Intl.NumberFormat('en-US').format(value)
        }
    },
    computed: {
        ...mapState('carts', {
            items: 'items'
        }),
        ...mapGetters('carts', {
            cartItems: 'cartItems',
            itemTotal: 'itemTotal'
        })
    }
}
</script>