<template>
  <div class='title_box'><span class="decorate_icon"></span><slot></slot></div>
</template>

<script>
export default {
  name: 'SmallTitle'
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@mixin WH($width: 100%, $height: 100%) {
  width: $width;
  height: $height;
}

$blue: #00dcfd;
.title_box {
  font-family: SourceHanSansCN;
  font-size: 16px;
  padding: 9px 0 0 16px;
  color: #fff;
  text-align: left;
  font-weight: bold;
}
.decorate_icon {
  position: relative;
  display: inline-block;
  @include WH(18px, 12px);
  background: url('~@/assets/images/icon_1.png') no-repeat;
  background-size: contain;
  margin-left: 15px;
  margin-right:5px;

}
</style>
