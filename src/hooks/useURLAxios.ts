import { ref } from 'vue'
import axios from 'axios'

const useURLAxios = (url: string) => {
  const loading = ref(true)
  const loaded = ref(false)
  const result = ref(null)
  const error = ref(null)
  axios.get(url).then(res => {
    loading.value = false
    loaded.value = true
    result.value = res.data
  }).catch(e => {
    loading.value = false
    error.value = e
  })
  return {
    loading,
    loaded,
    result,
    error
  }
}

export default useURLAxios
