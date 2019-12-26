<template>
  <div id="main">
    <div class="sec-form">
      <b-form @reset="onReset" v-if="show">
        <b-form-group
          label="用户名："
          label-for="username"
        >
          <b-form-input
            id="username"
            v-model="form.username"
            required
            placeholder="请输入用户名"
          />
        </b-form-group>
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

        <b-form-group
          label="确认密码："
          label-for="repassword"
        >
          <b-form-input
            id="repassword"
            v-model="form.repassword"
            type="password"
            required
            placeholder="请确认密码"
          />
        </b-form-group>

        <b-button @click="onSubmit" type="submit" variant="primary">
          注册
        </b-button>
        <b-button type="reset" variant="danger">
          重置
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
  name: 'UserRegister',
  data () {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        repassword: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (e) {
      // 1. 组织默认事件.
      e.preventDefault()

      // 3. 校验参数.

      // 3. 组织请求参数.
      const registerData = {
        username: this.form.username,
        email: this.form.email,
        password: this.form.password
      }

      // 4. password加密.
      registerData.password = md5(registerData.password)

      // eslint-disable-next-line
      // console.log(this.form)

      // 5. 请求.
      const { code, msg } = this.$axios.post('/admin/user/register', registerData)

      // 6. 结果处理.
      if (code === 0) {
        // eslint-disable-next-line
        console.log(msg)
      }
    },
    onReset (e) {
      e.preventDefault()
      // Reset our form values
      this.form.username = ''
      this.form.email = ''
      this.form.password = ''
      this.form.repassword = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
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
