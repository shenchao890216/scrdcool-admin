<template>
  <div id="main">
    <Header />
    <Sidebar />
    <div class="sec-main-content">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './common/header'
import Footer from './common/footer'
import Sidebar from './common/sidebar'

export default {
  name: 'LayoutDefault',
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>

<style lang="scss">
.sec-main-content {
  margin-top: 60px;
  margin-left: 230px;
  min-height: 1000px;
}
</style>
