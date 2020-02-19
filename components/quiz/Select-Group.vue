<template>
  <div class="form-group">
    <select v-model="picked" class="custom-select" @change="onInput">
      <option
        v-for="(answer, index) in answers"
        :key="index"
        :value="answer"
      >
        {{ answer }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectGroup',
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
select {
  width: 100%;
}
</style>
