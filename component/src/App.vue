<script>
import ComponentA from './components/ComponenA.vue'
export default {
  components: {   ComponentA  }
  ,
  data(){
    return {count : 0 }
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
  <component-a msg='hi scott' @myEvent="countChange"></component-a>
</div>
</template>

<style scoped>
</style>