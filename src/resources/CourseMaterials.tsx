import { Typography} from 'antd'
import { HomeOutlined, RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import ResourcePage from '../components/ResourcePage'


const data=[
  { "id": 1, "subject": "高等数学（上）", "description": "函数、极限、导数与微分、不定积分等", "link": "#" },
  { "id": 2, "subject": "高等数学（下）", "description": "定积分、多元函数微积分、无穷级数", "link": "#" },
  { "id": 3, "subject": "线性代数", "description": "矩阵、行列式、向量空间与特征值", "link": "#" },
  { "id": 4, "subject": "概率论与数理统计", "description": "概率模型、随机变量、参数估计与假设检验", "link": "#" },
  { "id": 5, "subject": "大学物理（上）", "description": "力学、热学、电磁学基础", "link": "#" },
  { "id": 6, "subject": "大学物理（下）", "description": "波动光学、量子物理基础", "link": "#" },
  { "id": 7, "subject": "电路分析", "description": "王艳红老师版——电路基本概念、网孔电流法、戴维南定理", "link": "#" },
  { "id": 8, "subject": "模拟电子技术", "description": "运算放大器、滤波电路、波形发生电路", "link": "#" },
  { "id": 9, "subject": "数字电子技术", "description": "门电路、组合逻辑、触发器、时序逻辑", "link": "#" },
  { "id": 10, "subject": "信号与系统", "description": "连续与离散信号、傅里叶变换、拉普拉斯变换", "link": "#" },
  { "id": 11, "subject": "C语言程序设计", "description": "谭浩强版——基础语法、指针、结构体与文件操作", "link": "#" },
  { "id": 12, "subject": "Python编程", "description": "基础语法、NumPy、Matplotlib数据分析入门", "link": "#" }
]


export default function CourseMaterials() {

  return (
    <div style={{ background: '#f5f5f5', minHeight: 'calc(100vh - 134px)' }}>
      <div style={{ padding: '24px 0 0', maxWidth: 960, margin: '0 auto' }}>
        <Typography.Text type="secondary" style={{ color: "rgba(0,0,0,0.45)" }}>
          <Link to="/" style={{ color: 'inherit' }}><HomeOutlined /> 首页</Link>
          <RightOutlined style={{ margin: '0 8px', fontSize: 12 }} />
          专业课资料
        </Typography.Text>
      </div>
      <ResourcePage title="专业课资料" data={data} />
    </div>
  )
}
