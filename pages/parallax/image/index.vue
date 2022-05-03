<template>
  <!-- https://codesandbox.io/s/56mx2?file=/pages/index.vue:0-472 -->
  <div class="main">
    <h1>Testing some parallax</h1>
    <kinesis-container>
      <kinesis-element type="rotate" :strength="20">
        <v-img
          class="mb-5 image"
          src="https://source.unsplash.com/500x350/?japan"
          alt="Cell"
        />
      </kinesis-element>
    </kinesis-container>
    <p>done testing..</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
