export default function getPlacesByLocality(places, slug) {
  return places
    .filter(place => place.locality.slug === slug)
    .map((place) => {
      return place
    })
}
