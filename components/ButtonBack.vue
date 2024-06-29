<template>
  <div class="button">
    <span class="arrow-left"></span>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.button {
  background-color: #333;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  text-align: center;
}
.arrow-left {
  display: inline-block;
  vertical-align: middle;
  color: white;
  line-height: 1;
  position: relative;
  width: 1em;
  height: 0.1em;
  background: currentColor;
}

.arrow-left::before {
  content: '';
  width: 0.65em;
  height: 0.65em;
  border: 0.1em solid currentColor;
  border-right: 0;
  border-bottom: 0;
  transform: rotate(-45deg);
  transform-origin: top left;
  position: absolute;
  top: 50%;
  left: -0.05em;
  box-sizing: border-box;
}
</style>