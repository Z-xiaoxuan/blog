'use client'

import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Giscus from '@giscus/react'
import { createMovies } from '../lib/actions'
import { fetchMovieData } from '../lib/data'
import { useSearchParams } from 'next/navigation'
import { Movie } from '../lib/type'

gsap.registerPlugin(ScrollTrigger)

export default function TimelineNav() {
  const [movies, setMovies] = useState<Movie[]>([])

  const searchParams = useSearchParams()

  const add = searchParams.get('add')

  useEffect(() => {
    const res = fetchMovieData()
    res.then((res) => {
      setMovies(res ?? [])
      const el = document.querySelector('.skewElem')
      console.log('el', el)
    })
  }, [])

  useEffect(() => {
    gsap.set(['.skewElem'], { transformOrigin: 'right center', force3D: true })

    const proxy = { skew: 0 }
    const skewSetter = gsap.quickSetter('.skewElem', 'skewY', 'deg')
    const clamp = gsap.utils.clamp(-20, 20)

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
  }, [movies])

  return (
    <>
      <div id="container" className="h-screen overflow-auto">
        <form action={createMovies} className={add === 'true' ? 'block' : 'hidden'}>
          <input id="name" type="text" name="name" placeholder="name" />
          <input id="url" type="text" name="url" placeholder="url" />
          <input id="description" type="text" name="description" placeholder="description" />
          <button type="submit" className="cursor-pointer border border-amber-300">
            Submit
          </button>
        </form>

        <div className="mx-auto my-64 grid w-fit grid-cols-2 gap-x-4 gap-y-5">
          {movies.map((movie, index) => (
            <div
              className={`skewElem flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              key={index}
            >
              <div className="relative">
                <Image
                  className="rounded"
                  height={400}
                  width={300}
                  src={movie.url.trim()}
                  alt="post"
                />
                <div className="absolute inset-0" />
                <div className="absolute bottom-2 left-4">
                  <p className="text-2xl">{movie.name}</p>
                  <p>{movie.description}</p>
                </div>
              </div>

              {/* <div className={index % 2 === 0 ? 'order-first' : 'order-last'}>一些自己的小发</div> */}
            </div>
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
