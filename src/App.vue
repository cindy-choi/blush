<template>
  <div id="app">
    <router-view
      class="router-view"
    />
    <Menu />
  </div>
</template>

<script>
import Menu from '@/components/Menu';
export default {
  name: 'App',
  components: {
    Menu,
  }
}
</script>

<style lang="scss">
body {
  background-color: $primary;
  background-image:
    linear-gradient(rgba(255,255,255,.5) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255,255,255,.5) 2px, transparent 2px),
    linear-gradient(rgba(255,255,255,.28) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.28) 1px, transparent 1px);
  background-size: 80px 80px, 80px 80px, 10px 10px, 10px 10px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.router-view {
  overflow: auto;
  height: 90vh;
  width: 90vw;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  margin-left: 1rem;
  box-shadow: 0.5rem 0.5rem 0.5rem #00000040;
}
</style>
