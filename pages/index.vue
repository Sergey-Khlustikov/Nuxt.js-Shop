<template>
  <div>
    <div class="d-flex justify-content-between align-items-center border p-3 bg-light">
      <h2>Check our quiz out!</h2>
      <button class="btn btn-primary" @click="openPopup">
        Quiz
      </button>
    </div>
    <h1>Products</h1>
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col col-sm-4">
        <div class="card text-center mt-3">
          <img :src="product.img" class="card-img-top" alt="...">
          <div class="card-body">
            <nuxt-link
              :to="`/product/${product.id}`"
              tag="h3"
            >
              <a class="card-title">{{ product.title }}</a>
            </nuxt-link>
            <p class="card-text">
              {{ product.price }}
            </p>
            <product-buy :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ProductBuy from '~/components/ProductBuy'

export default {
  components: {
    ProductBuy
  },
  computed: {
    ...mapGetters({
      products: 'products/items'
    })
  },
  methods: {
    ...mapMutations('quiz', {
      openPopup: 'openPopup'
    })
  }
}
</script>

<style>

</style>
