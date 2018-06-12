
class NoteListView {
  constructor({ wrapperElem }) {
    this.wrapperElem = wrapperElem;

    this.handleClickListItem = null;
    this.handleClickRemoveBtn = null;
  }

  init(renderingData, initId, removedItemIdArr) {
    this.render(renderingData);
    initId && this.activeItem(initId);
    removedItemIdArr && this.hideItemAll(removedItemIdArr);
    this.registerEvents();
  }

  /* rendering */

  render(data) {
    const remodelingData = this._remodelData(data);
    const html = remodelingData.reduce((acc, noteItem) => {
      return acc += this._makeItemHtml(noteItem);
    }, '');
    this.wrapperElem.innerHTML = html;
  }
  _remodelData(notes) {
    let mappedNotes = [];
    let sortedNotes = [];

    mappedNotes = notes.map((noteItem, index) => {
      noteItem.id = index;
      noteItem.status = 'unread'; // unread, readed, delete
      return noteItem;
    });

    sortedNotes = mappedNotes.sort((a, b) => {
      if ((+ new Date(a.date)) < (+ new Date(b.date))) { return 1; }
      if ((+ new Date(a.date)) > (+ new Date(b.date))) { return -1; }
      return 0;
    });

    return sortedNotes;
  }
  _makeItemHtml(noteItem) {
    return `
    <li class="list_article" data-id="${noteItem.id}" data-status="${noteItem.status}" draggable="true">
      <a href="#" class="list_article_link">
        <div class="list_article_top">
          <p class="user_name ellipse">${noteItem.sender}</p>
          <p class="send_date">${noteItem.date}</p>
        </div>
        <div class="list_article_botton">
          <p class="mail_title ellipse">${noteItem.title}</p>
        </div>
      </a>

      <button type="button" class="btn_mail_delete">
        <span class="blind">삭제</span>
      </button>
      <button type="button" class="btn_list_move">
        <span class="blind">이동</span>
      </button>
    </li>`;
  }

  /* ui기능 */

  activeItem(id) {
    const targetElem = this._getItemElemById(id);
    this.inactiveItem();
    targetElem.classList.add('select');
  }
  inactiveItem() {
    const targetElem = this.wrapperElem.querySelector('.list_article.select');
    targetElem && targetElem.classList.remove('select');    
  }
  hideItem(id) {
    const targetElem = this._getItemElemById(id);
    targetElem.dataset.status = 'delete';
  }
  hideItemAll(idArr) {
    idArr.forEach((id) => this.hideItem(id));
  }
  _getItemId(targetElem) {
    const listElem = targetElem.closest('.list_article');
    return (listElem)? listElem.dataset.id : null;
  }
  _getItemElemById(id) {
    return this.wrapperElem.querySelector(`.list_article[data-id="${id}"]`);
  }

  /* event */

  registerEvents() {
    this.wrapperElem.addEventListener('click', (e) => e.preventDefault());
    this.wrapperElem.addEventListener('click', this._onClickItem.bind(this));
    this.wrapperElem.addEventListener('click', this._onClickDeleteBtn.bind(this));

    this.wrapperElem.addEventListener('dragstart', this._onDragstart.bind(this));
    this.wrapperElem.addEventListener('dragenter', this._onDragenter.bind(this));    
    this.wrapperElem.addEventListener('dragover', this._onDragover.bind(this));
    this.wrapperElem.addEventListener('drop', this._onDrop.bind(this));
  }

  _onClickItem({ target }) {
    const isLinkElem = target.closest('.list_article_link');
    if (!isLinkElem) { return; }

    const targetId = this._getItemId(target);
    this.activeItem(targetId);
    this.handleClickListItem && this.handleClickListItem(targetId);
  }
  _onClickDeleteBtn({ target }) {
    const isDeleteBtn = target.classList.contains('btn_mail_delete');
    if (!isDeleteBtn) { return; }

    const targetId = this._getItemId(target);
    this.hideItem(targetId);
    this.handleClickRemoveBtn && this.handleClickRemoveBtn(targetId);
  }

  _onDragstart(e) {
    const isMoveBtn = e.target.classList.contains('btn_mail_delete');
    if (!isMoveBtn) { return; }

    const targetId = this._getItemId(e.target);
    e.dataTransfer.setData('id', targetId);
  }
  _onDragenter(e) {
    e.preventDefault();
  }
  _onDragover(e) {
    e.dataTransfer.dropEffect = 'move';
    e.preventDefault();
  } 
  _onDrop(e) {
    e.preventDefault();
    const dragItemId = e.dataTransfer.getData('id');
    // list.insertBefore(newItem, list.childNodes[0]);
  }
}