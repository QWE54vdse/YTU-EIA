import { Button, Card } from 'antd'
import {
  RightOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  CodeOutlined,
  PlayCircleOutlined,
  ToolOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const members = [
  { name: '寇硕', role: '会长' },
  { name: '刘子涵', role: '副会长' },
  { name: '马家俊', role: '副会长' },
  { name: '张津瑜', role: '副会长' },
  { name: '董华立', role: '硬件部部长' },
  { name: '张杰', role: '软件部部长' },
  { name: '王华梅', role: '传媒部部长' },
]

const viceGroups = [
  {
    name: '软件部副部',
    accent: '#00F0FF',
    icon: <CodeOutlined />,
    members: ['马宁','夏盛源'],
  },
  {
    name: '硬件部副部',
    accent: '#ff6b35',
    icon: <ToolOutlined />,
    members: ['陈舒欣','曾润洲','胡泰宏'],
  },
  {
    name: '传媒部副部',
    accent: '#b44dff',
    icon: <PlayCircleOutlined />,
    members: ['魏阳'],
  },
]


const joinCards = [
  { icon: <FileTextOutlined />, title: '复试公告', desc: '请相关同学提前做好准备', color: '#00F0FF', link: '/reexam' },
  { icon: <ThunderboltOutlined />, title: 'STI', desc: 'STI小组代表电协的精英力量', color: '#ff6b35', link: '/STI' },
  { icon: <TrophyOutlined />, title: '比赛', desc: '协会不定期举办各类比赛', color: '#b44dff', link: '/completition' },
]

export default function About() {

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <span className="about-hero-tag">烟台大学电子信息协会</span>
          <h1 className="about-hero-title">走进电协</h1>
          <p className="about-hero-desc">
            来到这里，你将获得人生梦想的指点，你将沐浴在共同追寻梦想的良好氛围中。
          </p>
        </div>
      </section>

      {/* Organization */}
      <section className="about-section">
        <div className="about-inner">
          <Card className="about-card about-card-dark">
            <h2 className="about-card-title" style={{textAlign:"center"}}>人员组成</h2>
            <p className="about-card-text" style={{textAlign:"center"}}>
              烟台大学电子信息协会设有会长、副会长、部长及其副部长和委员组成。
            </p>
            <p className="about-card-text" style={{textAlign:"center"}}>
              副会长设有大三4名副会长、大二4名副会长。大二副会长为主要管理人员，负责管理协会。各部门设有4名副部长，副部长的职责为开展培训等相关工作。
            </p>
            <p className="about-card-text" style={{textAlign:"center"}}>协会还设有STI成员。</p>
          </Card>
        </div>
      </section>

      {/* Current Members */}
      <section className="about-section about-section-alt">
        <div className="about-inner">
          <Card className="about-card about-card-dark">
            <h2 className="about-card-title" style={{ textAlign: 'center' }}>现任主要成员</h2>
            <div className="members-leadership">
              <p><strong>会长：</strong>{members[0].name}</p>
              <p><strong>副会长：</strong>{members[1].name}，{members[2].name}，{members[3].name}</p>
              <p><strong>硬件部部长：</strong>{members[4].name}　；
              <strong>软件部部长：</strong>{members[5].name}　； 
              <strong>传媒部部长：</strong>{members[6].name}　</p>            
            </div>

          </Card>
        </div>
      </section>

      {/* Vice Ministers */}
      <section className="about-section">
        <div className="about-inner">
          <Card className="about-card about-card-dark">
            <h2 className="about-card-title" style={{ textAlign: 'center' }}>各部门副部</h2>
            <div className="vice-grid">
              {viceGroups.map((group, i) => (
                <div
                  key={i}
                  className="vice-card"
                  style={{ borderColor: `${group.accent}33`, background: `${group.accent}08` }}
                >
                  <h3 className="vice-title" style={{ color: group.accent }}>
                    <span className="vice-icon" style={{ background: `${group.accent}1a`, color: group.accent }}>
                      {group.icon}
                    </span>
                    {group.name}
                  </h3>
                  <p className="vice-members">{group.members.join('、')}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Join Cards */}
      <section className="about-section" style={{ paddingBottom: 100 }}>
        <div className="about-inner">
          <h2 className="about-card-title" style={{ textAlign: 'center', color: '#000', marginBottom: 40 }}>加入我们</h2>
          <div className="join-grid">
            {joinCards.map((card, i) => (
              <div key={i} className="join-card" style={{ '--card-accent': card.color } as React.CSSProperties}>
                <div className="join-icon" style={{ background: `${card.color}15`, color: card.color }}>
                  {card.icon}
                </div>
                <h3 className="join-title">{card.title}</h3>
                <p className="join-desc">{card.desc}</p>
                <Link to={card.link}>
                  <Button
                    type="primary"
                    className="join-btn"
                    style={{
                      background: 'linear-gradient(135deg, #00F0FF, #0099cc)',
                      borderColor: '#00F0FF',
                      border: 'none',
                    }}
                  >
                    查看详情 <RightOutlined />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-page {
          --text-secondary: #8892a8;
        }

        .about-hero {
          position: relative;
          height: 60svh;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .about-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url(${new URL('../assets/r.jpg', import.meta.url).href});
          background-size: cover;
          background-position: center;
        }
        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(7,11,20,0.3), rgba(11,17,32,0.85));
        }
        .about-hero-content {
          position: relative;
          text-align: center;
          padding: 0 24px;
          max-width: 700px;
        }
        .about-hero-tag {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #00F0FF;
          margin-bottom: 12px;
          display: block;
        }
        .about-hero-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 16px;
        }
        .about-hero-desc {
          font-size: 16px;
          line-height: 1.8;
          color: rgba(255,255,255,0.75);
          margin: 0;
        }

        .about-section {
          padding: 60px 0;
          background: #f5f5f5;
        }
        .about-section-alt { background: #fff; }
        .about-inner {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .about-card {
          border-radius: 16px !important;
          border: 1px solid rgba(0,0,0,0.08) !important;
          background: #fff !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
        }
        .about-card-dark {
          border-radius: 16px !important;
          border: 1px solid rgba(0,0,0,0.08) !important;
          background: #fff !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
          backdrop-filter: blur(8px) !important;
          box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 0 20px rgba(0,240,255,0.04) !important;
        }
        .about-card-title {
          font-size: 24px;
          font-weight: 700;
          color: rgba(0,0,0,0.85);
          margin: 0 0 20px;
        }
        .about-card-text {
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin: 0 0 12px;
        }

        .members-leadership {
          text-align: center;
          margin-bottom: 32px;
          padding: 20px;
          background: rgba(0,240,255,0.05);
          border-radius: 12px;
          border: 1px solid rgba(0,240,255,0.1);
        }
        .members-leadership p {
          margin: 0 0 8px;
          font-size: 15px;
          color: var(--text-secondary);
          
        }
        .members-leadership strong { color: rgba(0,0,0,0.85); }
        .members-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 12px;
        }
        .member-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(0,0,0,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }
        .member-card:hover {
          background: rgba(0,240,255,0.06);
          border-color: rgba(0,240,255,0.2);
          transform: translateY(-2px);
        }
        .member-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00F0FF, #0099cc);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          color: rgba(0,0,0,0.85);
          flex-shrink: 0;
        }
        .member-name {
          font-size: 14px;
          font-weight: 600;
          color: rgba(0,0,0,0.85);
          margin: 0;
        }
        .member-role {
          font-size: 12px;
          color: var(--text-secondary);
          margin: 0;
        }

        .vice-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .vice-card {
          padding: 20px;
          border-radius: 16px;
          border: 1px solid;
        }
        .vice-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 12px;
        }
        .vice-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .vice-members {
          font-size: 14px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin: 0;
        }

        .about-stats {
          position: relative;
          padding: 80px 0;
          overflow: hidden;
        }
        .about-stats-bg {
          position: absolute;
          inset: 0;
          background-image: url(${new URL('../assets/t.jpg', import.meta.url).href});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .about-stats-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11,17,32,0.9);
          backdrop-filter: blur(4px);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          text-align: center;
        }
        .about-stat-value {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .about-stat-label {
          font-size: 16px;
          color: rgba(0,0,0,0.45);
          font-weight: 500;
          margin: 0;
        }

        .join-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .join-card {
          padding: 32px 24px;
          border-radius: 20px;
          background: rgba(0,0,0,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          text-align: center;
          transition: all 0.3s ease;
        }
        .join-card:hover {
          transform: translateY(-4px);
          border-color: var(--card-accent);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .join-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          margin: 0 auto 16px;
        }
        .join-title {
          font-size: 20px;
          font-weight: 700;
          color: rgba(0,0,0,0.85);
          margin: 0 0 8px;
        }
        .join-desc {
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0 0 20px;
        }
        .join-btn {
          height: 40px;
          padding: 0 20px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        @media (max-width: 768px) {
          .about-inner { padding: 0 20px; }
          .members-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); }
          .vice-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: 1fr; gap: 24px; }
          .join-grid { grid-template-columns: 1fr; }
          .about-stat-value { font-size: 36px; }
        }
      `}</style>
    </div>
  )
}
