<template>
<!-- https://medium.com/@leonardo.gruppelli/kinesis-awesome-animations-for-your-vue-nuxt-applications-8c16ae701e92 -->
  <div class="padding">
    <kinesis-container event="scroll" class="parent">
      <kinesis-element
        class="child"
        type="rotate"
        :strength="500"
      />
    </kinesis-container>
  </div>
</template><script>

export default {
}

</script><style scoped>
.padding {
  padding: 50vh 0;
}.parent {
  width: 100vw;
  height: 100vh;
  position: relative;
}.child {
  width: 200px;
  height: 200px;
  background-color: red;
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 100px);
}
</style>
