import { useState } from 'react'
import { Typography, Modal } from 'antd'
import {
    RightOutlined,
    TrophyOutlined,
    ThunderboltOutlined,
    CodeOutlined, ToolOutlined,
    ExperimentOutlined,
    BulbOutlined,
    CalendarOutlined,
    EnvironmentOutlined,
    InfoCircleOutlined,
    PlayCircleOutlined,
    FileSyncOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import heroBg from '../assets/9.jpg'

interface EventDetail {
    time: string
    location: string
    format: string
    overview: string
    highlights?: string[]
    img:string
}

interface EventItem {
    key: string
    icon: React.ReactNode
    title: string
    desc: string
    color: string
    detail?: EventDetail
}

const internalEvents: EventItem[] = [
    {
    key: 'c-lang',
    icon: <CodeOutlined />,
    title: 'C语言程序设计比赛',
    desc: '面向全体协会成员的C语言编程竞赛，考察基础语法、算法思维与代码调试能力，是软件方向的经典赛事。',
    color: '#00d4ff',
    detail: {
        time: '每年秋季学期科技文化节时期',
        location: '烟台大学计算机中心机房',
        format: '个人赛，限时2.5小时，在线OJ平台提交代码，实时评测',
        overview: 'C语言程序设计比赛是协会软件方向的传统赛事，旨在检验和提升协会成员的C语言编程能力。比赛题目涵盖基础语法、指针操作、数据结构与简单算法，难度循序渐进，适合不同水平的同学参与。成绩优异者可获得协会颁发的荣誉证书及奖品。',
        highlights: ['在线OJ实时评测', '题目分基础组和提高组', '赛后题目讲解与答疑'],
        img:'',
        },
    },
    {
    key: 'solder-adv',
    icon: <ToolOutlined />,
    title: '焊接比赛 · 高级组',
    desc: '面向有一定硬件基础的同学，要求在规定时间内完成复杂电路板的焊接与调试，考核焊接工艺与故障排查能力。',
    color: '#ff6b35',
    detail: {
        time: '每年秋季学期科技文化节时期',
        location: '烟台大学化学馆北109协会实验室',
        format: '个人赛，限时3小时，提供电路原理图与元器件，现场焊接调试',
        overview: '高级组焊接比赛面向已完成基础焊接培训、具备一定硬件设计能力的协会成员。参赛者需根据提供的电路原理图，独立完成电路板的焊接、通电测试与故障排查。比赛重点考察焊接工艺质量、电路分析能力以及问题解决效率。',
        highlights: ['多层板焊接', '含贴片元件', '需自行排除故障'],
        img:'',
        },
    },
    {
    key: 'solder-basic',
    icon: <ToolOutlined />,
    title: '焊接比赛 · 初级组',
    desc: '面向零基础新成员，从认识工具开始，逐步掌握基础焊接技巧，完成入门级电路板的焊接任务。',
    color: '#ff6b35',
    detail: {
        time: '每年秋季学期科技文化节时期',
        location: '烟台大学化学馆北109协会实验室',
        format: '个人赛，限时2小时，提供焊接套件与指导手册',
        overview: '初级组焊接比赛专为刚加入协会的新成员设计，目的是帮助大家快速掌握焊接基础技能。比赛前会安排一次培训课，讲解电烙铁使用、焊锡技巧与安全注意事项。比赛当天，参赛者需在规定时间内完成一套入门级电子套件的焊接，以功能完整性和焊接美观度为评分标准。',
        highlights: ['赛前提供培训', '零基础友好', '套件完成后可带走'],
        img:''
        },
    },
]

const externalEvents: EventItem[] = [
{
    key: 'opto',
    icon: <BulbOutlined />,
    title: '全国大学生光电设计竞赛',
    desc: '由中国光学学会主办，涉及光学、电子、机械、计算机等多学科交叉，协会多次在该赛事中斩获国家级奖项。',
    color: '#00e676',
},
{
    key: 'ic',
    icon: <ExperimentOutlined />,
    title: '全国大学生集成电路创新创业大赛',
    desc: '工信部人才交流中心主办，涵盖芯片设计、FPGA开发、半导体测试等方向，协会成员在历届比赛中表现优异。',
    color: '#b44dff',
},
{
    key: 'ican',
    icon: <ThunderboltOutlined />,
    title: 'iCAN全国大学生创新创业大赛',
    desc: '面向全国大学生的顶级创新创业赛事，协会多个项目在此赛事中荣获省级与国家级奖项。',
    color: '#00d4ff',
},
{
    key: 'challenge',
    icon: <TrophyOutlined />,
    title: '"挑战杯"全国大学生课外学术科技作品竞赛',
    desc: '全国最具影响力的大学生科技创新赛事之一，协会在哲学社科、科技发明等类别中均有获奖。',
    color: '#ff6b35',
},
{
    key:'flush',
    icon:<FileSyncOutlined />,
    title:'嵌入式芯片与设计大赛',
    desc:'考察学生在数字系统设计，尤其是可编程逻辑器件应用领域的创新实践能力，协会成员曾获多个国家级奖项',
    color:'#004abb',
},
]

export default function Completition() {
    const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)

    return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
    
      {/* Hero */}
        <div
        style={{
            position: 'relative',
            height: '40vh',
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}
        >
        <div
            style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        />
        <div
            style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.75))',
            }}
        />
        <div style={{ position: 'relative', textAlign: 'center', color: '#fff' }}>
            <Typography.Title level={1} style={{ color: '#fff', margin: 0, fontSize: 'clamp(32px, 5vw, 48px)' }}>
            竞赛与活动
            </Typography.Title>
            <Typography.Text style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Link to="/" style={{ color: 'inherit' }}>首页</Link> / 竞赛与活动
            </Typography.Text>
            </div>
        </div>

        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 24px 80px' }}>
        {/* 协会举办的比赛和活动 */}
            <section style={{ marginBottom: 64 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <TrophyOutlined style={{ fontSize: 24, color: '#00d4ff' }} />
            <Typography.Title level={2} style={{ margin: 0, color: 'rgba(0,0,0,0.85)' }}>
                协会举办的比赛和活动
            </Typography.Title></div>
            <Typography.Paragraph style={{ color: 'rgba(0,0,0,0.45)', fontSize: 15, marginBottom: 28 }}>
            协会定期组织面向全体成员的内部赛事，以赛促学，提升实践能力
            </Typography.Paragraph>
            <div className="competition-grid">
            {internalEvents.map((evt) => (
                <div key={evt.key} className="competition-card clickable" onClick={() => setSelectedEvent(evt)} style={{ '--card-accent': evt.color } as React.CSSProperties}>
                <div className="comp-icon" style={{ background: `${evt.color}15`, color: evt.color }}>
                    {evt.icon}
                </div>
                <h3 className="comp-title">{evt.title}</h3>
                <p className="comp-desc">{evt.desc}</p>
                <span className="comp-more">查看详情 <RightOutlined /></span>
                </div>
            ))}
            </div>
            </section>

        {/* 协会成员参加的竞赛 */}
        <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <ThunderboltOutlined style={{ fontSize: 24, color: '#b44dff' }} />
            <Typography.Title level={2} style={{ margin: 0, color: 'rgba(0,0,0,0.85)' }}>
                协会成员参加的竞赛
            </Typography.Title>
            </div>
            <Typography.Paragraph style={{ color: 'rgba(0,0,0,0.45)', fontSize: 15, marginBottom: 28 }}>
            协会鼓励并组织成员参与各类国家级、省级学科竞赛，屡获佳绩
            </Typography.Paragraph>
            <div className="competition-grid">
            {externalEvents.map((evt) => (
                <div key={evt.key} className="competition-card" style={{ '--card-accent': evt.color } as React.CSSProperties}>
                <div className="comp-icon" style={{ background: `${evt.color}15`, color: evt.color }}>
                    {evt.icon}
                </div>
                <h3 className="comp-title">{evt.title}</h3>
                <p className="comp-desc">{evt.desc}</p>
                </div>
            ))}
            </div>
        </section>
    </div>

      {/* 详情弹窗 */}
    <Modal
        title={null}
        open={!!selectedEvent}
        onCancel={() => setSelectedEvent(null)}
        footer={null}
        width={680}
        style={{ top: 40 }}
        styles={{ body: { padding: 0 } }}
    >
        {selectedEvent?.detail && (
        <div className="event-detail">
            {/* 顶部色条 */}
            <div className="detail-bar" style={{ background: `linear-gradient(90deg, ${selectedEvent.color}, transparent)` }} />

            {/* 标题区 */}
            <div className="detail-header" style={{ borderBottom: `3px solid ${selectedEvent.color}20` }}>
            <div className="detail-icon" style={{ background: `${selectedEvent.color}15`, color: selectedEvent.color }}>
                {selectedEvent.icon}
            </div>
            <div>
                <h2 className="detail-title">{selectedEvent.title}</h2>
                <p className="detail-subtitle">{selectedEvent.desc}</p>
            </div>
            </div>

            <div className="detail-body">
              {/* 图片占位 */}
            <div className="detail-image-placeholder">
                <img src={selectedEvent.detail?.img} alt="" />
            </div>

              {/* 基本信息 */}
            <div className="detail-info-grid">
                <div className="detail-info-item">
                <CalendarOutlined style={{ color: selectedEvent.color }} />
                <div>
                    <span className="info-label">比赛时间</span>
                    <span className="info-value">{selectedEvent.detail.time}</span>
                </div>
                </div>
                <div className="detail-info-item">
                <EnvironmentOutlined style={{ color: selectedEvent.color }} />
                <div>
                    <span className="info-label">比赛地点</span>
                    <span className="info-value">{selectedEvent.detail.location}</span>
                </div>
                </div>
                <div className="detail-info-item">
                <PlayCircleOutlined style={{ color: selectedEvent.color }} />
                <div>
                    <span className="info-label">比赛方式</span>
                    <span className="info-value">{selectedEvent.detail.format}</span>
                </div>
                </div>
            </div>

              {/* 总体介绍 */}
            <div className="detail-section">
                <div className="detail-section-header">
                <InfoCircleOutlined style={{ color: selectedEvent.color }} />
                <h3>总体介绍</h3>
                </div>
                <p className="detail-text">{selectedEvent.detail.overview}</p>
            </div>

              {/* 亮点 */}
            {selectedEvent.detail.highlights && (
                <div className="detail-section">
                <div className="detail-section-header">
                    <TrophyOutlined style={{ color: selectedEvent.color }} />
                    <h3>比赛亮点</h3>
                </div>
                <div className="detail-tags">
                    {selectedEvent.detail.highlights.map((h, i) => (
                    <span key={i} className="detail-tag" style={{ background: `${selectedEvent.color}10`, color: selectedEvent.color, border: `1px solid ${selectedEvent.color}30` }}>
                        {h}
                    </span>
                    ))}
                </div>
                </div>
            )}
            </div>
        </div>
        )}
    </Modal>

    <style>{`
        .competition-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }
        .competition-card {
            background: #fff;
            border-radius: 16px;
            padding: 28px;
            border: 1px solid rgba(0,0,0,0.08);
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
            transition: all 0.3s ease;
        }
        .competition-card:hover {
            transform: translateY(-4px);
            border-color: var(--card-accent, #00d4ff);
            box-shadow: 0 12px 40px rgba(0,0,0,0.1);
        }
        .competition-card.clickable {
            cursor: pointer;
        }
        .comp-icon {
            width: 48px;
            height: 48px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            margin-bottom: 16px;
        }
        .comp-title {
            font-size: 17px;
            font-weight: 700;
            color: rgba(0,0,0,0.85);
            margin: 0 0 10px;
        }
        .comp-desc {
            font-size: 14px;
            line-height: 1.7;
            color: rgba(0,0,0,0.45);
            margin: 0 0 12px;
        }
        .comp-more {
            font-size: 13px;
            font-weight: 600;
            color: var(--card-accent, #00d4ff);
            display: inline-flex;
            align-items: center;
            gap: 4px;
            transition: gap 0.2s;
        }
        .competition-card:hover .comp-more {
            gap: 8px;
        }

        /* 详情弹窗 */
        .event-detail {
            border-radius: 16px;
            overflow: hidden;
        }
        .detail-bar {
            height: 4px;
        }
        .detail-header {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 28px 28px 24px;
        }
        .detail-icon {
            width: 52px;
            height: 52px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            flex-shrink: 0;
        }
        .detail-title {
            font-size: 20px;
            font-weight: 700;
            color: rgba(0,0,0,0.85);
            margin: 0 0 4px;
        }
        .detail-subtitle {
            font-size: 13px;
            color: rgba(0,0,0,0.45);
            margin: 0;
            line-height: 1.5;
        }
        .detail-body {
            padding: 0 28px 28px;
        }
        .detail-image-placeholder {
            width: 100%;
            height: 200px;
            border-radius: 12px;
            border: 2px dashed rgba(0,0,0,0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            font-size: 14px;
            background: rgba(0,0,0,0.02);
        }
        .detail-info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 24px;
        }
        .detail-info-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 14px;
            background: rgba(0,0,0,0.02);
            border-radius: 12px;
            font-size: 14px;
        }
        .detail-info-item:last-child {
            grid-column: span 2;
        }
        .detail-info-item .anticon {
            font-size: 18px;
            margin-top: 2px;
            flex-shrink: 0;
        }
        .info-label {
            display: block;
            font-size: 11px;
            font-weight: 600;
            color: rgba(0,0,0,0.35);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 2px;
        }
        .info-value {
            display: block;
            color: rgba(0,0,0,0.85);
            line-height: 1.4;
        }
        .detail-section {
            margin-bottom: 20px;
        }
        .detail-section-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
        }
        .detail-section-header .anticon {
            font-size: 17px;
        }
        .detail-section-header h3 {
            font-size: 16px;
            font-weight: 700;
            color: rgba(0,0,0,0.85);
            margin: 0;
        }
        .detail-text {
            font-size: 14px;
            line-height: 1.8;
            color: rgba(0,0,0,0.6);
            margin: 0;
        }
        .detail-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .detail-tag {
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 500;
        }
        @media (max-width: 640px) {
            .competition-grid {
            grid-template-columns: 1fr;
        }
        .detail-info-grid {
            grid-template-columns: 1fr;
        }
        .detail-info-item:last-child {
            grid-column: span 1;
        }
        }
    `}</style>
    </div>
    )
}
