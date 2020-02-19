export const state = () => ({
  items: []
})
export const getters = {
  items (state) {
    return state.items
  },
  itemsMap (state) {
    const itemsMap = {}

    for (let i = 0; i < state.items.length; i++) {
      const product = state.items[i]
      itemsMap[product.id] = product
    }
    return itemsMap
  },
  item: (state, getters) => (id) => {
    return getters.itemsMap[id]
  }
}
export const mutations = {
  loadItems (state, payload) {
    state.items = payload
  }
}
export const actions = {
  async loadItems (store) {
    const products = await this.$axios.$get('/products/')
    store.commit('loadItems', products)
  }
}
