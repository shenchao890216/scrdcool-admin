<template>
  <div>
    <Header />
    <div id="main">
      <Sidebar />
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
#main {
  display: flex;
}
</style>
