const defaultState = {
  page: 'TakeNotes',
  currentNote: {
    key: '',
    title: '',
    body: '',
  },
};

const navigation = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'CHANGEPAGE':
    {
      let newState = {
        ...prevState,
        page: action.payload.page,
        currentNote: { key: '', title: '', body: '' },
      };

      if (action.payload.page === 'TakeNotes') {
        newState = {
          ...newState,
          currentNote: action.payload.currentNote,
        };
      }
  
      return newState;
    }

    default:
      return prevState;
  }
};

export default navigation;
