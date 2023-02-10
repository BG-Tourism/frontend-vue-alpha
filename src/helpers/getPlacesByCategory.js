export default function getPlacesByCategory(places, slug) {
  return places
    .filter(place => place.category.slug === slug)
    .map((place) => {
      return place
    })
}
