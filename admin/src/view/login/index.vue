<template>
  <div class="login">
    <div class="card">
      <el-form :model="formStatus" class="demo-form-inline" :rules="rules" ref="ruleFormRef">
        <el-form-item label="账号" prop="account">
          <el-input v-model="formStatus.account"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formStatus.password" type="password"/>
        </el-form-item>
        <el-form-item>
          <div style="width: 100%;text-align: center;margin-top: 10px">
            <button class="btn" @click.prevent="submit">登录</button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {reactive, ref} from 'vue'
import {useRouter} from "vue-router";
import {login} from '@/api/common'
import type {FormRules, FormInstance} from 'element-plus'
import {useCommonStore} from "@/store/modules/common";
const router = useRouter()
const store = useCommonStore()
const ruleFormRef = ref<FormInstance>()
const formStatus = reactive({
  account: '',
  password: ''
})
const rules = reactive<FormRules>({
  account: [
    {required: true, message: '请输入账号', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'}
  ],
})
const submit = async () => {
  if (!ruleFormRef.value) return
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      login(formStatus).then(res => {
        if (res.code === 0) {
          store.setToken(res.token)
          router.push('./home')
        }
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<style lang="scss" scoped>
.login {
  background-image: url('../../assets/img/login.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .card {
    margin-top: 35vh;
    width: 400px;
    border-radius: 20px;
    background: #e0e0e0;
    opacity: .8;
    box-shadow: 20px 20px 60px #bebebe;
    padding: 40px 30px 10px;
    box-sizing: border-box;

    .btn {
      align-items: center;
      appearance: none;
      background-color: #FCFCFD;
      border-radius: 4px;
      border-width: 0;
      box-shadow: rgba(45, 35, 66, 0.2) 0 2px 4px, rgba(45, 35, 66, 0.15) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
      box-sizing: border-box;
      color: #000;
      cursor: pointer;
      display: inline-flex;
      font-family: "JetBrains Mono", monospace;
      height: 40px;
      justify-content: center;
      line-height: 1;
      list-style: none;
      overflow: hidden;
      padding-left: 20px;
      padding-right: 20px;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: box-shadow .15s, transform .15s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      will-change: box-shadow, transform;
      font-size: 18px;
      font-weight: 700;
    }

    .btn:focus {
      box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    .btn:hover {
      box-shadow: rgba(45, 35, 66, 0.3) 0 4px 8px, rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
      transform: translateY(-2px);
    }

    .btn:active {
      box-shadow: #D6D6E7 0 3px 7px inset;
      transform: translateY(2px);
    }
  }
}
</style>
