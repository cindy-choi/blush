<template>
  <Header />
  <Game />
</template>


<script>
import Game from '@/components/Game'
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Game,
    Header,
  }
}
</script>


<style lang="scss">
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
