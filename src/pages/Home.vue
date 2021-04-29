<template>
  <q-page class="row justify-center" @scroll="setScrollView()">
    <div id="vbvHomeHead" class="col-xs-12 relative-position" style="height: 100vh">
      <div
        class="flex items-center column full-width full-height"
        :class="{
          'q-px-xl justify-center': screenData.gt.xs,
          'q-px-md vbv-home-responsive-container': screenData.lt.sm
          }"
      >
        <div class="vbv-home-head-container block coda text-weight-bolder q-my-none text-grey-5 text-center">
          <h1 class="vbv-home-head-content-wrapper" :class="{'text-h2' : screenData.gt.sm && screenData.lt.md, 'text-h3' : screenData.lt.sm}">
            <span class="vbv-home-head-word">Victor </span><span class="vbv-home-head-word">Boivin</span>
          </h1>
          <div class="vbv-home-head-content-glitch" :class="{'text-h2' : screenData.gt.sm && screenData.lt.md, 'text-h3' : screenData.lt.sm}">
            <span class="vbv-home-head-word">Victor </span><span class="vbv-home-head-word">Boivin</span>
          </div>
          <div class="vbv-home-head-underline"></div>
        </div>
        <div
          class="vbv-home-subtitle coda q-mt-lg text-center small-line"
          :class="{
            'text-h6' : screenData.name === 'sm',
            'text-h5' : screenData.gt.sm,
            'text-subtitle1' : screenData.lt.sm
          }"
        >
          Hello,&nbsp;my&nbsp;name&nbsp;is&nbsp;Victor. I&nbsp;am&nbsp;a&nbsp;web&nbsp;developer&nbsp;&amp;&nbsp;programmer at&nbsp;Youdemus&nbsp;Paris.
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
        profilePic: 'https://picsum.photos/600',//'~assets/profilePic.png',
        viewHeight: '0px'
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
      // let checkScrollView = throttle ((oldScroll, scrollY) => {
      //   let vbvHomeContent = document.getElementById("vbvHomeContent")
      //   let vbvHomeHead = document.getElementById("vbvHomeHead")
      //   if (scrollY > oldScroll && vbvHomeHead.offsetTop + vbvHomeHead.offsetHeight > scrollY) {
      //     vbvHomeContent.scrollIntoView()
      //   } else if (scrollY < oldScroll && vbvHomeHead.offsetHeight > scrollY + 50) {
      //     vbvHomeHead.scrollIntoView()
      //   }
      // }, 100)
      // window.onscroll = function(e) {
      //   checkScrollView(typeof this.oldScroll !== 'undefined' ? this.oldScroll : 0, this.scrollY)
      //   this.oldScroll = this.scrollY
      // }
    }
  }
</script>
