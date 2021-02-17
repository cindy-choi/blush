<template>
  <div
    ref="fixed-scroll-box"
    class="fixed-scroll-box"
  >
    <article class="sticky-content">
      <div
        class="content-box"
        :style="{
          '--left-var': `${(-heightPercentage)}px`,
        }"
      >
        <b-img width="1000" src="/static/images/theo-eilertsen-photography-ajhmqq12XvI-unsplash.jpg" />
        <b-img width="1000" src="/static/images/theo-eilertsen-photography-PObpMRdCqFI-unsplash.jpg" />
        <b-img width="1000" src="/static/images/tarik-haiga-8hf4q9qr2kY-unsplash.jpg" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'HorizontalScroll',
  data: () => ({
    heightPercentage: 0,
  }),

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll(e) {
      e.preventDefault();

      const scrollHeight = this.$refs["fixed-scroll-box"].clientHeight;
      const sectionOffsetTop = 8795;
      const winScrollTop = document.documentElement.scrollTop;

      const scrollPercentage = ((winScrollTop - sectionOffsetTop) / (scrollHeight - window.innerHeight));
      const percentage = (scrollPercentage * 90); // 5는 속도값

      console.log(scrollPercentage);

      this.heightPercentage =  percentage > 0 ? ( percentage > 100 ? 100 : percentage) : 0; // 100 이상이면 100, 0 이상이면 0
      console.log(this.heightPercentage);
    },
  }
};
</script>
<style scoped lang="scss">
.fixed-scroll-box {
  position: relative;
  height: 7000px;
}

.sticky-content {
  overflow: hidden;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  .content-box {
    overflow: hidden;
    position: relative;
    height: 100%;
    display: flex;
    width: fit-content;
    left: var(--left-var);
  }
}
</style>
