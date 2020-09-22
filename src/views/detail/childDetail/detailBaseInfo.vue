<template>
  <div v-if="Object.keys(goods).length !== 0">
    <p class="commodityTitle">{{goods.title}}</p>
    <div class="price">
      <span class="nowprice">{{goods.newPrice}}</span>
      <span class="oldprice">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="like">
      <span class="sales-volume">{{goods.columns[0]}}</span>
      <span class="collect">{{goods.columns[1]}}</span>
      <span class="default-delivery">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="delivery">
      <div>
        <img :src="goods.services[0].icon" alt srcset />
        <span>{{goods.services[0].name}}</span>
      </div>
      <div>
        <img :src="goods.services[0].icon" alt srcset />
        <span>{{goods.services[1].name}}</span>
      </div>
      <div>
        <img :src="goods.services[0].icon" alt srcset />
        <span>{{goods.services[2].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailbaseInfo",
  props: {
    goods: Object,
    default() {
      return {};
    },
  },
};
</script>

<style scoped>
.commodityTitle{
  padding: 10px 5px;
  font-size: 16px;
}
.price{
  display: flex;
  justify-content: left;
  padding: 10px;

}
.nowprice{
  color:deeppink;
  font-size: 26px;
}
.oldprice{
  font-size: 12px;
  text-decoration-line: line-through;
  margin-top: 12px;
  margin-left: 8px;
}
.discount{
  font-size: 14px;
  height: 16px;
  background-color: red;
  border-radius: 3px;
  line-height: 16px;
  padding: 2px;
  color: #eee;
}
.like{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 2px solid #eee;
}
.delivery{
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 5px solid #eee;

}
.delivery img{
  width: 16px;

}
</style>