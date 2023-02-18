export default function countPlacesWithRegion(places, slug) {
  return places.reduce((count, place) => {
    if (place.region === slug)
      count++

    return count
  }, 0)
}
