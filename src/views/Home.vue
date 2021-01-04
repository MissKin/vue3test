<template>
  <div class="home">
    <!-- <SearchHeader :projectTypes="projectTypes"/> -->
    <!-- <Zhinneng></Zhinneng> -->
    <!-- <AoHeader/> -->
     <!-- 区块内容 -->
    <!-- <section class="moduels_box">
      <moduelOne class="moduel_items"/>
    </section> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import AoHeader from 'components/AoHeader.vue'
import moduelOne from './moduelOne.vue'
import SearchHeader from 'components/SearchHeader.vue'
// import withPromise from './hoc.js'
// import Muou from './muou'
// const request = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "ssh" });
//     }, 1000);
//   });

// const Zhinneng = withPromise(Muou,request)
@Options({
  components: {
    HelloWorld,
    AoHeader,
    moduelOne,
    SearchHeader
    // Zhinneng
  },
  data () {
    return {
      projectTypes: [
        {
          name: '数据上报', img: 'chrome-search://ntpicon/?size=24%401x&url=http%3A%2F%2F2474.replace.favo.gng92.com%2F', code: '78sdfg9456'
        },
        {
          name: '数据上报2', img: 'chrome-search://ntpicon/?size=24%401x&url=http%3A%2F%2F2474.replace.favo.gng92.com%2F', code: '7sdfg8hys9456'
        },
        {
          name: '数据上报3', img: 'chrome-search://ntpicon/?size=24%401x&url=http%3A%2F%2F2474.replace.favo.gng92.com%2F', code: '78ert94sare56'
        }
      ]
    }
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home{
  position: relative;
  height: 100vh;
}
.moduels_box{
  position: relative;
  height: calc(100vh - 40px);
  .moduel_items{
    position: absolute;
    width:450px;
    bottom:30px;
    top:20px;
    left:20px;
  }
}

</style>
