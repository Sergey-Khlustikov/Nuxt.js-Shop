<template>
  <div>
    <header class="p-2">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h1>Shop.com</h1>
          <nuxt-link to="/cart" tag="div" class="minicart">
            <span class="minicart__count">{{ cartCnt }}</span>
            <img class="minicart__icon" src="../assets/img/cart-icon.svg" alt="Cart">
          </nuxt-link>
        </div>
      </div>
      <hr>
    </header>
    <section id="page-content" ref="pageContent" :style="contentHeight">
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <nuxt-link
                v-for="(item, index) in menuList"
                :key="index"
                :to="item.url"
                exact
                tag="li"
                class="list-group-item"
                active-class="active"
              >
                <a>{{ item.text }}</a>
              </nuxt-link>
            </ul>
          </div>

          <div class="col col-sm-9">
            <transition name="slide" mode="out-in">
              <nuxt />
            </transition>
          </div>
        </div>
      </div>
    </section>
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50 mt-5">
      <div class="container text-center footer__nav">
        <nuxt-link
          v-for="(item, index) in menuList"
          :key="index"
          :to="item.url"
          active-class="active"
        >
          {{ item.text }}
        </nuxt-link>
      </div>
    </footer>
    <app-quiz />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppQuiz from '~/components/quiz/Quiz'

function getAbsoluteHeight (el) {
  el = (typeof el === 'string') ? document.querySelector(el) : el
  const styles = window.getComputedStyle(el)
  const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
  return Math.ceil(el.offsetHeight + margin)
}

export default {
  components: {
    AppQuiz
  },
  data () {
    return {
      contentHeight: '0px'
    }
  },
  computed: {
    ...mapGetters({
      menuList: 'menu/items',
      cartCnt: 'cart/cartCnt'
    })
  },
  mounted () {
    this.$store.dispatch('products/loadItems')
    const headerH = getAbsoluteHeight('header')
    const footerH = getAbsoluteHeight('footer')
    this.contentHeight = `min-height: calc(100vh - ${headerH + footerH}px);`
  }
}
</script>
<style>

</style>
