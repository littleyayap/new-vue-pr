<template>
<div>
  <swiper class="swipper">
    <swiper-item v-for="(item, index) in topImg" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper/index"


export default {
  name: "detailSwriper",
  props : {
     topImg: {
       type : Array,
       default : []
     },
  },
  data() {
    return {
      iid: null,
     
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.swipper{
  height: 300px;
}
</style>