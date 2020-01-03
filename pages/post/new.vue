<template>
  <MainContent>
    <template v-slot:mianContentHeader>
      <MainContentHeader>
        <b-breadcrumb :items="breadcrumbItems" />
        <template v-slot:mainContentHeaderRight>
          <b-button
            @click="savePost"
            variant="primary"
          >
            保存
          </b-button>
        </template>
      </MainContentHeader>
    </template>
    <div>
      <b-form-group
        label="文章标题："
        label-for="post-title"
      >
        <b-form-input
          id="post-title"
          v-model="postTitle"
          required
          placeholder="请输入文章标题"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="文章内容："
        label-for=""
      >
        <client-only>
          <mavon-editor
            ref="mavonEditor"
            v-model="postContent"
            @imgAdd="imgAdd"
            :style="editorStyle"
            :toolbars="toolbarsObj"
          ></mavon-editor>
        </client-only>
      </b-form-group>
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
      // 文章标题.
      postTitle: '',
      // 文章内容.
      postContent: '',
      // 编辑器样式修改.
      editorStyle: {
        minHeight: '500px',
        height: '500px',
        border: '1px solid #ced4da',
        boxShadow: 'none !important'
      },
      // 编辑器工具栏.
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
      // 面包屑导航.
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
    // 保存文章.
    savePost () {
      // eslint-disable-next-line no-console
      // console.log(this.postContent)
      // eslint-disable-next-line no-console
      // console.log(this.$mavonEditor.markdownIt.render(this.postContent))
      // eslint-disable-next-line no-console
      // console.log(this.$refs.mavonEditor.markdownIt.render(this.postContent))

      // 1. 校验参数.

      // 2. 防止暴力点击.

      // 3. 提交数据.
      this.$axios.$post('/api/post/new', {
        postTitle: this.postTitle,
        postOriginContent: this.postContent,
        postContent: this.$refs.mavonEditor.markdownIt.render(this.postContent)
      }).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res)
      })
    },
    // 编辑器上传图片.
    imgAdd (pos, $file) {
      const formdata = new FormData()

      formdata.append('myimg', $file)

      this.$axios({
        url: '/api/upload/banner',
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
