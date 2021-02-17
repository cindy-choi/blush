<template>
  <div
    ref="page-container"
    class="nexr__wrapper"
    @mousemove.prevent="handleMouseMove"
  >
    <div class="section-title">
      <div
        ref="title-cover"
        class="cover"
      ></div>
      <b-img
        ref="title-background"
        src="/static/images/nexr-title-image.jpg"
        class="title-background"
      />
      <div class="title-container">
        <h1 ref="title" >
          마우스를 따라감
        </h1>
        <h1 ref="sub-title">
          조금느리게 감
        </h1>
      </div>
      <b-img
        ref="title-rect"
        src="/static/images/test_rect.png"
        class="title-rect"
      />
    </div>
  </div>
</template>
<script>
const speed = 0.003;

let x = 0, y = 0;
let mx = 0, my = 0;
let titleRect, title, subTitle; // , titleCover, titleBackground;
let scrollTop = 0;

function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  // 3d rotate
  titleRect.style.transform = `translate3d(${-(mx/2)}px,${-(my/2)}px,0) rotate3d(1,1,0,${-mx/3}deg)`;

  // move
  title.style.transform = `translate(${mx/2}px, ${my/2}px)`;
  subTitle.style.transform = `translate(${mx/4}px, ${my/4}px)`;

  window.requestAnimationFrame(loop);
};

export default {
  name: 'MouseMoveEffect',

  created() {
    // 왜 v-on으로 처리되지 않을까?
    window.addEventListener('scroll', this.handleScroll);
  },

  mounted() {
    // 전역변수에 아이템 할당
    titleRect = this.$refs['title-rect'];
    title = this.$refs.title;
    subTitle = this.$refs['sub-title'];

    loop();
  },

  methods: {
    handleMouseMove(e) {
      x = e.clientX - window.innerWidth / 2;
      y = e.clientY - window.innerHeight / 2;
    },

    handleScroll(/* e */) {
      scrollTop = document.documentElement.scrollTop;

      // scroll-overlay: title
      this.$refs['title-background'].style.transform = `scale(${(1 + scrollTop/1000)})`;
      this.$refs['title-cover'].style.opacity = scrollTop/1000;
    },

    goToSection(index) {
      // 각 섹션의 위치 고정
      const sectionHeights = [ 0, 725, ];

      let point = 0;
      for (let i = 0; i < index; i++) {
        point += sectionHeights[i];
      }

      window.scrollTo({ top: point, behavior: 'smooth', });
    },
  },
};
</script>
<style scoped lang="scss">
.nexr__wrapper {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.section-title {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;

  .title-background {
    width: 100%;
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    background: black;
    opacity: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
  }

  .title-rect {
    position: absolute;
    top: 10%;
    left: 20%;
    z-index: 0;
    width: 50%;
  }

  h1 {
    color: white;
    font-weight: bold;
    transition: ease 0.3s; /* 예제엔 없었지만 속도가 느려지면 뚝뚝 끊겨보이는 현상이 있어서 삽입함 */
  }

  h1:nth-child(1) {
    font-size: 7rem;
    position: absolute;
    top: 45%;
    animation: slide-in-from-left 1.5s;
    animation-delay: .8s;
    animation-fill-mode: forwards; /* 애니메이션이 끝난 후에 남아있도록 함 */
    z-index: 2;
  }

  h1:nth-child(2) {
    position: absolute;
    font-size: 5rem;
    top: 60%;
    animation: slide-in-from-right 1.5s;
    animation-delay: 1.0s;
    animation-fill-mode: forwards; 
    width: max-content;
    z-index: 1;
  }
}

@keyframes slide-in-from-left {
    from {
        opacity: 0;
        left: -100px;
    }
    to {
        opacity: 1;
        left: 100px;
    }
}

@keyframes slide-in-from-right {
    from {
        opacity: 0;
        left: 100%;
    }
    to {
        opacity: 0.8;
        left: 55%;
    }
}
</style>
