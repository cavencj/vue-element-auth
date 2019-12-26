<template>
  <el-dialog title="使用手册" :visible.sync="dialogTableVisible" @closed="handleClosed"></el-dialog>
</template>
<script>
export default {
  name: 'DocsDialog',
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
