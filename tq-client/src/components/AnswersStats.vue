<template>
    <section>
        <div class="row">
            <div class="small-12 columns">
                <h2>Answers</h2>        
            </div>
        </div>
        <div v-for="(answer,index) in answers" :key="index">
            <div class="row align-middle">
                <div class="medium-2 columns" style="padding: 10px">
                    Answer {{ index+1 }}
                </div>
                <div class="medium-10 columns">
                    <div class="answer">
                        <div
                            class="answer text-center" 
                            style="background-color: green; margin: 0; color: white;"
                            :style="{width: answer.count*20 + 'px'}"> 
                            {{ answer.count }}       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                answers: [
                    {
                        count: 4
                    },
                    {
                        count: 2
                    },
                    {
                        count: 5
                    },
                    {
                        count: 8
                    }

                ]
            }
        }
    }
</script>

<style scoped>
.answer {
    width: 100%;
    height: 40px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
}
.text-center {
    text-align: center;
    padding: 10px;
}
</style>