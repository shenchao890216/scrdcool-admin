<template>
  <ul
    :class="{
      'menu-open': itemtreeShow
    }"
  >
    <SidebarMenuChildMenuItem
      v-for="(childMenu, index) in childMenus"
      :title="childMenu.title"
      :url="childMenu.url"
      :key="('2-' + index)"
    />
  </ul>
</template>

<script>
import SidebarMenuChildMenuItem from './SidebarMenuChildMenuItem'

export default {
  name: 'SidebarMenuChildMenu',
  components: {
    SidebarMenuChildMenuItem
  },
  props: {
    itemtreeShow: {
      type: Boolean,
      default: false
    },
    childMenus: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: none;
  margin: 0;
  padding: 10px 0 10px 15px;
  list-style: none;
}
.menu-open {
  display: block;
  background: rgba(0, 0, 0, .5);
}
</style>
