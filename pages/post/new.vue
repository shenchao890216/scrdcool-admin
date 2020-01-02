<template>
  <MainContent>
    <template v-slot:mianContentHeader>
      <MainContentHeader>
        <b-breadcrumb :items="breadcrumbItems" />
      </MainContentHeader>
    </template>
    <div>
      <client-only>
        <mavon-editor
          ref="mavonEditor"
          v-model="value"
          @imgAdd="imgAdd"
          :style="editorStyle"
          :toolbars="toolbarsObj"
        ></mavon-editor>
        <b-button @click="getCkeditorContent">
          hehe
        </b-button>
      </client-only>
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
      toolbarsObj: {
        'bold': true,
        'italic': true,
        'header': true,
        'underline': true,
        'strikethrough': true,
        'mark': true,
        'superscript': true,
        'subscript': true,
        'quote': true,
        'ol': true,
        'ul': true,
        'link': true,
        'imagelink': true,
        'code': true,
        'table': true,
        'undo': true,
        'redo': true,
        'trash': false,
        'save': false,
        'alignleft': true,
        'aligncenter': true,
        'alignright': true,
        'navigation': true,
        'subfield': true,
        'fullscreen': true,
        'readmodel': true,
        'htmlcode': true,
        'help': true,
        'preview': true
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
      // eslint-disable-next-line no-console
      // console.log(this.$mavonEditor.markdownIt.render(this.value))
      // eslint-disable-next-line no-console
      console.log(this.$refs.mavonEditor.markdownIt.render(this.value))
      this.$axios({
        url: '/admin/upload/banner',
        method: 'get'
      }).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res)
      })
    },
    imgAdd (pos, $file) {
      // eslint-disable-next-line no-console
      console.log($file)
      const formdata = new FormData()
      formdata.append('myimg', $file)
      this.$axios({
        url: '/admin/upload/banner',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((url) => {
        // eslint-disable-next-line no-console
        console.log(url)
        this.$refs.mavonEditor.$img2Url(pos, url.data.url)
      })
    }
  }
}
</script>
