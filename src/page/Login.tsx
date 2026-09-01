import { Button, Card, Form, Input, Typography } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const { Title, Text } = Typography

interface LoginForm {
  email: string
  password: string
}

export const Login=()=> {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const [form] = Form.useForm<LoginForm>()

  if (user) return <Navigate to="/profile" replace />

  const handleSubmit = async (values: LoginForm) => {
    await login(values.email, values.password)
    navigate('/profile')
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        background: '#f5f5f5',
      }}
    >
      <Card
        style={{
          width: 400,
          background: 'rgba(255,255,255,0.02)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(0,240,255,0.12)',
          borderRadius: 16,
          boxShadow: '0 4px 24px rgba(0,0,0,0.3), 0 0 20px rgba(0,240,255,0.04)',
        }}
      >
        <Title level={3} style={{ textAlign: 'center', marginBottom: 8, color: 'rgba(0,0,0,0.85)' }}>
          登录
        </Title>
        <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
          欢迎回到烟台大学电子信息协会
        </Text>
        <Form form={form} layout="vertical" onFinish={handleSubmit} autoComplete="off">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="邮箱" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="密码" size="large" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              style={{
                background: 'linear-gradient(135deg, #00F0FF, #0099cc)',
                border: 'none',
                fontWeight: 600,
                height: 44,
              }}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center' }}>
          <Text type="secondary">
            还没有账号？ <Link to="/register">立即注册</Link>
          </Text>
        </div>
      </Card>
    </div>
  )
}

export default Login