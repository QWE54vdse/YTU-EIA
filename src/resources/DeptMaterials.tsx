import { Typography } from 'antd'
import { HomeOutlined, RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import ResourcePage from '../components/ResourcePage'

const data=[
  { "id": 1, "subject": "51单片机入门教程", "description": "软件部——从流水灯到中断系统的完整教程", "link": "#" },
  { "id": 2, "subject": "STM32开发指南", "description": "软件部——HAL库标准开发流程与实战案例", "link": "#" },
  { "id": 3, "subject": "Python机器学习基础", "description": "软件部——sklearn入门与经典算法实现", "link": "#" },
  { "id": 4, "subject": "洞洞板焊接入门", "description": "硬件部——焊接工具使用与基础焊接技巧", "link": "#" },
  { "id": 5, "subject": "Multisim仿真教程", "description": "硬件部——电路仿真从入门到进阶", "link": "#" },
  { "id": 6, "subject": "Altium Designer PCB设计", "description": "硬件部——原理图绘制到PCB打板全流程", "link": "#" },
  { "id": 7, "subject": "Photoshop基础教程", "description": "传媒部——图层、蒙版、调色核心技能", "link": "#" },
  { "id": 8, "subject": "Premiere剪辑入门", "description": "传媒部——视频剪辑基础与活动视频制作", "link": "#" },
  { "id": 9, "subject": "LaTeX论文排版", "description": "物理部——学术论文排版与常用模板", "link": "#" },
  { "id": 10, "subject": "MATLAB科学计算", "description": "物理部——数值计算、仿真与数据可视化", "link": "#" }
]


export default function DeptMaterials() {

  return (
    <div style={{ background: '#f5f5f5', minHeight: 'calc(100vh - 134px)' }}>
      <div style={{ padding: '24px 0 0', maxWidth: 960, margin: '0 auto' }}>
        <Typography.Text type="secondary" style={{ color: "rgba(0,0,0,0.45)" }}>
          <Link to="/" style={{ color: 'inherit' }}><HomeOutlined /> 首页</Link>
          <RightOutlined style={{ margin: '0 8px', fontSize: 12 }} />
          各部门资料
        </Typography.Text>
      </div>
      <ResourcePage title="各部门资料" data={data} />
    </div>
  )
}
