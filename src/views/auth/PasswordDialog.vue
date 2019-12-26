<template>
  <el-dialog title="密码修改" :visible.sync="dialogTableVisible" @closed="handleClosed"></el-dialog>
</template>
<script>
export default {
  name: 'PasswordDialog',
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
