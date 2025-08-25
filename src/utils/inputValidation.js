export const areAllFieldsFilled = (object) =>
  Object.values(object).every((value) =>
    Array.isArray(value) ? value.length > 0 : value != null && value !== ""
  );