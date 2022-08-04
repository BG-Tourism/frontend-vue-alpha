import axiosInstance from '@/utils/axiosInstance'
import axiosHeaders from '@/utils/axiosHeaders'

export default {
    fetchLocationsList() {
        return axiosInstance.get('/locations', { headers: axiosHeaders() })
    },
    fetchLocationDetails(id) {
        return axiosInstance.get('/locations/' + id, { headers: axiosHeaders() })
    }
}
