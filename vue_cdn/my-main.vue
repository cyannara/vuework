<script>
export default {
    data() {
        return {
            who: 'world!!!'
        }
    }
}
</script>

<template>
    <div class="hello">
        Hello {{who}}   
        <p v-html="who">
    </div>
</template>

<style>
.hello {
    background-color: #ffe;
}
</style>