import { addObject, handleEdit } from "../../utils/objectEdit";

import AddButton from "./AddButton";
import DynamicList from "./DynamicList";
import ExpandCollapseSectionButton from "./ExpandCollapseSectionButton";
import React from "react";
import { areAllFieldsFilled } from "../../utils/inputValidation";

const SectionForm = ({
  isOpen,
  expandProps,
  selectedId,
  object,
  handleEditArgs,
  addObjectArgs,
  objectsInputComponent,
  addButtonProps,
  dynamicListProps,
}) => {
  return (
    <section className="w-full bg-white rounded-lg  shadow-lg overflow-hidden">
      <ExpandCollapseSectionButton {...expandProps} />

      <div
        className={`${
          !isOpen ? "h-0 p-0" : "p-5 pb-8"
        } w-full flex flex-col pt-0 space-y-4`}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (selectedId) {
              if (areAllFieldsFilled(object)) {
                handleEdit(...handleEditArgs);
              }
            } else {
              if (areAllFieldsFilled(object)) {
                addObject(...addObjectArgs);
              }
            }
          }}
          className={`${
            !isOpen ? "h-0 p-0" : ""
          } w-full flex flex-col pt-0 space-y-4`}
        >
          {objectsInputComponent}
          <AddButton {...addButtonProps} />
        </form>
        <DynamicList {...dynamicListProps} />
      </div>
    </section>
  );
};

export default SectionForm;