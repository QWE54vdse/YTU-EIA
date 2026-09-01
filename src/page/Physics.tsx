import { ExperimentOutlined } from '@ant-design/icons'
import DepartmentTemplate from '../components/DepartmentTemplate'
import heroBg from '../assets/B.jpg'
import img1 from '../assets/about.jpg'
import img2 from '../assets/111.jpg'

const accent = '#00e676'

export default function Physics() {
  return (
    <DepartmentTemplate
      name="物理部"
      accent={accent}
      icon={<ExperimentOutlined />}
      heroBg={heroBg}
      sections={[
        {
          title: '物理部介绍',
          subtitle: '物理部',
          accent,
          image: img1,
          ctaText: '来加入物理部',
          paragraphs: [
            '物理部主要在于让同学们了解真正的物理，学习前人的智慧，知晓前沿物理的发展。培训内容包括近代物理学的两大支柱——量子力学与相对论的科普介绍，也包括基础内容的讲解。',
            '物理对数学的要求很高，我们也会对数学知识进行补充。前沿物理的计算更多依赖于计算机程序（MATLAB、Mathematica等），我们也会培训数学计算软件的使用，以及论文编辑软件如LaTeX。',
          ],
        },
        {
          title: '培训内容',
          subtitle: '物理部',
          accent,
          image: img2,
          ctaText: '来加入物理部',
          paragraphs: [
            '物理理论与数学基础：深入浅出地介绍量子力学与相对论等近代物理学两大支柱，同时补充必要的数学知识，帮助同学们建立扎实的物理理论框架。',
            '科学计算软件：培训MATLAB、Mathematica等数学计算软件的使用，让计算机成为探索前沿物理的强大工具。',
            '论文编辑与竞赛：教授LaTeX等论文编辑软件（理工科研究生必备技能），同时组织参与各类数学物理竞赛，副部长基本均获有省级或以上奖项。',
          ],
        },
      ]}
      ctaTitle="加入物理部"
      ctaDesc="探索万物之理，从经典物理到前沿量子世界。加入物理部，与志同道合的伙伴一起，在科学的世界里追寻真理的光芒。"
    />
  )
}
