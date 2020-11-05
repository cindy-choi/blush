<template>
  <div class="main-header">
    <div
      v-for="(menu, index) in menus"
      :key="menu.title"
      class="header-menu"
      :style="{
        '--menu-depth': index,
      }"
    >
      <span>
        {{ menu.title }}
      </span>
      <span
        v-for="i in 3"
        :key="i"
        class="moving-object"
        :style="{
          '--object-number': i + 1,
        }"
      />
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
  width: 7rem;
  height: 3rem;
  display: flex;
  align-items: center;
  color: #000;
  overflow: hidden;

  span {
    position: absolute;
    z-index: 1;
  }

  .moving-object {
    position: absolute;
    display: block;
    width: 3rem;
    height: 3rem;
    z-index: 0;
    border-radius: 100%;
    background: transparent;
    animation: rotate calc(var(--object-number) * 1.3s) linear infinite;
  }

  &:hover {
    color: #fff;
    transition: color 0.2s linear;
    cursor: pointer;

    .moving-object {
      transition: background-color 1000ms linear;
      background: rgba(218, 57, 57, calc((var(--menu-depth) + 1) * 0.1));
    }
  }
}

@keyframes fadein {
  from { opacity: 0 }
  to { opacity: 1 }
}

@keyframes rotate {
  0% {
    top: calc(0.6rem);
    left: calc((0.7rem + var(--menu-depth) * 16rem) + 2rem);
  }
  25% {
    top: calc(0.6rem + 0.6rem);
    left: calc(0.7rem + var(--menu-depth) * 16rem);
  }
  50% {
    top: calc(0.6rem + 1.2rem);
    left: calc((0.7rem + var(--menu-depth) * 16rem) + 2rem);
  }
  75% {
    top: calc(0.6rem + 0.6rem);
    left: calc((0.7rem + var(--menu-depth) * 16rem) + 4rem);
  }
  100% {
    top: 0.6rem;
    left: calc((0.7rem + var(--menu-depth) * 16rem) + 2rem);
  }
}
</style>
