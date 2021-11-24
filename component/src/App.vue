<script>
import ComponentA from './components/ComponenA.vue'
export default {
  components: {   ComponentA  }
}
</script>

<template>
<div>
  <component-a msg='hi scott'>
      <div>slot으로 하위 컴포넌트 배포</div>
  </component-a>
</div>
</template>

<style scoped></style>