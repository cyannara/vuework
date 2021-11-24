<script>
export default {
    props: ['msg', 'count']
    ,
    emits: ['myEvent']
    ,
    data(){
        return {inputCnt : this.$props.count}
    }
    ,
    methods : {
        countChange(){
            this.$emit('myEvent', this.inputCnt)
        }
    },
    mounted(){
        console.log(this.$root.count)
        console.log(this.$parent.count)
    }
}
</script>
<template>
    <div>
        <div>component A 입니다. {{msg}}=={{count}}</div>
        <slot></slot>
        <input v-model="inputCnt" >  
        <button @click="countChange">커스턴이벤트로 데이터 전달</button>
    </div>
</template>