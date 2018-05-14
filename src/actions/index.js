// eslint-disable-next-line import/prefer-default-export
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId,
  };
};
