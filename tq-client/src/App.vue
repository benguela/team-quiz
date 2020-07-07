<template>
  <div id="app">
    <div class="row expanded">
      <div class="small-12 columns">
          <h1>Pub Quiz</h1>
      </div>
    </div>
    <hr/>
    <div class="row expanded">
      <div class="small-2 columns"><h2>Team Scores</h2></div>
      <div class="small-8 columns">
        <AnswersStats/>
        <br/>
        <hr/>
        <Question/>
        <hr/>
        <Questions/>
      </div>
      <div class="small-2 columns"><h2>Individual Scores</h2></div>
    </div>
  </div>
</template>

<script>
import AnswersStats from './components/AnswersStats.vue'
import Question from './components/Question.vue'
import Questions from './components/Questions.vue'

export default {
  name: 'App',
  components: {
    AnswersStats,
    Question,
    Questions
  }
}
</script>

<style>
.fullwidth {
   width: 100%;
   height: 100%;
   margin-left: auto;
   margin-right: auto;
   max-width: initial;
}
</style>
