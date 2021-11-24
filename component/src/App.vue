import ComponentA from './component/ComponentA.vue'
<script>
import ComponentA from './components/ComponenA.vue'
export default {
  data(){
    return {
      count : 0
    }
  }
  ,
  components: {   ComponentA  }
}
</script>

<template>
<div>
  부모 {{count}}
  <component-a></component-a>
</div>
</template>

<style scoped>
</style>