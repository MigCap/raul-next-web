const BASE_URL = "https://wp.rauldediego.com/wp-json/wp/v2";

const POSTS_API_URL = `${BASE_URL}/posts`;
const TAGS_API_URL = `${BASE_URL}/tags`;
const CATEGORIES_API_URL = `${BASE_URL}/categories`;
const MEDIA_API_URL = `${BASE_URL}/media`;

const TAG_LANG_EN = "55";
const TAG_LANG_SP = "54";

function getLangTagsByLang(lang: any) {
  return lang === "es"
    ? `tags_exclude=${TAG_LANG_EN}&tags=${TAG_LANG_SP}`
    : `tags_exclude=${TAG_LANG_SP}&tags=${TAG_LANG_EN}`;
}

export async function getPosts() {
  const fields =
    "?_fields=id,slug,title,content,excerpt,featured_media,categories,tags,_links";
  const postsRes = await fetch(`${POSTS_API_URL}${fields}`);
  const posts = await postsRes.json();
  return posts;
}

export async function getPostsByLang(lang: any) {
  const fields = `?_fields=id,slug,title,content,excerpt,featured_media,categories,tags,_links`;
  const langTags = getLangTagsByLang(lang);
  // const postsRes = await fetch(`${POSTS_API_URL}${fields}&${langTags}`);
  // const posts = await postsRes.json();
  // return posts;
  return [];
}

export async function getPostsByCategoryId(id: string, lang: any) {
  // const langTags = getLangTagsByLang(lang);
  // const postsRes = await fetch(
  //   `${POSTS_API_URL}?categories=${id}&per_page=18&${langTags}`
  // );
  // const posts = await postsRes.json();
  // return posts;
  return [];
}

// export async function getPost(slug: any) {
//   const posts = await getPosts();
//   const postArray = posts.filter((post: any) => post.slug === slug);
//   const post = postArray.length > 0 ? postArray[0] : null;
//   return post;
// }

export async function getPostBySlug(slug: any) {
  const postRes = await fetch(`${POSTS_API_URL}?slug=${slug}`);
  const post = await postRes.json();
  return post?.[0];
}

export async function getPostById(id: any) {
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
    case "categories":
      elements = await getCategories();
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

export async function getPostTags(tags: string[]) {
  const ids = tags && tags.join().replace(" ", "");
  const tagsRes = await fetch(`${TAGS_API_URL}?include=${ids}`);
  const tagsData = await tagsRes.json();
  return tagsData;
}

export async function getPostCategories(categories: string[]) {
  const ids = categories && categories.join().replace(" ", "");
  const categoriesRes = await fetch(`${CATEGORIES_API_URL}?include=${ids}`);
  const categoriesData = await categoriesRes.json();
  return categoriesData;
}

export async function getCategory(slug: any) {
  // const categoryRes = await fetch(`${CATEGORIES_API_URL}?slug=${slug}`);
  // const categoryData = await categoryRes.json();
  // return categoryData?.[0];
  return {};
}

export async function getCategories() {
  // const res = await fetch(`${CATEGORIES_API_URL}?per_page=50`);
  // const categories = await res.json();
  // return categories;
  return [];
}

export async function getTags() {
  // const tagsRes = await fetch(`${TAGS_API_URL}`);
  // const tagsData = await tagsRes.json();
  // return tagsData;
  return [];
}

export async function getMedia(posts: any) {
  // const fields = "?_fields=id,alt_text,media_details,guid";
  // const mediaRes = await fetch(MEDIA_API_URL);
  // ?_fields=author,id,excerpt,title,link
  // ?_fields=id,alt_text,media_details,guid

  const postsMediaIds =
    posts &&
    posts
      ?.map((post: any) => post?.featured_media)
      .join()
      .replace(" ", "");

  // const mediaRes = await fetch(
  //   `${MEDIA_API_URL}?include=${postsMediaIds}&per_page=${
  //     Number(posts?.length) || 20
  //   }`
  // );
  // const media = await mediaRes.json();
  // return media;
  return [];
}

export function getFeaturedMedia(media: any, id: any) {
  if (!Number(id)) return;

  const featuredMediaArray = media?.filter((element: any) => {
    return element.id === id;
  });

  return featuredMediaArray?.length > 0 ? featuredMediaArray[0] : null;
}

// export async function getFeaturedImage(id: any) {
//   // const mediaRes = await fetch(`${MEDIA_API_URL}/${id}`);
//   // const image = await mediaRes.json();
//   // return image;
//   return id;
// }

export function getPostsImagesSources(post: any) {
  const match = post?.content?.rendered?.match(/srcs*=s*"(.+?)"/g);
  // const match = post.content.rendered.match(/src\s*=\s*"?(.+?)["|\s]/g);
  // const match = post.content.rendered.match(/<img.*?src="(.*?)"/g);

  const srcs: string[] = match
    ? match.map((m: any) => m.replace(/srcs*=s*"/g, "").replace('"', ""))
    : [];

  const imgs = srcs.map((imgSrc: string, i: number) => ({
    src: imgSrc,
    alt: imgSrc,
    index: i,
  }));

  return imgs;
}
