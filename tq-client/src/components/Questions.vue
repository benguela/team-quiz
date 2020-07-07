<template>
    <section>
        <div class="row">
            <div class="small-12 columns">
                <h2>Questions</h2>        
            </div>
        </div>
        <div v-for="(question,index) in questions" :key="index">
            <div class="row align-middle">
                <div class="small-2 columns" style="padding: 10px">
                    Question {{ index+1 }}
                </div>
                <div class="small-10 columns">
                    <div>
                            {{ question.text }}       
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
    data () {
        return {
            questions: {}
        }
    },
    created () {
        axios.get('/questions.json')
        .then(res => {
            console.log(res)
            this.questions = res.data;
        })
        .catch(error => console.log(error))
    }
    }
</script>

<style scoped>

</style>