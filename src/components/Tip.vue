<template>
  <div class="container">
    <input type="text" v-model="message">
    <button type="button"
            v-clipboard:copy="message"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError">复制!</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: '副市长宁德市解放路烧烤',
      }
    },
    methods: {
      onCopy: function (e) {
        alert('复制成功: ' + e.text)
      },
      onError: function (e) {
        console.log(e)
        alert('Failed to copy texts')
      }
    }
  }
</script>