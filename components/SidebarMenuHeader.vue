<template>
  <li class="sec-sidebar-menu-header">
    <span>
      {{ title }}
    </span>
  </li>
</template>

<script>
export default {
  name: 'SidebarMenuHeader',
  props: {
    title: {
      type: String,
      default: '头部'
    }
  }
}
</script>

<style lang="scss">
.sec-sidebar-menu-header {
  padding: 20px 10px 10px;
  color: #fff;
  font-size: 14px;
  & > span {
    display: inline-block;
    padding: 5px 15px;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 15px;
  }
}
</style>
