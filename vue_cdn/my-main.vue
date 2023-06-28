<template>
    <div class="hello">
        Hello {{who}}   
        <p v-html="who">
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            who: 'world!!!'
        }
    }
}
</script>

<style>
.hello {
    background-color: #ffe;
}
</style>