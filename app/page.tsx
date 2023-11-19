import { Metadata } from "next";

import HomePage from "./home-page";

async function getPosts() {
  //   const res = await fetch('https://...')
  //   const posts = await res.json()
  //   return posts
  return [];
}

export const metadata: Metadata = {
  title: "Raúl de Diego Portfolio",
  description: "Raúl de Diego Portfolio",
};

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts();
  // Forward fetched data to your Client Component
  return (
    <>
      <HomePage recentPosts={recentPosts} />
    </>
  );
}
