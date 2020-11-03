<template>
  <div class="main-header">
    <div
      v-for="(menu, index) in menus"
      :key="menu.title"
      class="header-menu"
      :style="{
        '--menu-depth': index
      }"
    >
      <span>
        {{ menu.title }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data: () => ({
    menus: [
      { title: 'Introduction', },
      { title: 'Timeline', },
      { title: 'Project Fun', },
      { title: 'Tags', },
    ],
    
  }),
  methods: {}
}
</script>
<style scoped lang="scss">
.main-header {
  width: 100%;
  height: 3rem;
}

.header-menu {
  span {
    color: #000;
  }

  &:hover span {
    color: #fff;
  }
}
</style>
