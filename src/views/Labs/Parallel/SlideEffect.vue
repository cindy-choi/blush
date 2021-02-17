<template>
  <div ref="fixed-scroll-box" class="fixed-scroll-box">
    <article class="slide__wrapper inner">
      <h2 class="title">
        이미지 슬라이드를 해보자
      </h2>
      <div class="message-container">
        <p
          v-for="index in 4"
          :key="index"
          :class="[
            'message-box',
            activeImageIndex === index - 1 ? 'active' : ''
          ]"
        >
          {{ message[index - 1] }}
        </p>
      </div>

      <div class="image-slide__container">
        <div class="image-slide">
          <figure class="slide-background-image">
            <img src="/static/images/bg_device.png" />
          </figure>
          <div class="slide-item-box">
            <div ref="slide" class="slide">
              <figure v-for="n in 4" :key="`image_slide_${n}`">
                <img :src="`/static/images/${n}.jpg`" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "SlideEffect",
  data: () => ({
    activeImageIndex: -1,
    message: [
      `스크롤하다보면
      옆에 이미지도 바뀌구`,
      "이미지 바뀔때 슬라이드 모션을 넣어봄",
      `예쁜가? 모르겠음
      더 잘할수 있을 것 같음`,
      ` ꒰◍ˊ◡ˋ꒱੭⁾⁾ 
      그럼이만`
    ]
  }),

  mounted() {
    window.addEventListener("scroll", this.handleSlideScroll);
  },

  methods: {
    handleSlideScroll(e) {
      e.preventDefault();

      const scrollHeight = this.$refs["fixed-scroll-box"].clientHeight; // 2890
      // const sectionOffsetTop = this.$refs['fixed-scroll-box'].offsetTop; // 0
      const sectionOffsetTop = 5766; // 0
      const winScrollTop = document.documentElement.scrollTop;

      // section 시작점 : 5766

      const scrollPercentage =
        (winScrollTop - sectionOffsetTop) / (scrollHeight - window.innerHeight);
      const percent = scrollPercentage * 100;
      const imgWidth = 195; // TODO

      // TODO 수동 말고.... 자동 안되나
      if (percent >= 19 && percent < 45) {
        this.$refs.slide.style.transform = `translateX(${-(imgWidth * 0)}px)`;
        this.activeImageIndex = 0;
      }

      if (percent >= 45 && percent < 72) {
        this.$refs.slide.style.transform = `translateX(${-(imgWidth * 1)}px)`;
        this.activeImageIndex = 1;
      }

      if (percent >= 72 && percent < 92) {
        this.$refs.slide.style.transform = `translateX(${-(imgWidth * 2)}px)`;
        this.activeImageIndex = 2;
      }

      if (percent >= 92) {
        this.$refs.slide.style.transform = `translateX(${-(imgWidth * 3)}px)`;
        this.activeImageIndex = 3;
      }

      if (percent < 19) {
        this.activeImageIndex = -1;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.wrap {
  position: relative;
}
.inner {
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
}

/* main */
.fixed-scroll-box {
  background: #080808;
}

.fixed-scroll-box .slide__wrapper {
  position: relative;

  &:after {
    clear: both;
    display: block;
    content: "";
  }
}

.title {
  position: relative;
  z-index: 50;
  margin-bottom: 170px;
  font-size: 200px;
  color: #333;
  text-align: center;
}

.message-container {
  float: left;
  width: 50%;
  padding-top: 300px;

  p {
    max-width: 80%;
    font-size: 36px;
    font-family: "NotoM";
    color: #333;
    transition: color 0.8s;

    &.active {
      color: #fff;
    }
  }
}

.message-box {
  margin-top: 300px;

  &:last-child {
    margin-top: 300px;
    margin-bottom: 500px;
  }
}

.fixed-scroll-box .slide__wrapper .image-slide__container {
  position: sticky;
  position: -webkit-sticky;
  top: calc(50vh - 204px);
  left: 0;
  z-index: 40;
  float: left;
  width: 50%;
}

.image-slide {
  position: relative;
  width: 240px;
  height: 409px;
  margin: 0 auto;
}

.slide-background-image {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
}
.slide-item-box {
  overflow: hidden;
  position: absolute;
  left: 15px;
  top: 89px;
  z-index: 10;
  width: 195px;
  height: 237px;
}
.slide {
  width: 780px;
  height: 100%;
  transition: transform 0.5s;
}

.slide figure {
  float: left;
  width: 195px;
}

img {
  width: 100%;
}
</style>
