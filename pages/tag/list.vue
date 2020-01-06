<template>
  <MainContent>
    <template v-slot:mianContentHeader>
      <MainContentHeader>
        <b-breadcrumb :items="breadcrumbItems" />
        <template v-slot:mainContentHeaderRight>
          <b-button
            @click="newTagModalShow = !newTagModalShow"
            variant="primary"
          >
            新建标签
          </b-button>
        </template>
      </MainContentHeader>
    </template>
    <div>
      fjkdsajfldjsaf
    </div>

    <b-modal
      v-model="newTagModalShow"
      @ok="newTag"
      centered
      title="新建标签"
    >
      <div>
        <b-form-group
          label="标签名称："
          label-for="tag-name"
        >
          <b-form-input
            id="tag-name"
            v-model="newTagForm.name"
            required
            placeholder="请输入标签名称"
          />
        </b-form-group>
      </div>
    </b-modal>
  </MainContent>
</template>

<script>
import MainContentHeader from '~/components/MainContentHeader'
import MainContent from '~/components/MainContent'

export default {
  name: 'PageTag',
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
        text: '标签列表',
        href: '/post/list',
        active: true
      }],
      // 新建标签.
      newTagModalShow: false,
      // 新建标签form data.
      newTagForm: {
        name: ''
      }
    }
  },
  async asyncData ({ $axios }) {
    const { data } = await $axios.$get('/api/tag/list')
    // eslint-disable-next-line no-console
    console.log(data)
  },
  methods: {
    newTag () {
      // eslint-disable-next-line no-console
      console.log(this.newTagForm.name)
      this.$axios.$post('/api/tag/new', {
        name: this.newTagForm.name
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
