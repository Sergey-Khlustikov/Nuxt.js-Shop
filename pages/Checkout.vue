<template>
  <div>
    <h1>Order now</h1>
    <hr>
    <checkout-form v-if="cartCnt > 0" />
    <div v-else class="alert alert-warning">
      There is nothing to order!
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CheckoutForm from '~/components/CheckoutForm'

export default {
  components: {
    CheckoutForm
  },
  computed: {
    ...mapGetters('checkout', {
      formSend: 'formSend'
    }),
    ...mapGetters('cart', {
      cartCnt: 'cartCnt'

    })
  }
}
</script>
