import { useState } from "react";

export const NoteEditor = ({
  onSave,
}: {
  onSave: (note: { title: string; content: string }) => void;
}) => {
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <input
            type="text"
            placeholder="Title"
            className="input-primary input input-lg w-full font-bold"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </h2>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          <textarea
            rows={5}
            placeholder="Content"
            className="input-primary input input-lg h-full w-full font-bold"
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          />
        </h2>
      </div>
      <div className="card-actions justify-end">
        <button
          onClick={() => {
            onSave({
              title,
              content,
            });
            setContent("");
            setTitle("");
          }}
          className="btn-primary btn"
          disabled={title.trim().length === 0 || content.trim().length === 0}
        >
          Save
        </button>
      </div>
    </div>
  );
};
