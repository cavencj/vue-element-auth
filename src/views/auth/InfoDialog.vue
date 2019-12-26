<template>
  <el-dialog title="用户信息" :visible.sync="dialogTableVisible" @closed="handleClosed"></el-dialog>
</template>
<script>
export default {
  name: 'InfoDialog',
  data() {
    return {
      dialogTableVisible: false
    }
  },
  activated() {
    this.dialogTableVisible = true
  },
  methods: {
    handleClosed() {
      this.$store.dispatch('setAuthOption', '')
    }
  }
}
</script>
