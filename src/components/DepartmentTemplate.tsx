import { Button } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import type { ReactNode } from 'react'
import '../css/Department.css'

interface DeptSection {
    title: string
    subtitle: string
    paragraphs: string[]
    image: string
    ctaText: string
    accent: string
    reverse?: boolean
}

interface DepartmentTemplateProps {
  name: string
  accent: string
  icon: ReactNode
  heroBg: string
  sections: [DeptSection, DeptSection]
  ctaTitle: string
  ctaDesc: string
}

export default function DepartmentTemplate({
    name,
    accent,
    icon,
    heroBg,
    sections,
    ctaTitle,
    ctaDesc,
}: DepartmentTemplateProps) {
  const { user } = useAuth()

  return (
    <>
    <div className="dept-page" style={{ '--dept-accent': accent } as React.CSSProperties}>
      {/* <PixelSnow 
      className='dept-snow-bg' 
      variant='round'
      speed={4}
      density={0.25}
      color='#fff'
      brightness={3}
      direction={300}
      /> */}
      <section className="dept-hero">
        <div className="dept-hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="dept-hero-overlay" />
        <div className="dept-hero-content">
          <div className="dept-hero-badge">
            <span className="dept-hero-icon">{icon}</span>
            <span className="dept-hero-label">{name}</span>
          </div>
          <h1 className="dept-hero-title">电子信息协会{name}</h1>
          <nav className="dept-breadcrumb">
            <Link to="/">首页</Link>
            <RightOutlined />
            <span>{name}简介</span>
          </nav>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={i} className={`dept-section-body ${i % 2 === 1 ? 'dept-section-alt' : ''}`}>
          <div className="dept-section-inner">
            <div className={`dept-section-grid ${section.reverse ? 'dept-reverse' : ''}`}>
              <div className="dept-section-image">
                <img src={section.image} alt={section.title} loading="lazy" />
              </div>
              <div className="dept-section-text">
                <span className="dept-section-tag" style={{ color: section.accent }}>
                  {section.subtitle}
                </span>
                <h2 className="dept-section-heading" style={{color:"black"}}>{section.title}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="dept-section-p">{p}</p>
                ))}
                <Link to={user ? '/profile' : '/register'}>
                  <Button
                    type="primary"
                    size="large"
                    className="dept-cta-btn"
                  >
                    {section.ctaText}
                    <RightOutlined />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="dept-cta-section">
        <div className="dept-cta-card">
          <div className="dept-cta-bar" />
          <h2 className="dept-cta-title">{ctaTitle}</h2>
          <p className="dept-cta-desc">{ctaDesc}</p>
          <Link to={"/reexam"}>
            <Button type="primary" size="large" className="dept-cta-btn">
              立即加入
              <RightOutlined />
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
