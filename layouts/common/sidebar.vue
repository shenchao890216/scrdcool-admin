<template>
  <div class="sidebar">
    sidebar
  </div>
</template>

<script>
export default {
  name: 'CommonSidebar'
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
