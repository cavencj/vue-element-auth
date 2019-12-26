<template>
  <div class="container">
    <sidebar
      :collapse="isCollapse"
      @on-selected="changeMenu"
      :menu-list="menuList"
      :default-menu="defaultMenu"
      logo-icon="auth"
      logo-label="权限管理"
    ></sidebar>
    <div :class="{ 'main-container': true, 'sidebar-hide': !isCollapse }">
      <ly-head></ly-head>
      <ly-content></ly-content>
      <ly-foot></ly-foot>
    </div>
    <keep-alive>
      <component :is="currentComp"></component>
    </keep-alive>
  </div>
</template>

<script>
import LyHead from '@/layout/LyHead'
import LyContent from '@/layout/LyContent'
import LyFoot from '@/layout/LyFoot'
import InfoDialog from './auth/InfoDialog'
import PasswordDialog from './auth/PasswordDialog'
import DocsDialog from './auth/DocsDialog'
export default {
  name: 'Home',
  components: {
    LyHead,
    LyContent,
    LyFoot,
    InfoDialog,
    PasswordDialog,
    DocsDialog
  },
  data() {
    return {}
  },
  computed: {
    isCollapse() {
      return this.$store.getters.sidebarState === 'collapse'
    },
    menuList() {
      return this.$store.getters.menuList
    },
    defaultMenu() {
      return this.menuList && this.menuList.length ? this.menuList[0] : {}
    },
    currentComp() {
      let authOption = this.$store.getters.authOption
      if (authOption === 'showUserInfo') {
        return 'InfoDialog'
      } else if (authOption === 'changePassword') {
        return 'PasswordDialog'
      } else if (authOption === 'showDocs') {
        return 'DocsDialog'
      }
      return null
    }
  },
  methods: {
    changeMenu(currentMenu) {
      this.$store.dispatch('setCurrentMenu', currentMenu)
    },
    logout() {
      this.$router.push('login')
      sessionStorage.clear()
    }
  },
  mounted() {
    this.$hub.$on('on-logout', this.logout)
    this.changeMenu(this.defaultMenu)
  }
}
</script>
<style lang="scss">
.container {
  .main-container {
    .svg-collapse {
      transform: rotate(-180deg);
      transition: transform 0.28s;
    }
  }
  .main-container.sidebar-hide {
    .svg-collapse {
      transform: rotate(0deg);
    }
  }
}
</style>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .main-container {
    height: 100%;
    margin-left: 200px;
    padding: 10px 0;
    transition: margin-left 0.28s;
    background-color: #f0f2f5;
  }
  .main-container.sidebar-hide {
    margin-left: 54px;
  }
}
</style>
