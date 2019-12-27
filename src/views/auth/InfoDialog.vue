<template>
  <el-dialog title="用户信息" :visible.sync="dialogVisible" @closed="handleClosed"></el-dialog>
</template>
<script>
export default {
  name: 'InfoDialog',
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
