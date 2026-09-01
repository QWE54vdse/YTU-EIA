import { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'
import {
  CodeOutlined,
  ToolOutlined,
  PlayCircleOutlined,
  RightOutlined,
  TeamOutlined,
  TrophyOutlined,
  BookOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import pic from '../assets/t.jpg'
import NewsSection from '../components/NewsSection'
import '../css/Home.css'
const slides = [
  {
    id: 1,
    image: new URL('../assets/e.jpg', import.meta.url).href,
    label: '超级显微镜',
    title: '看穿活体组织生命活动的瑰丽奥秘',
    align: 'left' as const,
  },
  {
    id: 2,
    image: new URL('../assets/q.jpg', import.meta.url).href,
    label: '风力',
    title: '创造无限',
    align: 'center' as const,
  },
  {
    id: 3,
    image: new URL('../assets/w.jpg', import.meta.url).href,
    label: '"天眸芯"',
    title: '以创新开拓类脑感知的未来',
    align: 'right' as const,
  },
]

const departments = [
  {
    key: 'software',
    name: '软件部',
    desc: '徜徉数字世界，探索编程、算法与软件开发的前沿技术',
    icon: <CodeOutlined />,
    color: '#00d4ff',
    bg: 'rgba(0,212,255,0.1)',
    span: '2x2',
    link: '/software',
  },
  {
    key: 'hardware',
    name: '硬件部',
    desc: '领略电路魅力，从元器件到嵌入式系统',
    icon: <ToolOutlined />,
    color: '#ff6b35',
    bg: 'rgba(255,107,53,0.1)',
    span: '1x1',
    link: '/hardware',
  },
  {
    key: 'media',
    name: '传媒部',
    desc: '构建视觉盛宴，用创意传递科技之美',
    icon: <PlayCircleOutlined />,
    color: '#b44dff',
    bg: 'rgba(180,77,255,0.1)',
    span: '1x1',
    link: '/media',
  },
]

const stats = [
  { icon: <FieldTimeOutlined />,value:"2011",label:"协会成立时间"},
  { icon: <TeamOutlined />, value: '100+', label: '协会成员' },
  { icon: <TrophyOutlined />, value: '15+', label: '国家级奖项' },
  { icon: <BookOutlined />, value: '10+', label: '合作项目' },
]

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Home() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(0)

  useReveal()

  const goTo = (n: number) => {
    setCurrent(n)
    resetTimer()
  }

  const next = () => goTo((current + 1) % slides.length)
  const prev = () => goTo((current - 1 + slides.length) % slides.length)

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 6000)
  }

  useEffect(() => {
    timerRef.current = setInterval(next, 6000)
    return () => clearInterval(timerRef.current)
  }, [current])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [current])

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <section className="hero">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-slide ${i === current ? 'active' : ''}`}
          >
            <div className="hero-bg" style={{ backgroundImage: `url(${slide.image})` }} />
            <div className="hero-overlay" />
            <div className={`hero-content hero-align-${slide.align}`}>
              <span className="hero-label">{slide.label}</span>
              <h2 className="hero-title">{slide.title}</h2>
            </div>
          </div>
        ))}
        <div className="hero-controls">
          <button className="hero-btn" onClick={prev} aria-label="上一张">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="hero-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`幻灯片 ${i + 1}`}
              />
            ))}
          </div>
          <button className="hero-btn" onClick={next} aria-label="下一张">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar reveal">
        <div className="stats-inner">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-icon">{s.icon}</span>
              <div>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section reveal">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-image">
              <img
                src={new URL('../assets/about.jpg', import.meta.url).href}
                alt="协会合影"
                loading="lazy"
              />
              <div className="about-image-glow" />
            </div>
            <div className="about-text">
              <span className="section-tag">关于我们</span>
              <h2 className="section-title">烟台大学电子信息协会</h2>
              <p className="about-desc">
                富于创新与实干精神的学生科技组织，成立于2008年。通过开展科技培训、实践活动，
                培养烟大学子的科技素养并提供良好的科研学习环境。
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <span className="feature-dot" style={{ background: '#00d4ff' }} />
                  <span>下设软件部、硬件部、传媒部</span>
                </div>
                <div className="about-feature">
                  <span className="feature-dot" style={{ background: '#ff6b35' }} />
                  <span>在挑战杯、ICAN等国家级比赛中成绩优异</span>
                </div>
                <div className="about-feature">
                  <span className="feature-dot" style={{ background: '#00e676' }} />
                  <span>设备齐全，拥有丰富的知识资源</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <NewsSection />
      
      {/* Departments */}
      <section className="dept-section reveal" style={{background:`url(${pic}) center/cover`}} >
        <div className="dept-bg" />
        <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-tag">部门设置</span>
            <h2 className="section-title">三大部门</h2>
          </div>
          <div className="dept-grid">
            {departments.map((dept) => (
              <Link
                key={dept.key}
                to={dept.link}
                className={`dept-card dept-${dept.span}`}
                style={{ '--accent': dept.color, '--accent-bg': dept.bg } as React.CSSProperties}
              >
                <div className="dept-card-glow" />
                <div className="dept-icon-wrap" style={{ background: dept.bg, color: dept.color }}>
                  {dept.icon}
                </div>
                <h3 className="dept-name">{dept.name}</h3>
                <p className="dept-desc">{dept.desc}</p>
                <span className="dept-link">
                  了解更多 <RightOutlined />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section reveal">
        <div className="cta-card">
          <div className="cta-gradient-bar" />
          <h2 className="cta-title">加入我们</h2>
          <p className="cta-desc" style={{color:'blueviolet'}}>
            协会致力于科技创新，为每位成员提供所知、有所得、有所成长的平台。
          </p>
          <Link to="/reexam">
            <Button type="primary" size="large" className="cta-btn">
              立即加入
              <RightOutlined />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
