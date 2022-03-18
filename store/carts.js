export const state = () => ({
    items: [],
})

export const mutations = {
    addItem(state, id) {
        state.items.push({
            id: id,
            quantity: 1
        })
    }
}

export const actions = {
    addToCart({commit}, id) {
        // const productItem = state.items.find(item => item.id == id)
        // if (!productItem) {
        //     commit('addItem', id)
        // }
        commit('addItem', id)
    }
}