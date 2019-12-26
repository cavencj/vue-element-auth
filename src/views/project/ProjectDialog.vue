<template>
  <el-dialog class="project-dialog" :title="title" :visible.sync="dialogVisible" @closed="handleClosed"></el-dialog>
</template>

<script>
export default {
  name: 'ProjectDiallog',
  props: {
    projectData: {
      type: Object,
      default() {
        return {}
      }
    },
    mode: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(val) {
      this.$nextTick(() => {
        this.dialogVisible = Boolean(val)
      })
    }
  },
  computed: {
    title() {
      return this.mode === 'add' ? '添加应用' : '修改应用'
    }
  },
  data() {
    return {
      dialogVisible: false,
      formData: this.projectData
    }
  },
  methods: {
    handleClosed() {
      this.$emit('on-closed')
    }
  }
}
</script>
