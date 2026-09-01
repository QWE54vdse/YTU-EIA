import { ToolOutlined } from '@ant-design/icons'
import DepartmentTemplate from '../components/DepartmentTemplate'
import heroBg from '../assets/8.jpg'


const accent = '#ff6b35'

export default function Hardware() {
  return (
    <DepartmentTemplate
      name="硬件部"
      accent={accent}
      icon={<ToolOutlined />}
      heroBg={heroBg}
      sections={[
        {
          title: '硬件部介绍',
          subtitle: '硬件部',
          accent,
          image: '',
          ctaText: '来加入硬件部',
          paragraphs: [
            '电子信息协会硬件部，致力于为对硬件满怀热忱的同学，构建专业的实践与成长平台。加入我们，从理论到实操，一步步解锁电子硬件的奥秘，在电子技术的世界里稳步成长！',
            '依托科学且系统的培训体系，从洞洞板焊接、电路图讲解等基础实操内容，到Multisim仿真、Altium Designer与立创EDA设计，再延伸到51单片机系统、嘉立创打板等进阶环节，全方位传授电子硬件知识与技能。',
          ],
        },
        {
          title: '培训体系',
          subtitle: '硬件部',
          accent,
          image: '',
          ctaText: '来加入硬件部',
          paragraphs: [
            '基础实操阶段：从洞洞板焊接、电路图识读与讲解等基础技能入手，掌握电子硬件的基本功，建立扎实的实操能力。',
            '进阶设计阶段：学习Multisim电路仿真、Altium Designer原理图与PCB设计、立创EDA等专业工具，完成从电路设计到仿真的完整流程。',
            '项目实战阶段：深入51单片机系统开发，参与嘉立创打板等实际项目，将设计变为真实的硬件产品。',
          ],
        },
      ]}
      ctaTitle="加入硬件部"
      ctaDesc="无论你是零基础的电子爱好者，还是已有一定基础想深入学习的同学，硬件部都为你提供从入门到进阶的完整培训体系。让我们一起探索电子世界的无限可能。"
    />
  )
}
