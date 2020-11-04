<template>
  <div class="main-header">
    <div
      v-for="(menu, index) in menus"
      :key="menu.title"
      class="header-menu"
      :style="{
        '--menu-depth': (index+1)*0.2,
        '--pointer-top': top,
        '--pointer-left': left,
      }"
      @mouseover="handleMouseOver"
      @mouseout="handleMouseOut"
    >
      <span
        v-for="i in 3"
        :key="i"
      />
      {{ menu.title }}
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
    top: 0,
    left: 0,
    
  }),
  methods: {
    handleMouseOver(event) {
      console.log('over', event);
      this.top = event.pageY;
      this.left = event.pageX;
    },

    handleMouseOut(event) {
      console.log('out', event);
    }
  }
}
</script>
<style scoped lang="scss">
.main-header {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
}

.header-menu {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #000;

  span {
    position: absolute;
    display: block;
    content: "";
    z-index: 0;
    width: 0;
    height: 0;
    top: var(--pointer-top);
    left: var(--pointer-left);

    border-radius: 100%;
    background: rgba(218, 57, 57, var(--menu-depth));

    transition: all ease 0.7s;
  }


  &:hover {
    color: #fff;

    span {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
