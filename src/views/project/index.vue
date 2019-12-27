<template>
  <div class="project">
    <div class="search-form">
      <el-input v-model="searchForm.name" placeholder="输入应用名称搜素" class="ipt"></el-input>
      <el-select v-model="searchForm.state" placeholder="状态" class="select">
        <el-option label="启用" value="1"> </el-option>
        <el-option label="停用" value="0"> </el-option>
      </el-select>
      <el-button type="success" icon="el-icon-search" size="mini">搜索</el-button>
      <el-button type="primary" icon="el-icon-plus" size="mini" @click="addProject">添加</el-button>
      <el-button type="danger" icon="el-icon-delete" size="mini" :disabled="selectedItems.length === 0">删除</el-button>
      <el-button type="warning" icon="el-icon-download" size="mini" :disabled="dataList.length === 0">导出</el-button>
    </div>
    <div class="result-list">
      <el-row>
        <el-col :span="18">
          <el-table :data="dataList" size="small">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-table :data="props.row.adminList" :show-header="false" size="small">
                  <el-table-column prop="username"></el-table-column>
                  <el-table-column prop="name">
                    <template slot-scope="scope">
                      <a class="name-link" herf="javascript:void(0)" @click="showUserRoles(props.row.roleList, scope.row.roleList)">{{
                        scope.row.name
                      }}</a>
                    </template>
                  </el-table-column>
                  <el-table-column prop="cratedTime" align="center"></el-table-column>
                  <el-table-column align="center"></el-table-column>
                  <el-table-column align="center">
                    <template>
                      <el-button type="warning" icon="el-icon-edit" size="mini" plain> </el-button>
                      <el-button type="danger" icon="el-icon-delete" size="mini" plain></el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="序号" type="index" width="100"></el-table-column>
            <el-table-column label="应用名称" prop="name">
              <template slot-scope="scope">
                <a class="name-link" herf="javascript:void(0)" @click="showRoleList(scope.row.roleList)">{{ scope.row.name }}</a>
              </template>
            </el-table-column>
            <el-table-column label="应用地址" prop="url"></el-table-column>
            <el-table-column label="创建日期" prop="cratedTime" align="center"></el-table-column>
            <el-table-column label="管理员数" align="center">
              <template slot-scope="scope">{{ scope.row.adminList.length }}</template>
            </el-table-column>
            <el-table-column label="状态" width="100" align="center">
              <template slot-scope="scope">
                <el-switch style="display: block" v-model="scope.row.state" active-color="#13ce66" inactive-color="#ff4949" disabled> </el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="200" align="center">
              <template>
                <el-button type="warning" icon="el-icon-edit" size="mini" plain></el-button>
                <el-button type="primary" icon="el-icon-plus" size="mini" plain></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="4" :offset="1">
          <div class="role-list">
            <p class="title">角色列表</p>
            <el-divider></el-divider>
            <el-checkbox-group v-model="userRoles" class="checkbox-group">
              <el-checkbox v-for="item in roleList" :label="item.id" :key="item.id" disabled>{{ item.name }}</el-checkbox>
            </el-checkbox-group>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="page"></div>
    <project-dialog :visible.sync="proDialogVisible" :mode="proDialogModel" @on-closed="closeDialog"></project-dialog>
  </div>
</template>

<script>
import ProjectDialog from './ProjectDialog'
export default {
  name: 'Project',
  components: {
    ProjectDialog
  },
  data() {
    return {
      searchForm: {
        name: '',
        state: ''
      },
      dataList: [],
      roleList: [],
      userRoles: [],
      selectedItems: [],
      proDialogVisible: false,
      proDialogModel: 'add'
    }
  },
  methods: {
    addProject() {
      this.proDialogModel = 'add'
      this.proDialogVisible = true
    },
    closeDialog() {
      this.proDialogModel = ''
      this.proDialogVisible = false
    },
    showRoleList(roleList) {
      this.roleList = roleList
      this.userRoles = []
    },
    showUserRoles(roleList, userRoles) {
      this.roleList = roleList
      this.userRoles = userRoles
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .result-list {
    overflow: hidden;
    overflow-y: auto;
    height: calc(100% - 60.5px);
    .name-link {
      color: #409eff;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .role-list {
      height: 100%;
      border: 1px solid #cecece;
      padding: 10px 10px;
      .title {
        padding-left: 10px;
      }
      .checkbox-group {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
