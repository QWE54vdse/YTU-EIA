import { Table, Typography } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import heroBg from '../assets/9.jpg'

const columns = [
  { title: '部门', dataIndex: 'dept', key: 'dept', width: 100 },
  { title: '考核内容', dataIndex: 'content', key: 'content' },
  {
    title: '考核资料',
    dataIndex: 'material',
    key: 'material',
    width: 320,
    render: (v: { text: string; link?: string }) =>
      v.link ? (
        <a href={v.link} target="_blank" rel="noopener" style={{ color: '#1677ff' }}>
          <LinkOutlined /> {v.text}
        </a>
      ) : (
        <Typography.Text type="secondary">{v.text}</Typography.Text>
      ),
  },
]

const data = [
  { key: '1', dept: '硬件部', content: '自学《电路分析》前四章部分章节，掌握电路基本概念、基本元件、电路等效变换、网孔电流法、戴维南定理等内容。', material: { text: '电路分析 王艳红（硬件部）.pdf', link: '#' } },
  { key: '2', dept: '软件部', content: 'C语言课本前六章内容。', material: { text: 'C语言课本 - 博客文章（书籍）,一到六章的内容', link: 'https://blog.csdn.net/HXR_plume/article/details/135726212' } },
  { key: '3', dept: '传媒部', content: '理论考试：图层、选区知识。实战考试：抠图、图片修正相关工具使用。', material: { text: '必学A01-A08、A11-A12、A14、A20、A25（B站视频）', link: 'https://www.bilibili.com/video/BV1cdrHYgECK' } },
]

export default function ReExam() {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          height: '50vh',
          minHeight: 360,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(7,11,20,0.7), rgba(11,17,32,0.8))',
          }}
        />
        <div style={{ position: 'relative', textAlign: 'center', color: '#fff' }}>
          <Typography.Title level={1} style={{ color: '#fff', margin: 0, fontSize: 'clamp(36px, 5vw, 56px)' }}>
            入会公告
          </Typography.Title>
          <Typography.Text style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Link to="/" style={{ color: 'inherit' }}>首页</Link> / 加入我们
          </Typography.Text>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: '48px auto', padding: '0 24px 80px', color: 'rgba(0,0,0,0.85)' }}>
        <Typography.Title level={2} style={{ color: 'rgba(0,0,0,0.85)' }}>入会公告</Typography.Title>
        <Typography.Paragraph style={{ fontSize: 16, color: 'rgba(0,0,0,0.85)' }}>
          加入烟台大学电子信息协会请将报名申请表于2026年10月12日前提交至化院112，逾期将不再接收。另请同学做好学习的准备，各部门的学习
          内容如下：
        </Typography.Paragraph>
        <style>{`
  .reexam-table .ant-table {
    background: transparent !important;
  }
  .reexam-table .ant-table-thead > tr > th {
    background: #fafafa !important;
    border-bottom: 1px solid rgba(0,0,0,0.06) !important;
    color: rgba(0,0,0,0.45) !important;
  }
  .reexam-table .ant-table-tbody > tr > td {
    border-bottom: 1px solid rgba(0,0,0,0.06) !important;
    background: transparent !important;
    color: rgba(0,0,0,0.85) !important;
  }
`}</style>
        <Table className="reexam-table" dataSource={data} columns={columns} pagination={false} bordered={false} />
      </div>
    </div>
  )
}

<style>

</style>
