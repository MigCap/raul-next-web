const BASE_URL = "https://www.rauldediego.es/wp-json/wp/v2";
const POSTS_API_URL = `${BASE_URL}/posts`;
const TAGS_API_URL = `${BASE_URL}/tags`;
const MEDIA_API_URL = `${BASE_URL}/media`;

export async function getPosts() {
  const postsRes = await fetch(POSTS_API_URL);
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug: any) {
  const posts = await getPosts();
  const postArray = posts.filter((post: any) => post.slug === slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getPostBy(id: any) {
  const postRes = await fetch(`${POSTS_API_URL}/${id}`);
  const post = await postRes.json();

  const currPost = post?.id == id ? post : null;

  return currPost;
}

export async function getSlugs(type: any) {
  let elements = [];

  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
  }

  const elementsIds = elements.map((element: any) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });

  return elementsIds;
}

export async function getPostTags(slug: string) {
  const post = await getPost(slug);
  const tags = post?.tags;
  const tagsArray = tags?.map(async (tag: any) => {
    const tagRes = await fetch(`${TAGS_API_URL}/${tag}`);
    const tagData = await tagRes.json();
    return tagData;
  });
  return Promise.all(tagsArray).then((values) => {
    return values;
  });
}

export async function getMedia() {
  // const mediaRes = await fetch(MEDIA_API_URL);
  const mediaRes = await fetch(MEDIA_API_URL + "?per_page=30");
  const media = await mediaRes.json();
  return media;
}

export function getFeaturedMedia(media: any, id: any) {
  const featuredMediaArray = media.filter((element: any) => element.id === id);
  return featuredMediaArray.length > 0 ? featuredMediaArray[0] : null;
}

export async function getFeaturedImage(id: any) {
  // const mediaRes = await fetch(`${MEDIA_API_URL}/${id}`);
  // const image = await mediaRes.json();
  // return image;
  return id;
}
