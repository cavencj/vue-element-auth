<template>
  <el-dialog title="密码修改" :visible.sync="dialogVisible" @closed="handleClosed"></el-dialog>
</template>
<script>
export default {
  name: 'PasswordDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClosed() {
      this.$emit('on-closed')
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.dialogVisible = this.visible
    })
  }
}
</script>
