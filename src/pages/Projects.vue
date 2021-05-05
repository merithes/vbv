<template>
  <div class="container q-pt-xl q-mt-xl">
    <div class="row q-col-gutter-lg">
      <div class="col-xs-12 vbv-longtext text-body1 text-center">
        <p class="q-px-xl">
          Here are a few projects I have worked on and which I feel proud enough to showcase.
        </p>
      </div>
      <div class="col-xs-12 flex justify-center full-width">
        <q-tabs v-model="projectsTab" dense color="primary" indicator-color="secondary" aligh="justify" content-class="vbv-tab-indicator">
          <q-tab name="pro" label="Professional"/>
          <q-tab name="perso" label="Personnal"/>
        </q-tabs>
      </div>
      <q-tab-panels class="col-xs-12 bg-transparent q-pb-xl" v-model="projectsTab" animated>
        <q-tab-panel name="pro" class="overflow-hidden">
          <ListProjects :loading="loadingProjects" :projects="projectsList.pro"/>
        </q-tab-panel>
        <q-tab-panel name="perso" class="overflow-hidden">
          <ListProjects :loading="loadingProjects" :projects="projectsList.perso"/>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
  import ListProjects from 'components/ListProjects/ListProjects.vue'
  import gql from 'graphql-tag'

  export default {
    name: 'Projects',
    components: { ListProjects },
    data() {
      return {
        projectsTab: "pro"
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
