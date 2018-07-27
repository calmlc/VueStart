<template>
  <div>
    <input  v-model="inputValue" @keyup.enter="push"/>
    <ul>
      <list v-for="(value,index) of list" :content="value" :key="index" :index="index" @delete_one="deleteValue"></list>
    </ul>
  </div>
</template>

<script>
  import List from '../components/list.vue'
  import Store from '../store.js'
  export default {
    data(){
      return{
        title:'这里是todolist',
        inputValue:'',
        list:Store.read()
      }
    },
    components:{
      List
    },
    methods:{
      push:function(){
        this.list.push(this.inputValue);
        this.inputValue='';
      },
      deleteValue:function(index){
        this.list.splice(index,1);
      }
    },
    watch:{
      list:{
        handler:function (list) {
          Store.write(list);
        },
        deep:true
      }
    }
  }
</script>
