import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { gsap } from 'gsap'
import './FadeContent.css'

interface FadeContentProps {
  children: ReactNode
  /** 淡入时是否带模糊→清晰效果 */
  blur?: boolean
  /** 动画时长(ms) */
  duration?: number
  /** 动画延迟(ms) */
  delay?: number
  /** IntersectionObserver 触发阈值 */
  threshold?: number
  /** 进入视口前的初始透明度 */
  initialOpacity?: number
  /** GSAP 缓动函数 */
  ease?: string
  /** 附加到容器的类名 */
  className?: string
}

export default function FadeContent({
  children,
  blur = false,
  duration = 1000,
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  ease = 'power4.out',
  className = '',
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  // 观察容器是否进入视口,进入后触发一次并解除观察
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  // 进入视口后用 GSAP 从初始态淡入到完全可见
  useEffect(() => {
    if (!inView) return
    const el = ref.current
    if (!el) return
    const tween = gsap.fromTo(
      el,
      { opacity: initialOpacity, filter: blur ? 'blur(8px)' : 'none' },
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: duration / 1000,
        delay: delay / 1000,
        ease,
        overwrite: true,
      },
    )
    return () => {
      tween.kill()
    }
  }, [inView, blur, duration, delay, ease, initialOpacity])

  // 初始隐藏靠内联 style;GSAP 动画结束后会以内联 opacity:1 覆盖 React 的初始值(style prop 不变,React 不会重写)
  return (
    <div
      ref={ref}
      className={`fade-content ${className}`}
      style={{
        opacity: initialOpacity,
        ...(blur ? { filter: 'blur(8px)' } : {}),
      }}
    >
      {children}
    </div>
  )
}
