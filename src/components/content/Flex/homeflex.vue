<template>
  <div>
    <flexitem class="home-flex" :goods="goods" ></flexitem>
  </div>
</template>

<script>
import flexitem from "./flexitem.vue";

export default {
  components: {
    flexitem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
 
};
</script>

<style scope>
.flex-item {
  width: 48%;
  border-radius: 10px;
  overflow: hidden;
}
.home-flex {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.home-flex img {
  width: 100%;
}
.home-flex p {
  width: 100%;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>