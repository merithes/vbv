<template>
  <q-layout view="hHh Lpr lFf">
    <transition
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <q-toolbar class="fixed-top z-top bg-dark text-secondary text-bold shadow-3 full-width">
        <div class="container">
          <q-btn icon="menu" flat square @click="showMenu = !showMenu" class="no-border-radius vbv-neon"/>
        </div>
      </q-toolbar>
    </transition>
    <q-page-container class="vbv-body-content">
      <router-view />
    </q-page-container>
    <q-drawer v-model="showMenu" elevated>
      <div class="row q-px-md q-py-xl full-height">
        <div class="col-xs-12 q-pt-lg relative-position">
          <template v-for="(link, index) in menuLinks">
            <div :key="index">
              <q-separator v-if="index > 0" spaced/>
              <q-btn
              class="full-width no-border-radius q-pl-md t-normal-ease vbv-menu-link"
              :class="{'vbv-menu-current-link': link.location === currentPath}"
              align="left"
              flat
              color="primary"
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
        menuLinks: links
      }
    },
    computed: {
      screenData() {
        return this.$q.screen
      },
      currentPath() {
        return this.$route.path
      },
    },
    methods: {
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
