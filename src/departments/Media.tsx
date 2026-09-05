import { PlayCircleOutlined } from '@ant-design/icons'
import DepartmentTemplate from '../components/DepartmentTemplate'
import heroBg from '../assets/R1.jpg'


const accent = '#b44dff'

export default function Media() {
  return (
    <DepartmentTemplate
      name="传媒部"
      accent={accent}
      icon={<PlayCircleOutlined />}
      heroBg={heroBg}
      sections={[
        {
          title: '传媒部纳新',
          subtitle: '传媒部',
          accent,
          image: '',
          ctaText: '来加入传媒部',
          paragraphs: [
            '这里是创意与技术碰撞的舞台！你将掌握PS设计海报展板、图片后期处理、PR剪辑活动视频、AE制作酷炫特效、AU处理音频，成为社团的"全能视觉担当"！',
            '从招新宣传到晚会包装，你的作品就是社团最亮眼的名片！零基础无忧，我们手把手教学，让你的创意落地生花。加入我们，用技术为社团发声，让每一次活动都与众不同！',
          ],
        },
        {
          title: '传媒部介绍',
          subtitle: '传媒部',
          accent,
          image: '',
          ctaText: '来加入传媒部',
          paragraphs: [
            '传媒部是一个融合数媒技术、创意设计、影视后期、2D与3D建模、网页设计以及调音制乐等技术的综合性部门。',
            '我们致力于运用先进技术和创意手段，提供从创意构思到技术实现的全方位解决方案，以满足多元化的传媒需求。通过精细化的制作流程和前沿的技术应用，我们旨在为每个项目注入独特的价值和无限的创意潜力。',
          ],
        },
      ]}
      ctaTitle="加入传媒部"
      ctaDesc="用镜头记录精彩，用设计传递温度。加入传媒部，让你的创意在每一次活动中绽放，用技术为社团发出最响亮的声音。"
    />
  )
}
