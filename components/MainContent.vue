<template>
  <div class="sec-main-content">
    <slot name="mianContentHeader"></slot>
    <div class="sec-main-content-box">
      <div class="sec-main-content-box-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent'
}
</script>

<style lang="scss">
.sec-main-content {
  margin-top: 60px;
  margin-left: 230px;
  min-height: 1000px;
  background: #eee;
  .sec-main-content-box {
    padding: 30px;
  }
  .sec-main-content-box-wrapper {
    min-height: 1000px;
    padding: 30px;
    background: #fff;
    border-radius: 5px;
  }
}
</style>
