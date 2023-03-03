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
    mobileOverlay: true,
    user: {
      logged: false,
      avatar: 'https://secure.gravatar.com/avatar/2a30cbe5435813200be7610cde63dc4f',
      username: 'tomatanasov',
      names: 'Том Атанасов',
      email: 'me@xen.gg',
    },
    modals: {
      authentication: {
        shown: false,
        state: 0,
      },
      language: {
        shown: false,
        state: 0,
      },
      search: {
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
      this.modals.authentication.shown = false
      this.modals.authentication.state = 0
      this.modals.language.shown = false
      this.modals.language.state = 0
      this.modals.search.shown = false
      this.modals.search.state = 0
    },
  },
})
