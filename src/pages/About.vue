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
          let href = link.getAttribute("href");
          if (typeof href === "string" && href !== null && href.charAt(0) === "/") {
            link.setAttribute("href", `#${href}`)
          }
          link.onclick = function(e) {
            let href = e.target.getAttribute("href");
            if (
              typeof href === 'string' &&
              href !== null &&
              (
                href.charAt(0) === "/" ||
                href.indexOf("#/") === 0
              )
            ) {
              e.preventDefault()
              if (href.indexOf("#/") === 0) {
                _this.$router.push(href.substring(2))
              } else {
                _this.$router.push(href.replace(/[^?]+victor\.boivin\.dev\/(.*)/, '$1'))
              }
            }
          }
        })
      }
    },
    mounted() {
      this.bindLinksToRoute()
    },
    updated() {
      this.bindLinksToRoute()
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
