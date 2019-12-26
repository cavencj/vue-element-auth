<template>
  <div class="ly-content">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'LyContent',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.ly-content {
  position: relative;
  background: #fff;
  margin: 10px 0;
  padding: 10px 10px;
  height: calc(100% - 150px);
}
</style>
