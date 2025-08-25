'use server'

import postgres from 'postgres'
import { Movie } from './type'

const sql = postgres(process.env.BLOG_POSTGRES_URL!, { ssl: 'require' })

export async function fetchMovieData() {
  try {
    const movies = (await sql`
        SELECT * FROM movie;
        `) as Movie[]
    return movies
  } catch {
    console.error('获取电影数据失败')
  }
}
