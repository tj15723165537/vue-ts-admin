<template>
  <el-form :inline="true">
    <el-form-item label="账号">
      <el-input v-model="crud.listQuery.account"/>
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="crud.listQuery.status" placeholder="请选择">
        <el-option label="正常" :value="1"/>
        <el-option label="禁用" :value="0"/>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="crud.searchList()">查找</el-button>
      <el-button @click="crud.restListQuery()">重置</el-button>
      <el-button type="primary" @click="crud.showModel()">添加</el-button>
    </el-form-item>
  </el-form>
  <el-table :data="crud.data.list" border style="width: 100%;margin-top: 10px">
    <el-table-column prop="account" label="账号"/>
    <el-table-column prop="createdAt" label="创建时间"/>
    <el-table-column prop="updatedAt" label="更新时间"/>
    <el-table-column prop="status" label="状态">
      <template v-slot="{row}">
        <el-switch v-model="row.status" @change="updateStatus(row.id,$event)"/>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template v-slot="{row}">
        <el-button type="primary" text bg size="small" @click="crud.showModel(row)">编辑</el-button>
        <el-button type="warning" text bg size="small" @click="crud.deleteItem(row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="page">
    <el-pagination background layout="prev, pager, next" :total="crud.pagination.total"
                   @current-change="crud.getList({page:$event})"/>
  </div>

  <el-dialog
      v-model="crud.tempFrom.showModel"
      :title="crud.tempFrom.id?'编辑':'新增'"
      width="50%">
    <el-form :model="crud.tempFrom" ref="formModel" label-width="80px">
      <el-form-item label="账号" prop="account">
        <el-input v-model="crud.tempFrom.account"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="crud.tempFrom.password"/>
      </el-form-item>
      <el-form-item label="状态">
        <el-switch v-model="crud.tempFrom.status" :active-value="1" :inactive-value="0"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="crud.cancel()">取消</el-button>
        <el-button type="primary" @click="crud.addEditItem()">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

</template>
<script lang="ts" setup>
import {addUser, delUser, editUser, getUserDetail, getUserList, updateUserStatus} from '@/api/system/index'
import {onMounted, reactive, ref, watch} from 'vue';
import {Crud} from '@/hooks/crud'
import type {Iuser} from '@/api/system/type'
import {ElMessage} from "element-plus/es";

interface IlistQuery extends Ipages, Iuser {
}

const listQuery: IlistQuery = {
  account: undefined,
  status: undefined,
  page: 1,
  size: 10
}
const crud = new Crud({
  apiList: {
    L: getUserList,
    D: delUser,
    R: getUserDetail,
    C: addUser,
    U: editUser
  },
  listQuery,
  tempFrom: {
    account: '',
    password: '',
    status: 1
  }
})
crud.getList()
watch(() => crud.data.list, (val) => {
  val.map(item => {
    item.status = item.status ? true : false
  })
})
const updateStatus = (id:number, val:number) => {
  updateUserStatus(id, val ? 1 : 0).then(res => {
    ElMessage.success(res.msg)
  })
}
</script>
<style lang="scss" scoped>
.page {
  margin-top: 20px;

  > div {
    display: flex;
    justify-content: center;
  }
}
</style>
