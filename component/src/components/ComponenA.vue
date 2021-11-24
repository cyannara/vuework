<script>
export default {
  data(){
    return {
      count : 0
    }
  }
}
</script>
<template>
    <div>
        <h1>component A 입니다.</h1>
        <button @click="count++">
            You clicked me {{ count }} times.
        </button>`
    </div>
</template>