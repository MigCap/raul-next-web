const BASE_URL = "http://wp.rauldediego.com/wp-json/wp/v2";

const POSTS_API_URL = `${BASE_URL}/posts`;
const TAGS_API_URL = `${BASE_URL}/tags`;
const CATEGORIES_API_URL = `${BASE_URL}/categories`;
const MEDIA_API_URL = `${BASE_URL}/media`;

export async function getPosts() {
  const fields =
    "?_fields=id,slug,title,content,excerpt,featured_media,categories,tags,_links";
  const postsRes = await fetch(`${POSTS_API_URL}${fields}`);
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

export async function getCategories() {
  const res = await fetch(`${CATEGORIES_API_URL}`);
  const categories = await res.json();
  return categories;
}

export async function getMedia(posts: any) {
  const fields = "?_fields=id,alt_text,media_details,guid";
  // const mediaRes = await fetch(MEDIA_API_URL);
  // ?_fields=author,id,excerpt,title,link
  // ?_fields=id,alt_text,media_details,guid

  const postsMediaIds =
    posts &&
    posts
      ?.map((post: any) => post.featured_media)
      .join()
      .replace(" ", "");

  console.log(`🚀 ~ getMedia ~ postsMediaIds`, postsMediaIds);

  const mediaRes = await fetch(`${MEDIA_API_URL}?include=${postsMediaIds}`);
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