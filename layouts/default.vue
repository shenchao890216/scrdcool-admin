<template>
  <div id="sec-main-body">
    <Header />
    <Sidebar />
    <nuxt />
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
</style>
