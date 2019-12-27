<template>
  <ul class="sec-sidebar-menu">
    <template v-for="sidebarNavItem in sidebarNav">
      <SidebarMenuHeader :title="sidebarNavItem.menuHeader" />
      <SidebarMenuItem
        v-for="(menuItem, index) in sidebarNavItem.menuItems"
        :is-treeview="menuItem.isTreeview"
        :title="menuItem.title"
        :childMenus="menuItem.childMenus"
        :key="('1-' + index)"
      />
    </template>
  </ul>
</template>

<script>
import SidebarMenuHeader from './SidebarMenuHeader'
import SidebarMenuItem from './SidebarMenuItem'

export default {
  name: 'SidebarMenu',
  components: {
    SidebarMenuHeader,
    SidebarMenuItem
  },
  props: {
    sidebarNav: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.sec-sidebar-menu {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
