<template>
  <div>
    <h1>Cart</h1>
    <hr>
    <div v-if="empty" class="alert alert-warning">
      Your cart is empty
    </div>
    <template v-else>
      <div v-for="product in products" :key="product.id" class="d-flex justify-content-between align-items-center mb-3 cart__card">
        <div class="d-flex align-items-center">
          <img class="cart__card--img mr-1" :src="product.img" alt="">
          <nuxt-link
            :to="'/product/' + product.id"
            tag="a"
          >
            <strong>{{ product.title }}</strong>
          </nuxt-link>
        </div>
        <product-buy :product="product" />
        <p><strong>{{ product.price * product.qty }}</strong></p>
        <button class="cart__card--remove" @click="removeFromCart(product.id)">
          x
        </button>
      </div>

      <div class="d-flex justify-content-between">
        <button class="btn btn-primary" @click="onOrder">
          Order Now
        </button>
        <b>Total: {{ totalPrice }}</b>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductBuy from '~/components/ProductBuy'

export default {
  components: {
    ProductBuy
  },
  computed: {
    ...mapGetters('cart', {
      products: 'products',
      totalPrice: 'totalPrice'
    }),
    ...mapGetters('products', {
      productsAll: 'items'
    }),
    empty () {
      return this.products.length === 0
    }
  },
  methods: {
    ...mapActions('cart', {
      removeFromCart: 'remove'
    }),
    onOrder () {
      this.$router.push('/checkout')
    }
  }

}
</script>

<style scoped>
  .cart__card {
    position: relative;
    background: #ededed;
    padding: 10px 40px 10px 10px;
  }
  .cart__card p {
    padding-bottom: 0;
  }
  .cart__card--img {
    width: 70px;
  }
  .cart__card--remove {
    position: absolute;
    top: -5px;
    right: 4px;
    font-size: 20px;
    font-weight: 400;
    background: none;
    border: none;
    outline: 0;
  }
  p {
    margin-bottom: 0;
  }
</style>
