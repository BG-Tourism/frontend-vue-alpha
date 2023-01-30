export default function countPlacesWithCategory(places, slug) {
    return places.reduce((count, place) => {
        if (place.category.slug === slug) {
            count++
        }

        return count
    }, 0)
}
