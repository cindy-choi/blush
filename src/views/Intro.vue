<template>
  <div
    class="intro__wrapper"
    @mousemove="handleMouseMove"
  >
    <section class="intro-title">
      <b-img
        src="/static/images/intro_main.jpg"
        class="title-cover-image"
      />
      <div class="content">
        <h1 ref="main-title"> Hi, I'm SENA. </h1>
        <span ref="intro-sentence"> 소개글 어쩌구 저쩌구 오바쌈바 이히히히 난 고양이 있지 </span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Intro',
  components: {
  },
  data: () => ({
  }),
  methods: {
    handleMouseMove(e) {
      console.log(this.$refs.container.style)
      console.log(window.innerWidth);
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      //             x = (e.clientX - window.innerWidth / 2);
      //       y = (e.clientY - window.innerHeight / 2);
      // text3d.style.transform = "translate3d("+ -(mx/2) +"px," + -(my/2) +"px,0) rotate3d(0,1,0,"+ -mx / 50 +"deg)";
    }
  },

}
</script>
<style scoped lang="scss">
.intro__wrapper {
  width: 100vw;
  height: 10000px;
  background-color: #fff;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

section.intro-title {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;

  .title-cover-image {
    width: 38%;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $primary;

    /* animation 영역 */
    transform: translate(-50%, 0);
    width: 60%;
    z-index : 1;
    transform-style: preserve-3d;
    perspective: 300px;

    h1 {
      font-size: 8rem;
    }
  }
}
</style>
