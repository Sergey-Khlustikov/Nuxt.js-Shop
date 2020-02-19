<template>
  <div class="form-group">
    <label>{{ name }}
      <transition name="fade" appear>
        <template v-if="activated">
          <transition name="fade" mode="out-in">
            <font-awesome-icon v-if="isValid" key="valid" :icon="['fas', 'check-circle']" class="text-success" />
            <font-awesome-icon v-if="!isValid" key="invalid" :icon="['fas', 'times-circle']" class="text-danger" />
          </transition>
        </template>
      </transition>
    </label>
    <input
      :id="name.toLowerCase()"
      type="text"
      class="form-control"
      :value="value"
      @input="onInput"
    >
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Object, Array],
      default: null
    },
    pattern: {
      type: RegExp,
      default: null
    }
  },
  data () {
    return {
      activated: this.value !== ''
    }
  },
  computed: {
    isValid () {
      return this.pattern.test(this.value)
    }
  },
  methods: {
    onInput (e) {
      this.activated = true
      this.$emit('input', {
        value: e.target.value,
        valid: this.pattern.test(e.target.value)

      })
    }
  }
}
</script>
