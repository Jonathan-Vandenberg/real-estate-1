import { useState } from "react";

import { type RouterOutputs } from "../utils/api";
import Delete from "./svgs/Delete";

type Note = RouterOutputs["note"]["getAll"][0];

export const NoteCard = ({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${
            isExpanded ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="collapse-title text-xl font-bold">{note.title}</div>
          <div className="collapse-content">
            <article className="prose lg:prose-xl">
              <p>{note.content}</p>
            </article>
          </div>
        </div>
        <div className="card-actions mx-2 flex justify-end">
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />

          <div className="modal">
            <div className="modal-box relative">
              <h3 className="text-lg font-bold">Are you sure?</h3>
              <p className="py-4">This is irreversible.</p>
              <div className="flex w-full items-center justify-center space-x-12">
                <label
                  htmlFor="my-modal-4"
                  className="btn-xs btn border-none bg-white px-5 text-sm font-normal text-black hover:bg-slate-100"
                >
                  Cancel
                </label>
                <button
                  className="btn-warning btn-xs btn px-5"
                  onClick={onDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <label
            htmlFor="my-modal-4"
            className="transform-[color, translate] duration-200 hover:scale-[1.05] hover:text-red-600"
          >
            <Delete />
          </label>
        </div>
      </div>
    </div>
  );
};
