<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",

  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },

};
</script>

<style scope>
.recommend {
  display :flex;
  justify-content: space-between;
  text-align: center;
  padding: 15px 0 20px;
  border-bottom: 15px solid #eee;
}
.recommend img{
  width: 80px;
  height: 80px;
}
</style>