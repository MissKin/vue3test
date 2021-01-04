<template>
  <teleport to="#aoheader">
    <!-- teleport 任意门 to 定义渲染的位置 -->
     <div class='head_box'>可视化平台</div>
  </teleport>
</template>

<script>
export default {
  name: 'AoHeader',
  components: {},
  data () {
    return {}
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.head_box{
  font-family: YouSheBiaoTiHei;
  height:40px;
  font-size: 40px;
  color:#fff;
  text-align:center;
  background:url('~@/assets/images/head.png') no-repeat;
  background-size: cover;
}
</style>
