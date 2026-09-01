import { useState, useMemo, useCallback } from 'react'
import { Input, Table, Typography, message } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import type { ColumnsType } from 'antd/es/table'
import Galaxy from './animations/BackGalaxy'

interface ResourceItem {
  id: number
  subject: string
  description: string
  link: string
}

interface ResourcePageProps {
  title: string
  data: ResourceItem[]
}

export default function ResourcePage({ data }: ResourcePageProps) {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return data
    const q = search.trim().toLowerCase()
    return data.filter(
      (item) =>
        item.subject.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q),
    )
  }, [search, data])

  const handleDownload = useCallback((item: ResourceItem) => {
    if (!user) {
      message.warning('请先登录后再下载资料')
      navigate('/login')
      return
    }
    window.open(item.link, '_blank', 'noopener')
  }, [user, navigate])

  const columns: ColumnsType<ResourceItem> = [
    { title: '#', dataIndex: 'id', key: 'id', width: 60, render: (v) => <Typography.Text style={{ color: 'rgba(255,255,255,0.45)' }}>{v}</Typography.Text> },
    { title: '科目', dataIndex: 'subject', key: 'subject', width: 160 },
    { title: '描述', dataIndex: 'description', key: 'description' },
    {
      title: '下载',
      key: 'download',
      width: 120,
      render: (_, item) => (
        <a
          onClick={() => handleDownload(item)}
          style={{ cursor: 'pointer', color: '#00d4ff', display: 'inline-flex', alignItems: 'center', gap: 4 }}
        >
          <DownloadOutlined /> 下载
        </a>
      ),
    },
  ]

  return (
    <>
    <style>{`
  .glass-table .ant-table-thead > tr > th {
    background: rgba(255,255,255,0.06) !important;
    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
    color: rgba(255,255,255,0.55) !important;
  }
  .glass-table .ant-table-tbody > tr > td {
    border-bottom: 1px solid rgba(255,255,255,0.08) !important;
    background: transparent !important;
    color: rgba(255,255,255,0.85) !important;
  }
  .glass-table .ant-table-tbody > tr:hover > td {
    background: rgba(0,212,255,0.08) !important;
  }
  .glass-table .ant-table {
    background: transparent !important;
  }
  .glass-table .ant-table-placeholder .ant-table-cell {
    background: transparent !important;
    color: rgba(255,255,255,0.5) !important;
  }
  .glass-search .ant-input {
    background: rgba(255,255,255,0.06) !important;
    border-color: rgba(255,255,255,0.2) !important;
    color: rgba(0,0,0,0.65) !important;
  }
  .glass-search .ant-input::placeholder {
    color: rgba(255,255,255,0.55) !important;
  }
  .glass-search .ant-input:hover,
  .glass-search .ant-input:focus {
    border-color: rgba(0,212,255,0.6) !important;
  }
`}</style>
    {/* 全屏固定背景:深色 + 银河,铺满整个视口,不随内容/表格变化 */}
    <div style={{ position: 'fixed', inset: 0, background: '#070b18', zIndex: 0 }}>
      <Galaxy
        style={{ position: 'absolute', inset: 0 }}
        density={3.2}
        starSpeed={1.5}
        glowIntensity={0.35}
        twinkleIntensity={0.4}
        saturation={0.15}
        hueShift={200}
      />
    </div>

    {/* 内容层 */}
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 960, margin: '0 auto', paddingBottom: 48 }}>
      <Input.Search
        className="glass-search"
        placeholder="请输入关键词搜索资料..."
        allowClear
        enterButton="搜索"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSearch={setSearch}
        style={{ marginBottom: 24 }}
        styles={{ input: { color: 'rgba(000,000,000,0.9)' } }}
      />
      <Table
        dataSource={filtered}
        columns={columns}
        rowKey="id"
        pagination={false}
        locale={{ emptyText: '没有找到匹配的资料，请尝试其他关键词' }}
        style={{ background: 'transparent' }}
        className="glass-table"
      />
    </div>
    </>
  )
}
