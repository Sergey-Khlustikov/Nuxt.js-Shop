<template>
  <div class="quiz-question">
    <h3 class="question-title">
      {{ question.title }}
    </h3>
    <div class="quiz-variants">
      <component
        :is="question.type"
        :key="currentQuestion"
        :answers="question.answers"
        :name="question.title"
        :given-answer="givenAnswer"
        :current-question="currentQuestion"
        @onInput="checkAns"
      />
    </div>
    <hr>
  </div>
</template>

<script>
import Checkbox from './Checkbox-Group'
import Radio from './Radio-Group'
import singleSelect from './Select-Group'

export default {
  components: {
    Checkbox,
    Radio,
    singleSelect
  },
  props: {
    question: {
      type: [Array, Object],
      default: null
    },
    currentQuestion: {
      type: Number,
      default: null
    },
    givenAnswer: {
      type: [Array, String],
      default: null
    }
  },
  methods: {
    checkAns (compData) {
      this.$emit('onInput', compData)
    }
  }
}
</script>

<style scoped>
  .question-title {
    padding-left: 25px;
    margin-bottom: 20px;
  }
.quiz-variants {
  padding: 0 30px;
}
</style>
