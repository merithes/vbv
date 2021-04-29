<template>
  <div class="container q-pt-xl q-mt-xl">
    <div class="row q-col-gutter-lg">
      <div class="col-xs-12">
        <div class="q-px-lg">
          <template v-if="$apollo.queries.pages.loading">
            <div class="text-body1">
              <q-skeleton type="text" width="50%"/>
              <q-skeleton type="text" width="75%"/>
              <br/>
              <q-skeleton type="text" width="60%"/>
              <br/>
              <q-skeleton type="text" width="49%"/>
              <q-skeleton type="text" width="52%"/>
            </div>
          </template>
          <template v-else>
            <div v-html="pageData" class="vbv-longtext text-body1"></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'About',
    data() {
      return {
      }
    },
    methods: {
      bindLinksToRoute() {
        let links = this.$el.querySelectorAll("a")
        let _this = this
        links.forEach(function(link) {
          link.onclick = function(e) {
            if (
              typeof e.target === 'object' &&
              typeof e.target.href === 'string' &&
              e.target.href !== null &&
              (
                e.target.href.charAt(0) === "/" ||
                e.target.href.match(/[^?]+victor\.boivin\.dev/)
              )
            ) {
              e.preventDefault()
              if (e.target.href.indexOf("/") === 0) {
                _this.$router.push(e.target.href.substring(1))
              } else {
                _this.$router.push(e.target.href.replace(/[^?]+victor\.boivin\.dev\/?/, ''))
              }
            }
          }
        })
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
    mounted() {
      this.bindLinksToRoute()
    },
    updated() {
      this.bindLinksToRoute()
    },
    apollo: {
      pages: {
        query: gql`query{
          pages (where: {slug: "about"}){
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
