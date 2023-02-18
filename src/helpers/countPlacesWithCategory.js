export default function countPlacesWithCategory(places, slug) {
  let count = 0

  places.forEach((place) => {
    if (place.categories.includes(slug))
      count++
  })

  return count
}
