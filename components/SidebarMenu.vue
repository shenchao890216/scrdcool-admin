<template>
  <ul class="sec-sidebar-menu">
    <template v-for="(sidebarNavItem, parentIndex) in sidebarNav">
      <SidebarMenuHeader :title="sidebarNavItem.menuHeader" />
      <SidebarMenuItem
        v-for="(menuItem, childIndex) in sidebarNavItem.menuItems"
        :is-treeview="menuItem.isTreeview"
        :title="menuItem.title"
        :url="menuItem.url"
        :childMenus="menuItem.childMenus"
        :key="(`${parentIndex} - ${childIndex}`)"
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
