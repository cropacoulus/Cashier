<template>
    <div>
        {{ items }}
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState('carts', {
            items: 'items'
        })
    }
}
</script>