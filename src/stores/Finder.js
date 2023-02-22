import { defineStore } from 'pinia'

import categories from '@/api/categories'
import regions from '@/api/regions'
import places from '@/api/places'

/**
 * Modal states could be:
 *
 *  0 = closed
 *  1 = opened
 *  2 = closing
 */
export const useFinderStore = defineStore('FinderStore', {
  state: () => ({
    loadings: {
      list: true,
      selections: true,
    },
    list: {
      data: [],
      pagination: {
        currentPage: 1,
      },
    },
    selections: {
      category: [],
      subcategory: [],
      region: [],
      municipality: [],
      rating: [],
    },
    modals: {
      category: {
        shown: false,
        state: 0,
      },
      region: {
        shown: false,
        state: 0,
      },
      rating: {
        shown: false,
        state: 0,
      },
    },
  }),
  actions: {
    fetch(filters = null) {
      let items = []

      if (filters) {
        items = places.filter((item) => {
          return (
            (item.categories.some(category => this.selections.category.includes(category)) || this.selections.category.length === 0)
            && (item.subcategories.some(subcategory => this.selections.subcategory.includes(subcategory)) || this.selections.subcategory.length === 0)
            && (this.selections.region.includes(item.region) || this.selections.region.length === 0)
            && (this.selections.municipality.includes(item.municipality) || this.selections.municipality.length === 0)
            && (this.selections.rating.includes(Math.floor(item.user_score)) || this.selections.rating.length === 0)
          )
        })
      }
      else {
        items = places
      }

      this.loadings.selections = true

      setTimeout(() => {
        this.list.data = items
        this.loadings.list = false

        this.loadings.selections = false
      }, 300)
    },
    manageItem(type, items) {
      if (typeof items === 'object') {
        Object.values(items).map((item) => {
          let existsInDatabase = null

          if (type === 'category') {
            existsInDatabase = !!categories.find(i => i.slug === item)
          }
          else if (type === 'subcategory') {
            existsInDatabase = !!categories.some((i) => {
              if (Array.isArray(i.subcategories))
                return i.subcategories.some(subcategory => subcategory.slug === item)

              return i.subcategories.slug === item
            })
          }
          else if (type === 'region') {
            existsInDatabase = !!regions.find(i => i.slug === item)
          }
          else if (type === 'municipality') {
            existsInDatabase = !!regions.some((i) => {
              if (Array.isArray(i.municipalities))
                return i.municipalities.some(municipality => municipality.slug === item)

              return i.municipalities.slug === item
            })
          }
          else if (type === 'rating') {
            existsInDatabase = [1, 2, 3, 4, 5].includes(item)
          }
          else {
            existsInDatabase = false
          }

          if (existsInDatabase) {
            const existsInSelection = this.selections[type].find(i => i === items)

            if (!existsInSelection)
              this.addItem(type, item)
          }
          else {
            console.log(`Invalid ${type}: ${item}`)
          }

          return existsInDatabase
        })
      }
      else {
        const exists = this.selections[type].find(i => i === items)

        if (!exists)
          this.addItem(type, items)
        else
          this.removeItem(type, items)
      }

      this.list.pagination.currentPage = 1
      this.fetch(this.selections)
    },
    addItem(type, item) {
      this.selections[type].push(item)

      console.log(`Added ${type}: ${item}`, JSON.stringify(this.selections))
    },
    removeItem(type, item) {
      const index = this.selections[type].findIndex(i => i === item)

      if (index !== -1) {
        this.selections[type].splice(index, 1)

        console.log(`Removed ${type}: ${item}`, JSON.stringify(this.selections))
      }
    },
    toggleModal(type) {
      if (this.modals[type].state === 1)
        this.modals[type].state = 2

      setTimeout(() => {
        this.modals[type].state = 0
        this.modals[type].shown = false
      }, 300)
    },
    truncate() {
      console.log('Clearing filters (truncate)')

      this.loadings.list = true
      this.loadings.selections = true

      this.list.data = []
      this.list.pagination.currentPage = 1

      this.selections.category = []
      this.selections.subcategory = []
      this.selections.region = []
      this.selections.municipality = []
      this.selections.rating = []

      this.modals.category.shown = false
      this.modals.category.state = 0
      this.modals.region.shown = false
      this.modals.region.state = 0
      this.modals.rating.shown = false
      this.modals.rating.state = 0
    },
    truncateByType(type) {
      console.log('Clearing filters (truncateByType)')

      if (type === 'category') {
        console.log(`Removed categories and subcategories: ${this.selections.category.join(', ')} / ${this.selections.subcategory.join(', ')}`, JSON.stringify(this.selections))

        this.selections.category = []
        this.selections.subcategory = []
      }

      if (type === 'region') {
        console.log(`Removed regions and municipalities: ${this.selections.region.join(', ')} / ${this.selections.municipality.join(', ')}`, JSON.stringify(this.selections))

        this.selections.region = []
        this.selections.municipality = []
      }

      if (type === 'rating') {
        console.log(`Removed ratings: ${this.selections.rating.join(', ')}`, JSON.stringify(this.selections))

        this.selections.rating = []
      }

      this.fetch(this.selections)
    },
  },
})
