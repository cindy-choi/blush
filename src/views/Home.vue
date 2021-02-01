<template>
  <div>
    <div
      class="title__wrapper"
    >
      <svg>
        <symbol id="text-copy">
          <text
            x="0"
            y="80%"
            class="main-typo"
          >
           BLUEPRINT
          </text>
        </symbol>
        <g class="g-ants">
          <use
            xlink:href="#text-copy"
            id="outline"
          />
          <use
            xlink:href="#text-copy"
            id="fill"
          />
        </g>
      </svg>
    </div>
    <div class="typewriter">
      <h2>
        Hi there! This is CINDY.
      </h2>
    </div>
  </div>
</template>
<script>
// WANT TO: 글자 하나하나 마우스 오버 이펙트 넣기
// 백그라운드에 연필 굴러다니기 (인터렉티브로 누르면 틱 날라갔다가 천천히 굴러서 돌아오기)
// primaryColor 의 보색 알아와서 메인 글자에 적용하기
export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    title: 'BLUEPRINT',
  }),

  computed: {
  },
  methods: {
  },
}
</script>
<style scoped lang="scss">
.typewriter {
  width: fit-content;
  padding: 1rem;

  h2 {
    font-family: 'Paytone One', sans-serif;
    color: #fff;
    overflow: hidden;
    border-right: .15em solid #ff9800;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: typing 3.5s steps(30, end), blink-caret .5s step-end infinite;
  }
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}

.title__wrapper {
  width: 100vw;
  height: 0;
  padding-top: 24.5%;
  position: relative;

  .main-typo {
    color: $complementary;
    font-size: 8rem;
    font-family: 'Paytone One', sans-serif;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

#outline {
  fill: none;
  stroke: $complementary;
  stroke-dasharray: 100%;
  stroke-dashoffset: 0;
  animation-name: outline;
  animation-duration: 2.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}

#fill {
  fill-opacity: 0;
  fill: $complementary;
  animation-name: fill;
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
</style>
