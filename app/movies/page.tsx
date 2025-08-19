/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'

import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Giscus from '@giscus/react'

gsap.registerPlugin(ScrollTrigger)

export default function TimelineNav() {
  const sections = [
    {
      id: 'section1',
      number: '南京照相馆',
      title: '2025年8月1日',
      description: '勿忘国耻',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section2',
      number: '纸钞屋',
      title: '2025年7月31日',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section3',
      number: '不良人',
      title: '2025年7月31日',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section4',
      number: '04',
      title: 'Section 4 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section5',
      number: '05',
      title: 'Section 5 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section6',
      number: '06',
      title: 'Section 6 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section7',
      number: '07',
      title: '  Section 7 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section8',
      number: '08',
      title: 'Section 8 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section9',
      number: '09',
      title: '  Section 7 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section10',
      number: '10',
      title: 'Section 8 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section11',
      number: '11',
      title: '  Section 7 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section12',
      number: '12',
      title: 'Section 8 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section13',
      number: '13',
      title: '  Section 7 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section14',
      number: '14',
      title: 'Section 8 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section15',
      number: '15',
      title: '  Section 7 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
    {
      id: 'section16',
      number: '16',
      title: 'Section 8 Title',
      description:
        'Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.',
      image: `https://picsum.photos/1920/1080`,
    },
  ]
  const [activeSection, setActiveSection] = useState('section1')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    console.log(mousePosition)
  }

  useEffect(() => {
    document.querySelectorAll('.sections').forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center', // 触发点，可以调整
        end: 'bottom center',
        scroller: '#container',
        onEnter: () => {
          console.log('????')
          setActiveSection(section.id)
          const activeEl = document.querySelector(`.active`)

          if (activeEl) {
            activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        },
        onEnterBack: () => {
          setActiveSection(section.id)
          const activeEl = document.querySelector(`.active`)
          if (activeEl) {
            activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        },
      })
    })

    document.addEventListener('click', handleMouseMove)
    return () => {
      document.removeEventListener('click', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <>
      <div id="container" className="h-screen overflow-auto">
        <nav className="fixed left-0 flex h-full w-96 flex-col flex-nowrap justify-end bg-gradient-to-r from-black to-transparent pt-7 pl-7 text-white">
          <ul className="no-scrollbar h-full overflow-x-hidden overflow-y-auto pl-7">
            {sections.map((section, idx) => (
              // 键盘可访问性的EESlint提醒
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                onClick={() => setActiveSection(section.id)}
                key={section.id}
                className={
                  activeSection === section.id
                    ? 'active pointer-events-none relative z-10 mb-[1em] pl-[1em] after:absolute after:top-[35px] after:-left-7 after:block after:h-[400px] after:w-[35px] after:border-t-2 after:border-l-2 after:border-white after:content-[""]'
                    : 'relative z-10 mb-[1em] after:absolute after:top-3.5 after:-left-7 after:block after:h-64 after:w-5 after:border-t-2 after:border-l-2 after:border-white after:content-[""]'
                }
              >
                <a href={`#${section.id}`}>
                  <span
                    className={
                      activeSection === section.id
                        ? 'w-fit text-[48px] tracking-wide transition-all duration-150 ease-out hover:translate-x-2'
                        : 'w-fit cursor-pointer text-2xl tracking-wide transition-all duration-150 ease-out hover:translate-x-2'
                    }
                  >
                    {section.number}
                  </span>
                  <h3
                    className={
                      activeSection === section.id
                        ? 'mb-2 h-[40px] text-2xl font-light opacity-100 transition duration-150 ease-out'
                        : 'mb-2 h-0 text-2xl font-light opacity-0 transition duration-150 ease-out'
                    }
                  >
                    {section.title}
                  </h3>
                  <p
                    className={
                      activeSection === section.id
                        ? 'line-clamp-3 h-[100px] max-w-xs text-base leading-relaxed font-thin opacity-100 transition duration-150 ease-out'
                        : 'line-clamp-3 h-0 max-w-xs text-base leading-relaxed font-thin opacity-0 transition duration-150 ease-out'
                    }
                  >
                    {section.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {sections.map((section, idx) => (
          <section key={section.id} className="sections h-screen w-full" id={section.id}>
            <Image
              src={section.image}
              alt={section.title}
              className="h-full w-full"
              width={1920}
              height={1080}
            />
          </section>
        ))}

        <div className="fixed top-1/2 left-1/2 h-3/4 w-1/3 -translate-x-1/2 -translate-y-1/2 overflow-scroll rounded-md bg-black/20 p-4 backdrop-blur-2xl">
          <div className="h-10 bg-amber-300"></div>

          <Giscus
            id="comments"
            repo="Z-xiaoxuan/blog"
            repoId="R_kgDOOQ7qyw"
            category="General"
            categoryId="DIC_kwDOOQ7qy84CuCA_"
            mapping="pathname"
            reactionsEnabled="0"
            strict="0"
            emitMetadata="0"
            inputPosition="top"
            theme="fro"
            lang="zh-CN"
            loading="lazy"
          />
        </div>
      </div>
    </>
  )
}
