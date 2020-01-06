<template>
  <div id="main">
    <div class="sec-form">
      <b-form>
        <b-form-group
          label="电子邮箱："
          label-for="email"
          description="这是一个描述"
        >
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="请输入邮箱地址"
          />
        </b-form-group>

        <b-form-group
          label="密码："
          label-for="password"
        >
          <b-form-input
            id="password"
            v-model="form.password"
            type="password"
            required
            placeholder="请输入密码"
          />
        </b-form-group>

        <b-button @click="onSubmit" variant="primary">
          登录
        </b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'

export default {
  layout: 'blank',
  name: 'PageUserLogin',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit (e) {
      // 1. 组织默认事件.
      e.preventDefault()

      // 2. 校验参数.

      // 3. 组织请求参数.
      const loginData = {
        email: this.form.email,
        password: this.form.password
      }

      // 4. password加密.
      loginData.password = md5(loginData.password)

      // eslint-disable-next-line
      // console.log(this.form)

      // 5. 请求.
      const res = await this.$axios.post('/api/user/login', loginData)
      const { code } = res.data

      // eslint-disable-next-line
      console.log(code)

      // 6. 结果处理.
      if (code === 0) {
        window.location.href = '/'
      }
    }
  }
}
</script>

<style lang="scss">
#main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}
.sec-form {
  width: 500px;
}
</style>
