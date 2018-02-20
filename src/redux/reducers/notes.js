class Note {
  constructor(title, body) {
    this.key =  Date.now().toString();
    this.title = title;
    this.body = body;
  }
}
const defaultState = {
  notes: [],
};

const notes = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'CREATENOTE': {
      if (!action.payload.key) {
        return {
          ...prevState,
          notes: [...prevState.notes, new Note(action.payload.title, action.payload.body)],
        };
      }
      return {
        ...prevState,
        notes: prevState.notes.map((note) => {
          if (note.key !== action.payload.key) return note;
          return {
            ...note,
            title: action.payload.title,
            body: action.payload.body,
          };
        }),
      };
    }
    default: return prevState;
  }
};
export default notes;
