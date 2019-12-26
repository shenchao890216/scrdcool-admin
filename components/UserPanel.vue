<template>
  <div class="sec-user-panel">
    <div class="sec-avatar">
      <img src="~/assets/img/avatar.png" alt="头像">
      <h4 class="sec-username">
        SCRD
      </h4>
      <p class="sec-userdesc">
        这是一个美好的开始
      </p>
    </div>
    <ul class="sec-user-operation">
      <li>
        <a href="#">
          <i class="iconfont icon-shezhi" />
          <p class="sec-user-operation-desc">设置</p>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-profile" />
          <p class="sec-user-operation-desc">用户</p>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-logout" />
          <p class="sec-user-operation-desc">登出</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserPanel'
}
</script>

<style lang="scss">
.sec-user-panel {
  box-sizing: border-box;
  padding: 10px 0 0;
  background: url("~assets/img/avatar-bg.png") no-repeat 0 0;
  background-size: cover;
  .sec-avatar {
    color: #fff;
    text-align: center;
    img {
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
    }
    .sec-username {
      font-size: 14px;
    }
    .sec-userdesc {
      font-size: 12px;
    }
  }
  .sec-user-operation {
    list-style: none;
    padding: 5px 20px;
    margin: 0;
    display: flex;
    justify-content: space-around;
    background: rgba(31, 45, 61, .5);
    a {
      display: inline-block;
      color: rgba(255, 255, 255, .9);
      font-size: 12px;
      text-align: center;
      text-decoration: none;
    }
    .sec-user-operation-desc {
      margin: 0;
    }
  }
}
</style>
