<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt @load="bannerimg"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  props : {
    banners : {
      type : Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isload : false
    }
  },
  methods:{
    bannerimg(){
      if(!this.isload){
       this.$emit('homeSwiperload');
       this.isload = true;
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scope>
</style>