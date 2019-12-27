<template>
  <MainContent>
    <template v-slot:mianContentHeader>
      <MainContentHeader>
        <b-breadcrumb :items="breadcrumbItems" />
      </MainContentHeader>
    </template>
    <div>sdfdsfsdfsd</div>
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
