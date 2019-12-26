<template>
  <div class="sidebar">
    <UserPanel />
    <SidebarMenu />
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
  }
}
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  width: 230px;
  min-height: 100%;
  border-right: 1px solid rgba(0, 0, 0, .05);
  background: #333;
}
</style>
