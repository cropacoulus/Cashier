<template>
    <v-row>
        <v-col cols="12">
            <h2>Order</h2>
            <v-list>
                <v-list-item v-for="(item, index) in cartItems" :key="index">
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.price }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState('carts', {
            items: 'items'
        }),
        ...mapGetters('carts', {
            cartItems: 'cartItems'
        })
    }
}
</script>