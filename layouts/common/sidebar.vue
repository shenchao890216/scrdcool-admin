<template>
  <div class="sidebar">
    <UserPanel />
    <SidebarMenu :sidebarNav="sidebarNav" />
  </div>
</template>

<script>
import UserPanel from '~/components/UserPanel'
import SidebarMenu from '~/components/SidebarMenu'

export default {
  name: 'CommonSidebar',
  components: {
    UserPanel,
    SidebarMenu
  },
  data () {
    return {
      sidebarNav: [{
        menuHeader: '文章管理',
        menuItems: [{
          title: '新建文章',
          url: '/post/new',
          isTreeview: false
        }, {
          title: '文章列表',
          url: '/post/list',
          isTreeview: false
        }, {
          title: '标签列表',
          url: '/tag/list',
          isTreeview: false
        }, {
          title: '分类列表',
          url: '/category/list',
          isTreeview: false
        }]
      }, {
        menuHeader: '其他',
        menuItems: [{
          title: '网站底部设置',
          url: '#',
          isTreeview: false
        }, {
          title: '社交媒体设置',
          url: '/post/list',
          isTreeview: false
        }, {
          title: '用户管理',
          url: '#',
          isTreeview: true,
          childMenus: [{
            title: '用户列表',
            url: '#'
          }]
        }]
      }]
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 230px;
  border-right: 1px solid rgba(0, 0, 0, .05);
  background: #333;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
