<template>
  <div>
    <img :src="product.img" alt="">
    <div class="d-flex justify-content-between align-items-center">
      <h1>{{ product.title }}</h1>
      <div class="alert alert-success">
        {{ product.price }}
      </div>
    </div>
    <p>{{ product.description }}</p>
    <product-buy class="d-block m-auto" :product="product" />
    <nuxt-link to="/">
      Return to shop
    </nuxt-link>
    <hr>
  </div>
</template>

<script>
import ProductBuy from '~/components/ProductBuy'
export default {
  components: {
    ProductBuy
  },
  async asyncData ({ $axios, params }) {
    const data = await $axios.$get(`/products/${params.product}/`)
    return { product: data[0] }
  }
}
</script>
