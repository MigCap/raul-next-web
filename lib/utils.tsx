import parse from "html-react-parser";

function getDate(date: any) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getImagesSources(post: any) {
  const match = post?.content?.rendered?.match(/srcs*=s*"(.+?)"/g);
  // const match = post.content.rendered.match(/src\s*=\s*"?(.+?)["|\s]/g);
  // const match = post.content.rendered.match(/<img.*?src="(.*?)"/g);

  const srcs: string[] = match
    ? match.map((m: any) => m.replace(/srcs*=s*"/g, "").replace('"', ""))
    : [];

  return srcs;
}

export { parse, getDate, getImagesSources };
