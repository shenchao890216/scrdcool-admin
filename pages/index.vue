<template>
  <MainContent>
    <template v-slot:mianContentHeader>
      <MainContentHeader>
        <b-breadcrumb :items="breadcrumbItems" />
      </MainContentHeader>
    </template>
    <div>sdfdsfsdfsd</div>
    <a href="/post/list">文章列表1</a>
    <nuxt-link to="/post/list">
      文章列表2
    </nuxt-link>
  </MainContent>
</template>

<script>
import MainContentHeader from '~/components/MainContentHeader'
import MainContent from '~/components/MainContent'

export default {
  name: 'PageIndex',
  components: {
    MainContent,
    MainContentHeader
  },
  data () {
    return {
      breadcrumbItems: [{
        html: '<i class="iconfont icon-shouye"></i>',
        href: '/'
      }, {
        text: 'test',
        href: '#',
        active: true
      }]
    }
  }
}
</script>
