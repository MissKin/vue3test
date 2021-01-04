<template>
  <div class='title_box'><slot></slot><span class="decorate_icon"></span></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BigTitle'
})
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@mixin WH($width: 100%, $height: 100%) {
  width: $width;
  height: $height;
}
$blue: #00dcfd;
.title_box {
  font-family: YouSheBiaoTiHei;
  font-size: 30px;
  padding: 9px 0 0 16px;
  background: linear-gradient(to bottom, #07c978, #01dcf3);
  -webkit-background-clip: text;
  color: transparent;
  text-align: left;
}
.decorate_icon {
  position: relative;
  display: inline-block;
  @include WH(5px, 24px);
  background: $blue;
  margin-left: 5px;
  filter: blur(1px);
  &:after {
    content: "";
    position: absolute;
    left: calc(100% + 8px);
    top: 3px;
    width: 107px;
    height: 18px;
    background: linear-gradient(to right, #01cced, transparent);

  }
}
</style>
