<script>
export default {
    props: ['msg']
}
</script> 
<template>
    <div>
        <h1>component A 입니다. {{msg}}</h1>
        <slot></slot>
    </div>
</template>