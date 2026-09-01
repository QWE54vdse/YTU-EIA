import { CodeOutlined } from '@ant-design/icons'
import DepartmentTemplate from '../components/DepartmentTemplate'
import heroBg from '../assets/9.jpg'


const accent = '#00F0FF'

export default function Software() {
  return (
    <DepartmentTemplate
      name="软件部"
      accent={accent}
      icon={<CodeOutlined />}
      heroBg={heroBg}
      sections={[
        {
          title: '软件部介绍',
          subtitle: '软件部',
          accent,
          image: '',
          ctaText: '来加入软件部',
          paragraphs: [
            '软件部主要是基于各种编程语言，通过计算机程序语言的编写实现各种功能。软件部有两个学习方向：嵌入式软件方向和人工智能方向。',
            '嵌入式软件方向中，单片机可以看作为一个微型系统，一般通过C语言编写，可以实现流水灯、日历、简易计算器等小项目，也可实现小车、无人机等大型项目。',
            '人工智能方向基于Python语言构建神经网络。无论是ChatGPT还是各类视觉识别工程，亦或是手机上的对话AI，都以机器学习算法为底层逻辑。',
          ],
        },
        {
          title: '学习方向',
          subtitle: '软件部',
          accent,
          image: '',
          ctaText: '来加入软件部',
          paragraphs: [
            '嵌入式软件方向：单片机作为一个微型计算机系统，通过C语言进行编程开发。从基础的流水灯、日历、简易计算器等入门项目，到智能小车、无人机等复杂系统，逐步深入掌握嵌入式开发的完整技能栈。',
            '人工智能方向：基于Python语言构建神经网络模型。从机器学习基础算法到深度学习框架应用，涵盖计算机视觉、自然语言处理等前沿领域。无论是ChatGPT等大语言模型，还是各类视觉识别系统，都以机器学习为底层逻辑。',
          ],
        },
      ]}
      ctaTitle="加入软件部"
      ctaDesc="无论你是对嵌入式开发充满好奇，还是希望探索人工智能的奥秘，软件部都为你提供系统的培训和实践平台。从零基础到项目实战，让我们一同在代码的世界中成长。"
    />
  )
}
