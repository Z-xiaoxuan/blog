'use client'

import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useEffect, useState } from 'react'

const TAGS = [
  '痛仰乐队',
  '刺猬',
  '盘尼西林',
  '海龟先生',
  '回春丹',
  '新裤子',
  '赵雷',
  '万能青年旅店',
  '马赛克',
  '五条人',
  '宋东野',
  '谢天笑',
  'Fine 乐团',
]
const DURATION = 15000
const ROWS = 3
const TAGS_PER_ROW = 6

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
const shuffle = (arr) => [...arr].sort()

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div className={`relative overflow-hidden`}>
      <div
        className="animate-loop flex w-max"
        style={{
          animationDuration: `${duration}ms`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

const Tag = ({ text }) => (
  <div className="mr-4 flex items-center gap-x-1 rounded-md bg-slate-700 px-4 py-2 text-sm text-gray-200 shadow-md shadow-black/70 select-none">
    <span className="text-lg leading-none text-gray-400">#</span> {text}
  </div>
)

export default function Home() {
  useEffect(() => {
    // 动画部分
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(SplitText)

    const tl = gsap.timeline()

    const split = new SplitText('#text', {
      type: 'lines',
      linesClass: 'line',
    })

    tl.to(split.lines, {
      rotationX: -100,
      transformOrigin: '50% 50% -60px',
      opacity: 0,
      ease: 'power3',
      stagger: 0.25,
    })
      .to('#avatar4', {
        scale: 0,
        ease: 'power1.in',
        delay: 0,
      })
      .to(
        '#avatar3',
        {
          scale: 0,
          ease: 'power1.in',
          delay: 0.1,
        },
        '<'
      )
      .to(
        '#avatar2',
        {
          scale: 0,
          ease: 'power1.in',
          delay: 0.1,
        },
        '<'
      )
      .to(
        '#avatar1',
        {
          scale: 0,
          ease: 'power1.in',
          delay: 0.1,
        },
        '<'
      )

    ScrollTrigger.create({
      animation: tl,
      trigger: '#second',
      start: 'top top',
      end: '+=100%',
      markers: true,
      pin: true,
      scrub: true,
    })
  }, [])

  return (
    <>
      <div id="second" className="relative flex h-screen items-center justify-center bg-black">
        <div className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2">
          <div className="relative aspect-square flex-1">
            <Image
              id="avatar1"
              src="/static/images/sparrowhawk-avatar.jpg"
              alt="avatar"
              className="absolute"
              width={200}
              height={200}
            />
            <Image
              id="avatar2"
              src="/static/images/sparrowhawk-avatar.jpg"
              alt="avatar"
              width={200}
              height={200}
              className="absolute"
            />
            <Image
              id="avatar3"
              src="/static/images/sparrowhawk-avatar.jpg"
              alt="avatar"
              width={200}
              height={200}
              className="absolute"
            />
            <Image
              id="avatar4"
              src="/static/images/sparrowhawk-avatar.jpg"
              alt="avatar"
              width={200}
              height={200}
              className="absolute"
            />
          </div>
          <div className="flex-1">
            <p id="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, ut pariatur!
              Accusamus libero asperiores expedita eligendi vitae ab tenetur cum ipsam veniam
              explicabo aut hic sit, tempore culpa velit! Sint?
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl py-10">
        <div
          className="grid grid-cols-8 gap-3"
          style={{
            gridTemplateAreas: `"map map map map tall tall mbti mbti"
                         "map map map map cat1 cat1 cat2 cat2"
                         "taiyuan taiyuan taiyuan zhi  cat1 cat1 cat2 cat2"
                         "daxue daxue yue yue yue yue li li"
                         "apex apex yue yue yue yue la la"
                         "jita cook cook . . . . ."
                         `,
          }}
        >
          <div className="grid-item rounded-md bg-gray-900 p-2" style={{ gridArea: 'map' }}>
            <div className="h-40"></div>
            <p>现居地：北京</p>
          </div>
          <div className="grid-item h-31 rounded-md bg-gray-900" style={{ gridArea: 'tall' }}>
            <svg
              width="50"
              height="100"
              viewBox="0 0 50 100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="block overflow-visible"
            >
              <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle
                  cx="25"
                  cy="35"
                  r="15"
                  className="transition-all duration-300 group-hover:fill-gray-900"
                ></circle>
                <line x1="25" y1="50" x2="25" y2="80"></line>
                <line x1="25" y1="80" x2="15" y2="100"></line>
                <line x1="25" y1="80" x2="35" y2="100"></line>
                <line x1="25" y1="55" x2="15" y2="70"></line>
                <line x1="25" y1="55" x2="35" y2="70"></line>
              </g>
            </svg>
            <p>身高体重</p>
          </div>
          <div
            className="relative h-31 overflow-visible rounded-md bg-gray-900 p-3"
            style={{ gridArea: 'mbti' }}
          >
            <Image
              src="https://i.ooxx.ooo/i/MDkyY.png"
              alt="mbti_绿老头"
              className="absolute bottom-2 -left-2"
              height={150}
              width={150}
            />
            {/* 可以做svg动画 */}
            <div className="pointer-events-none flex h-full flex-col justify-between text-right">
              <p className="text-3xl font-bold tracking-wider text-[#33a474]">INFJ</p>
              <p className="text-gray-400">提倡者</p>
            </div>
          </div>

          {/* 两只宠物的照片可以左右切换查看 */}
          <div className="rounded-md bg-gray-900 p-3" style={{ gridArea: 'cat1' }}>
            <Image
              src={`https://picsum.photos/id/40/200/200`}
              alt="cat1"
              className="w-full rounded-md"
              height={150}
              width={150}
            />
            <p className="mt-4 text-center text-sm">
              他叫虎砸 <br /> <span className="text-xs text-gray-400">（一只起司）</span>
            </p>
          </div>
          <div className="rounded-md bg-gray-900 p-3" style={{ gridArea: 'cat2' }}>
            <Image
              src={`https://picsum.photos/id/41/200/200`}
              alt="cat2"
              className="w-full rounded-md"
              height={150}
              width={150}
            />
            <p className="mt-4 text-center text-sm">
              他叫大头 <br /> <span className="text-xs text-gray-400">（一只金点）</span>
            </p>
          </div>
          <div
            className="relative h-40 overflow-hidden rounded-md bg-gray-900"
            style={{ gridArea: 'taiyuan' }}
          >
            <Image
              src="https://picsum.photos/id/42/200/200"
              alt="山西太原"
              fill={true}
              objectFit="cover"
              className="w-full"
            />

            <p className="absolute bottom-2 left-3 select-none">山西 · 太原</p>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-1 rounded-md bg-gray-900 select-none"
            style={{ gridArea: 'zhi' }}
          >
            <p className="text-3xl font-medium">直</p>
            <p className="text-3xl font-medium">男</p>
          </div>
          <div className="rounded-md bg-gray-900 p-3" style={{ gridArea: 'jita' }}>
            <Image
              src="/static/images/guitar-top.svg"
              alt="guitar"
              height={100}
              width={100}
            ></Image>
            <p className="mt-3 text-center">吉他初学者</p>
          </div>
          <div className="rounded-md bg-gray-900" style={{ gridArea: 'daxue' }}>
            <p>山西大学</p>
          </div>

          <div
            className="relative overflow-visible rounded-md bg-gray-900"
            style={{ gridArea: 'yue' }}
          >
            <div className="relative flex flex-col gap-y-4 rounded-md py-6">
              {[...new Array(ROWS)].map((_, i) => (
                <InfiniteLoopSlider key={i} duration={15000} reverse={i % 2 === 1}>
                  {shuffle(TAGS)
                    .slice(0, TAGS_PER_ROW)
                    .map((tag) => (
                      <Tag text={tag} key={tag} />
                    ))}
                </InfiniteLoopSlider>
              ))}
              {/* 渐隐遮罩 */}
              <div className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
            </div>
            <Image
              src="/static/images/guitar.svg"
              alt="guitar"
              height={50}
              width={50}
              className="absolute bottom-0 left-0"
            ></Image>

            <Image
              src="/static/images/guitar2.svg"
              alt="guitar"
              height={50}
              width={50}
              className="absolute bottom-0 left-52"
            ></Image>

            <Image
              src="/static/images/keytar.svg"
              alt="guitar"
              height={50}
              width={50}
              className="absolute bottom-0 left-15"
            ></Image>

            <Image
              src="/static/images/singer.svg"
              alt="guitar"
              height={50}
              width={50}
              className="absolute -bottom-1 left-35"
            ></Image>
          </div>
          <div className="rounded-md bg-gray-900" style={{ gridArea: 'li' }}>
            <p>李</p>
          </div>
          <div className="h-31 rounded-md bg-gray-900" style={{ gridArea: 'apex' }}>
            <p>apex</p>
          </div>
          <div className="rounded-md bg-gray-900" style={{ gridArea: 'cook' }}>
            <p>做饭</p>
          </div>
          <div className="rounded-md bg-gray-900" style={{ gridArea: 'la' }}>
            <p>喜欢吃辣</p>
          </div>
        </div>
      </div>
    </>
  )
}
