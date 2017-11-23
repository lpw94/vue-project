<!-- HomeHeader.vue -->
<template>
    <div>
      <button v-on:click="increment">{{ msg }}</button>
    </div>
</template>

<style>
</style>

<script>
  export default {
      data(){
          return {
            msg: 1
          }
        },
      methods:{
        increment(){
          console.log("00000")
        }
      }
  }
</script>

