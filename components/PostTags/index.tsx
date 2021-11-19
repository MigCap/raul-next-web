export default function PostTags({ postTags }: { postTags: any }) {
  if (!postTags || postTags?.length <= 0) return null;

  return (
    <div className="p-col-12 p-mt-2 p-mt-md-6 p-p-0">
      <h2
        className="p-my-2"
        style={{ fontSize: "0.9rem", fontWeight: 700 }}
      >
        HERRAMIENTAS
      </h2>

      <div className="p-d-flex p-flex-wrap p-jc-start">
        {postTags?.map((tag: any, i: number) => {
          return <PostTag key={tag?.id} tag={tag} />;
        })}
      </div>
    </div>
  );
}

function PostTag({ tag }: { tag: any }) {
  const getTagIcon = () => {
    const computerTags = ["acrobat", "illustrator", "indesign", "photoshop"];
    if (computerTags.includes(tag?.name)) return "pi pi-desktop";
    return;
  };

  return (
    <div className={`p-d-flex p-ai-center p-mr-3`}>
      {getTagIcon() && (
        <i className={`${getTagIcon()}`} style={{ fontSize: "0.8rem" }} />
      )}
       
      <span style={{ fontSize: "0.7rem" }} className="p-py-2">
        {tag?.name.toUpperCase()}
      </span>
    </div>
  );
}
