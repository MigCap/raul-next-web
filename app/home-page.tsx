'use client'
 
// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage({ recentPosts }: any) {
  return (
    <div>
      {recentPosts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
