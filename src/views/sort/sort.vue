<template>
  <div class="wrapper" ref = 'aaa'>
    <ul class="content">
      <li>1ll</li>
      <li>2ll</li>
      <li>3ll</li>
      <li>4ll</li>
      <li>5ll</li>
      <li>6ll</li>
      <li>7ll</li>
      <li>8ll</li>
      <li>9ll</li>
      <li>10ll</li>
      <li>11ll</li>
      <li>12ll</li>
      <li>13ll</li>
      <li>14ll</li>
      <li>15ll</li>
      <li>16ll</li>
      <li>17ll</li>
      <li>18ll</li>
      <li>19ll</li>
      <li>20ll</li>
      <li>21ll</li>
      <li>22ll</li>
      <li>23ll</li>
      <li>24ll</li>
      <li>25ll</li>
      <li>26ll</li>
      <li>27ll</li>
      <li>28ll</li>
      <li>29ll</li>
      <li>30ll</li>
      <li>31ll</li>
      <li>32ll</li>
      <li>33ll</li>
      <li>34ll</li>
      <li>35ll</li>
      <li>36ll</li>
      <li>37ll</li>
      <li>38ll</li>
      <li>39ll</li>
      <li>40ll</li>
      <li>41ll</li>
      <li>42ll</li>
      <li>43ll</li>
      <li>44ll</li>
      <li>45ll</li>
      <li>46ll</li>
      <li>47ll</li>
      <li>48ll</li>
      <li>49ll</li>
      <li>50ll</li>
      <li>51ll</li>
      <li>52ll</li>
      <li>53ll</li>
      <li>54ll</li>
      <li>55ll</li>
      <li>56ll</li>
      <li>57ll</li>
      <li>58ll</li>
      <li>59ll</li>
      <li>60ll</li>
      <li>61ll</li>
      <li>62ll</li>
      <li>63ll</li>
      <li>64ll</li>
      <li>65ll</li>
      <li>66ll</li>
      <li>67ll</li>
      <li>68ll</li>
      <li>69ll</li>
      <li>70ll</li>
      <li>71ll</li>
      <li>72ll</li>
      <li>73ll</li>
      <li>74ll</li>
      <li>75ll</li>
      <li>76ll</li>
      <li>77ll</li>
      <li>78ll</li>
      <li>79ll</li>
      <li>80ll</li>
      <li>81ll</li>
      <li>82ll</li>
      <li>83ll</li>
      <li>84ll</li>
      <li>85ll</li>
      <li>86ll</li>
      <li>87ll</li>
      <li>88ll</li>
      <li>89ll</li>
      <li>90ll</li>
      <li>91ll</li>
      <li>92ll</li>
      <li>93ll</li>
      <li>94ll</li>
      <li>95ll</li>
      <li>96ll</li>
      <li>97ll</li>
      <li>98ll</li>
      <li>99ll</li>
      <li>100ll</li>
    </ul>
  </div>
</template>

<script>
import BScoll from 'better-scroll'
export default {
data() {
  return {
    scoll : null,
  }
},
mounted() {
  this.scroll = new BScoll('.wrapper',{
    probeType : 3,
    pullUpLoad :true,
    click : true
  })

  this.scroll.on('scroll',(position) => {
    console.log(position);
  })

  this.scroll.on('pullingUp',() => {
    console.log('上拉加载更多');

    // setTimeout(() => {
    //   this.scoll.pull
    // } ,2000)
  })
},
}
</script>

<style scoped>
.wrapper{
  height: 200px;
  background-color: #eee;
  overflow: hidden;
}
</style>