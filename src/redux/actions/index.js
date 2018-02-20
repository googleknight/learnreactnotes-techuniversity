const CREATENOTE = 'CREATENOTE';
const CHANGEPAGE = 'CHANGEPAGE';

export const createNote = note => ({
  type: CREATENOTE,
  payload: note,
});
export const changePage = (page, currentNote) => ({
  type: CHANGEPAGE,
  payload: { page, currentNote },
});
