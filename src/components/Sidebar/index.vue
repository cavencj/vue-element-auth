<template>
  <div :class="{ sidebar: true, 'sidebar-hide': !collapse }">
    <div class="logo">
      <svg-icon :icon-class="logoIcon" class="logo-icon" />
      <span v-show="collapse">{{ logoLabel }}</span>
    </div>
    <el-menu
      :default-active="defaultMenu.path"
      v-if="menuList.length"
      class="menu"
      :collapse="!collapse"
      @select="gotoPage"
      :collapse-transition="false"
    >
      <template v-for="item in menuList">
        <el-menu-item v-if="!item.children || item.children.length === 0" :index="item.path" :key="item.id">
          <svg-icon v-if="item.icon" :icon-class="item.icon || ''" class-name="menu-icon" />
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
        <el-submenu v-else :key="item.id">
          <template slot="title">{{ item.name }}</template>
          <el-menu-item v-for="child in item.children" :index="child.id" :key="child.path">
            <svg-icon v-if="child.icon" :icon-class="child.icon || ''" class-name="menu-icon" />
            <span slot="title">{{ child.name }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  props: {
    logoIcon: {
      type: String,
      default: ''
    },
    logoLabel: {
      type: String,
      default: ''
    },
    collapse: {
      type: Boolean,
      default: true
    },
    menuList: {
      type: Array,
      default() {
        return []
      }
    },
    defaultMenu: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },

  methods: {
    gotoPage(index, indexPath) {
      let filter = this.menuList.filter(item => item.path === index)
      let currentMenu = filter.length ? filter[0] : {}
      this.$emit('on-selected', currentMenu)
    }
  }
}
</script>
<style lang="scss">
.sidebar {
  .menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu-item {
    font-size: 1rem;
  }
  .el-menu-item:not(.is-active) {
    color: #fff;
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    outline: 0;
  }

  .el-menu-item:focus {
    background: rgba(0, 0, 0, 0);
  }

  .el-menu-item:hover {
    background: rgba(31, 45, 61, 0.5);
  }
}
</style>
<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0px;
  width: 200px;
  height: 100%;
  background: rgba(48, 65, 86, 1);
  overflow: hidden;
  transition: width 0.28s;
  .logo {
    color: #fff;
    font-size: 1.2rem;
    margin: 20px 0px 20px 10px;
    user-select: none;
    overflow: hidden;
    .logo-icon {
      width: 2rem;
      height: 2rem;
      color: rgb(234, 237, 240);
      vertical-align: -0.3rem;
      margin-right: 10px;
    }
    span {
      overflow: hidden;
    }
  }
  .menu {
    background: rgba(0, 0, 0, 0);
    border: none;
    height: 100%;
    width: 100% !important;
    .menu-icon {
      margin-right: 1.3rem;
    }
  }
}
.sidebar.sidebar-hide {
  width: 54px !important;
}
</style>
