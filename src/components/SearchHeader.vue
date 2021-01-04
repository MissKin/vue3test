<template>
  <div class="search-box" style="background:#575df9">
    searchValue：{{searchValue}}count:{{count}}comComputed:{{comComputed}}
    <div class="bottom-box">
      <div class="left-box">
        <input
          type="text"
          placeholder="请输入搜索关键字..."
          class="search_input_box"
          v-model="searchValue"
          @keyup.enter="handleSearch"
        />
        <button
          class="btn"
          @click="handleSearch"
        >搜索</button>
      </div>
      <div class="right-box">
        <div class="left-icon">
          <ul>
            <li
              v-for="(item, index) in projectTypes"
              :key="item.code"
              @click="switchType(index)"
            >
              <a
                href="#"
                style="text-decoration: none;color:#000;display: block;width:100%;height:100%"
              >
                <img
                  :src="item.img"
                  alt
                  style="width:42px;height:36px;"
                />
                <p>{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="right-txt">
          <p>涉及领域</p>
          <h4>Areas involved</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from 'vue'
declare interface Proparray{
  [index: number]: object;
}
export default defineComponent({
  name: 'SearchHeader',
  props: {
    projectTypes: Array
  },
  components: {},
  setup (props, context) {
    const state = reactive({ searchValue: '' })
    const count = ref(0)

    const comComputed = computed(() => count.value * 2)
    const handleSearch = () => {
      console.log('handleSearch')
      count.value++
    }
    const switchType = (i: any) => {
      console.log('switchType: ', switchType)
      state.searchValue = i
      // this.currentType = type;
      // this.newservices = this.projectGroup.slice(i, i + 1)
    }
    return {
      count,
      comComputed,
      ...toRefs(state),
      switchType,
      handleSearch
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
})
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.search-box {
  flex: 0.8;
  width: 1200px;
  box-sizing: border-box;
  position: relative;

  .bottom-box {
    width: 100%;
    height: 85px;

    .left-box {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      width: 480px;
      height: 85px;
      float: left;
      position: relative;
      line-height: 85px;
      .search_input_box {
        /* width: 100%; */
        flex: 1;
        height: 45px;
        /* border-radius: 3px; */
        border: none;
        text-indent: 30px;
        font-size: 24px;
        padding: 0;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }

      input::placeholder {
        color: #8392a5;
        font-size: 15px;
        transform: translate(0, -3px);
        font-family: SourceHanSansCN-Light;
      }

      .btn {
        width: 106px;
        height: 45px;
        color: #fff;
        /* position: absolute;
          right: 0;
          top: 15px; */
        border: none;
        background-color: #1ee0ac;
        cursor: pointer;
        font-size: 18px;
        font-weight: 100;
        font-family: SourceHanSansCN-Light;
        border-radius: 0 4px 4px 0;
      }
    }

    .right-box {
      /* width: 470px; */
      height: 85px;
      border-radius: 3px;
      float: right;

      .left-icon {
        /* width: 328px; */
        height: 85px;
        background-color: rgba(229, 233, 242, 0.3);
        float: left;
        cursor: pointer;
        border-radius: 4px 0 0 4px;
        ul {
          display: flex;
          align-items: center;
          list-style: none;
          /* width: 350px; */
          height: 85px;
          padding: 0 20px;

          li {
            width: 58px;
            height: 58px;
            background-color: #fff;
            float: left;
            margin-right: 5px;
            position: relative;
            text-align: center;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
              display: block;
              margin: 4px auto;
            }

            p {
              font-size: 11px;
              margin-top: -3px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-family: SourceHanSansCN-Light;
            }
          }

          li:hover {
            transition: all 0.2s;
            padding: 10px;
            margin-top: -20px;
            font-size: 20px;
          }
        }
      }

      .right-txt {
        width: 139px;
        height: 85px;
        background-color: #6854fa;
        float: left;
        color: #fff;
        border-radius: 0 4px 4px 0;
        p {
          margin-left: 27px;
          margin-top: 22px;
          margin-bottom: 12px;
          font-size: 15px;
          font-weight: 100;
          font-family: SourceHanSansCN-Light;
        }

        h4 {
          margin-left: 27px;
          margin-top: -10px;
          font-size: 14px;
          font-weight: 100;
          font-family: SourceHanSansCN-Regular;
        }
      }
    }
  }
}
</style>
