<template>
  <div>
    <surprise></surprise>
    <p>
      <span>用户名</span><input type="text" placeholder="请输入用户名">
    </p>
    <p>
      <span>密码</span><input type="password" placeholder="请输入密码">
    </p>
    <button @click="login">登录</button>
  </div>
</template>

<script>
  import Surprise from '../components/surprise.vue'
  export default {
    methods:{
      login:function(){
        this.$router.push({
          path:'/home',
          query:{
            name:'刘超'
          }
        })
      }
    },
    components:{
      Surprise
    }
  }
</script>
