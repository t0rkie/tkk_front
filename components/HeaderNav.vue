<template>
  <header>
    <ul>
      <li v-for="g in groups" :class="{ active: g.key === selectedGroup }">
        <span style="font-size: 1.2rem;">{{ g.name }}</span>
      </li>
    </ul>
  </header>
</template>
<script setup lang="ts">
/* ヘッダー部分 */
const selectedGroup = ref()
selectedGroup.value = 1

/* 各セクション */
const groups = [
  {
    key: 1,
    name: 'ALL'
  },
  {
    key: 2,
    name: 'ONE'
  },
  {
    id: 3,
    name: 'RIZIN'
  },
  {
    id: 4,
    name: 'UFC'
  }
]
</script>
<style scoped>
header {
  border-bottom: solid 2px var(--main-color);
}
ul {
  display: table;
  margin: 0;
  padding: 0;
}
li {
  display: table-cell;
  list-style-type: none;
  width: 70px;
  text-align: center;
  border-right: solid 1px var(--main-color);
  font-weight: bold;
}
.active {
  background-color: var(--main-color);
  color: #FFF;
}
</style>