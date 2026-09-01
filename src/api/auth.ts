import axios from 'axios'

export interface User {
  id: number
  username: string
  email: string
  is_admin: boolean
  created_at: string
  updated_at: string
}

interface AuthResponse {
  message: string
  token?: string
  user?: User
}

interface ProfileResponse {
  message: string
  user: User
}

const api = axios.create({
  baseURL: '/api',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
    }
    return Promise.reject(error)
  },
)

export function register(data: { username: string; email: string; password: string }) {
  return api.post<AuthResponse>('/register', data)
}

export function login(data: { email: string; password: string }) {
  return api.post<AuthResponse>('/login', data)
}

export function getProfile() {
  return api.get<ProfileResponse>('/auth/profile')
}

export default api
