export const state = () => ({
    items: [],
})

export const mutations = {
    addItem(state, id) {
        state.items.push({
            id: id,
            quantity: 1
        })
    },
    incrementItem(state, id) {
        state.items.find(item => item.id === id).quantity++
    }
}

export const actions = {
    addToCart({commit, state}, id) {
        const found = state.items.find(item => item.id === id) // cek apakah id dariproduk tsb sudah ada atau belum
        if (found) {
            commit('incrementItem', id)// jika  ada mengeksekusi method incrementItem dan menambahkan quantity
        }else {
            commit('addItem', id)//jika tidak ada mengeksekusi method addItem dan membuat objek baru
        }
    }
}