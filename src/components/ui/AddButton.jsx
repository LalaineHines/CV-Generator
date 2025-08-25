import { handleCancel, handleDelete } from "../../utils/objectEdit";

import React from "react";

const AddButton = ({
  object,
  setObject,
  setObjectsList,
  selectedId,
  setSelectedId,
}) => {
  return (
    <div className="flex gap-2 mt-2">
      <button
        type="submit"
        className="w-20 bg-green-600 hover:bg-green-600/90 cursor-pointer rounded-full text-white text-sm font-medium py-1 transition-colors duration-100"
      >
        {selectedId ? "Save" : "Add"}
      </button>

      <button
        type="button"
        className={`${
          !selectedId
            ? "hidden"
            : "w-20 bg-neutral-400 hover:bg-neutral-400/80 cursor-pointer rounded-full text-white text-sm font-medium py-1 transition-colors duration-100"
        }`}
        onClick={() => {
          handleCancel(setSelectedId, setObject);
        }}
      >
        Cancel
      </button>

      <button
        type="button"
        className={`${
          !selectedId
            ? "hidden"
            : "w-20 bg-red-700 hover:bg-red-600 cursor-pointer rounded-full text-white text-sm font-medium py-1 transition-colors duration-100"
        }`}
        onClick={() => {
          handleDelete(setSelectedId, object, setObject, setObjectsList);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default AddButton;