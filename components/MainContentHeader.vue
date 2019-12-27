<template>
  <div class="sec-main-content-header">
    <div class="sec-main-content-header-left">
      <slot></slot>
    </div>
    <div class="sec-main-content-header-right">
      <slot name="mainContentHeaderRight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContentHeader'
}
</script>

<style lang="scss">
.sec-main-content-header {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  background: #fff;
  .breadcrumb {
    margin: 0;
    padding: 0;
    background: transparent;
    color: #222;
    a {
      color: #222;
    }
    .breadcrumb-item + .breadcrumb-item::before {
      color: #ccc;
    }
  }
}
</style>
