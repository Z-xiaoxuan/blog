'use client'

import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Giscus from '@giscus/react'
import { createMovies } from '../lib/actions'
import { fetchMovieData } from '../lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function TimelineNav() {
  const [movies, setMovies] = useState([])

  // make the right edge "stick" to the scroll bar. force3D: true improves performance

  useEffect(() => {
    gsap.set('.skewElem', { transformOrigin: 'right center', force3D: true })

    const proxy = { skew: 0 }
    const skewSetter = gsap.quickSetter('.skewElem', 'skewY', 'deg') // fast
    const clamp = gsap.utils.clamp(-20, 20) // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      scroller: '#container',
      onUpdate: (self) => {
        const skew = clamp(self.getVelocity() / -300)
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            borderRadius: '20px',
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          })
        }
      },
    })

    return
  }, [])

  // fetchMovieData().then((res) => {
  //   setMovies(res)
  //   console.log('res', res)
  // })

  return (
    <>
      <div id="container" className="h-screen overflow-auto">
        {/* <form action={createMovies} className="text-pink-500">
          <input id="name" type="text" name="name" />
          <input id="url" type="text" name="url" />
          <input id="description" type="text" name="description" />
          <button type="submit" className="cursor-pointer border border-amber-300">
            Submit
          </button>
        </form> */}

        <div className="mx-auto my-64 grid w-fit grid-cols-2 gap-x-4 gap-y-5">
          {Array.from({ length: 20 }, (_, index) => (
            <Image
              className="skewElem rounded"
              key={index}
              height={400}
              width={300}
              src="https://picsum.photos/300/400"
              alt="post"
            />
          ))}
        </div>

        {/* <Giscus
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
          /> */}
      </div>
    </>
  )
}
