<script>
import ComponentA from './components/ComponenA.vue'
export default {
  components: {   ComponentA  }
  ,
  data(){
    return {count : 15 }
  }
  ,
  methods :{
    countChange(cnt){
      this.count = cnt;
    }
  }
} 
</script>
  
<template>
<div>
  {{count}}
  <component-a msg='hi scott' :count="count" @myEvent="countChange">하위컴포넌트에 slot으로 전달</component-a>
</div>
</template>

<style scoped>
</style>