import { defineStore } from 'pinia'

/**
 * Modal states could be:
 *
 *  0 = closed
 *  1 = opened
 *  2 = closing
 */
export const useGeneralStore = defineStore('GeneralStore', {
  state: () => ({
    appName: import.meta.env.VITE_APP_NAME,
    titleSuffix: ` - ${import.meta.env.VITE_APP_NAME}`,
    mobileOverlay: true,
    modals: {
      language: {
        shown: false,
        state: 0,
      },
      userMenu: {
        shown: false,
        state: 0,
      },
    },
  }),
  actions: {
    toggleModal(type) {
      if (this.modals[type].state === 1)
        this.modals[type].state = 2

      setTimeout(() => {
        this.modals[type].state = 0
        this.modals[type].shown = false
      }, 300)
    },
    truncate() {
      this.modals.language.shown = false
      this.modals.language.state = 0
      this.modals.userMenu.shown = false
      this.modals.userMenu.state = 0
    },
  },
})
