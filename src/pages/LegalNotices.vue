<template>
  <div class="container q-pt-xl q-mt-xl">
    <div class="row q-col-gutter-lg">
      <div class="col-xs-12">
        <div class="q-px-lg">
          <template v-if="loading">
            <q-skeleton type="text" width="15ch" height="4em"/>
            <q-skeleton type="text" width="10ch"/>
            <q-skeleton type="text" width="35ch"/>
            <q-skeleton type="text" width="25ch"/>
          </template>
          <template v-else>
            <q-markdown no-html :src="pageData"/>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'Legal notices',
    data() {
      return {
      }
    },
    computed: {
      pageData() {
        return this.$apollo.queries.pages.loading && Array.isArray(this.pages) ?
          "" :
          this.pages[0].content
      },
      loading() {
        return this.$apollo.queries.pages.loading
      }
    },
    apollo: {
      pages: {
        query: gql`query{
          pages (where: {slug: "legal-notices"}){
            id
            created_at
            updated_at
            content
            title
            slug
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
