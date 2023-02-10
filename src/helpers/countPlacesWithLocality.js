export default function countPlacesWithLocality(places, slug) {
  return places.reduce((count, place) => {
    if (place.locality.slug === slug)
      count++

    return count
  }, 0)
}
