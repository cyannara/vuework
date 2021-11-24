<script>
import { useStore } from 'vuex'
export default {
    inject : ['provideMsg' ]
    ,
    props: ['msg', 'count']
    ,
    emits: ['myEvent']
    ,
    data(){
        const store = useStore();
        const user_data = store.getters['userinfo/user_data']
        return {inputCnt : this.$props.count, storeMsg : user_data} 
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
        <div>component A 입니다. {{msg}}</div>
        <div>부모에게서 받은 데이터 {{count}}</div>
        <div>inject: {{provideMsg}}</div>
        <slot></slot>
        <div>store: {{storeMsg}}</div>
        <input v-model="inputCnt" >  
        <button @click="countChange">커스턴이벤트로 데이터 전달</button>
    </div>
</template>