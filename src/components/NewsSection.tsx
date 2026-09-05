import { useState } from 'react'
import { Modal } from 'antd'
import { FileTextOutlined, RightOutlined } from '@ant-design/icons'
import FadeContent from './animations/FadeContent'

interface NewsDetail {
  content: string[]
}

interface NewsItem {
  id: number
  date: string
  category: string
  color: string
  title: string
  excerpt: string
  detail: NewsDetail
}

const colors= {
  '竞赛': '#ff6b35',
  '公告': '#00d4ff',
  '招新': '#00e676',
}

const newsList: NewsItem[] = [
  {
    id: 1,
    date: '2026-07-20',
    category: '竞赛',
    color: colors['竞赛'],
    title: '协会在第十六届 iCAN 大学生创新创业大赛中荣获全国一等奖',
    excerpt: '经过数月备战,我协会参赛团队在 iCAN 大赛中斩获国家级一等奖,实现了历史性突破。',
    detail: {
      content: [
        '近日,第十六届 iCAN 大学生创新创业大赛全国总决赛圆满落幕。烟台大学电子信息协会参赛团队凭借扎实的技术功底与出色的现场答辩,从全国数百支队伍中脱颖而出,一举斩获全国一等奖,实现了协会在该赛事上的历史性突破。',
        '本次获奖项目由协会软件部与硬件部成员联合开发。从最初的创意构思,到技术选型与方案论证,再到数十轮的迭代调试,团队成员在指导老师的帮助下历时数月精心打磨,最终以近乎完美的呈现赢得评委一致认可。',
        '协会始终坚持以赛促学的理念,鼓励成员将课堂所学转化为创新实践。此次获奖既是对团队努力的肯定,也将激励更多成员投身科技创新,再创佳绩。',
      ],
    },
  },
  {
    id: 3,
    date: '2026-06-18',
    category: '公告',
    color: colors['公告'],
    title: '软件部前端技术分享会圆满结束',
    excerpt: '软件部以 React + Vite 为主题分享了现代前端工程实践,现场交流氛围热烈。',
    detail: {
      content: [
        '6 月 18 日晚,软件部在化学馆北 109 教室成功举办了以「现代前端工程实践」为主题的技术分享会,吸引了协会众多成员到场参与。',
        '分享会围绕 React 组件设计与状态管理、Vite 构建优化、代码规范与工程化实践展开,主讲人结合协会实际项目案例进行演示,现场同学积极提问,交流氛围十分热烈。',
        '软件部后续还将定期举办系列技术分享会,欢迎对前端开发感兴趣的同学们持续关注。',
      ],
    },
  },
  {
    id: 4,
    date: '2026-05-28',
    category: '招新',
    color:colors['招新'],
    title: '春季招新正式开始,欢迎加入电协大家庭',
    excerpt: '无论你是编程新手还是硬件发烧友,电子信息协会都期待你的到来。',
    detail: {
      content: [
        '烟台大学电子信息协会 2026 秋季学期招新正式启动!无论你是编程零基础的新同学,还是对硬件、传媒充满热情的爱好者,这里都有属于你的位置。',
        '协会下设软件部、硬件部、传媒部,为成员提供系统的技术培训、丰富的实践项目与广阔的竞赛平台。加入我们,你将收获技能、伙伴与成长。',
        '报名方式:填写招新报名表交到化院北109或112、加入官方招新咨询群 3300200063,后续面试安排将通过官方渠道发布,请同学们留意通知。',
      ],
    },
  },
  {
    id: 2,
    date: '2026-05-10',
    category: '竞赛',
    color: colors['竞赛'],
    title: '协会在全国大学生集成电路创新创业竞赛中荣获华北赛区全国二等奖',
    excerpt: '经过激烈角逐,协会参赛团队在省赛中脱颖而出,为协会赢得荣誉。',
    detail: {
      content: [
        '近日,全国大学生集成电路创新创业竞赛省级决赛圆满落幕。烟台大学电子信息协会参赛团队凭借扎实的技术功底与创新设计,在众多参赛队伍中脱颖而出,荣获省级一等奖。',
        '本次获奖项目由协会硬件部成员主导开发,从电路设计到软件调试,团队成员历时数月精心打磨,最终以稳定的性能和创新的功能赢得评委一致认可。',
        '协会始终坚持以赛促学的理念,鼓励成员将课堂所学转化为实践能力。此次获奖不仅是对团队努力的肯定,也将激励更多成员投身科技创新,再创佳绩。',
      ],
    },
  }
]

export default function NewsSection() {
  const [selected, setSelected] = useState<NewsItem | null>(null)

  return (
    <section className="news-section">
      <div className="section-inner">
        <FadeContent blur>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-tag">最新动态</span>
            <h2 className="section-title">新闻公告</h2>
          </div>
        </FadeContent>

        <div className="news-grid">
          {newsList.map((news, i) => (
            <FadeContent key={news.id} blur duration={900} delay={i * 150} threshold={0.15}>
              <article className="news-card clickable" onClick={() => setSelected(news)}>
                <div className="news-date">
                  <span className="news-date-day">{news.date.slice(8)}</span>
                  <span className="news-date-month">{news.date.slice(5, 7)}月</span>
                </div>
                <div className="news-body">
                  <span
                    className="news-cat"
                    style={{ color: news.color, background: `${news.color}1a` }}
                  >
                    {news.category}
                  </span>
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-excerpt">{news.excerpt}</p>
                  <span className="news-more">
                    阅读全文 <RightOutlined />
                  </span>
                </div>
              </article>
            </FadeContent>
          ))}
        </div>
      </div>

      <Modal
        title={null}
        open={!!selected}
        onCancel={() => setSelected(null)}
        footer={null}
        width={680}
        style={{ top: 40 }}
        styles={{ body: { padding: 0 } }}
      >
        {selected && (
          <div className="news-detail">
            <div
              className="news-detail-bar"
              style={{ background: `linear-gradient(90deg, ${selected.color}, transparent)` }}
            />
            <div className="news-detail-header" style={{ borderBottom: `3px solid ${selected.color}20` }}>
              <div
                className="news-detail-icon"
                style={{ background: `${selected.color}15`, color: selected.color }}
              >
                <FileTextOutlined />
              </div>
              <div>
                <div className="news-detail-meta">
                  <span
                    className="news-cat"
                    style={{ color: selected.color, background: `${selected.color}1a` }}
                  >
                    {selected.category}
                  </span>
                  <span className="news-detail-date">{selected.date}</span>
                </div>
                <h2 className="news-detail-title">{selected.title}</h2>
              </div>
            </div>
            <div className="news-detail-body">
              {selected.detail.content.map((p, i) => (
                <p key={i} className="news-detail-para">{p}</p>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
