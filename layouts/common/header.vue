<template>
  <div class="main-header">
    <Logo />
    fdsfa
  </div>
</template>

<script>
import Logo from '~/components/logo'

export default {
  name: 'CommonHeader',
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  box-shadow: 2px 4px 20px -4px rgba(0, 0, 0, .1);
}
</style>
