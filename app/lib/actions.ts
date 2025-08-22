'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import postgres from 'postgres'
import { formatDate } from 'pliny/utils/formatDate'

const sql = postgres(process.env.BLOG_POSTGRES_URL!, { ssl: 'require' })

const movieFormSchema = z.object({
  id: z.string(),
  url: z.string(),
  name: z.string(),
  description: z.string(),
})

const CreateInvoice = movieFormSchema.omit({ id: true })

export async function createMovies(formDate: FormData) {
  const { url, name, description } = CreateInvoice.parse({
    url: formDate.get('url'),
    name: formDate.get('name'),
    description: formDate.get('description'),
  })
  try {
    await sql`
        INSERT INTO movie ( url, name, description)
        VALUES ( ${url}, ${name}, ${description})
        `
  } catch (error) {
    console.error('新增电影失败', error)
  }

  revalidatePath('/movies')
}
