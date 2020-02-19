export const state = () => ({
  items: [
    {
      url: '/',
      text: 'Products List'
    },
    {
      url: '/cart',
      text: 'Your Cart'
    },
    {
      url: '/checkout',
      text: 'Order Now'
    }
  ]
})
export const getters = {
  items (state) {
    return state.items
  }
}
