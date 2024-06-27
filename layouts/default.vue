<template>
  <!-- 参考 https://qiita.com/kokogento/items/fcd8b3fcc7f59e8bf887 -->
  <!-- <LoadingScreen :isLoading="isLoading" />
  <transition name="fade" v-if="!isLoading"> -->

  <HeaderNav />
  <main>
    <slot />
  </main>
  <FooterNav />
  <!-- </transition> -->
</template>
<script setup lang="ts">
const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>