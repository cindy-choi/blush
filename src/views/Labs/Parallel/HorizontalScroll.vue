<template>
  <div
    ref="fixed-scroll-box"
    class="fixed-scroll-box"
  >
    <article class="sticky-content">
      <div class="text-container">
        <h2>
          {{ IMAGE_MESSAGES[messageIndex] }}
        </h2>
      </div>

      <div class="slide">
        <div class="slider">
          <i 
            v-for="n in 5"
            :key="n"
            :class="['mdi', 'mdi-cat', messageIndex == (n) ? 'active' : '']"
            @click.prevent="handleClickSlider(n)"
          />
        </div>
      </div>

      <div
        class="content-box"
        :style="{
          '--left-var': `${(-distance)}px`,
        }"
      >
        <div class="empty-box">스크롤 시작</div>
        <b-img src="/static/images/theo-eilertsen-photography-ajhmqq12XvI-unsplash.jpg" />
        <b-img src="/static/images/theo-eilertsen-photography-PObpMRdCqFI-unsplash.jpg" />
        <b-img src="/static/images/tarik-haiga-8hf4q9qr2kY-unsplash.jpg" />
        <b-img src="/static/images/marvin-meyer--wzNB4Fsoa0-unsplash.jpg" />
        <b-img src="/static/images/brigitte-baranyi-_EiaYEQIgjE-unsplash.jpg" />
        <div class="empty-box">끝</div>
      </div>
    </article>
  </div>
</template>

<script>
const IMAGE_POSITIONS = [0, 300, 1718, 3200, 4686, 6064, 9999];
const IMAGE_MESSAGES = ['', '겨울 숲과 나무', '겨울 조명 노을', '세차장이랑 하늘', '홈 오피스', '맛있겠다'];

export default {
  name: 'HorizontalScroll',
  data: () => ({
    IMAGE_POSITIONS,
    IMAGE_MESSAGES,
    distance: 0,
  }),

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  computed: {
    messageIndex() {
      return IMAGE_POSITIONS.findIndex((_, index) => (this.distance >= IMAGE_POSITIONS[index]) && (this.distance <= IMAGE_POSITIONS[index+1]) );
    },
  },

  methods: {
    handleScroll(e) {
      e.preventDefault();

      const sectionOffsetTop = 8795; // 현재 섹션이 시작되는 위치
      // const winScrollTop = document.documentElement.scrollTop; // 현재 스크롤 위치
      const distance = (document.documentElement.scrollTop - sectionOffsetTop);

      this.distance = distance > 0 ? distance : 0;
    },

    handleClickSlider(n) {
      // TODO 이거 말고 scrollTo!!!
      this.distance = IMAGE_POSITIONS[n] + 10;
    },
  }
};
</script>
<style scoped lang="scss">
.fixed-scroll-box {
  position: relative;
  height: 7000px; /* content-box의 width와 1:1 관계 */
  background-color: black;
}

.sticky-content {
  overflow: hidden;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  .text-container {
    z-index: 3;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    top: 10%;

    h2 {
      font-size: 5rem;
      font-weight: bold;
      transition: ease 0.3s;

      &.move {
        transform: translateX(-100px);
        animation: fill 0.5s;
      }
    }
  }

  .slide {
    z-index: 3;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .slider {
      display: flex;
      flex-direction: column;
      margin-right: 2rem;
    }
  
    .mdi {
      opacity: .4;
      transition: ease 0.8s;
      color: white;
      cursor: pointer;

      &.active,
      &:hover {
        opacity: 1;
      }
    }
  }

  .content-box {
    overflow: hidden;
    position: relative;
    height: 100%;
    display: flex;
    width: fit-content;
    left: var(--left-var);
    transition: cubic-bezier(0.4, 0, 1, 1) 0.5s;;

    img {
      height: 100%;
    }
  }

  .empty-box {
    width: 500px;
    font-size: 3rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
