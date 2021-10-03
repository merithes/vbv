<template>
  <q-layout view="hHh Lpr lFf" id="pageLayout">
    <transition
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <q-toolbar class="fixed-top bg-dark z-top text-secondary text-bold shadow-3 full-width">
        <div class="container">
          <q-btn
            flat
            square
            @click="showMenu = !showMenu"
            @mouseenter="toggleEyeHover(true)"
            @mouseleave="toggleEyeHover(false)"
            class="no-border-radius vbv-neon"
            id="mainMenuBtn"
          >
            <template v-slot:default>
              <svg id="eyeIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 43" width="2em">
                <g id="eyeIrisGroup">
                  <path
                    id="eyeIris"
                    d="M 43 28 a 14.1 14.1 0 0 0 0 -16 m -20 0 a 14.1 14.1 0 0 0 0 16"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  <animate
                    id="eyeIrisToggleIn"
                    ref="eyeIrisToggleIn"
                    href="#eyeIris"
                    attributeName="d"
                    from="M 23 30 a 45 45 0 0 0 20 0 a 14.1 14.1 0 0 0 0 -20 a 45 45 0 0 0 -20 0 a 14.1 14.1 0 0 0 0 20"
                    to="M 23 30 a 14.1 14.1 0 0 0 20 0 a 14.1 14.1 0 0 0 0 -20 a 14.1 14.1 0 0 0 -20 0 a 14.1 14.1 0 0 0 0 20"
                    dur="0.13s"
                    fill="freeze"
                  ></animate>
                  <animate
                    v-if="$q.screen.gt.sm"
                    id="eyeIrisME"
                    ref="eyeIrisME"
                    href="#eyeIris"
                    attributeName="d"
                    from="M 43 28 a 14.1 14.1 0 0 0 0 -16 m -20 0 a 14.1 14.1 0 0 0 0 16"
                    to="M 43 30 a 14.1 14.1 0 0 0 0 -20 m -20 0 a 14.1 14.1 0 0 0 0 20"
                    dur="0.2s"
                    fill="freeze"
                  ></animate>
                  <animate
                    v-if="$q.screen.gt.sm"
                    id="eyeIrisML"
                    ref="eyeIrisML"
                    href="#eyeIris"
                    attributeName="d"
                    from="M 43 30 a 14.1 14.1 0 0 0 0 -20 m -20 0 a 14.1 14.1 0 0 0 0 20"
                    to="M 43 28 a 14.1 14.1 0 0 0 0 -16 m -20 0 a 14.1 14.1 0 0 0 0 16"
                    dur="0.2s"
                    fill="freeze"
                    begin="0s"
                  ></animate>
                  <animate
                    id="eyeIrisToggleOut"
                    ref="eyeIrisToggleOut"
                    href="#eyeIris"
                    attributeName="d"
                    from="M 23 30 a 14.1 14.1 0 0 0 20 0 a 14.1 14.1 0 0 0 0 -20 a 14.1 14.1 0 0 0 -20 0 a 14.1 14.1 0 0 0 0 20"
                    to="M 23 30 a 45 45 0 0 0 20 0 a 14.1 14.1 0 0 0 0 -20 a 45 45 0 0 0 -20 0 a 14.1 14.1 0 0 0 0 20"
                    dur="0.2s"
                    fill="freeze"
                  ></animate>
                </g>
                <g id="eyeOutlineGroup">
                  <path
                    id="eyeOutline"
                    d="M 3 20 a 53 53 0 0 0 60 0 a 53 53 0 0 0 -60 0"
                    fill="transparent"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    vector-effect="non-scaling-stroke"
                  />
                  <animate
                    href="#eyeOutline"
                    id="eyeOutlineToggleIn"
                    ref="eyeOutlineToggleIn"
                    attributeName="d"
                    from="M 3 20 a 45 45 0 0 0 60 0 a 45 45 0 0 0 -60 0"
                    to="M 3 20 a 35 35 0 0 0 60 0 a 35 35 0 0 0 -60 0"
                    dur="0.2s"
                    fill="freeze"
                  ></animate>
                  <animate
                    v-if="$q.screen.gt.sm"
                    id="eyeOutlineME"
                    ref="eyeOutlineME"
                    href="#eyeOutline"
                    attributeName="d"
                    from="M 3 20 a 53 53 0 0 0 60 0 a 53 53 0 0 0 -60 0"
                    to="M 3 20 a 45 45 0 0 0 60 0 a 45 45 0 0 0 -60 0"
                    dur="0.2s"
                    fill="freeze"
                  ></animate>
                  <animate
                    v-if="$q.screen.gt.sm"
                    id="eyeOutlineML"
                    ref="eyeOutlineML"
                    href="#eyeOutline"
                    attributeName="d"
                    from="M 3 20 a 45 45 0 0 0 60 0 a 45 45 0 0 0 -60 0"
                    to="M 3 20 a 53 53 0 0 0 60 0 a 53 53 0 0 0 -60 0"
                    dur="0.2s"
                    fill="freeze"
                  ></animate>
                  <animate
                    id="eyeOutlineToggleOut"
                    ref="eyeOutlineToggleOut"
                    href="#eyeOutline"
                    attributeName="d"
                    from="M 3 20 a 35 35 0 0 0 60 0 a 35 35 0 0 0 -60 0"
                    to="M 3 20 a 45 45 0 0 0 60 0 a 45 45 0 0 0 -60 0"
                    dur="0.2s"
                    fill="freeze"
                  ></animate>
                </g>
              </svg>
            </template>
          </q-btn>
        </div>
      </q-toolbar>
    </transition>
    <q-page-container class="vbv-body-content">
      <router-view />
    </q-page-container>
    <q-drawer v-model="showMenu" elevated id="menuDrawer">
      <div class="row q-px-md q-py-xl full-height cinzel vbv-bg-gold">
        <div class="col-xs-12 q-pt-lg relative-position">
          <template v-for="(link, index) in menuLinks">
            <div :key="index">
              <q-separator v-if="index > 0" spaced/>
              <q-btn
                class="full-width no-border-radius q-pl-md t-normal-ease vbv-menu-link text-weight-bolder"
                :class="{'vbv-menu-current-link': link.location === currentPath}"
                align="left"
                flat
                v-bind="link"
              />
            </div>
          </template>
          <div class="absolute-bottom text-center">
            <router-link to="/legal-notices" class="deco-none text-grey-7">Legal notices</router-link>
          </div>
        </div>
      </div>
    </q-drawer>
  </q-layout>
</template>

<script>
  import { debounce } from 'quasar'

  let links = [
    {
      label:    "Home",
      location: "/",
      to:       "/",
      type:     "button"
    },
    {
      label:    "About",
      location: "/about",
      to:       "/about",
      type:     "button"
    },
    {
      label:    "Projects",
      location: "/projects",
      to:       "/projects",
      type:     "button"
    },
    {
      label:    "Contact",
      location: "/contact",
      to:       "/contact",
      type:     "button"
    },
    {
      label:    "Github",
      type:     "a",
      href:     "https://github.com/merithes",
      target:   "_blank"
    }
  ];

  export default {
    name: 'MainLayout',
    data () {
      return {
        showHeader: true,
        showMenu: false,
        menuLinks: links,
        hoverEye: false
      }
    },
    computed: {
      screenData() {
        return this.$q.screen
      },
      currentPath() {
        return this.$route.path
      }
    },
    watch: {
      showMenu() {
        if (this.showMenu) {
          this.$refs.eyeOutlineToggleIn.beginElement()
          this.$refs.eyeIrisToggleIn.beginElement()
        } else {
          this.$refs.eyeOutlineToggleOut.beginElement()
          this.$refs.eyeIrisToggleOut.beginElement()
        }
      }
    },
    methods: {
      toggleEyeHover(hovered) {
        this.hoverEye = hovered
        if (!this.showMenu && hovered) {
          console.log(hovered)
          this.$refs.eyeOutlineME.beginElement()
          this.$refs.eyeIrisME.beginElement()
        } else if (!this.showMenu && !hovered) {
          console.log(hovered)
          this.$refs.eyeOutlineML.beginElement()
          this.$refs.eyeIrisML.beginElement()
        }
      }
    },
    created() {
      this.$q.loadingBar.setDefaults({
        color: 'secondary',
        class: 'vbv-neon'
      })
      this.toggleHeader = debounce(() => {
        this.showHeader = document.scrollingElement.scrollTop > 30
      }, 100)
      this.toggleHeader()
      document.addEventListener(
        'scroll',
        this.toggleHeader
      )
    }
  }
</script>
