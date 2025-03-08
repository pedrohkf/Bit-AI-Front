import FetchBlogs from '@/actions/blog-get'

export const dynamic = "force-dynamic";

export default async function Blogs() {
  const data = await FetchBlogs()

  return (
    <div>
      <h1>Mais Blogs</h1>
    </div>
  )
}
