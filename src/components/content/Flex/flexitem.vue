<template>
  <div>
    <div class="flex-item" v-for="(item,index) in goods" :key="index" @click="goodscilck(index)">
      <img :src="item.show.img" alt srcset @load="imgload" />
      <p>{{item.title}}</p>
      <span>{{item.price}}</span>
      <span>{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index : 0
    }
  },
  props: {
    goods: {
      type: Array,
      default : []
    },
  },
  methods: {
    imgload() {
      this.$bus.$emit("imgload");
    },
    goodscilck(index){
     /*  this.$router.push({
        path: "/detail",
        query: {
          iid : this.goods[index].iid,
        },
      }); */
    this.$router.push('/detail/'+this.goods[index].iid)
      console.log();
    },
  },
};
</script>

<style scope>
</style>