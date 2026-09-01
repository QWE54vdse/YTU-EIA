import { Typography} from 'antd'
import { HomeOutlined, RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import ResourcePage from '../components/ResourcePage'


const columns = [
  { "id": 1, "subject": "ICAN全国大学生创新创业大赛", "description": "协会历年获奖项目资料与申报指南", "link": "#" },
  { "id": 2, "subject": "挑战杯课外学术科技作品竞赛", "description": "往届优秀作品文档与答辩PPT", "link": "#" },
  { "id": 3, "subject": "全国大学生电子设计竞赛", "description": "历年赛题解析与设计方案", "link": "#" },
  { "id": 4, "subject": "蓝桥杯全国软件和信息技术大赛", "description": "真题解析、算法训练与备赛攻略", "link": "#" },
  { "id": 5, "subject": "CUPT全国大学生物理学术竞赛", "description": "竞赛规则、历年赛题与优秀报告", "link": "#" },
  { "id": 6, "subject": "全国大学生物理实验竞赛", "description": "实验方案设计、数据处理与仿真资源", "link": "#" },
  { "id": 7, "subject": "山东省大学生科创大赛", "description": "申报书模板、项目计划书参考", "link": "#" },
  { "id": 8, "subject": "ACM-ICPC国际大学生程序设计竞赛", "description": "算法模板、训练题单与比赛经验", "link": "#" }
]


export default function CompetitionMaterials() {

  return (
    <div style={{ background: '#f5f5f5', minHeight: 'calc(100vh - 134px)' }}>
      <div style={{ padding: '24px 0 0', maxWidth: 960, margin: '0 auto' }}>
        <Typography.Text type="secondary" style={{ color: "rgba(0,0,0,0.45)" }}>
          <Link to="/" style={{ color: 'inherit' }}><HomeOutlined /> 首页</Link>
          <RightOutlined style={{ margin: '0 8px', fontSize: 12 }} />
          竞赛资料
        </Typography.Text>
      </div>
      <ResourcePage title="竞赛资料" data={columns} />
    </div>
  )
}
