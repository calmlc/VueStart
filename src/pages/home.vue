<template>
  <div>
    <surprise></surprise>
    <h1>{{msg+name}}</h1>
    <a @click="gotolist">go to todolist</a>
  </div>
</template>

<script>
  import Surprise from '../components/surprise.vue'
  export default {
    data(){
      return{
        msg:'welcome',
      }
    },
    methods:{
      gotolist:function () {
        console.log("hehe");
        this.$router.push('/todolist');
      }
    },
    components:{
      Surprise
    },
    beforeCreate:function(){
      this.name=this.$route.query.name;
      console.log(this.$route.query);
    }
  }
</script>
