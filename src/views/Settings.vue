<template>
  <div>
    <div class="settings-section">
      <b-button
        id="color-palette-sync"
        class="palette-button"
        @click="showColorPalette = !showColorPalette"
      >
      </b-button>

      <b-popover
        :show.sync="showColorPalette"
        placement="bottom"
        target="color-palette-sync"
        custom-class="palette-popover"
      >
        <chrome
          :value="colors"
          @input="handleInput"
        />
      </b-popover>
    </div>
  </div>
</template>
<script>
import { Chrome } from 'vue-color'

const defaultProps = {
  hex: '#225667',
  hsl: {
    h: 195,
    s: 0.5,
    l: 0.27,
    a: 1,
  },
  hsv: {
    h: 195,
    s: 0.667,
    v: 0.4,
    a: 1,
  },
  rgba: {
    r: 34,
    g: 85,
    b: 102,
    a: 1, 
  },
  a: 1,
};

// VUEX : theme
import { createNamespacedHelpers } from 'vuex';
import MUTATIONS from '@/store/modules/theme/mutation';

const { mapGetters, mapMutations } = createNamespacedHelpers('theme');

export default {
  name: 'Settings',
  components: {
    Chrome,
  },

  data: () => ({
    colors: defaultProps,
    showColorPalette: false,

  }),

  computed: {
    ...mapGetters({
      primaryColor: 'primaryColor',
    }),
  },

  methods: {
    ...mapMutations({
      setPrimaryColor: MUTATIONS.SET_PRIMARY_COLOR,
    }),

    handleInput(color) {
      if (!color) return;
      this.setPrimaryColor(color.hex);
    },
  },

}
</script>
<style scoped lang="scss">
.settings-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.palette-button {
  background-color: $primary;
  width: 2rem;
  height: 2rem;
  border: none;
}
</style>
