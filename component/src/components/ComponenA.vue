<script>
export default {
    props: ['msg']
    ,
    emits: ['myEvent']
    ,
    data(){
        return {inputCnt : 0}
    }
    ,
    methods : {
        countChange(){
            this.$emit('myEvent', this.inputCnt)
        }
    }
}
</script>
<template>
    <div>
        <div>component A 입니다. {{msg}}</div>
        <input v-model="inputCnt">
        <button @click="countChange">커스턴이벤트로 데이터 전달</button>
    </div>
</template>