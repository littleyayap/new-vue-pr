<template>
  <keep-alive>
    <div id="home">
      <nav-bar class="homebar">
        <div slot="center">购物街</div>
      </nav-bar>
      <tabcontral
        :title="['流行','新款','精选']"
        @tabclick="tabclick"
        ref="tabControl1"
        class="fixed"
        v-show="isshow"
      ></tabcontral>
      <scroll
        class="contened"
        ref="scroll"
        @pullingUp="pullup"
        @contentscroll="contentscroll"
        :probeType="3"
        :pullUpLoad="true"
      >
        <home-swiper :banners="banners" @homeSwiperload="homeSwiperload"></home-swiper>
        <recommend :recommend="recommend"></recommend>
        <feature></feature>
        <tabcontral :title="['流行','新款','精选']" @tabclick="tabclick" ref="tabControl2"></tabcontral>
        <homeflex :goods="goods[gtype].list"></homeflex>
      </scroll>

      <backtop @click.native="backtop" v-show="isshow"></backtop>
    </div>
  </keep-alive>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import tabcontral from "components/content/tabcontral/tabcontral.vue";
import scroll from "components/common/scroll/scroll.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import homeSwiper from "./childComps/homeSwiper.vue";
import recommend from "./childComps/recommend.vue";
import feature from "./childComps/feature.vue";
import homeflex from "components/content/Flex/homeflex.vue";
import backtop from "components/common/backtop/backtop.vue";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      dKeyword: [],
      keyWords: [],
      recommend: [],
      saveY: 0,
      isshow: false,
      taboffsettop: 0,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      gtype: "pop",
      ab: 30,
    };
  },
  components: {
    NavBar,
    tabcontral,
    scroll,

    homeSwiper,
    recommend,
    feature,
    homeflex,
    backtop,
  },
  methods: {
    /* 监听事件 */
    tabclick(index) {
      switch (index) {
        case 0:
          this.gtype = "pop";
          break;
        case 1:
          this.gtype = "new";
          break;
        case 2:
          this.gtype = "sell";
          break;
        default:
          this.gtype = "pop";
          break;
      }
      this.$refs.tabControl1.cultureindex = index;
      this.$refs.tabControl2.cultureindex = index;
    },
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 600);
    },

    contentscroll(position) {
      this.isshow = -position.y > 800 ? true : false;
      if (-position.y > this.taboffsettop - 44) {
        this.isshow = true;
      }
    },
    pullup() {
      console.log("上拉加载");
      this.getHomeGoods(this.gtype);
    },

    homeSwiperload() {
      this.taboffsettop = this.$refs.tabControl2.$el.offsetTop;
    },

    /* /网络请求相关/ */
    debounce(func, delay) {
      let timer = null;

      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res.data);
        this.banners = res.data.banner.list;
        this.dKeyword = res.data.dKeyword.list;
        this.keyWords = res.data.keywords.list;
        this.recommend = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      // console.log(this.goods[type].page);
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 20);
    this.$bus.$on("imgload", () => {
      refresh();
    });
  },
  activated() {
    // this.$refs.scroll.scroll.y = this.saveY;
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.homebar {
  background-color: var(--color-text);
  color: seashell;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
}
.fixed {
  position: relative;
  z-index: 10;
  top: 44px;
}
#hy-swiper {
  padding-top: 44px;
}
.contened {
  position: absolute;
  top: 0;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>