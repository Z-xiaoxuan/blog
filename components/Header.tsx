'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import { usePathname } from 'next/navigation'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 注册插件，确保 GSAP 知道 ScrollTrigger 的存在
gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  // 1. 使用 useRef 获取 header 元素的引用
  const headerRef = useRef(null)
  // 2. 使用 useRouter 钩子获取当前的路由对象
  const currentPath = usePathname()
  // 获取当前的路由路径，例如 '/blog'
  console.log(currentPath)

  // 2. 使用 useGSAP hook 来运行 GSAP 动画逻辑
  useGSAP(
    () => {
      // 3. 创建一个 GSAP 动画
      gsap.to(headerRef.current, {
        height: 50,
        // 动画持续时间（可选，但对于 ScrollTrigger 来说，持续时间由滚动决定）
        duration: 0.3,
        fontSize: '0.8rem',
        backdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // 如需可提升玻璃感
        borderBottom: '1.5px solid rgba(255,255,255,0.16)',
        ease: 'power1.out',

        // 4. 配置 ScrollTrigger
        scrollTrigger: {
          // trigger: 触发器元素（这里我们用 body 或 window 来触发）
          trigger: 'body',
          // start: 动画开始触发的滚动位置
          // 'top top' 表示当 body 顶部碰到视口顶部时开始
          start: 'top top',
          // end: 动画结束的滚动位置
          // '+=' 后面的数值表示从 start 位置再滚动多少像素后动画结束
          end: '+=100', // 例如：向下滚动 100px 后，header 动画完成
          // scrub: 关键属性！它将动画的进度与滚动条的移动链接起来
          // scrub: true 意味着动画进度与滚动条位置 1:1 匹配
          // scrub: 0.5 意味着有 0.5 秒的平滑延迟
          scrub: 0.5,

          // markers: true, // 调试用：显示 ScrollTrigger 的起点和终点标记
        },
      })
    },
    { scope: headerRef }
  ) // 将 scope 设置为 headerRef，限制动画的查找范围
  return (
    <header className="sticky top-0 z-100 h-36 w-full">
      <div ref={headerRef} className="flex h-36 flex-col justify-center">
        <nav className="mx-auto items-center gap-x-4 sm:flex md:w-3xl">
          <Logo className="size-5"></Logo>
          {headerNavLinks.map((link) => {
            const isActive = link.href === currentPath
            const staticClasses =
              'hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium'
            const activeClasses = 'text-primary-400'
            const inactiveClasses = 'text-gray-900 dark:text-gray-100'
            return (
              <Link
                key={link.title}
                href={link.href}
                className={`${staticClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                {link.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header
