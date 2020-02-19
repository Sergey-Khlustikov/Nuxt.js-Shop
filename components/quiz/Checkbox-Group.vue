<template>
  <div>
    <div
      v-for="(answer, index) in answers"
      :key="index"
      class="custom-control custom-checkbox"
    >
      <input
        :id="index"
        v-model="picked"
        type="checkbox"
        class="form-check-input custom-control-input"
        :name="name"
        :value="answer"
        @change="onInput"
      >
      <label :for="index" class="custom-control-label">{{ answer }}</label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CheckboxGroup',
  props: {
    answers: {
      type: [Array, String],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    givenAnswer: {
      type: [Array, String],
      default: null
    }
  },
  data () {
    return {
      picked: []
    }
  },

  beforeMount () {
    if (this.givenAnswer) {
      this.picked.push(...this.givenAnswer)
    }
  },
  methods: {
    onInput () {
      this.$emit('onInput', {
        givenAnswer: this.picked,
        activated: this.picked.length > 0
      })
    }
  }
}
</script>

<style scoped>

</style>
