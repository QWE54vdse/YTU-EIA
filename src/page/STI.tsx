import { Typography, Button, Card, Row, Col, Space } from 'antd'
import { ArrowUpOutlined, DownloadOutlined, RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import heroBg from '../assets/9.jpg'

const sections = [
  {
    id: 'software',
    title: 'STI小组 - 软件方向',
    content: (
      <>
        <Typography.Paragraph>
          对于物电院的要求是首先学完51单片机，学完51单片机后可以根据自己的学习情况再细分方向，愿意继续学单片机的可以学习STM32单片机，认为不适合学单片机的可以学习其他方向：比如深度学习首先学习Python，学习完Python基础，再学习机器学习的内容，熟练使用各种模型。学习单片机是一种很好的入门电子信息专业的方法，建议电子信息专业的STI都首选单片机，学习单片机有助于了解模电、数电、信号与系统等专业课，对以后的专业课学习很有帮助。
        </Typography.Paragraph>
        <Typography.Paragraph>
          建议学习路线是先学习51单片机，再学习STM32，如果会Python语法也可以学ESP32单片机，各类单片机的特点可以自己了解。对于其他院可以按照上面的计划也可以结合自己的专业找学长商榷学习方向。
        </Typography.Paragraph>
        <Typography.Paragraph>
          学习深度学习可以接触到最近的科技，通过学习借鉴使用各种模型，提高你的内在功力，对你将来科研有所帮助，也能帮助你完成一些小的项目。
        </Typography.Paragraph>
        <div style={{ padding: 16, background: '#e6f4ff', borderRadius: 12, border: '1px solid #91caff' }}>
          <Typography.Text strong style={{ color: '#1677ff' }}>
            考核内容：基础算法题目，共四道题目，不限语言，时长两个小时，内容包括基础算法比如双指针、排序算法等。
          </Typography.Text>
        </div>
      </>
    ),
  },
  // {
  //   id: 'physics',
  //   title: 'STI小组 - 物理方向',
  //   content: (
  //     <>
  //       <Typography.Paragraph>
  //         STI物理方向主要针对CUPT全国大学生物理学术竞赛，全国大学生物理实验竞赛以及相关附属比赛进行培训，因此培训内容涵盖类科研的所有流程，包括理论推导、仿真验证、编程计算、实验设计、数据处理、报告撰写。考虑到每个人擅长的不同，在基础部分学习完成后深入可有三种方向深造：理论、实验与计算。
  //       </Typography.Paragraph>
  //       <Typography.Title level={4}>基础部分：</Typography.Title>
  //       <ul>
  //         <li>掌握普物体系的基本知识，具备初步对现象建立物理机理模型的能力。</li>
  //         <li>掌握知网数据库的使用方法，可以通过浏览阅读文献学习研究各种现象。</li>
  //         <li>具备一定的编程能力，可以不需要完全掌握代码，但需要了解最基本的编程逻辑以及能看懂代码（主要是MATLAB、Python、Mathematica）。</li>
  //         <li>了解实验设计的原则，能够安全地进行简单的实验操作。</li>
  //         <li>具备初步的论文写作能力，可以写出逻辑严谨、思路清晰的论文。</li>
  //       </ul>
  //       <Typography.Title level={4}>理论方向：</Typography.Title>
  //       <ul>
  //         <li>了解四大力学作为物理学基本的研究方法的核心思想，能够通过机理联想构建出合适的模型。</li>
  //         <li>能够在实验反馈中对模型提出修正项与优化。</li>
  //         <li>具备一定的数学基础，能够熟练地处理波动与力两种基本的物质与能量转换相关的计算。</li>
  //         <li>较真，能够提出模型不足、实验不足以及数据分析不足。</li>
  //       </ul>
  //       <Typography.Title level={4}>实验方向：</Typography.Title>
  //       <ul>
  //         <li>可以合理地设计实验流程，并在理论允许的情况下优化实验流程，以时间短成效快和数据有效性为原则。</li>
  //         <li>具备善用各种资源的能力，能够自己制作实验仪器。</li>
  //         <li>具备分析环境因素、系统误差的能力，及时纠正数据问题。</li>
  //         <li>需要具备一定的耐心与体力，能够坚持长时间不出错的实验。</li>
  //         <li>具备创新思路，利用已有设备对复杂实验情况进行变相简化。</li>
  //       </ul>
  //       <Typography.Title level={4}>计算方向：</Typography.Title>
  //       <ul>
  //         <li>掌握编程语言两种以上（MATLAB与Python，或Mathematica与Python），能够具备编写代码对模型进行解析解的能力。</li>
  //         <li>了解不同数值解的优劣性，熟练使用编程语言求解数值解。</li>
  //         <li>掌握导入、保存、导出数据等操作，可以设计各种可视化图像与界面。</li>
  //         <li>掌握串口通信的基本原理，能够使用CSDN等网站迅速掌握不同仪器的数据传输方法。</li>
  //         <li>能够使用Python的库进行数据分析并可视化，能够分析数据的问题，掌握如傅里叶变换等数据分析方法。</li>
  //         <li>掌握COMSOL等前沿仿真软件的使用方法，可以使用仿真进行数值模拟。</li>
  //       </ul>
  //       <div style={{ padding: 16, background: '#e6f4ff', borderRadius: 12, border: '1px solid #91caff' }}>
  //         <Typography.Text strong style={{ color: '#1677ff' }}>
  //           考核内容：普物知识摸底 / 数学能力摸底（考推导）/ 论文搜索能力与实验设计与写作能力 / 编程能力
  //         </Typography.Text>
  //       </div>
  //     </>
  //   ),
  // },
  {
    id: 'hardware',
    title: 'STI小组 - 硬件方向',
    content: (
      <>
        <Typography.Paragraph>
          硬件方向学习内容相对琐碎且复杂，涉及到非常庞大的知识量，基础理论知识难理解难消化，但循序渐进，终能有所成果。
        </Typography.Paragraph>
        <Typography.Title level={4}>理论部分：</Typography.Title>
        <ul>
          <li>《电路分析》中有关电路的基本概念和定律、电路分析基本方法和常用定理。</li>
          <li>《模拟电子技术基础》中有关基本运算电路、滤波电路、波形发生电路、A/D转换电路。</li>
          <li>《数字电子技术基础》中各种门电路、组合逻辑电路、各种触发器、时序逻辑电路。</li>
        </ul>
        <Typography.Title level={4}>实践部分：</Typography.Title>
        <ul>
          <li>学会运用Multisim软件对设计电路进行仿真。</li>
          <li>掌握各种仪器仪表的使用，能够熟练使用示波器，对波形进行调试，对信号进行分析。</li>
          <li>熟练掌握焊接技巧，学习使用洞洞板对设计电路进行实物焊接，掌握PCB打板流程以及PCB板实物焊接。</li>
          <li>学习使用嘉立创EDA、Altium Designer软件进行PCB设计。</li>
        </ul>
        <div style={{ padding: 16, background: '#e6f4ff', borderRadius: 12, border: '1px solid #91caff' }}>
          <Typography.Text strong style={{ color: '#1677ff' }}>
            考核内容：根据给定芯片手册和器材，进行电路设计和实物焊接，使电路达到指定要求。
          </Typography.Text>
        </div>
      </>
    ),
  },
]

const cardData = [
  { id: 'software', title: 'STI小组 - 软件方向', img: 'https://picsum.photos/seed/software/600/400' },
  { id: 'hardware', title: 'STI小组 - 硬件方向', img: 'https://picsum.photos/seed/hardware/600/400' },
  // { id: 'physics', title: 'STI小组 - 物理方向', img: 'https://picsum.photos/seed/physics/600/400' },
]

export default function STI() {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      <style>{`
  .sti-card {
    background: rgba(255,255,255,0.02) !important;
    backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(0,240,255,0.12) !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3) !important;
    border-radius: 16px !important;
  }
  .sti-card .ant-card-head {
    border-bottom: 1px solid rgba(255,255,255,0.06) !important;
  }
`}</style>
      {/* Hero */}
      <div
        style={{
          position: 'relative',
          height: '50vh',
          minHeight: 360,
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
            background: 'linear-gradient(180deg, rgba(7,11,20,0.7), rgba(11,17,32,0.8))',
          }}
        />
        <div style={{ position: 'relative', textAlign: 'center', color: '#fff' }}>
          <Typography.Title level={1} style={{ color: '#fff', margin: 0, fontSize: 'clamp(36px, 5vw, 56px)' }}>
            STI
          </Typography.Title>
          <Typography.Text style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Link to="/" style={{ color: 'inherit' }}>首页</Link> / join us
          </Typography.Text>
        </div>
      </div>

      {/* Introduction */}
      <div style={{ maxWidth: 800, margin: '48px auto', padding: '0 24px' }}>
        <Card className="sti-card" style={{ textAlign: 'center', borderRadius: 16 }}>
          <Typography.Title level={2}>STI小组介绍</Typography.Title>
          <Typography.Paragraph style={{ fontSize: 16 }}>
            STI的原含义是Science Technology Intelligence，是18级第一届STI学长学姐们创造出的含义，但是每个STI小组的成员心中可以自由理解。STI小组代表电协的精英力量，是电协在专业技能上的门面。STI小组应当有时刻增进自己，彼此扶持成长的意识；应当有克服难题，坚持不懈的能力；应当有共同进退，积极进取的精神。
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: 16 }}>
            STI小组拥有在电协109与112留座的权益，同时优先享有协会的各种培养资源以及更多的机会，同时STI小组的成员也需要在学习竞赛与科研知识上受到规管，需严格执行培训计划与留座制度。一下是2024-2025学年STI各个方向介绍与考核内容：
          </Typography.Paragraph>
          <Space style={{ marginTop: 16 }}>
            <Button type="primary" icon={<DownloadOutlined />} href="#">
              电协留座条例2024版
            </Button>
            <Button icon={<RightOutlined />} href="/about">
              返回
            </Button>
          </Space>
        </Card>
      </div>

      {/* Cards */}
      <div style={{ maxWidth: 960, margin: '48px auto', padding: '0 24px' }}>
        <Row gutter={[24, 24]}>
          {cardData.map((card) => (
            <Col xs={24} md={12} key={card.id}>
              <a href={`#${card.id}`} style={{ textDecoration: 'none' }}>
                <Card
                  className="sti-card"
                  hoverable
                  cover={
                    <div
                      style={{
                        height: 180,
                        background: `url(${card.img}) center/cover`,
                        borderRadius: '16px 16px 0 0',
                      }}
                    />
                  }
                  style={{ borderRadius: 16, overflow: 'hidden' }}
                >
                  <Card.Meta
                    title={card.title}
                    description={<span style={{ color: '#1677ff' }}>阅读更多 <RightOutlined /></span>}
                  />
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </div>

      {/* Detail Sections */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>
        {sections.map((sec) => (
          <div key={sec.id} id={sec.id} style={{ scrollMarginTop: 80, marginBottom: 48 }}>
            <Card className="sti-card" style={{ borderRadius: 16 }}>
              <Typography.Title level={3}>{sec.title}</Typography.Title>
              {sec.content}
              <Button
                type="link"
                icon={<ArrowUpOutlined />}
                href="#main-content"
                style={{ marginTop: 16, padding: 0 }}
              >
                返回顶部
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}


