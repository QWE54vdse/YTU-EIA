import { HashRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import AppLayout from './components/AppLayout'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './page/Login'
import Register from './page/Register'
import Profile from './page/Profile'
import Home from './page/Home'
import About from './page/About'
import Software from './departments/Software'
import Hardware from './departments/Hardware'
import Media from './departments/Media'
import Physics from './page/Physics'
import CourseMaterials from './resources/CourseMaterials'
import DeptMaterials from './resources/DeptMaterials'
import ActivityMaterials from './resources/ActivityMaterials'
import CompetitionMaterials from './resources/CompetitionMaterials'
import ReExam from './page/ReExam'
import STI from './page/STI'
import Completition from './page/Completition'

function App() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#00d4ff',
          colorBgContainer: '#ffffff',
          colorBorderSecondary: 'rgba(0,0,0,0.06)',
          borderRadius: 12,
          colorText: 'rgba(0,0,0,0.85)',
          colorTextSecondary: 'rgba(0,0,0,0.45)',
          colorBgElevated: '#ffffff',
          colorBgBase: '#f5f5f5',
        },
      }}>
      <HashRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/software" element={<Software />} />
            <Route path="/hardware" element={<Hardware />} />
            <Route path="/media" element={<Media />} />
            <Route path="/physics" element={<Physics />} />
            <Route path="/course-materials" element={<CourseMaterials />} />
            <Route path="/dept-materials" element={<DeptMaterials />} />
            <Route path="/activity-materials" element={<ActivityMaterials />} />
            <Route path="/competition-materials" element={<CompetitionMaterials />} />
            <Route path="/reexam" element={<ReExam />} />
            <Route path="/sti" element={<STI />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/completition' element={<Completition />} />
            <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute> } />
          </Route>
        </Routes>
      </HashRouter>
    </ConfigProvider>
  )
}

export default App
