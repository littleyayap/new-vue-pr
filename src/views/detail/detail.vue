<template>
  <div class="wrap" ref="aaa">
    <nav-bar>
      <img slot="left" src="~assets/images/common/back.svg" class="titimg" @click="back" />
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="index"
          :class="{active : cureindex == index}"
          @click="changeindex(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
    <detail-swriper :topImg = 'topImg'></detail-swriper>
    <detail-base-info :goods = 'goods'></detail-base-info>
  </div>
</template>

<script>
import detailSwriper from "./childDetail/detailSwriper.vue";
import NavBar from "components/common/navbar/NavBar.vue";
import detailBaseInfo from './childDetail/detailBaseInfo.vue';


// 网络请求
import { getDetail,goods} from "network/detail";

export default {
  name : 'detail',
  data() {
    return {
      iid: null,
      cureindex: 0,
      titles: ["商品", "详情", "评论", "推荐"],
      topImg : [],
      goods : {}
    };
  },
  components: {
    NavBar,
    detailSwriper,
detailBaseInfo

  },
  mounted() {},
  created() {
    this.iid = this.$route.params.iid;
    console.log(this.iid);
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      this.topImg =data.itemInfo.topImages;
      // console.log(this.topImg);
      this.goods = new goods(data.itemInfo, data.columns, data.shopInfo.services);
      console.log(this.goods);
    })
  },
  methods: {
    back() {
      this.$router.back();
    },
    changeindex(index) {
      console.log(index);
      this.cureindex = index;
    },
  },
};
</script>

<style scope>
.wrap {
  height: 200px;
  background-color: #eee;
}
.title {
  display: flex;
  justify-content: space-around;
}
.titimg {
  margin-top: 10px;
}
.active {
  color: red;
}
</style>