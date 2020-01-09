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
        label="文章分类："
      >
        <b-form-select
          v-model="selectedCategory"
          :options="categories"
        ></b-form-select>
      </b-form-group>
      <b-form-group
        label="文章标签："
      >
        <TagsInput
          v-model="selectedTags"
          :existing-tags="tags"
          :typeahead="true"
          placeholder="请输入标签"
          element-id="tags"
        ></TagsInput>
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
      selectedCategory: null,
      // tags: [
      //   { key: 'web-development', value: 'Web Development' },
      //   { key: 'php', value: 'PHP' },
      //   { key: 'javascript', value: 'JavaScript' }
      // ],
      selectedTags: [],
      // 文章标题.
      postTitle: '',
      // 文章内容.
      postContent: '',
      // 编辑器样式修改.
      editorStyle: {
        minHeight: '700px',
        height: '700px',
        border: '1px solid #ced4da',
        boxShadow: 'none !important',
        zIndex: '1001'
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
  async asyncData ({ $axios }) {
    const { data: tagsData } = await $axios.$get('/api/tag/list')
    const { data: categoriesData } = await $axios.$get('/api/category/list')
    // eslint-disable-next-line no-console
    console.log(tagsData)

    const tags = tagsData.map((tag) => {
      const { id, name } = tag
      return {
        id,
        key: name,
        value: name
      }
    })

    const categories = categoriesData.map((category) => {
      const { id, name } = category
      return {
        value: id,
        text: name
      }
    })

    categories.unshift({
      value: null,
      text: '请选择一个分类'
    })

    return {
      tags,
      categories
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
      // eslint-disable-next-line no-console
      console.log(this.selectedTags)

      const postTags = []

      for (const tag of this.selectedTags) {
        postTags.push(tag.id)
      }

      this.$axios.$post('/api/post/new', {
        postTitle: this.postTitle,
        postOriginContent: this.postContent,
        postContent: this.$refs.mavonEditor.markdownIt.render(this.postContent),
        postCategory: this.selectedCategory,
        postTags
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

<style lang="scss">
/* The input */
.tags-input {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.tags-input input {
  flex: 1;
  background: transparent;
  border: none;
}

.tags-input input:focus {
  outline: none;
}

.tags-input input[type="text"] {
  color: #495057;
}

.tags-input-wrapper-default {
  padding: 0.375rem 0.75rem;
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: .25rem;
}

/* The tag badges & the remove icon */
.tags-input span {
  margin-right: 0.3rem;
}

.tags-input-remove {
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  overflow: hidden;
}

.tags-input-remove:before, .tags-input-remove:after {
  content: '';
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  background: #ff4500;

  height: 2px;
  margin-top: -1px;
}

.tags-input-remove:before {
  transform: rotate(45deg);
}
.tags-input-remove:after {
  transform: rotate(-45deg);
}

/* Tag badge styles */
.tags-input-badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}

.tags-input-badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

.tags-input-badge-selected-default {
  color: #212529;
  background-color: #f0f1f2;
}

/* Typeahead */
.typeahead-hide-btn {
  color: #999 !important;
  font-style: italic;
}

/* Typeahead - badges */
.typeahead-badges > span {
  cursor: pointer;
  margin-right: 0.3rem;
}

/* Typeahead - dropdown */
.typeahead-dropdown {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  z-index: 1000;
}

.typeahead-dropdown li {
  padding: .25rem 1rem;
  cursor: pointer;
}

/* Typeahead elements style/theme */
.tags-input-typeahead-item-default {
  color: #fff;
  background-color: #343a40;
}

.tags-input-typeahead-item-highlighted-default {
  color: #fff;
  background-color: #007bff;
}
</style>
