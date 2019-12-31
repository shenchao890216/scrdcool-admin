<template>
  <MainContent>
    <template v-slot:mianContentHeader>
      <MainContentHeader>
        <b-breadcrumb :items="breadcrumbItems" />
      </MainContentHeader>
    </template>
    <div>
      <no-ssr>
        <mavon-editor
          v-model="value"
          @imgAdd="imgAdd"
          :style="editorStyle"
        ></mavon-editor>
        <b-button @click="getCkeditorContent">
          hehe
        </b-button>
      </no-ssr>
    </div>
  </MainContent>
</template>

<script>
import MainContentHeader from '~/components/MainContentHeader'
import MainContent from '~/components/MainContent'

export default {
  name: 'PostNew',
  components: {
    MainContent,
    MainContentHeader
  },
  data () {
    return {
      value: '',
      editorStyle: {
        minHeight: '500px',
        height: '500px'
      },
      breadcrumbItems: [{
        html: '<i class="iconfont icon-shouye"></i>',
        href: '/'
      }, {
        text: '新建文章',
        href: '/post/new',
        active: true
      }]
    }
  },
  methods: {
    getCkeditorContent () {
      // eslint-disable-next-line no-console
      console.log(this.value)
    },
    imgAdd (pos, $file) {
      // eslint-disable-next-line no-console
      console.log($file)
    }
  }
}
</script>
