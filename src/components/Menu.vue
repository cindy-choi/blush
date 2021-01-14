<template>
	<div style="z-index: 999;">
		<input
      v-model="showMenu"
      id="drawer"
      class="drawer"
      type="checkbox"
    />
		<label
      class="drawer-label"
      for="drawer"
    >
			<i/>
		</label>
		<section class="drawer-list">
			<ul
        :class="{ 'show': showMenu }"
      >
				<li
					v-for="(menu, index) in menus"
					:key="menu.id"
          class="menu-item"
          :style="{
            '--rotate-value': `${index*60}deg`,
            '--item-index': index,
          }"
				>
					<a
            class="menu-link"
            :style="{
              '--rotate-value': `-${index*60}deg`,
            }"
            @click="clickMenuLink(menu.href)"
          >
            <i :class="['mdi', menu.icon]" />
            <span class="menu-text">
              {{ menu.id }}
            </span>
          </a>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
export default {
  name: 'Menu',
  data: () => ({
    showMenu: false,
    menus: [
      { id: 'Home', icon: 'mdi-home', href: '/' },
      { id: 'Intro', icon: 'mdi-alien-outline', href: '/intro' },
      { id: 'NEA', icon: 'mdi-kabaddi', href: '/nea', },
      { id: 'Toolbox', icon: 'mdi-tools', href: '/toolbox', },
      { id: 'Labs', icon: 'mdi-test-tube', href: '#', },
      { id: 'Settings', icon: 'mdi-cog', href: '/settings' },
    ],
  }),
  methods: {
    clickMenuLink(to) {
      this.showMenu = false;
      this.$router.push({ path: to }).catch(e => {});
    }
  },
}
</script>
<style scoped lang="scss">
.menu-item {
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 5rem;
  height: 5rem;
  opacity: 0;
  transition: 1.0s;

  a.menu-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: inherit;
    height: inherit;
    color: #000;
    background-color: #ffffff9c;
    border-radius: 50%;
    text-align: center;
    text-decoration: none;
    font-size: 1.5rem;
    pointer-events: none;
    transition: 0.2s;
    cursor: pointer;
  }

  .menu-text {
    top: -0.9rem;
    opacity: 0;
    height: 0;
    position: relative;
    font-size: 0.8rem;
  }
}

ul.show .menu-item {
  opacity: 1;
  transform: rotate(var(--rotate-value)) translateX(-6rem);

  a.menu-link {
    transform: rotate(var(--rotate-value));
    pointer-events:auto;
  }
}


/* 아이콘 마우스 오버에 사용되는 border */
a.menu-link:after {
  content: "";
  background-color: transparent;
  width: 5rem;
  height: 5rem;
  border: 1.7px dashed #fff;
  display: block;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all .3s cubic-bezier(.53,-.67,.73,.74);
  transform: none;
  opacity: 0;
}

a.menu-link:hover {
  background-color: #fff;

  &:after {
    transition: all .3s cubic-bezier(.37,.74,.15,1.65);
    transform: scale(1.1);
    opacity: 1;
  }

  /* 마우스 오버 시 아이콘 이동 */
  i.mdi::before {
    transition: all .3s ease-in-out;
    transform: translateY(-0.4rem);
  }

  .menu-text {
    opacity: 1;
    transition: all .3s ease-in-out;
    transform: translateY(0.4rem);
  }
}
</style>
