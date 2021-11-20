export default function PostCategories({
  postCategories,
}: {
  postCategories: any;
}) {
  if (!postCategories || postCategories?.length <= 0) return null;

  return (
    <div className="p-col-12 p-mt-2 p-mt-md-6 p-p-0">
      <div className="p-d-flex p-flex-wrap p-jc-cener p-ai-start">
        {postCategories?.map((categorie: any, i: number) => {
          return (
            <p
              key={categorie}
              className="p-my-0 p-mr-1 p-text-bold"
              // style={{ fontSize: "0.7rem" }}
            >
              #{categorie.name.toLowerCase()}
            </p>
          );
        })}
      </div>
    </div>
  );
}
