<template>
  <div class="container q-pt-xl q-mt-xl">
    <div class="row q-col-gutter-lg">
      <div class="col-xs-12 vbv-longtext text-body1 text-center">
        <p>
          Here are a few projects I have worked on and which I feel proud enough to showcase.
        </p>
      </div>
      <div class="col-xs-12 flex justify-center full-width">
        <q-tabs v-model="projectsTab" dense color="primary" indicator-color="secondary" aligh="justify" content-class="vbv-tab-indicator">
          <q-tab name="pro" label="Professional"/>
          <q-tab name="perso" label="Personnal"/>
        </q-tabs>
      </div>
      <q-tab-panels class="col-xs-8 offset-2 bg-transparent q-pb-xl" v-model="projectsTab" animated>
        <q-tab-panel name="pro" class="overflow-hidden">
          <q-list>
            <template v-if="loadingProjects">
              <template v-for="index in 3">
                <q-item :key="index">
                  <q-item-section thumbnail style="min-width: 150px" class="flex flex-center">
                    <q-skeleton width="120px" height="50px" />
                  </q-item-section>
                  <q-item-section class="q-pl-md">
                    <div>
                      <div class="text-subtitle1 inline-block bd-primary bd-bottom q-mb-xs q-pr-sm"><q-skeleton type="text" width="15ch" height="1.75rem"/></div>
                      <q-skeleton type="text" width="20ch" height="1.75rem"/>
                      <q-skeleton type="text" width="85%" height="1.25rem"/>
                      <q-skeleton type="text" width="90%" height="1.25rem"/>
                      <q-skeleton type="text" width="70%" height="1.25rem"/>
                      <div class="q-mt-sm">
                        <q-skeleton type="text" width="20ch" height="1.25rem" class="inline-block"/>
                        <q-skeleton type="text" width="15ch" height="1.25rem" class="inline-block q-ml-sm"/>
                      </div>
                    </div>
                  </q-item-section>
                </q-item>
                <q-separator v-if="index < 3" color="secondary" class="vbv-neon q-my-md"/>
              </template>
            </template>
            <template v-else-if="error">
              {{ error }}
            </template>
            <template v-else>
              <template v-for="(website, index) in projectsList.pro">
                <q-item :key="index">
                  <q-item-section thumbnail style="min-width: 150px" class="flex flex-center">
                    <img :src="strapiUrl(website.thumbnail.url)" style="width:auto"/>
                  </q-item-section>
                  <q-item-section class="q-pl-md">
                    <div>
                      <div class="text-subtitle1 inline-block bd-primary bd-bottom q-mb-sm q-pr-sm">{{ website.title }}</div>
                      <div class="text-subtitle2 text-weight-regular q-mb-sm">{{ website.subtitle }}</div>
                      <div class="text-caption"><q-markdown no-html :src="website.description"></q-markdown></div>
                      <div class="q-mt-sm">
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
                  </q-item-section>
                </q-item>
                <q-separator v-if="index + 1 !== projectsList.pro.length" color="secondary" class="vbv-neon q-my-md"/>
              </template>
            </template>
          </q-list>
        </q-tab-panel>
        <q-tab-panel name="perso" class="overflow-hidden">
          <template v-if="loadingProjects">
            <template v-for="index in 3">
              <q-item :key="index">
                <q-item-section thumbnail style="min-width: 150px" class="flex flex-center">
                  <q-skeleton width="120px" height="50px" />
                </q-item-section>
                <q-item-section class="q-pl-md">
                  <div>
                    <div class="text-subtitle1 inline-block bd-primary bd-bottom q-mb-xs q-pr-sm"><q-skeleton type="text" width="15ch" height="1.75rem"/></div>
                    <q-skeleton type="text" width="20ch" height="1.75rem"/>
                    <q-skeleton type="text" width="85%" height="1.25rem"/>
                    <q-skeleton type="text" width="90%" height="1.25rem"/>
                    <q-skeleton type="text" width="70%" height="1.25rem"/>
                    <div class="q-mt-sm">
                      <q-skeleton type="text" width="20ch" height="1.25rem" class="inline-block"/>
                      <q-skeleton type="text" width="15ch" height="1.25rem" class="inline-block q-ml-sm"/>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
              <q-separator v-if="index < 3" color="secondary" class="vbv-neon q-my-md"/>
            </template>
          </template>
          <template v-else-if="error">
            {{ error }}
          </template>
          <template v-else v-for="(website, index) in projectsList.perso">
            <q-item :key="index">
              <q-item-section thumbnail style="min-width: 150px" class="flex flex-center">
                <img :src="strapiUrl(website.thumbnail.url)" style="width:auto"/>
              </q-item-section>
              <q-item-section class="q-pl-md">
                <div>
                  <div class="text-subtitle1 inline-block bd-primary bd-bottom q-mb-sm q-pr-sm">{{ website.title }}</div>
                  <div class="text-subtitle2 text-weight-regular q-mb-sm">{{ website.subtitle }}</div>
                  <div class="text-caption"><q-markdown :src="website.description"/></div>
                  <div class="q-mt-sm">
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
              </q-item-section>
            </q-item>
            <q-separator v-if="index + 1 !== projectsList.perso.length" color="secondary" class="vbv-neon q-my-md"/>
          </template>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>

  import gql from 'graphql-tag'

  export default {
    name: 'Projects',
    data() {
      return {
        projectsTab: "pro",
        error: false
      }
    },
    methods: {
      strapiUrl(string) {
        return `https://strapi.victor.boivin.dev${string}`
      }
    },
    computed: {
      projectsList() {
        return {
          pro: this.$apollo.queries.projects.loading ?
            [] :
            this.projects.filter(item => item.type === "professional"),
          perso: this.$apollo.queries.projects.loading ?
            [] :
            this.projects.filter(item => item.type === "personnal")
        }
      },
      loadingProjects() {
        return this.$apollo.queries.projects.loading
      }
    },
    apollo: {
      projects: {
        query: gql`query{
          projects{
            id
            created_at
            updated_at
            title
            subtitle
            thumbnail { url }
            links { url name }
            description
            type
            published_at
          }
        }`,
        error(error) {
          this.error = JSON.stringify(error.message)
        }
      }
    }
  }
</script>
