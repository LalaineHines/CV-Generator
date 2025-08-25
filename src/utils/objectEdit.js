const clearObject = (setObject) => {
  setObject((prevObject) => {
    const clearedObject = Object.keys(prevObject).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});

    clearedObject.id = crypto.randomUUID();
    return clearedObject;
  });
};

export const addObject = (object, setObject, objectsList, setObjectsList) => {
  setObject({ ...object, id: crypto.randomUUID() });
  setObjectsList([...objectsList, object]);
  clearObject(setObject);
};

export const handleEdit = (
  object,
  setObjectsList,
  searchId,
  setSelectedId,
  setObject
) => {
  setObjectsList((prevList) =>
    prevList.map((item) =>
      item.id === searchId ? { ...object, id: item.id } : item
    )
  );

  setSelectedId(null);
  clearObject(setObject);
};

export const handleCancel = (setSelectedId, setObject) => {
  setSelectedId(null);
  clearObject(setObject);
};

export const handleDelete = (
  setSelectedId,
  object,
  setObject,
  setObjectsList
) => {
  setObjectsList((prevList) => {
    return prevList.filter((item) => item.id !== object.id);
  });

  setSelectedId(null);
  clearObject(setObject);
};