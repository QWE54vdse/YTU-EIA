import { useEffect, useState } from 'react'
import { Layout, Menu, Button } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'
//import { useAuth } from '../context/AuthContext'
import xiehui from '../assets/xiehuibiao.png'


const { Header, Content, Footer } = Layout

let navItems = [
  {
    key: 'dept-group',
    label: '部门设置 ',
    children: [
      { key: '/software', label: <Link to="/software">软件部</Link> },
      { key: '/hardware', label: <Link to="/hardware">硬件部</Link> },
      { key: '/media', label: <Link to="/media">传媒部</Link> },
    ],
  },
  {
    key: 'resource-group',
    label: '资源',
    children: [
      { key: '/course-materials', label: <Link to="/course-materials">专业课资料</Link> },
      { key: '/dept-materials', label: <Link to="/dept-materials">各部门资料</Link> },
      { key: '/activity-materials', label: <Link to="/activity-materials">活动资料</Link> },
      { key: '/competition-materials', label: <Link to="/competition-materials">竞赛资料</Link> },
    ],
  },
  { key: '#', label: <a href="#">交流合作</a> },
  { key: '/about', label: <Link to="/about">走进电协</Link> },
]

// 进入子页面时自动展开父菜单
const parentMap: Record<string, string> = {
  '/software': 'dept-group',
  '/hardware': 'dept-group',
  '/media': 'dept-group',
  '/course-materials': 'resource-group',
  '/dept-materials': 'resource-group',
  '/activity-materials': 'resource-group',
  '/competition-materials': 'resource-group',
}

export default function AppLayout() {
  // const { user } = useAuth()
  const location = useLocation()
  // const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>([])

  useEffect(() => {
    if (!isHome) return
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    const parent = parentMap[location.pathname]
    if (parent) {
      setOpenKeys([parent])
    }
  }, [location.pathname])

  const selectedKeys = location.pathname === '/' ? [] : [location.pathname]

  const headerTransparent = isHome && !scrolled

  return (
    <Layout style={{
      minHeight: '100vh',
      background: '#f5f5f5',
    }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          position: isHome ? 'fixed' : 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: headerTransparent
            ? 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, transparent 100%)'
            : 'rgba(255,255,255,0.95)',
          backdropFilter: headerTransparent ? 'none' : 'blur(12px)',
          borderBottom: headerTransparent ? 'none' : '1px solid rgba(0,0,0,0.06)',
          transition: 'all 0.3s ease',
          height: 64,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Link to="" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(0,0,0,0.85)', fontSize: 18, fontWeight: 700, whiteSpace: 'nowrap', letterSpacing: '0.5px' }}>
            <img src={xiehui} alt="协会标志" style={{ height: 36, width: 36, objectFit: 'contain' }} />
            烟台大学电子信息协会
          </Link>
          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onOpenChange={setOpenKeys}
            items={navItems}
            style={{
              flex: 1,
              minWidth: 0,
              background: 'transparent',
              borderBottom: 'none',
              lineHeight: '64px',
            }}
          />
        </div>
      </Header>
      <Content style={isHome ? { padding: 0 } : {
        padding: '24px 48px',
        background: '#f5f5f5',
        minHeight: 'calc(100vh - 134px)',
      }}>
        <Outlet />
      </Content>
      {<Footer style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src={xiehui} alt="协会标志" style={{ height: 36, width: 36, objectFit: 'contain' }} />
              <span style={{ fontWeight: 600, color: 'rgba(0,0,0,0.85)' }}>烟台大学电子信息协会</span>
            </div>
            <div style={{ textAlign: 'end', fontSize: 12, color: 'rgba(0,0,0,0.45)' }}>
              <p style={{ margin: 0 }}>© 2026年7月维护更新</p>
              <p style={{ margin: 0 }}>联系地址: 烟台大学化学馆北109/北112</p>
              <p style={{ margin: 0 }}>官方QQ: 3300200063</p>
            </div>
          </div>
        </Footer>}
    </Layout>
  )
}
