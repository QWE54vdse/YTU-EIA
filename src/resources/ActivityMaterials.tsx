import { Typography, Spin } from 'antd'
import { HomeOutlined, RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import ResourcePage from '../components/ResourcePage'

const columns = [
  { "id": 1, "subject": "2024迎新晚会", "description": "晚会节目单、主持稿与活动总结", "link": "#" },
  { "id": 2, "subject": "2024社团文化节", "description": "文化节参展成果展示与活动记录", "link": "#" },
  { "id": 3, "subject": "2024秋季纳新", "description": "纳新宣传材料、报名表与面试安排", "link": "#" },
  { "id": 4, "subject": "单片机培训营", "description": "2024秋季51单片机培训课件与实验代码", "link": "#" },
  { "id": 5, "subject": "Python集训周", "description": "2025寒假Python集中培训资料", "link": "#" },
  { "id": 6, "subject": "焊接技能工作坊", "description": "2024秋季焊接培训教学材料", "link": "#" },
  { "id": 7, "subject": "PS设计分享会", "description": "海报设计与创意视觉分享会资源", "link": "#" },
  { "id": 8, "subject": "物理实验竞赛辅导", "description": "2024物理实验竞赛赛前辅导材料", "link": "#" },
  { "id": 9, "subject": "ICAN竞赛经验分享", "description": "往届获奖团队经验分享PPT与视频", "link": "#" },
  { "id": 10, "subject": "社团联谊活动", "description": "各学院联合团建活动策划与回顾", "link": "#" }
]

export default function ActivityMaterials() {


  return (
    <div style={{ background: '#f5f5f5', minHeight: 'calc(100vh - 134px)' }}>
      <div style={{ padding: '24px 0 0', maxWidth: 960, margin: '0 auto' }}>
        <Typography.Text type="secondary" style={{ color: "rgba(0,0,0,0.45)" }}>
          <Link to="/" style={{ color: 'inherit' }}><HomeOutlined /> 首页</Link>
          <RightOutlined style={{ margin: '0 8px', fontSize: 12 }} />
          活动资料
        </Typography.Text>
      </div>
      <Spin style={{ display: 'block', margin: '80px auto' }} /> : <ResourcePage title="活动资料" data={columns} />
    </div>
  )
}
