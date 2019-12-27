<template>
  <li class="sec-sidebar-childmenu-item">
    <a :href="url">
      <span>{{ title }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SidebarMenuChildMenuItem',
  props: {
    // 标题.
    title: {
      type: String,
      default: '这是一个子链接'
    },
    // 链接地址.
    url: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss">
.sec-sidebar-childmenu-item {
  padding: 10px;
  & > a {
    display: block;
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #ddd;
    }
  }
}
</style>
