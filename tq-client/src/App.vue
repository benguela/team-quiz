<template>
  <div id="app">
    <div class="row">
      <div class="small-12 columns">
          <h1>Pub Quiz</h1>
      </div>
    </div>
    <hr/>
    <AnswersStats/>
    <br/>
    <hr/>
    <Question/>
  </div>
</template>

<script>
import AnswersStats from './components/AnswersStats.vue'
import Question from './components/Question.vue'

export default {
  name: 'App',
  components: {
    AnswersStats,
    Question
  }
}
</script>

<style>
</style>
