import { useRoute } from 'vue-router'

function category(value) {
  const route = useRoute()

  if (String(route.meta.category) && String(route.meta.category) === value)
    return 'active'

  return null
}

export default category
