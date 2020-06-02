<template>
    <section>
        <div class="row">
            <div class="small-12 columns">
                <h2>Question</h2>
            </div>
        </div>
        <div class="row">
            <div class="small-12 columns">
                Which one of the following is false?
            </div>
            <div class="small-12 columns">
                <ol>
                    <li v-for="(option, index) in options" :key="index">
                        <input type="radio" name="option" v-model="selectedOption"> {{ option }}
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            options: [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            selectedOption: ''
        }
    }    
}
</script>

<style scoped>

</style>