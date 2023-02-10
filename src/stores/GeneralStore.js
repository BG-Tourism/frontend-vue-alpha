import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('GeneralStore', {
  state: () => ({
    appName: import.meta.env.VITE_APP_NAME,
    titleSuffix: ` - ${import.meta.env.VITE_APP_NAME}`,
    mobileOverlay: true,
  }),
})
