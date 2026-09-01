import { useState, useEffect, useCallback } from 'react'
import { Card, Descriptions, Button, Typography, Modal, Form, Input, Select, message, Popconfirm, Table } from 'antd'
import { LogoutOutlined, UploadOutlined, DeleteOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { fetchMaterials, createMaterial, deleteMaterial, type MaterialItem } from '../api/materials'

const { Title } = Typography

const typeLabels: Record<string, string> = {
  dept: '各部门资料',
  course: '专业课资料',
  competition: '竞赛资料',
  activity: '活动资料',
}

const materialTypes = ['dept', 'course', 'competition', 'activity']

export default function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [uploadOpen, setUploadOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [uploadType, setUploadType] = useState('dept')
  const [deleteType, setDeleteType] = useState('dept')
  const [items, setItems] = useState<MaterialItem[]>([])
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const loadItems = useCallback(async (type: string) => {
    setLoading(true)
    try {
      const res = await fetchMaterials(type)
      setItems(res.data)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (deleteOpen) loadItems(deleteType)
  }, [deleteOpen, deleteType, loadItems])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleUpload = async () => {
    try {
      const values = await form.validateFields()
      await createMaterial(uploadType, values)
      message.success('添加成功')
      setUploadOpen(false)
      form.resetFields()
    } catch {
      if (form.isFieldsTouched()) return
    }
  }

  const handleDelete = async () => {
    if (selectedId === null) return
    try {
      await deleteMaterial(selectedId)
      message.success('删除成功!')
      setSelectedId(null)
      loadItems(deleteType)
    } catch {
      message.error('删除失败!')
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '40px auto' }}>
      <Card>
        <Title level={4} style={{ marginBottom: 24 }}>
          个人中心
        </Title>
        <Descriptions column={1} bordered>
          <Descriptions.Item label="用户名">{user?.username}</Descriptions.Item>
          <Descriptions.Item label='密码'>
            {user?.is_admin?'amd123':'******'}
          </Descriptions.Item>
          <Descriptions.Item label="邮箱">{user?.email}</Descriptions.Item>  
          <Descriptions.Item label="注册时间">
            {user?.created_at ? new Date(user.created_at).toLocaleString('zh-CN') : '-'}
          </Descriptions.Item>

        </Descriptions>

        {user?.is_admin && (
          <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
            <Button type="primary" icon={<UploadOutlined />} onClick={() => setUploadOpen(true)}>
              上传资料
            </Button>
            <Button danger icon={<DeleteOutlined />} onClick={() => setDeleteOpen(true)}>
              删除资料
            </Button>
          </div>
        )}

        <Button
          type="primary"
          danger
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          style={{ marginTop: 24 }}
          block
        >
          退出登录
        </Button>
      </Card>

      <Modal
        title="上传资料"
        open={uploadOpen}
        onOk={handleUpload}
        onCancel={() => { setUploadOpen(false); form.resetFields() }}
        okText="上传"
        cancelText="取消"
      >
        <Form form={form} layout="vertical">
          <Form.Item label="资料类型" name="type" initialValue="dept">
            <Select onChange={(v) => setUploadType(v)}>
              {materialTypes.map((t) => (
                <Select.Option key={t} value={t}>{typeLabels[t]}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="名称" name="subject" rules={[{ required: true, message: '请输入资料名称' }]}>
            <Input placeholder="请输入资料名称" />
          </Form.Item>
          <Form.Item label="描述" name="description">
            <Input.TextArea placeholder="请输入描述（可选）" rows={3} />
          </Form.Item>
          <Form.Item label="链接" name="link">
            <Input placeholder="请输入下载链接（可选）" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="删除资料"
        open={deleteOpen}
        onCancel={() => { setDeleteOpen(false); setSelectedId(null) }}
        footer={null}
        width={640}
      >
        <div style={{ marginBottom: 16 }}>
          <Select value={deleteType} onChange={(v) => { setDeleteType(v); setSelectedId(null) }} style={{ width: 200 }}>
            {materialTypes.map((t) => (
              <Select.Option key={t} value={t}>{typeLabels[t]}</Select.Option>
            ))}
          </Select>
        </div>
        <Table
          dataSource={items}
          rowKey="id"
          loading={loading}
          size="small"
          pagination={false}
          columns={[
            { title: 'ID', dataIndex: 'id', width: 60 },
            { title: '名称', dataIndex: 'subject', width: 160 },
            { title: '描述', dataIndex: 'description', ellipsis: true },
            {
              title: '操作',
              width: 80,
              render: (_, item) => (
                <Popconfirm
                  title="确认删除"
                  description={`确定删除「${item.subject}」？`}
                  onConfirm={() => { setSelectedId(item.id); handleDelete() }}
                  okText="确定"
                  cancelText="取消"
                >
                  <Button type="link" danger size="small" icon={<DeleteOutlined />}>
                    删除
                  </Button>
                </Popconfirm>
              ),
            },
          ]}
        />
      </Modal>
    </div>
  )
}
