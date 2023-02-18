export default function countPlacesWithSubcategory(places, slug) {
  let count = 0

  places.forEach((place) => {
    if (place.subcategories.includes(slug))
      count++
  })

  return count
}
