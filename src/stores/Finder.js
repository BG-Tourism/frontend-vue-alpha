import { defineStore } from 'pinia'
import router from '@/router/index'

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
    /**
     * Fetches the list of places based on the specified filters.
     * @param {object} filters - The filters to apply.
     */
    fetch(filters = null) {
      /**
       * Determines whether an item matches the current selections.
       * @param {object} item - The item to match.
       * @returns {boolean} True if the item matches the current selections, false otherwise.
       */
      const matchesFilters = (item) => {
        const categoryFilter = this.selections.category.length === 0 || item.categories.some(cat => this.selections.category.includes(cat))
        const subcategoryFilter = this.selections.subcategory.length === 0 || item.subcategories.some(subcat => this.selections.subcategory.includes(subcat))
        const regionFilter = this.selections.region.length === 0 || this.selections.region.includes(item.region)
        const municipalityFilter = this.selections.municipality.length === 0 || this.selections.municipality.includes(item.municipality)
        const ratingFilter = this.selections.rating.length === 0 || this.selections.rating.includes(Math.floor(item.user_score))

        return categoryFilter && subcategoryFilter && regionFilter && municipalityFilter && ratingFilter
      }

      const items = filters ? places.filter(matchesFilters) : places

      this.loadings.selections = true

      setTimeout(() => {
        this.list.data = items
        this.loadings.list = false
        this.loadings.selections = false
      }, 300)
    },
    /**
     * Adds or removes one or more items of the specified type to/from the store's selections.
     * @param {string} type - The type of item to manage.
     * @param {string|string[]} items - The item or items to add or remove.
     */
    manageItem(type, items) {
      const itemsArr = Array.isArray(items) ? items : [items]

      for (const item of itemsArr) {
        if (this.isValidItem(type, item)) {
          const existsInSelections = this.selections[type].includes(item)

          if (existsInSelections) {
            this.removeItem(type, item)
          }
          else {
            this.addItem(type, item)

            if (type === 'subcategory') {
              const parentCategory = this.getParentCategory(item)

              if (parentCategory && !this.selections.category.includes(parentCategory.slug))
                this.addItem('category', parentCategory.slug)
            }
            else if (type === 'municipality') {
              const parentRegion = this.getParentRegion(item)

              if (parentRegion && !this.selections.region.includes(parentRegion.slug))
                this.addItem('region', parentRegion.slug)
            }
          }
        }
        else {
          console.log(`Invalid ${type}: ${item}`)
        }
      }

      this.list.pagination.currentPage = 1
      this.updateURLParams()
      this.fetch(this.selections)
    },
    /**
     * Determines whether the specified item of the given type is valid.
     * @param {string} type - The type of item.
     * @param {string} item - The item to validate.
     * @returns {boolean} True if the item is valid, false otherwise.
     */
    isValidItem(type, item) {
      switch (type) {
        case 'category':
          return categories.some(category => category.slug === item)

        case 'subcategory':
          return categories.some((category) => {
            return Array.isArray(category.subcategories)
              ? category.subcategories.some(subcategory => subcategory.slug === item)
              : category.subcategories.slug === item
          })

        case 'region':
          return regions.some(region => region.slug === item)

        case 'municipality':
          return regions.some((region) => {
            return Array.isArray(region.municipalities)
              ? region.municipalities.some(municipality => municipality.slug === item)
              : region.municipalities.slug === item
          })

        case 'rating':
          return [1, 2, 3, 4, 5].includes(item)

        default:
          return false
      }
    },
    /**
     * Gets the parent category of the specified subcategory.
     * @param {string} subcategorySlug - The slug of the subcategory.
     * @returns {object|null} The parent category object, or null if not found.
     */
    getParentCategory(subcategorySlug) {
      for (const category of categories) {
        if (Array.isArray(category.subcategories)) {
          const subcategory = category.subcategories.find(subcategory => subcategory.slug === subcategorySlug)

          if (subcategory)
            return category
        }
        else if (category.subcategories.slug === subcategorySlug) {
          return category
        }
      }

      return null
    },
    /**
     * Gets the parent region of the specified municipality.
     * @param {string} municipalitySlug - The slug of the municipality.
     * @returns {object|null} The parent region object, or null if not found.
     */
    getParentRegion(municipalitySlug) {
      for (const region of regions) {
        if (Array.isArray(region.municipalities)) {
          const municipality = region.municipalities.find(municipality => municipality.slug === municipalitySlug)

          if (municipality)
            return region
        }
        else if (region.municipalities.slug === municipalitySlug) {
          return region
        }
      }

      return null
    },
    /**
     * Adds the specified item of the given type to the store's selections.
     * @param {string} type - The type of item.
     * @param {string} item - The item to add.
     */
    addItem(type, item) {
      this.selections[type].push(item)

      console.log(`Added ${type}: ${item}`, JSON.stringify(this.selections))
    },
    /**
     * Removes the specified item of the given type from the store's selections.
     * @param {string} type - The type of item.
     * @param {string} item - The item to remove.
     */
    removeItem(type, item) {
      const index = this.selections[type].indexOf(item)

      if (index !== -1) {
        this.selections[type].splice(index, 1)

        console.log(`Removed ${type}: ${item}`, JSON.stringify(this.selections))

        if (type === 'category')
          this.removeSelectedSubcategories(item)

        else if (type === 'region')
          this.removeSelectedMunicipalities(item)
      }
    },
    /**
     * Removes any selected subcategories that belong to the specified category.
     * @param {string} categorySlug - The slug of the category.
     */
    removeSelectedSubcategories(categorySlug) {
      const category = categories.find(cat => cat.slug === categorySlug)

      if (category && Array.isArray(category.subcategories)) {
        const subcategoriesToRemove = this.selections.subcategory.filter(sc =>
          category.subcategories.some(subcat => subcat.slug === sc),
        )

        for (const subcategory of subcategoriesToRemove) {
          const index = this.selections.subcategory.indexOf(subcategory)
          this.selections.subcategory.splice(index, 1)

          console.log(`Removed subcategory: ${subcategory}`, JSON.stringify(this.selections))
        }
      }
    },
    /**
     * Removes any selected municipalities that belong to the specified region.
     * @param {string} regionSlug - The slug of the region.
     */
    removeSelectedMunicipalities(regionSlug) {
      const region = regions.find(reg => reg.slug === regionSlug)

      if (region && Array.isArray(region.municipalities)) {
        const municipalitiesToRemove = this.selections.municipality.filter(mun =>
          region.municipalities.some(m => m.slug === mun),
        )

        for (const municipality of municipalitiesToRemove) {
          const index = this.selections.municipality.indexOf(municipality)
          this.selections.municipality.splice(index, 1)

          console.log(`Removed municipality: ${municipality}`, JSON.stringify(this.selections))
        }
      }
    },
    /**
     * Toggles the state of the specified modal.
     * @param {string} type - The type of modal.
     */
    toggleModal(type) {
      const modal = this.modals[type]

      if (modal.state === 1) {
        modal.state = 2

        setTimeout(() => {
          modal.state = 0
          modal.shown = false
        }, 300)
      }
    },
    /**
     * Clears all filters and selections.
     */
    truncate() {
      console.log('Clearing filters')

      this.loadings.list = true
      this.loadings.selections = true

      this.list.data = []
      this.list.pagination.currentPage = 1

      for (const type of ['category', 'subcategory', 'region', 'municipality', 'rating'])
        this.selections[type] = []

      for (const type of ['category', 'region', 'rating']) {
        this.modals[type].shown = false
        this.modals[type].state = 0
      }

      this.fetch(this.selections)
    },
    /**
     * Clears the filters and selections of the specified type.
     * @param {string} type - The type of selection to clear.
     */
    truncateByType(type) {
      console.log(`Clearing "${type}" filters`)

      const selectionTypes = {
        category: ['category', 'subcategory'],
        region: ['region', 'municipality'],
        rating: ['rating'],
      }

      for (const st of selectionTypes[type]) {
        console.log(`Removed ${st}: ${this.selections[st].join(', ')}`, JSON.stringify(this.selections))

        this.selections[st] = []
      }

      this.updateURLParams()
      this.fetch(this.selections)
    },
    /**
     * Updates the URL query parameters based on the current selections.
     */
    updateURLParams() {
      const queryParams = {}

      for (const [key, value] of Object.entries(this.selections)) {
        if (value.length > 0)
          queryParams[key] = value.join(',')
      }

      const query = new URLSearchParams(queryParams).toString()
      const path = `/${router.currentRoute.value.path.split('/').slice(1).join('/')}`

      if (query !== '')
        router.push(`${path}?${query}`)

      else
        router.push(path)
    },
  },
})
