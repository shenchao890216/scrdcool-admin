<template>
  <MainContent>
    <template v-slot:mianContentHeader>
      <MainContentHeader>
        <b-breadcrumb :items="breadcrumbItems" />
        <template v-slot:mainContentHeaderRight>
          <b-button
            href="/post/new"
            variant="primary"
          >
            新建文章
          </b-button>
        </template>
      </MainContentHeader>
    </template>
    <div>
      <b-table
        :fields="fields"
        :items="posts"
      >
        <template v-slot:cell(operation)="data">
          <b-button
            :href="`/post/${data.item.id}`"
            variant="primary"
            size="sm"
          >
            编辑
          </b-button>
          <b-button
            variant="primary"
            size="sm"
          >
            置顶
          </b-button>
          <b-button
            variant="danger"
            size="sm"
          >
            删除
          </b-button>
        </template>
      </b-table>
    </div>
  </MainContent>
</template>

<script>
import moment from 'moment'
import MainContentHeader from '~/components/MainContentHeader'
import MainContent from '~/components/MainContent'

export default {
  name: 'PostList',
  middleware: 'userAuth',
  components: {
    MainContent,
    MainContentHeader
  },
  data () {
    return {
      // 面包屑导航.
      breadcrumbItems: [{
        html: '<i class="iconfont icon-shouye"></i>',
        href: '/'
      }, {
        text: '文章列表',
        href: '/post/list',
        active: true
      }],
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'title', label: '文章标题' },
        { key: 'top', label: '置顶' },
        { key: 'created_time', label: '创建时间' },
        { key: 'author', label: '作者' },
        { key: 'operation', label: '操作' }
      ]
    }
  },
  async asyncData ({ $axios }) {
    const { data } = await $axios.$get('/api/post/list')
    const posts = data.map((post) => {
      return {
        id: post.id,
        title: post.title,
        top: post.top === 0 ? '否' : '是',
        created_time: moment(post.createdAt).format('YYYY-MM-DD kk:mm'),
        author: post.User.username
      }
    })
    return {
      posts
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
    }
  }
}
</script>
