'use client'
import { useBlogContext } from '@/context/BlogContext';

export default function Page() {
  const { posts } = useBlogContext();

  return (
    <div>
      <p>Gostou?</p>
      <p>{posts}</p>
    </div>

  )
}
