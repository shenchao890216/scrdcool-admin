<template>
  <MainContent>
    <template v-slot:mianContentHeader>
      <MainContentHeader>
        <b-breadcrumb :items="breadcrumbItems" />
        <template v-slot:mainContentHeaderRight>
          <b-button
            @click="newCategoryModalShow = !newCategoryModalShow"
            variant="primary"
          >
            新建分类
          </b-button>
        </template>
      </MainContentHeader>
    </template>
    <div>
      <b-table
        :fields="fields"
        :items="tags"
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
            variant="danger"
            size="sm"
          >
            删除
          </b-button>
        </template>
      </b-table>
    </div>

    <b-modal
      v-model="newCategoryModalShow"
      @ok="newCategory"
      centered
      title="新建分类"
      ok-title="确定"
      cancel-title="取消"
    >
      <div>
        <b-form-group
          label="分类名称："
          label-for="tag-name"
        >
          <b-form-input
            id="tag-name"
            v-model="newCategoryForm.name"
            required
            placeholder="请输入分类名称"
          />
        </b-form-group>
      </div>
    </b-modal>
  </MainContent>
</template>

<script>
import moment from 'moment'
import MainContentHeader from '~/components/MainContentHeader'
import MainContent from '~/components/MainContent'

export default {
  name: 'PageCategory',
  components: {
    MainContentHeader,
    MainContent
  },
  data () {
    return {
      // 面包屑导航.
      breadcrumbItems: [{
        html: '<i class="iconfont icon-shouye"></i>',
        href: '/'
      }, {
        text: '分类列表',
        href: '/post/list',
        active: true
      }],
      // 新建标签.
      newCategoryModalShow: false,
      // 新建标签form data.
      newCategoryForm: {
        name: ''
      },
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: '分类名称' },
        { key: 'created_time', label: '创建时间' },
        { key: 'operation', label: '操作' }
      ]
    }
  },
  async asyncData ({ $axios }) {
    const { data } = await $axios.$get('/api/category/list')
    // eslint-disable-next-line no-console
    console.log(data)

    const tags = data.map((tag) => {
      return {
        id: tag.id,
        name: tag.name,
        created_time: moment(tag.created_at).format('YYYY-MM-DD kk:mm')
      }
    })

    return {
      tags
    }
  },
  methods: {
    newCategory () {
      // eslint-disable-next-line no-console
      console.log(this.newCategoryForm.name)
      this.$axios.$post('/api/category/new', {
        name: this.newCategoryForm.name
      }).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">
</style>
