<template>
  <div class="section__wrapper">
    <section class="section">
      <mouse-move-effect />
    </section>

    <section class="section">
      <open-effect />
    </section>

    <section class="section">
      <slide-effect />
    </section>

    <section class="section">
      <horizontal-scroll />
    </section>
  </div>
</template>

<script>
import MouseMoveEffect from './Parallel/MouseMoveEffect';
import OpenEffect from './Parallel/OpenEffect';
import SlideEffect from './Parallel/SlideEffect';
import HorizontalScroll from './Parallel/HorizontalScroll';

export default {
  name: 'Parallel',
  components: {
    MouseMoveEffect,
    OpenEffect,
    SlideEffect,
    HorizontalScroll,
  },
  data: () => ({
    // maskWidth: 50,
    // titleOpacity: 0,
    // endingOpacity: 1,
  }),
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    // handleScroll(e) {
    //   e.preventDefault();

    //   const scrollHeight = this.$refs['fixed-scroll-box'].clientHeight - 700; // 이벤트 끝나고도 조금만 더 스크롤 하게
    //   const sectionOffsetTop = this.$refs['fixed-scroll-box'].offsetTop;
    //   const winScrollTop = document.documentElement.scrollTop;

    //   const scrollPercentage = ((winScrollTop - sectionOffsetTop) / (scrollHeight - window.innerHeight)); // 스크롤탑 / 스크롤 길이 로 비율을 구합니다
    //   const percent = scrollPercentage * 100 ; //백분율을 구합니다

    //   const maskStartValue = 50; //마스크 처리값
    //   const zoomValue = 1.5; //줌될 크기
    //   const maskVal = Math.max(0, maskStartValue - (scrollPercentage * maskStartValue)); //마스크 처리값
    //   const scaleVal = Math.max(1, zoomValue - (scrollPercentage * zoomValue)); // 줌 처리값

    //   this.maskWidth = maskVal;
    //   this.$refs['intro-background-image'].style.transform = `scale(${scaleVal})`;
    //   this.titleOpacity = (1-winScrollTop/2000);
    //   this.endingOpacity = (winScrollTop/2000) * 0.6;
    // },
  }
};
</script>
<style scoped lang="scss">
/*  */
.section__wrapper {
  width: 100%;
  height:100%;
  position: relative;
}

.section {
  position: relative;
}
</style>
