
class NoteManager {
  constructor({ emailData, noteStorage, view: { listView, contentView } }) {
    // data
    this.emailData = emailData;
    this.noteStorage = noteStorage;
    this.activeItemId = this.noteStorage.getHighlightItem() || null;    
    
    // view
    this.listView = listView;
    this.contentView = contentView;
  }

  init() {
    const removedItemIdArr = this.noteStorage.getRemovedItems() || [];
    const activeItemData = this._getTargetData(this.activeItemId);
  
    this.listView.init(this.emailData, this.activeItemId, removedItemIdArr);
    this.contentView.init(activeItemData);

    this.listView.handleClickListItem = this._handleClickListItem.bind(this);
    this.listView.handleClickRemoveBtn = this._handleClickRemoveBtn.bind(this);
  }
  _getTargetData(id) {
    return this.emailData[id];
  }
  _handleClickListItem(id) {
    const targetData = this._getTargetData(id);

    this.activeItemId = id;
    this.noteStorage.saveHighlightItem(id);
    this.contentView.render(targetData);
  }
  _handleClickRemoveBtn(id) {
    const needToResetContent = (id == this.activeItemId);

    this.noteStorage.saveRemovedItem(id);
    needToResetContent && this.contentView.reset();
  }
}


