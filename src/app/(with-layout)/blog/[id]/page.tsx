import BlogSingle from '@/container/blog-single'
import { generateSeo } from '@/utils/seo'
import { Metadata } from 'next'
import '@/css/style.css'
import '@/css/about.css'
import '@/css/slider.css'
import { getBlogById } from '@/api/blog'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlogById(params.id)
  return generateSeo(`BVS | ${blog.title}`, {
    keywords: blog.keywords,
  })
}

const Page = async ({ params }: Props) => {
  const blog = await getBlogById(params.id)

  return <BlogSingle blog={blog} />
}

export default Page
