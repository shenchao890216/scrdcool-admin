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
        menuHeader: '文章',
        menuItems: [{
          title: '新建文章',
          url: '/post/new',
          isTreeview: false
        }, {
          title: '二级导航',
          url: '#',
          isTreeview: true,
          childMenus: [{
            title: '子导航',
            url: '#2'
          }, {
            title: '子导航2',
            url: '#3'
          }, {
            title: '子导航3',
            url: '#3'
          }]
        }]
      }, {
        menuHeader: '头部2',
        menuItems: [{
          title: '一级导航',
          url: '#',
          isTreeview: false
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
