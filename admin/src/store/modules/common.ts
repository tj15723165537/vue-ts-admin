import {defineStore} from 'pinia'

// @ts-ignore
export const useCommonStore = defineStore('common', {
  state: () => {
    return {
      token: '',
    }
  },
  actions: {
    setToken(val:string) {
      this.token = val
    }
  },
  persist: true,//开启该库的持久化
})