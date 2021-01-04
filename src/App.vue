<template>
  <div >
    <AoHeader/>
    <h1>hello word</h1>
    <h2>欢迎来到美食广场</h2>
    <div>
      <button
        v-for="(item, index) in foods"
        :key="index"
        @click="selectedFoodFun(index)">
        {{ index }}：{{ item }}
      </button>
    </div>
    <h3>选择吃【{{ selectedFood }}】!</h3>
    <!-- <router-view/> -->
    <button @click="overAction">点餐完毕</button>
    <h3>{{overText}}</h3>
    <hr>
    <h2>{{nowTime}}</h2>
    <button @click="getNowTime">获取时间</button>
    <hr>
    <h2>随机显示美女</h2>
    <p v-if="loading"> Loading</p>
    <img v-if="loaded" :src="result.imgUrl"/>
  </div>
</template>
<script lang="ts">
import { ref, reactive, toRefs, watch } from 'vue'
import AoHeader from './components/AoHeader'
import {
  nowTime,
  getNowTime
} from './hooks/useNowTime'
import useURLAxios from './hooks/useURLAxios'
// onRenderTrigger  状态跟踪值
// 类型推断
interface DataProps {
  foods: string[];
  selectedFood: string;
  selectedFoodFun: (index: number) => void;
}

export default {
  name: 'App',
  components: { AoHeader },
  setup () {
    const data: DataProps = reactive({
      foods: ['过桥米线', '酸辣粉', '麻辣烫'],
      selectedFood: '',
      selectedFoodFun: (index: number) => {
        data.selectedFood = data.foods[index]
      }
    })
    // const foods = ref(['过桥米线', '酸辣粉', '麻辣烫'])
    // const selectedFood = ref('')
    // const selectedFoodFun = (index: number) => {
    //   selectedFood.value = foods.value[index]
    // }
    // return {
    //   foods,
    //   selectedFood,
    //   selectedFoodFun
    // }
    const overText = ref('点餐完毕')
    const overAction = () => {
      overText.value += `美食广场${overText.value}|`
    }
    watch([overText, () => data.selectedFood], (newValue, oldValue) => {
      // console.log(newValue)
      document.title = newValue[0]
    })

    // axios
    const { loading, loaded, result } = useURLAxios('https://apiblog.jspang.com/default/getGirl')
    return {
      ...toRefs(data),
      overText,
      overAction,
      nowTime,
      getNowTime,
      loading,
      loaded,
      result
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
