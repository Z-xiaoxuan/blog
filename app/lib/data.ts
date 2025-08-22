'use server'

import postgres from 'postgres'

const sql = postgres(process.env.BLOG_POSTGRES_URL!, { ssl: 'require' })

export async function fetchMovieData() {
  try {
    const movies = await sql`
        SELECT * FROM movie;
        `
    return movies
  } catch {
    console.error('获取电影数据失败')
  }
}
