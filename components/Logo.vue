<template>
  <h1 class="logo">
    <a href="#">
      <img src="~assets/img/logo-color-light.png" alt="SCRDCOOL">
      <span>
        ADMIN<i>COOL</i>
      </span>
    </a>
  </h1>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss">
.logo {
  height: 60px;
  width: 230px;
  margin: 0;
  background-color: #333;
  text-align: center;
  box-shadow: -5px 4px 20px -4px rgba(0, 0, 0, .5);
  & > a {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 25px;
    width: 100%;
    height: 100%;
    color: #b1b1b1;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  i {
    font-weight: normal;
  }
}
</style>
