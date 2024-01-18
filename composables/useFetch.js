export const useAPIFetch = (request, opts = {}) => {
  const config = useRuntimeConfig()
  opts.baseURL = config.public.BASE_URL
  return useFetch(request, opts)
}

export const useAuthFetch = (request, opts = {}) => {
  const config = useRuntimeConfig()
  opts.baseURL = config.public.BASE_URL
  opts.headers = { Authorization: 'Token ' + useState('token').value }
  return useFetch(request, opts)
}

export const apiFetch = (request, opts = {}) => {
  const config = useRuntimeConfig()
  opts.baseURL = config.public.BASE_URL
  return $fetch(request, opts)
}

export const authFetch = (request, opts = {}) => {
  const config = useRuntimeConfig()
  opts.baseURL = config.public.BASE_URL
  opts.headers = { Authorization: 'Token ' + useState('token').value }
  return $fetch(request, opts)
}