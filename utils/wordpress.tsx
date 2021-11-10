const BASE_URL = "https://www.rauldediego.es/wp-json/wp/v2";

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "/posts");
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug: any) {
  const posts = await getPosts();
  const postArray = posts.filter((post: any) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}
export async function getEvents() {
  const eventsRes = await fetch(BASE_URL + "/events");
  const events = await eventsRes.json();
  return events;
}

export async function getEvent(slug: any) {
  const events = await getEvents();
  const eventArray = events.filter((event: any) => event.slug == slug);
  const event = eventArray.length > 0 ? eventArray[0] : null;
  return event;
}

export async function getSlugs(type: any) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
    case "events":
      elements = await getEvents();
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

export async function getMedia() {
  const mediaRes = await fetch(BASE_URL + "/media?per_page=30");
  const media = await mediaRes.json();
  console.log(`🚀 ~ getMedia ~ media`, media);
  return media;
}

export function getFeaturedMedia(media: any, id: any) {
  const featuredMediaArray = media.filter((element: any) => element.id === id);
  return featuredMediaArray.length > 0 ? featuredMediaArray[0] : null;
}
