import {defineStore} from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => {
    return {
      token: '',
    }
  },
  actions: {
    setToken(val) {
      this.token = val
    }
  },
  persist: true
})