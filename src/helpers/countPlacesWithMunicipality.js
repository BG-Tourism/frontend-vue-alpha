export default function countPlacesWithMunicipality(places, slug) {
  return places.reduce((count, place) => {
    if (place.municipality === slug)
      count++

    return count
  }, 0)
}
