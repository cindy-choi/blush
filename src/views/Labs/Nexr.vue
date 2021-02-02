<template>
  <div
    class="nexr__wrapper"
    @mousemove.prevent="handleMouseMove"
  >
    <section class="section-title">
      <b-img
        ref="title-background"
        src="/static/images/nexr-title-image.jpg"
        class="title-background"
      />
      <div class="title-container">
        <h1 ref="title1" >
          Big Data Platform
        </h1>
        <h1 ref="title2">
          for Enterprise.
        </h1>
      </div>
      <b-img
        ref="title-rect"
        src="/static/images/test_rect.png"
        class="title-rect"
      />
    </section>
    <section class="section-intro-1">
    </section>
    <section class="section-intro-2">
    </section>
    <section class="section-intro-3">
    </section>
  </div>
</template>
<script>
const speed = 0.005;

let x = 0, y = 0;
let mx = 0, my = 0;
let titleRect, title1, title2;

function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  // 3d rotate
  // titleRect.style.transform = "translate3d("+ -(mx/9) +"px," + -(my/9) +"px,0) rotate3d(1,1,0,"+ -mx / 9 +"deg)";
  titleRect.style.transform = `translate3d(${-(mx/9)}px,${-(my/9)}px,0) rotate3d(1,1,0,${-mx/9}deg)`;

  // move
  title1.style.transform = "translate("+ (mx/2) +"px," + (my/2) +"px)";
  title2.style.transform = "translate("+ (mx/4) +"px," + (my/4) +"px)";

  window.requestAnimationFrame(loop);
};

export default {
  name: 'Nexr',
  mounted() {
    // 전역변수에 아이템 할당
    titleRect = this.$refs['title-rect'];
    title1 = this.$refs.title1;
    title2 = this.$refs.title2;

    loop();
  },

  methods: {
    handleMouseMove(e) {
      x = e.clientX - window.innerWidth / 2;
      y = e.clientY - window.innerHeight / 2;
    },
  },
};
</script>
<style scoped lang="scss">
.nexr__wrapper {
  width: 100vw;
  height: 10000px;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

section.section-title {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 90%;
  overflow: hidden;

  .title-background {
    width: 100%;
  }

  .title-rect {
    position: absolute;
    top: 20%;
    left: 20%;
    z-index: 0;
    width: 50%;
  }

  h1 {
    color: white;
    font-weight: bold;
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
