<template>
  <li
    @click="itemtreeClickHandle"
    :class="{ 'sec-sidebar-menu-itemtree': isTreeview }"
    class="sec-sidebar-menu-item"
  >
    <a
      :class="{
        active: itemActive
      }"
      :href="url"
    >
      <span>{{ title }}</span>
      <i
        v-if="isTreeview"
        :class="{
          'icon-zuojiantou': itemArrowLeft,
          'icon-xiajiantou': itemArrowDown
        }"
        class="treeview-icon iconfont"
      ></i>
    </a>
    <SidebarMenuChildMenu
      v-if="isTreeview"
      :childMenus="childMenus"
      :itemtree-show="itemtreeShow"
    />
  </li>
</template>

<script>
import SidebarMenuChildMenu from './SidebarMenuChildMenu'

export default {
  name: 'SidebarMenuItem',
  components: {
    SidebarMenuChildMenu
  },
  props: {
    // 是否是展开类型.
    isTreeview: {
      type: Boolean,
      default: false
    },
    // 标题.
    title: {
      type: String,
      default: '标题'
    },
    // 链接.
    url: {
      type: String,
      default: '#'
    },
    // 子导航.
    childMenus: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      // 是否展开.
      itemtreeShow: false,
      // 是否展开class.
      itemActive: false,
      // 左箭头显示.
      itemArrowLeft: true,
      // 下箭头展示.
      itemArrowDown: false
    }
  },
  methods: {
    itemtreeClickHandle (event) {
      if (this.isTreeview) {
        event.preventDefault()
        this.itemtreeShow = !this.itemtreeShow
        this.itemActive = !this.itemActive
        this.itemArrowLeft = !this.itemArrowLeft
        this.itemArrowDown = !this.itemArrowDown
      }
    }
  }
}
</script>

<style lang="scss">
.sec-sidebar-menu-item {
  & > a {
    box-sizing: border-box;
    position: relative;
    display: block;
    padding: 12px 10px;
    border-left: 3px solid transparent;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    &:hover, &.active {
      border-left-color: #fff;
      background: rgba(0, 0, 0, .5);
      font-weight: bold;
    }
  }
  .treeview-icon {
    position: absolute;
    top: 11px;
    right: 20px;
  }
}
.sec-sidebar-menu-itemtree {
}
</style>
