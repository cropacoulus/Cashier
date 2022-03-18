export const state = () => ({
    items: [],
})

export const getters = {
    cartItems: (state, getters, rootState) => {
        return state.items.map(({ id, quantity }) => { //mengakses state items dan melewatkan 2 parameter
            let product = rootState.products.products.find(product => product.id === id)//mengakses file products dan state products
            //rootState berfungsi untuk mengakses seluruh file yang ada di folder store
            return {
                id: id,
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },
    itemTotal: () => (price, quantity) => {
        return price * quantity
    }
}

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