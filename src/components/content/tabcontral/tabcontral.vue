<template>
  <div class="tab-contral">
    <div class="tc-item" :class="{active : cultureindex===index}" @click="tabclick(index)" v-for="(item,index) in title" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props :{
    title : {
      type : Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      cultureindex :0,
    }
  },
  methods : {
    tabclick(index){
      this.cultureindex = index;
      this.$emit('tabclick',index)
    }
  },
}
</script>

<style scope>
.tab-contral{
  width: 100%;
  display: flex;
  text-align: center;
  background-color: #fff;
  line-height: 40px;
  height: 40px;
}
.tc-item{
flex: 1;
}
.tc-item span{
   padding:5px;
   line-height: 20px;
}
.active{
  color: var(--color-text);
}

.active span{
  border-bottom:3px solid var(--color-text);
}
</style>