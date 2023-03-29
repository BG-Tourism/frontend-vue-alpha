function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371 // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a
        = Math.sin(dLat / 2) * Math.sin(dLat / 2)
        + Math.cos(lat1 * (Math.PI / 180))
        * Math.cos(lat2 * (Math.PI / 180))
        * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function findClosest(coordsArray, targetLatitude, targetLongitude, maxDistance = 100) {
  let closestItem = null
  let closestDistance = Infinity

  coordsArray.forEach((item) => {
    const distance = haversineDistance(
      targetLatitude,
      targetLongitude,
      item.coords.latitude,
      item.coords.longitude,
    )

    if (distance < closestDistance && distance <= maxDistance) {
      closestDistance = distance
      closestItem = { ...item, distance: Number(closestDistance.toFixed(2)) }
    }
  })

  return closestItem
}

export default findClosest
