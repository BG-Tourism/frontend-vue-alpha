import { defineStore } from 'pinia'

import categories from '@/api/categories'
import regions from '@/api/regions'
import places from '@/api/places'

/**
 * Popup states could be:
 *
 *  0 = closed
 *  1 = opened
 *  2 = closing
 */
export const useFinderStore = defineStore('FinderStore', {
    state: () => ({
        loadings: {
            list: true,
            selections: true
        },
        list: {
            data: [],
            pagination: {
                currentPage: 1
            }
        },
        selections: {
            category: [],
            region: [],
            locality: [],
            rating: []
        },
        popups: {
            search: {
                shown: false,
                state: 0
            },
            category: {
                shown: false,
                state: 0
            },
            region: {
                shown: false,
                state: 0
            },
            rating: {
                shown: false,
                state: 0
            }
        }
    }),
    actions: {
        fetch(filters = null) {
            let items = []

            if (filters) {
                items = places.filter((item) => {
                    return (
                        (this.selections.category.includes(item.category.slug) || this.selections.category.length === 0) &&
                        (this.selections.region.includes(item.region.slug) || this.selections.region.length === 0) &&
                        (this.selections.locality.includes(item.locality.slug) || this.selections.locality.length === 0) &&
                        (this.selections.rating.some((r) => {
                            return Math.floor(item.user_score) === r
                        }) ||
                            this.selections.rating.length === 0)
                    )
                })
            } else {
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
                        existsInDatabase = categories.find((i) => i.slug === item) ? true : false
                    } else if (type === 'region') {
                        existsInDatabase = regions.find((i) => i.slug === item) ? true : false
                    } else if (type === 'locality') {
                        existsInDatabase = regions.some((i) => {
                            if (Array.isArray(i.localities)) {
                                return i.localities.some((locality) => locality.slug === item)
                            }
                            return i.localities.slug === item
                        })
                            ? true
                            : false
                    } else if (type === 'rating') {
                        existsInDatabase = [1, 2, 3, 4, 5].includes(item)
                    } else {
                        existsInDatabase = false
                    }

                    if (existsInDatabase) {
                        const existsInSelection = this.selections[type].find((i) => i === items)

                        if (!existsInSelection) {
                            this.addItem(type, item)
                        }
                    } else {
                        console.log(`Invalid ${type}: ${item}`)
                    }
                })
            } else {
                const exists = this.selections[type].find((i) => i === items)

                if (!exists) {
                    this.addItem(type, items)
                } else {
                    this.removeItem(type, items)
                }
            }

            this.list.pagination.currentPage = 1
            this.fetch(this.selections)
        },
        addItem(type, item) {
            this.selections[type].push(item)

            console.log(`Added ${type}: ${item}`, JSON.stringify(this.selections))
        },
        removeItem(type, item) {
            const index = this.selections[type].findIndex((i) => i === item)

            if (index !== -1) {
                this.selections[type].splice(index, 1)

                console.log(`Removed ${type}: ${item}`, JSON.stringify(this.selections))
            }
        },
        togglePopup(type) {
            if (this.popups[type].state === 1) {
                this.popups[type].state = 2
            }

            setTimeout(() => {
                this.popups[type].state = 0
                this.popups[type].shown = false
            }, 300)
        },
        truncate() {
            console.log('Clearing filters:', JSON.stringify(this.selections))

            this.loadings.list = true
            this.loadings.selections = true

            this.list.data = []
            this.list.pagination.currentPage = 1

            this.selections.category = []
            this.selections.region = []
            this.selections.locality = []
            this.selections.rating = []

            this.popups.search.shown = false
            this.popups.search.state = 0
            this.popups.category.shown = false
            this.popups.category.state = 0
            this.popups.region.shown = false
            this.popups.region.state = 0
            this.popups.rating.shown = false
            this.popups.rating.state = 0
        },
        truncateByType(type) {
            if (type === 'category') {
                console.log(`Removed categories: ${this.selections.category.join(', ')}`, JSON.stringify(this.selections))

                this.selections.category = []
            }

            if (type === 'region') {
                console.log(
                    `Removed regions and localities: ${this.selections.region.join(', ')} / ${this.selections.locality}`,
                    JSON.stringify(this.selections)
                )

                this.selections.region = []
                this.selections.locality = []
            }

            if (type === 'rating') {
                console.log(`Removed ratings: ${this.selections.rating.join(', ')}`, JSON.stringify(this.selections))

                this.selections.rating = []
            }

            this.fetch(this.selections)

            console.log('truncateByType:', JSON.stringify(this.selections))
        }
    }
})
