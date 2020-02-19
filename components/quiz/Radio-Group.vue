<template>
  <div>
    <div
      v-for="(answer, index) in answers"
      :key="index"
      class="form-group custom-control custom-radio"
    >
      <input
        :id="index"
        v-model="picked"
        type="radio"
        class="form-check-input custom-control-input"
        :name="name"
        :value="answer"
        @change="onInput"
      >
      <label class="custom-control-label" :for="index">{{ answer }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioGroup',
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
      picked: this.givenAnswer
    }
  },
  methods: {
    onInput () {
      // this.picked = e.target.value;
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
