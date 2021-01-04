<template>
  <section class='module_box_border'>
    <div class="module_box">
    <BigTitle>企业分布情况</BigTitle>
    <div class="module_item">
      <SmallTitle >企业存量分布统计</SmallTitle>
      <div style="width:100%;height:270px;" id="module_one_one"></div>
    </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import BigTitle from './cmp/BigTitle.vue'
import SmallTitle from './cmp/SmallTitle.vue'
import { oneOPtions } from './options'
import echarts from 'echarts'
export default defineComponent({
  components: { BigTitle, SmallTitle },
  data () {
    return {}
  },
  mounted () {
    this.ehcartsOne()
  },
  computed: {},
  watch: {},
  methods: {
    ehcartsOne () {
      const ehartsOne = document.getElementById('module_one_one')
      const echart = echarts.init(ehartsOne)
      echart.setOption(oneOPtions)
    }
  }
})
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.module_box_border{
  padding:7px;
  background-image:url("~@/assets/images/module_bg_top.png"),url("~@/assets/images/module_bg_bottom.png");
  background-repeat:no-repeat,no-repeat;
  background-position:0 top,5px bottom;
  box-sizing: border-box;
}
.module_box{
   width:100%;
  height:100%;
  border-radius: 10px;
   background-color: rgba(23, 48, 89, 0.2);
  border: 1px solid rgba(0, 222, 255, 0.2);
  box-shadow: inset 0 2px 7px rgba(0, 222, 255, 0.3);

}
.module_item {

}
</style>
