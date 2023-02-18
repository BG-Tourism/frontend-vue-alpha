export default function getPlacesByMunicipality(places, slug) {
  return places
    .filter(place => place.municipality.slug === slug)
    .map((place) => {
      return place
    })
}
