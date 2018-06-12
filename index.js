
const oNoteStorageManager = new noteStorageManager();

const noteAppWrapper = document.querySelector('.wrap');
const oNoteListView = new NoteListView({
  wrapperElem: noteAppWrapper.querySelector('.list_wrap')
});
const oNoteContentView = new NoteContentView({
  wrapperElem: noteAppWrapper.querySelector('.wrap_right')
});

const oNoteManager = new NoteManager({
  emailData: aEmailData,
  noteStorage: oNoteStorageManager,
  view: { 
    listView: oNoteListView,
    contentView: oNoteContentView
  }
});

oNoteManager.init();