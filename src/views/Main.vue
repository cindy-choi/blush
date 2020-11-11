<template>
  <div>
    <svg
      height="500"
      width="500"
    >
      <!-- face -->
      <circle
        id="face"
        cx="250"
        cy="250"
        r="150"
        fill="#ffcc14"
      >
       <animateMotion
         dur="5s"
         repeatCount="indefinite"
         path="M20,50 l0,0 0,30 z"
       />
      </circle>

      <g>
        <!-- blush -->
        <ellipse
          id="left-blush"
          cx="155"
          cy="270"
          rx="50"
          ry="30"
          fill="#f37778"
        />
        <ellipse
          id="right-blush"
          cx="345"
          cy="270"
          rx="50"
          ry="30"
          fill="#f37778"
        />
         <animateMotion
           dur="5s"
           repeatCount="indefinite"
           path="M20,50 l0,0 0,22 z"
         />
      </g>

      <g>
        <!-- eyes -->
        <ellipse
          id="left-eye"
          cx="180"
          cy="200"
          rx="40"
          ry="50"
          fill="white"
        />
        <circle
          id="left-eye-pupil"
          cx="180"
          cy="225"
          r="15"
          fill="#83643C"
        />
        <ellipse
          id="right-eye"
          cx="320"
          cy="200"
          rx="40"
          ry="50"
          fill="white"
        />
        <circle
          id="right-eye-pupil"
          cx="320"
          cy="225"
          r="15"
          fill="#83643C"
        />

        <!-- mouth -->
        <path
          id="mouth"
          d="M 200,300 q 50, 50 100,0"
          stroke="#83643C"
          stroke-width="7"
          fill-opacity="0"
          stroke-linecap="round"
        />

       <animateMotion
         dur="5s"
         repeatCount="indefinite"
         path="M20,50 l0,0 0,25 z"
       />
     </g>

    </svg>
  </div>
</template>
<script>
export default {
  name: "FaceShape",
  data: () => ({
  }),
  methods: {
  },
}
</script>
<style scoped>
</style>
