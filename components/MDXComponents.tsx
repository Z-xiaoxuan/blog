import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import InteractiveImage from './InteractiveImage'
import MDXFilterBackdrop from './MDXFilterBackdrop'
import {
  MDXFilter1,
  MDXFilter2,
  MDXFilter3,
  MDXFilter4,
  MDXFilter5,
  MDXFilter6,
} from './MDXFilter-1'
import CodePenEmbed from './CodePenEmbed'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  InteractiveImage,
  MDXFilterBackdrop,
  MDXFilter1,
  MDXFilter2,
  MDXFilter3,
  MDXFilter4,
  MDXFilter5,
  MDXFilter6,
  CodePenEmbed,
}
