<template>
  <div id="listProjects" class="q-px-md" :class="{'q-px-xl' : $q.screen.gt.sm}">
    <template v-if="loading || false">
      <template v-for="index in 3">
        <div :key="index" class="row" :class="{'q-mt-xl' : index > 1 && $q.screen.lt.md}">
          <div
            class="flex flex-center col-xs-10 col-sm-8 col-md-3 q-px-lg"
            :class="{
              'offset-2' : $q.screen.lt.md && $q.screen.gt.xs,
              'offset-1' : $q.screen.lt.sm
            }"
          >
            <q-skeleton width="120px" height="50px" />
          </div>
          <div class="col-xs-12 col-md-9">
            <div
              class="full-width"
              :class="{'text-center' : $q.screen.lt.md}"
            >
              <div
                class="text-subtitle1 inline-block bd-bottom q-mb-sm"
                :class="{
                  'q-pr-sm' : $q.screen.gt.sm,
                  'q-px-md' : $q.screen.lt.md
                }"
              >
                <q-skeleton type="text" width="10ch" height="1.75rem"/>
              </div>
            </div>
            <div class="text-subtitle2 text-weight-regular q-mb-sm" :class="{'flex justify-center q-mb-md' : $q.screen.lt.md}"><q-skeleton type="text" width="20ch" height="1.75rem"/></div>
            <div class="text-caption" :class="{'q-px-lg' : $q.screen.lt.md}">
              <q-skeleton type="text" width="85%" height="1.25rem"/>
              <q-skeleton type="text" width="90%" height="1.25rem"/>
              <q-skeleton type="text" width="70%" height="1.25rem"/>
              <q-skeleton type="text" width="75%" height="1.25rem"/>
              <q-skeleton type="text" width="72%" height="1.25rem"/>
            </div>
            <div class="q-mt-sm" :class="{'text-center q-mb-md' : $q.screen.lt.md}">
              <q-skeleton type="text" width="20ch" height="1.25rem" class="inline-block"/>
              <q-skeleton type="text" width="15ch" height="1.25rem" class="inline-block q-ml-sm"/>
            </div>
          </div>
        </div>
        <q-separator v-if="index < 3" color="secondary" class="q-my-md"/>
      </template>
    </template>
    <template v-else-if="error">
      {{ error }}
    </template>
    <template v-else>
      <template v-for="(website, index) in projects">
        <div :key="index" class="row" :class="{'q-mt-xl' : index && $q.screen.lt.md}">
          <div
            class="flex flex-center col-xs-10 col-sm-8 col-md-3 q-px-lg"
            :class="{
              'offset-2' : $q.screen.lt.md && $q.screen.gt.xs,
              'offset-1' : $q.screen.lt.sm
            }"
          >
            <q-img :src="strapiUrl(website.thumbnail.url)" height="50px" contain/>
          </div>
          <div class="col-xs-12 col-md-9">
            <div
              class="full-width"
              :class="{'text-center' : $q.screen.lt.md}"
            >
              <div
                class="text-subtitle1 inline-block bd-primary bd-bottom q-mb-sm"
                :class="{
                  'q-pr-sm' : $q.screen.gt.sm,
                  'q-px-md' : $q.screen.lt.md
                }"
              >
                  {{ website.title }}
                </div>
            </div>
            <div class="text-subtitle2 text-weight-regular q-mb-sm" :class="{'text-center q-mb-md' : $q.screen.lt.md}">{{ website.subtitle }}</div>
            <div class="text-caption" :class="{'q-px-lg' : $q.screen.lt.md}"><q-markdown no-html :src="website.description"></q-markdown></div>
            <div class="q-mt-sm" :class="{'text-center q-mb-md' : $q.screen.lt.md}">
              <template v-if="Array.isArray(website.links) && website.links.length">
                <a
                  v-for="link of website.links"
                  :href="typeof link.url !== 'undefined' ? link.url : ''"
                  target="_blank"
                  class="q-mr-md"
                >
                  {{ (typeof link.name !== "undefined" && link.name !== null && link.name.length) ? link.name : "See the website" }} <q-icon v-if="typeof link.url !== 'undefined' && link.url !== null && link.url.length" name="north_east"/>
                </a>
              </template>
              <template  v-if="typeof website.message !== undefined && website.message !== null">
              </template>
            </div>
          </div>
        </div>
        <q-separator v-if="index + 1 !== projects.length" color="secondary" class="vbv-neon q-my-md"/>
      </template>
    </template>
  </div>
</template>
<script>
  export default {
    name: "listProjects",
    data() {
      return {
        error: false
      }
    },
    props: {
      loading: Boolean,
      projects: Array
    },
    methods: {
      strapiUrl(string) {
        return `https://strapi.victor.boivin.dev${string}`
      }
    }
  }
</script>
