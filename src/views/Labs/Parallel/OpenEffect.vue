<template>
  <div
    ref="fixed-scroll-box"
    class="fixed-scroll-box"
  >
    <article class="sticky-content">
      <div class="content-box ">
        <div
          ref="intro-text"
          class="intro-text"
          :style="{
            'opacity': titleOpacity,
          }"
        >
          <h2>
            문 열어주고
          </h2>
        </div>

        <!-- 문짝 -->
        <div
          ref="left-mask"
          class="left-mask"
          :style="{
            'width': `${maskWidth}%`,
          }"
        ></div>
        <div
          ref="right-mask"
          class="right-mask"
          :style="{
            'width': `${maskWidth}%`,
          }"
        ></div>

        <figure ref="intro-background-image" class="intro-background-image"></figure>
        <div
          ref="ending-text"
          class="ending-text"
          :style="{
            'opacity': endingOpacity,
          }"
        >
          <h2>
            짜잔하고 등장
          </h2>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'OpenEffect',
  data: () => ({
    maskWidth: 50,
    titleOpacity: 0,
    endingOpacity: 1,
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll(e) {
      e.preventDefault();

      const scrollHeight = this.$refs['fixed-scroll-box'].clientHeight - 700; // 이벤트 끝나고도 조금만 더 스크롤 하게
      const sectionOffsetTop = this.$refs['fixed-scroll-box'].offsetTop;
      const winScrollTop = document.documentElement.scrollTop;

      const scrollPercentage = ((winScrollTop - sectionOffsetTop) / (scrollHeight - window.innerHeight)); // 스크롤탑 / 스크롤 길이 로 비율을 구합니다
      const percent = scrollPercentage * 100 ; //백분율을 구합니다

      const maskStartValue = 50; //마스크 처리값
      const zoomValue = 1.5; //줌될 크기
      const maskVal = Math.max(0, maskStartValue - (scrollPercentage * maskStartValue)); //마스크 처리값
      const scaleVal = Math.max(1, zoomValue - (scrollPercentage * zoomValue)); // 줌 처리값

      this.maskWidth = maskVal;
      this.$refs['intro-background-image'].style.transform = `scale(${scaleVal})`;
      this.titleOpacity = (1-winScrollTop/2000);
      this.endingOpacity = (winScrollTop/2000) * 0.6;
    },
  }
};
</script>
<style scoped lang="scss">
.section-main {
  position: relative;
  height: 500px;
  background-color: #111;

  h2 {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    color: #fff;
    font-size: 80px;
    line-height: 1;
    text-align: center;
  }
}

.fixed-scroll-box {
  position: relative;
  height: 5000px;
}

.sticky-content {
  overflow: hidden;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  .content-box {
    overflow: hidden;
    position: relative;
    height: 100%;

    .intro-background-image {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 20;
      width: 100%;
      height: 100%;
      background-image: url("/static/images/intro_data.jpg");
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
}

.intro-text {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 60;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transition: ease;

  h2 {
    font-size: 80px;
    line-height: 1;
    color: #fff;
  }
}

.left-mask {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 50;
  height: 100%;
  background: #000;
  transition: linear;
}
.right-mask {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 50;
  height: 100%;
  background: #000;
  transition: linear;
}


.ending-text {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: ease 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    content: "";
  }
}

.no-csspositionsticky {
  .fixed-scroll-box {
    height: auto;

    .sticky-content {
      position: relative;
    }
  }

  .intro-text { display: none; }
  .ending-text { display: none; }
  .left-mask { width: 0px; }
  .right-mask { width: 0px; }
}
</style>
