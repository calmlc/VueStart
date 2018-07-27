<template>
  <li @click="showIndex">{{content}}</li>
</template>

<script>
  export default {
    props:['content','index'],
    methods:{
      showIndex:function(index){
        this.$emit('delete_one',this.index);
      }
    }
  }
</script>
