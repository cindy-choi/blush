<template>
  <div
    id="app"
    :style="{
      '--primary-color': primaryColor,
      '--complemantary-color': complementaryColor,
    }"
  >
    <router-view
      :class="{
        'router-view': !isFullScreenView
      }"
    />
    <Menu />
  </div>
</template>

<script>
import Menu from '@/components/Menu';

// VUEX : theme
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('theme');

export default {
  name: 'App',
  components: {
    Menu,
  },
  computed: {
    ...mapGetters({
      primaryColor: 'primaryColor',
      complementaryColor: 'complementaryColor',
    }),

    isFullScreenView() {
      // 홈과 소개 페이지는 풀스크린으로 인터렉티브 딸거임
      return this.$route.meta.fullScreen;
    },
  },

  mounted() {
    const commonOption = {
      theme: 'outline',
      position: 'bottom-center',
      iconPack: 'mdi',
    };

    this.$toasted.register('toast_error', (message) => {
      if (!message) return '처리 실패. 다시 시도하세요.';
      return message;
    },
    {
      ...commonOption,
      type: 'error',
      icon: 'mdi-alert-circle',
    });

    this.$toasted.register('toast_success', (message) => {
      if (!message) return '처리 되었습니다.';
      return message;
    },
    {
      ...commonOption,
      tyle: 'success',
      icon: 'mdi-check-circle',
    });

    this.$toasted.register('toast_info', (message) => {
      return message;
    },
    {
      ...commonOption,
      icon: 'mdi-information',
      type: 'default',
    });
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

.router-view {
  display: block;
  overflow: auto;
  height: 90vh;
  width: 90vw;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-left: 1rem;
  box-shadow: 0.5rem 0.5rem 0.5rem #00000040;
}
</style>
