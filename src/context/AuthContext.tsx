import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { message } from 'antd'
import { login as loginApi, register as registerApi, getProfile, type User } from '../api/auth'

interface AuthContextType {
  user: User | null
  token: string | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!token) {
      setLoading(false)
      return
    }
    getProfile()
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem('token')
        setToken(null)
      })
      .finally(() => setLoading(false))
  }, [token])

  const login = async (email: string, password: string) => {
    try {
      const res = await loginApi({ email, password })
      const data = res.data
      localStorage.setItem('token', data.token!)
      setToken(data.token!)
      setUser(data.user!)
      message.success(data.message)
    } catch (err: any) {
      message.error(err.response?.data?.message || '登录失败')
    }
  }

  const register = async (username: string, email: string, password: string) => {
    try {
      const res = await registerApi({ username, email, password })
      message.success(res.data.message)
    } catch (err: any) {
      message.error(err.response?.data?.message || '注册失败')
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
