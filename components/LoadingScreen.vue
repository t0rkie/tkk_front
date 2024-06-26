<template>
  <div :class="{ fadeout: !isLoading }" class="loader">
    <div class="splash">
      TKK
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  isLoading: boolean
}
const props = defineProps<Props>()

</script>
<style scoped>
.loader {
  background-color: #D12424;
  display: flex;
  overflow: hidden;
  position: fixed;
  align-items: center;
  text-align: center;
  bottom: 0;
  color: white;
  left: 0;
  right: 0;
  top: 0;
}
.splash {
  
}
.fadeout {
  animation: fadeout 2s forwards;
}
@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>