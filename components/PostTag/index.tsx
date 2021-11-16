export default function PostTag({ tag }: { tag: any }) {
  const getTagIcon = () => {
    const computerTags = ["acrobat", "illustrator", "indesign", "photoshop"];
    if (computerTags.includes(tag?.name)) return "pi pi-desktop";
    return;
  };

  return (
    <div className={`p-d-flex p-ai-center p-mr-3`}>
      {getTagIcon() && (
        <i
          className={`${getTagIcon()} p-mr-1`}
          style={{ fontSize: "0.8rem", color: "var(--teal-500)" }}
        />
      )}
       
      <p style={{ fontSize: "0.7rem", color: "var(--teal-500)" }}>
        {tag?.name.toUpperCase()}
      </p>
    </div>
  );
}
