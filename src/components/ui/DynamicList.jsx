import React from "react";

const DynamicList = ({
  list,
  name,
  setFunction,
  setSelectedId,
}) => {
  return (
    <div className="w-full flex justify-start items-center flex-wrap gap-2 overflow-hidden mt-3">
      {list.map((item) => (
        <button
          key={`${item.id}-data`}
          className="bg-blue-900 px-5 py-2 text-white text-sm font-medium rounded-full cursor-pointer"
          onClick={() => {
            setSelectedId(item.id);
            setFunction(item);
            
          }}
        >
          {item[name]}
        </button>
      ))}
    </div>
  );
};

export default DynamicList;