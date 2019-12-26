<template>
  <div class="ly-head">
    <div class="nav">
      <svg-icon icon-class="collapse" class-name="svg-collapse" @on-click="changeSidebarState" />
      <label class="nav-label">{{ currentNav.name }}</label>
    </div>
    <auth-info :auth-options="authOptions" @on-command="handleCommand"></auth-info>
  </div>
</template>
<script>
export default {
  name: 'LyHead',
  data() {
    return {
      authOptions: [
        { name: '用户中心', command: 'showUserInfo', divided: false },
        { name: '密码修改', command: 'changePassword', divided: false },
        { name: '使用手册', command: 'showDocs', divided: false },
        { name: '退出登录', command: 'logout', divided: true }
      ]
    }
  },
  computed: {
    currentNav() {
      return this.$store.getters.currentMenu || {}
    }
  },
  methods: {
    changeSidebarState() {
      if (this.$store.getters.sidebarState === 'collapse') {
        this.$store.dispatch('setSidebarState', 'hiden')
      } else {
        this.$store.dispatch('setSidebarState', 'collapse')
      }
    },
    handleCommand(command) {
      if (command === 'logout') {
        this.$hub.$emit('on-logout')
      } else {
        this.$store.dispatch('setAuthOption', command)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.ly-head {
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav {
    display: flex;
    align-items: center;
    .svg-collapse {
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
    }
    .nav-label {
      margin-left: 10px;
      color: #c1c1c1;
    }
  }
}
</style>
