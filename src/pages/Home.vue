<template>
  <q-page class="row justify-center vbv-home" @scroll="setScrollView()">
    <div id="vbvHomeHead" class="col-xs-12 relative-position" style="height: 100vh">
      <div
        class="flex items-center column full-width full-height relative-position overflow-hidden justify-center"
        :class="{
          'q-px-xl': screenData.gt.xs,
          'q-px-md vbv-home-responsive-container': screenData.lt.sm
          }"
      >
        <svg viewBox="0 0 2000 2000" class="vbv-home-clock absolute-center text-white full-width full-height">
          <defs>
            <mask id="centerCut">
              <rect width="100%" height="100%" fill="white"/>
              <circle
                r="300"
                cx="50%"
                cy="50%"
                fill="black"
                stroke="none"
              />
            </mask>
            <mask id="smallHole">
              <rect width="100%" height="100%" fill="white"/>
              <circle r="25" fill="black">
                <animateMotion
                  keyPoints=".375;.375"
                  fill="freeze"
                  keyTimes="0;1"
                  calcMode="linear"
                  path="M 700 1000 a 300 300 0 0 1 600 0 a 300 300 0 0 1 -600 0"
                ></animateMotion>
              </circle>
              <circle r="25" fill="black">
                <animateMotion
                  keyPoints=".875;.875"
                  fill="freeze"
                  keyTimes="0;1"
                  calcMode="linear"
                  path="M 700 1000 a 300 300 0 0 1 600 0 a 300 300 0 0 1 -600 0"
                ></animateMotion>
              </circle>
            </mask>
            <mask id="backgroundCumulatedHoles">
              <rect width="100%" height="100%" fill="white"/>
              <circle
                r="300"
                cx="50%"
                cy="50%"
                fill="black"
                stroke="none"
              />
              <circle r="25" fill="black">
                <animateMotion
                  keyPoints=".375;.375"
                  fill="freeze"
                  keyTimes="0;1"
                  calcMode="linear"
                  path="M 700 1000 a 300 300 0 0 1 600 0 a 300 300 0 0 1 -600 0"
                ></animateMotion>
              </circle>
              <circle r="25" fill="black">
                <animateMotion
                  keyPoints=".875;.875"
                  fill="freeze"
                  keyTimes="0;1"
                  calcMode="linear"
                  path="M 700 1000 a 300 300 0 0 1 600 0 a 300 300 0 0 1 -600 0"
                ></animateMotion>
              </circle>
            </mask>
        		<filter id="rough">
        			<feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="100" result="turbulence"/>
        			<feDisplacementMap in2="turbulence" in="SourceGraphic" scale="1" xChannelSelector="R" yChannelSelector="G"/>
        		</filter>
          </defs>
          <!-- poor performance on mobile -->
          <g :filter="screenData.gt.sm ? 'url(#rough)' : ''">
            <g id="rays" mask="url(#backgroundCumulatedHoles)" fill="#ffd927">
              <polygon
                points="-100,-100 0,-690 100,-100 100,100 0,460 -100,100"
                transform="translate(1000,1000)"
              >
                <animateTransform
                  id="secRayAnim"
                  attributeName="transform"
                  type="rotate"
                  from="0 0 0"
                  to="360 0 0"
                  dur="60s"
                  repeatCount="indefinite"
                  additive="sum"
                  :begin="((dateTime.getSeconds()) - 60) + 's'"
                  animation-play-state="paused"
                />
              </polygon>
              <polygon
                points="-100,-100 0,-880 100,-100 540,0 100,100 -100,100 -990Z,0"
                transform="translate(1000,1000)"
              >
                <animateTransform
                  id="minRayAnim"
                  attributeName="transform"
                  type="rotate"
                  from="0 0 0"
                  to="360 0 0"
                  dur="3600s"
                  repeatCount="indefinite"
                  additive="sum"
                  begin="indefinite"
                  :begin="((dateTime.getSeconds() + (60 * (dateTime.getMinutes()))) - 3600) + 's'"
                  v-once
                />
              </polygon>
              <polygon
                points="-100,-100 0,-600 100,-100 100,100 0,400 -100,100 -500,0"
                fill="lihtgray"
                transform="translate(1000,1000)"
              >
                <animateTransform
                  id="hourRayAnim"
                  attributeName="transform"
                  type="rotate"
                  from="0 0 0"
                  to="360 0 0"
                  dur="43200s"
                  repeatCount="indefinite"
                  additive="sum"
                  :begin="((dateTime.getSeconds() + (60 * (dateTime.getMinutes() + (60 * dateTime.getHours())))) - 86400) / 2 + 's'"
                  v-once
                />
              </polygon>
              <animate attributeName="opacity" dur="10s" from="0" to="1"/>
            </g>
            <g id="outerCircles" stroke="#fddb00">
              <circle
                cx="50%"
                cy="50%"
                r="400"
                fill="none"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                vector-effect="non-scaling-stroke"
              />
              <circle
                cx="50%"
                cy="50%"
                r="500"
                fill="none"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                vector-effect="non-scaling-stroke"
              />
            </g>
            <g id="innerCircle">
              <circle
                cx="1000"
                cy="50%"
                r="300"
                fill="none"
                stroke="currentColor"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                vector-effect="non-scaling-stroke"
                mask="url(#smallHole)"
              />
            </g>
            <g id="orbitalCircles">
              <circle r="25" fill="none" stroke="currentColor" stroke-width="10" vector-effect="non-scaling-stroke">
                <animateMotion
                  keyPoints=".375;.375"
                  fill="freeze"
                  keyTimes="0;1"
                  calcMode="linear"
                  path="M 700 1000 a 300 300 0 0 1 600 0 a 300 300 0 0 1 -600 0"
                ></animateMotion>
              </circle>
              <circle r="25" fill="none" stroke="currentColor" stroke-width="10" vector-effect="non-scaling-stroke">
                <animateMotion
                  keyPoints=".875;.875"
                  fill="freeze"
                  keyTimes="0;1"
                  calcMode="linear"
                  path="M 700 1000 a 300 300 0 0 1 600 0 a 300 300 0 0 1 -600 0"
                ></animateMotion>
              </circle>
            </g>
            <g id="orbitalDashes">
              <path
                mask="url(#centerCut)"
                d="
                M 1000 1000 l -50 -320
                M 1000 1000 l -190 -280
                M 1000 1000 l -280 -190
                M 1000 1000 l -320 -50
                M 1000 1000 l 50 320
                M 1000 1000 l 190 280
                M 1000 1000 l 280 190
                M 1000 1000 l 320 50
                "
                fill="none"
                stroke="currentColor"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                vector-effect="non-scaling-stroke"
              ></path>
          </g>
          </g>
        </svg>
        <div class="vbv-home-head-container block text-weight-bolder q-my-none text-dark text-center">
          <h1 class="vbv-home-head-content-wrapper q-mb-md cinzel" :class="{'text-h2' : screenData.gt.sm && screenData.lt.md, 'text-h3 q-mt-none' : screenData.lt.sm}">
            <span class="vbv-home-head-word">Victor </span><span class="vbv-home-head-word">Boivin</span>
          </h1>
        </div>
        <div
        class="vbv-home-subtitle text-weight-bold q-mt-lg text-center small-line fenix relative-position"
        :class="{
          'text-h5' : screenData.name === 'sm',
          'text-h4' : screenData.gt.sm,
          'text-h6' : screenData.lt.sm
          }"
        >
          Hello. My&nbsp;name&nbsp;is&nbsp;Victor. I&nbsp;am&nbsp;a&nbsp;web&nbsp;developer&nbsp;&amp;&nbsp;programmer at&nbsp;Youdemus&nbsp;Paris.
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  import { throttle  } from 'quasar'
  export default {
    name: 'Home',
    data() {
      return {
        viewHeight: '0px',
				dateTime: new Date()
      }
    },
    computed: {
      screenData() {
        return this.$q.screen
      }
    },
    methods: {
      scrollToContent() {
        document.getElementById("vbvHomeContent").scrollIntoView()
      }
    },
    created() {
    }
  }
</script>
