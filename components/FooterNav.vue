<template>
  <footer>
    <nav>
      <a href="/">Home</a>
      <a href="/">Settings</a>
      <a href="/">Profile</a>
    </nav>
  </footer>
</template>

<script setup>
</script>

<style scoped>
footer {
  background: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
}

nav a:hover {
  background: #444;
  padding: 5px;
}
</style>
